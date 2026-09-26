<template>
    <aside
        class="dropdown_menu h-full overflow-y-auto px-10 pb-10"
        :class="{
            open: isOpen,
            close: isTrigger,
        }"
    >
        <a
            v-for="(item, index) in menuItems"
            :key="item.labelKey"
            :href="hrefFor(item.target)"
            :style="staggerStyle(index)"
            class="dropdown_item flex w-full py-[17px] border-b border-gray-500 font-medium text-base bg-white"
            @click.prevent="emits('navigate', item.target)"
        >
            {{ t(item.labelKey) }}
        </a>

        <div
            class="dropdown_item bg-white"
            :style="staggerStyle(menuItems.length)"
        >
            <LocaleSwitcher variant="accordion" />
        </div>

        <!-- Social Media Links -->
        <div
            class="dropdown_item flex items-center gap-5 bg-white pt-6 justify-center w-full"
            :style="staggerStyle(menuItems.length + 1)"
        >
            <a
                v-for="item in menuConfigMedia"
                :href="item.href"
                :key="item.alt"
                target="_blank"
                rel="noopener"
                class="rounded-full bg-purple hover:bg-purple-active hover:shadow-md hover:shadow-purple-active transition-all duration-300 cursor-pointer p-2"
                :aria-label="t(item.ariaKey)"
            >
                <NuxtImg
                    :src="item.img"
                    alt=""
                    loading="eager"
                    width="25"
                    height="25"
                    :lazy="false"
                    fetchpriority="high"
                    class="object-contain"
                />
            </a>
        </div>
    </aside>
</template>

<script setup lang="ts">
import {
    navigationItems,
    type NavigationTarget,
} from '~/features/layout/config/navigationConfig';

defineProps<{
    isOpen: boolean;
    isTrigger: boolean;
}>();

const emits = defineEmits<{
    navigate: [target: NavigationTarget];
}>();

const { t } = useI18n();
const { hrefFor } = useSiteNavigation();

const menuItems = navigationItems.filter(item => item.showInMobileMenu);

// Items open top-to-bottom and close bottom-to-top; the whole close
// sequence must fit in the layout's 700ms close delay
const STAGGER_MS = 45;
const lastIndex = menuItems.length + 1;
const staggerStyle = (index: number) => ({
    '--delay': `${index * STAGGER_MS}ms`,
    '--close-delay': `${(lastIndex - index) * STAGGER_MS}ms`,
});

const menuConfigMedia = [
    {
        img: '/images/icons/telegram.svg',
        alt: 'telegram',
        href: TELEGRAM_URL,
        ariaKey: 'social.telegram',
    },
    {
        img: '/images/icons/instagram.svg',
        alt: 'instagram',
        href: INSTAGRAM_URL,
        ariaKey: 'social.instagram',
    },
    {
        img: '/images/icons/facebook.svg',
        alt: 'facebook',
        href: FACEBOOK_URL,
        ariaKey: 'social.facebook',
    },
    {
        img: '/images/icons/email_white.svg',
        alt: 'threads',
        href: THREADS_URL,
        ariaKey: 'social.threads',
    },
];
</script>

<style scoped>
/* BASE: items start hidden (scale 0, opacity 0) */

/* OPEN: run scaleIn animation with per-item delay */
.dropdown_menu.open .dropdown_item {
    opacity: 0;
    transform-origin: top center;
    transform: scale(0);
    /* ensure they don't capture pointer when hidden */
    pointer-events: none;
    animation: scaleIn 300ms var(--delay, 0ms) cubic-bezier(0.2, 0.9, 0.2, 1)
        forwards;
    pointer-events: auto; /* allow interaction when visible */
}

/* CLOSE: run scaleOut animation with REVERSE stagger */
.dropdown_menu.close .dropdown_item {
    opacity: 1;
    transform-origin: top center;
    transform: scale(1);
    /* ensure they don't capture pointer when hidden */
    pointer-events: none;
    animation: scaleOut 300ms var(--close-delay, 0ms)
        cubic-bezier(0.6, 0, 0.8, 0.2) forwards;
    pointer-events: none;
}

/* ---------- Keyframes ---------- */
@keyframes scaleIn {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    80% {
        transform: scale(1.07);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes scaleOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    20% {
        transform: scale(1.07);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}
</style>
