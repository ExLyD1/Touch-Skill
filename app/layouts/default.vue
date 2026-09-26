<template>
    <div
        :class="{ 'overflow-y-hidden!': isMenuVisible }"
        class="flex flex-col relative"
    >
        <Header
            @open-header="toggleMenuVisibility"
            :is-menu-visible="isMenuVisible"
            class="z-20 fixed"
        />

        <div v-if="!isMenuVisible" :style="{ height: `99px` }"></div>

        <AsideMenu
            v-if="isMenuVisible"
            :is-open="isMenuVisible"
            :is-trigger="isTriggerAnimation"
            @navigate="onMenuNavigate"
            class="fixed w-full top-16 z-50 overflow-hidden! bg-white"
        />

        <main class="flex-grow z-0 w-full">
            <slot />
        </main>

        <!-- Profi Block -->
        <div
            class="profi py-[60px] mt-[60px] sm:mt-[120px] sm:pt-[100px] sm:pb-[200px] px-[15px] max-h-[530px] h-full flex items-center justify-center"
        >
            <div
                data-aos="zoom-in"
                class="max-w-[860px] w-full flex flex-col gap-[30px] items-center justify-center"
            >
                <h2
                    data-aos="zoom-in"
                    class="text-[18px]/[100%] sm:text-5xl font-semibold text-center"
                >
                    <i18n-t keypath="cta.text" scope="global">
                        <template #pro>
                            <span class="text-purple">{{ t('cta.proWord') }}</span>
                        </template>
                        <template #course>
                            <span class="text-purple">{{
                                t('cta.courseWord')
                            }}</span>
                        </template>
                    </i18n-t>
                </h2>

                <a
                    :href="TELEGRAM_URL"
                    target="_blank"
                    rel="noopener"
                    :aria-label="t('common.enrollAria')"
                    class="w-fit"
                >
                    <SplitButton :label="t('common.enroll')"
                /></a>
            </div>
        </div>

        <Footer />

    </div>
</template>

<script lang="ts" setup>
import Header from '~/features/layout/ui/Header.vue';
import Footer from '~/features/layout/ui/Footer.vue';
import type { NavigationTarget } from '~/features/layout/config/navigationConfig';

const { t } = useI18n();

const route = useRoute();
const { goTo } = useSiteNavigation();

// Duration of the mobile menu close animation
const MENU_CLOSE_MS = 700;

const isMenuVisible = ref<boolean>(false);
const isTriggerAnimation = ref<boolean>(false);

const toggleMenuVisibility = () => {
    // Open Menu
    if (isMenuVisible.value === false) {
        isTriggerAnimation.value = false;
        isMenuVisible.value = true;
    }
    // Close Menu
    else {
        isTriggerAnimation.value = true;
        setTimeout(() => {
            isTriggerAnimation.value = false;
            isMenuVisible.value = false;
        }, MENU_CLOSE_MS);
    }
};

const onMenuNavigate = (target: NavigationTarget) => {
    toggleMenuVisibility();

    if (target.type === 'page') {
        goTo(target);
        return;
    }

    // Scroll only once the menu is gone: page scrolling is locked while it is
    // open, and closing it restores the header spacer, which shifts the page
    setTimeout(() => goTo(target), MENU_CLOSE_MS);
};

// Close the mobile menu after any navigation, e.g. a language switch
watch(
    () => route.fullPath,
    () => {
        if (isMenuVisible.value && !isTriggerAnimation.value) {
            toggleMenuVisibility();
        }
    }
);

// Блокування скролу сторінки
watch(
    () => isMenuVisible.value,
    newValue => {
        if (newValue === true) {
            // Блокуємо скрол

            document.body.style.overflow = 'hidden';
        } else {
            // Відновлюємо скрол

            document.body.style.overflow = '';
        }
    }
);

onMounted(async () => {
    await nextTick();
    useScroll();
});
</script>

<style scoped>
.profi {
    position: relative;
    background-image: url('/images/general/profi.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* Маска зверху */
    -webkit-mask-image: radial-gradient(
        ellipse 50% 50% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0.2) 100%
    );
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: top;
    -webkit-mask-size: cover;

    mask-image: radial-gradient(
        ellipse 50% 50% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0.2) 100%
    );
    mask-repeat: no-repeat;
    mask-position: top;
    mask-size: cover;
}

@media screen and (max-width: 640px) {
    .profi {
        background-size: cover;

        -webkit-mask-image: radial-gradient(
            ellipse 50% 50% at center,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.2) 100%
        );

        mask-image: radial-gradient(
            ellipse 60% 60% at center,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.2) 100%
        );
    }
}
</style>
