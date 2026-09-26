<template>
    <header
        data-aos="zoom-in"
        class="w-full min-w-0 bg-white flex items-center justify-center"
    >
        <div
            class="header_container m-auto 2xl:max-w-[80%] max-w-[100%] w-full min-w-0 flex items-center justify-between gap-5 min-[1800px]:gap-[50px] p-[13px]"
        >
            <!-- Main logo -->
            <NuxtLink :to="localePath('/')" class="flex-shrink-0">
                <NuxtImg
                    src="/images/general/logo.png"
                    :alt="t('header.logoAlt')"
                    class="logo block w-[52px] h-[50px] sm:w-[77px] sm:h-[73px]"
                    width="77"
                    height="73"
                    loading="eager"
                    :lazy="false"
                    fetchpriority="high"
                />
            </NuxtLink>

            <!-- Route links -->
            <nav
                class="route-links hidden xl:flex items-center gap-3 text-[15px] min-[1800px]:gap-6 min-[1800px]:text-base"
            >
                <a
                    v-for="item in navigationItems"
                    :key="item.labelKey"
                    :href="hrefFor(item.target)"
                    class="font-[500] whitespace-nowrap hover:text-purple transition-colors"
                    @click.prevent="goTo(item.target)"
                >
                    {{ t(item.labelKey) }}
                </a>

                <LocaleSwitcher />
            </nav>

            <!-- Social Media Links -->
            <div
                class="social-media-links hidden xl:flex items-center gap-3 min-[1800px]:gap-5 flex-shrink-0"
            >
                <a
                    v-for="item in headerConfig"
                    :href="item.href"
                    :key="item.alt"
                    target="_blank"
                    rel="noopener"
                    class="rounded-full btn-purple-glow bg-purple hover:bg-purple-active hover:shadow-md hover:shadow-purple-active transition-all cursor-pointer p-2"
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
                        class="object-contain w-[25px] h-[25px]"
                    />
                </a>
            </div>

            <div class="menu-img block xl:hidden cursor-pointer">
                <input
                    :checked="isMenuVisible"
                    @change="$emit('openHeader')"
                    type="checkbox"
                    id="myInput"
                />
                <label for="myInput" :aria-label="t('header.toggleMenu')">
                    <span class="bar top"></span>
                    <span class="bar middle"></span>
                    <span class="bar bottom"></span>
                </label>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { navigationItems } from '../config/navigationConfig';

defineProps<{
    isMenuVisible: boolean;
}>();

defineEmits(['openHeader']);

const { t } = useI18n();
const localePath = useLocalePath();
const { goTo, hrefFor } = useSiteNavigation();

const headerConfig = [
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
];
</script>

<style scoped>
input[type='checkbox'] {
    display: none;
}

/* Change ~ to + and target the spans correctly */
input[type='checkbox']:checked + label .bar {
    background-color: black;
}

input[type='checkbox']:checked + label .top {
    transform: translateY(8.5px) rotateZ(45deg);
}

input[type='checkbox']:checked + label .bottom {
    transform: translateY(-8.5px) rotateZ(-45deg);
}

input[type='checkbox']:checked + label .middle {
    width: 0;
}

.middle {
    margin: 0 auto;
}

label {
    top: 10px;
    display: inline-block;
    padding: 7px 10px;
    background-color: transparent;
    cursor: pointer;
    z-index: 3;
}

.bar {
    display: block;
    background-color: black;
    width: 30px;
    height: 3px;
    border-radius: 5px;
    margin: 5px auto;
    transition: background-color 0.4s ease-in, transform 0.4s ease-in,
        width 0.4s ease-in;
}
</style>
