<template>
    <div
        class="w-full lg:w-1/2 xl:w-[600px] relative flex-shrink-0 pb-12 sm:pb-0 flex flex-col"
    >
        <Splide
            ref="splideRef"
            :options="splideOptions"
            :aria-label="t('guide.sliderLabel')"
            class="w-full"
        >
            <SplideSlide
                v-for="(img, index) in imagesList"
                :key="index"
                class="flex justify-center items-center"
            >
                <div>
                    <img
                        :src="img.url"
                        :alt="`${t('guide.pageAlt')} ${index + 1}`"
                        class="h-auto w-full object-fill max-w-[400px] max-h-[458px] sm:max-w-[574px] sm:max-h-[590px]"
                        :style="{
                            width: isSmallScreen ? `${img.width}px` : 'auto',
                            height: isSmallScreen ? `${img.height}px` : 'auto',
                        }"
                    />
                </div>
            </SplideSlide>
        </Splide>

        <!-- Custom Navigation Arrows -->
        <div
            class="CustomNavigationArrows absolute bottom-4 right-[-150px] flex gap-2 z-10"
        >
            <button
                data-aos="fade-right"
                @click="goPrev"
                class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white text-[#606060] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:bg-purple hover:text-white hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                :aria-label="t('guide.previousSlide')"
            >
                <svg
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <button
                data-aos="fade-left"
                @click="goNext"
                class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white text-[#606060] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:bg-purple hover:text-white hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                :aria-label="t('guide.nextSlide')"
            >
                <svg
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// @ts-ignore
import '@splidejs/vue-splide/css';

import { useMediaQuery } from '#imports';

const { t } = useI18n();
const isSmallScreen = useMediaQuery('(max-width:640px)');

const splideRef = ref<any>(null);

const imagesList = [
    {
        url: '/images/book/book1.webp',
        width: '374.7121276855469',
        height: '330.2734375',
    },
    {
        url: '/images/book/state1.png',
        width: '299.157958984375',
        height: '428.98150634765625',
    },
    {
        url: '/images/book/state2.png',
        width: '287.87725830078125',
        height: '428.9814453125',
    },
    {
        url: '/images/book/state3.png',
        width: '350.5078430175781',
        height: '428.9814453125',
    },
    {
        url: '/images/book/state4.png',
        width: '300.54913330078125',
        height: '428.9814453125',
    },
    {
        url: '/images/book/state5.png',
        width: '308.41802978515625',
        height: '428.9814453125',
    },
];

const splideOptions = {
    type: 'slide',
    rewind: true,
    perPage: 1, // лише один слайд
    focus: 'center', // центрований слайд
    perMove: 1,
    gap: '3rem', // видаляємо додаткові відступи
    autoWidth: false,
    trimSpace: false,
    arrows: false,
    pagination: false,
    autoplay: false,
    speed: 600,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
};

const goPrev = () => {
    if (splideRef.value?.splide) {
        splideRef.value.splide.go('<');
    }
};

const goNext = () => {
    if (splideRef.value?.splide) {
        splideRef.value.splide.go('>');
    }
};
</script>

<style scoped>
@media screen and (max-width: 1815px) {
    .CustomNavigationArrows {
        right: -40px;
    }
}

@media screen and (max-width: 1024px) {
    .CustomNavigationArrows {
        right: 50px;
        bottom: -40px;
    }
}
@media screen and (max-width: 640px) {
    .CustomNavigationArrows {
        right: 50px;
        bottom: 0px;
        margin-top: 50px;
    }
}
</style>
