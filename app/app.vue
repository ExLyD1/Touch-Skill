<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { useScroll } from '#imports';
const { check } = useScroll();
const throttledCheck = throttle(check, 200);

onMounted(async () => {
    await check();
    window.addEventListener('scroll', throttledCheck, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', throttledCheck);
});

const { t } = useI18n();

// lang attribute, hreflang alternates, canonical and og:locale for the current locale
const i18nHead = useLocaleHead({ seo: true });

useHead(() => ({
    htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
    link: [
        ...(i18nHead.value.link ?? []),
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            href: '/images/icons/app/icon-192.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/images/icons/app/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
    ],
    meta: [
        ...(i18nHead.value.meta ?? []),
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            name: 'robots',
            content:
                'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        },
        { name: 'author', content: t('seo.tutorName') },
        { name: 'application-name', content: 'Touch&Skill' },
        { name: 'theme-color', content: '#4914e7' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'PL-MZ' },
        { name: 'geo.placename', content: 'Warsaw' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Touch&Skill' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ],
}));
</script>

<style>
:root {
    --font-sans: 'Montserrat', ui-sans-serif, system-ui, -apple-system,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans';
}

html,
body {
    scroll-behavior: smooth;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

.btn-purple-glow {
    background-color: #4914e7;
    transition: all 0.5s ease;
    filter: drop-shadow(0 0 5px rgba(73, 20, 231, 1));
    cursor: pointer;
}

.btn-purple-glow:hover {
    background-color: #3a0fc9;
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(73, 20, 231, 1));
}

.btn-purple-glow:active {
    transform: scale(1.02);
}

.btn-purple-glow-smooth {
    background-color: #4914e7;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    filter: drop-shadow(0 0 5px rgba(73, 20, 231, 1));
    will-change: transform, filter, background-color;
}

.btn-purple-glow-smooth:hover {
    background-color: #3a0fc9;
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(73, 20, 231, 1));
}

.scroll-target {
    scroll-margin-top: var(--header-height, 99px);
}
</style>
