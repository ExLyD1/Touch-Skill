<template>
    <footer
        class="bg-purple pt-[50px] pb-[21px] px-[40px] lg:px-[120px] w-full flex flex-col justify-center items-center min-w-0"
    >
        <div
            class="max-w-[900x] w-full m-auto flex flex-col items-center flex-wrap text-white"
        >
            <!-- Footer Data  -->
            <div
                class="flex items-center gap-[20px] flex-wrap justify-start max-w-[170px] m-auto sm:max-w-auto sm:justify-center lg:flex-nowrap xl:gap-[100px]"
            >
                <div
                    v-for="item in footerConfig"
                    :key="item.alt"
                    class="flex items-center gap-3"
                >
                    <NuxtImg
                        :src="item.img"
                        alt=""
                        height="25"
                        width="25"
                        :lazy="false"
                        class="flex-shrink-0"
                    />
                    <p class="sm:text-xl text-sm whitespace-nowrap">
                        {{ item.labelKey ? t(item.labelKey) : item.label }}
                    </p>
                </div>
            </div>

            <!-- Footer Social Media Links -->
            <div class="flex items-center gap-5 mt-[35px]">
                <a
                    v-for="item in footerConfigMedia"
                    :href="item.href"
                    :key="item.alt"
                    target="_blank"
                    rel="noopener"
                    class="w-full rounded-full bg-white hover:shadow-md hover:shadow-[#E6E6E6] transition-all hover:bg-[#E6E6E6] duration-500 drop-shadow-[0_0_5px_#E6E6E6] hover:scale-105 hover:drop-shadow-[0_0_10px_#E6E6E6] cursor-pointer p-2"
                    :aria-label="t(item.ariaKey)"
                >
                    <NuxtImg
                        :src="item.img"
                        :alt="`Touch&Skill ${item.alt} icon`"
                        loading="eager"
                        width="25"
                        height="25"
                        :lazy="false"
                        fetchpriority="high"
                        class="object-contain"
                    />
                </a>
            </div>

            <div class="w-full border-b border-white mt-[40px]"></div>

            <p class="text-center mt-[20px]">© {{ year }} Touch&Skill</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const year = computed(() => new Date().getFullYear());

const footerConfig: { img: string; alt: string; label?: string; labelKey?: string }[] = [
    {
        img: '/images/icons/phone.svg',
        alt: 'phone',
        label: '+48 573 835 000',
    },
    {
        img: '/images/icons/clock.svg',
        alt: 'clock',
        labelKey: 'footer.hours',
    },
    {
        img: '/images/icons/map.svg',
        alt: 'map',
        label: 'Warszawa, Poland',
    },
];

const footerConfigMedia = [
    {
        img: '/images/icons/telegram_purple.svg',
        alt: 'telegram',
        href: TELEGRAM_URL,
        ariaKey: 'social.telegram',
    },
    {
        img: '/images/icons/instagram_purple.svg',
        alt: 'instagram',
        href: INSTAGRAM_URL,
        ariaKey: 'social.instagram',
    },
    {
        img: '/images/icons/facebook_purple.svg',
        alt: 'facebook',
        href: FACEBOOK_URL,
        ariaKey: 'social.facebook',
    },
    {
        img: '/images/icons/email.svg',
        alt: 'threads',
        href: THREADS_URL,
        ariaKey: 'social.threads',
    },
];
</script>

<style scoped>
.glass {
    position: absolute; /* sits above other content */
    inset: 20px auto auto 20px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.18); /* translucent layer */
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    border-radius: 8px;
    transition: backdrop-filter 220ms ease, background-color 220ms ease;
}

/* stronger blur on hover */
.glass:hover {
    background: rgba(255, 255, 255, 0.22);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
</style>
