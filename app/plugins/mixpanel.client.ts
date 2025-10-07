import mixpanel from 'mixpanel-browser';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const init = mixpanel.init(config.public.MIXPANEL_TOKEN, {
        api_host: 'https://api-eu.mixpanel.com',
        track_pageview: false,
        persistence: 'localStorage',
        ip: true,
        property_blacklist: [],
    });

    console.log(init);

    const router = useRouter();

    router.afterEach(to => {
        try {
            if (typeof document === 'undefined') return;
            useMixpanel().trackPageView();
        } catch (e) {
            console.error('[Mixpanel] Track error');
        }
    });

    return {
        provide: {
            mixpanel,
        },
    };
});
