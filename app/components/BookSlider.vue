<template>
    <div
        class="bookSliderContainer w-full lg:w-1/2 xl:w-[600px] relative flex-shrink-0 pb-12 sm:pb-0"
    >
        <Splide
            ref="splideRef"
            :options="splideOptions"
            aria-label="Book Slider"
        >
            <SplideSlide v-for="(img, index) in imagesList" :key="index">
                <div class="w-full h-full flex justify-center items-center">
                    <NuxtImg
                        :src="img"
                        :alt="`Book ${index + 1}`"
                        class="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain rounded-lg"
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
                aria-label="Previous slide"
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
                aria-label="Next slide"
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

const splideRef = ref<any>(null);

const imagesList = [
    '/images/book/book1.webp',
    '/images/book/book_page1.webp',
    '/images/book/book_page2.webp',
    '/images/book/book_page3.webp',
    '/images/book/book_page4.webp',
    '/images/book/book_page5.webp',
];

const splideOptions = {
    type: 'slide',
    rewind: true,
    perPage: 1, // лише один слайд
    focus: 'center', // центрований слайд
    perMove: 1,
    gap: '0rem', // видаляємо додаткові відступи
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
