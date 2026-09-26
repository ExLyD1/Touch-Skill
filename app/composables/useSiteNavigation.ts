import type { NavigationTarget } from '~/features/layout/config/navigationConfig';

const SETTLE_DELAY_MS = 400;

export const useSiteNavigation = () => {
    const localePath = useLocalePath();
    const getRouteBaseName = useRouteBaseName();
    const route = useRoute();

    const isHomePage = computed(() => getRouteBaseName(route) === 'index');

    // Section links scroll in place on the home page and navigate to the
    // home page anchor from anywhere else
    const goTo = async (target: NavigationTarget) => {
        if (target.type === 'page') {
            await navigateTo(localePath(target.path));
            return;
        }

        if (isHomePage.value) {
            await scrollToElement(target.id);
            return;
        }

        await navigateTo(localePath({ path: '/', hash: `#${target.id}` }));

        // Client-only blocks on the home page (e.g. the book slider) render
        // after Nuxt's own hash scroll and push later sections down, so align
        // again once the layout has settled
        setTimeout(() => scrollToElement(target.id), SETTLE_DELAY_MS);
    };

    // Real hrefs keep the links crawlable and usable with "open in new tab"
    const hrefFor = (target: NavigationTarget) =>
        target.type === 'page'
            ? localePath(target.path)
            : `${localePath('/')}#${target.id}`;

    return { goTo, hrefFor, isHomePage };
};
