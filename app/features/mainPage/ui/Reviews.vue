<template>
    <div>
        <div>
            <!-- Desktop layout (sm и больше) -->
            <div class="hidden sm:flex flex-row relative">
                <h2
                    data-aos="fade-up-right"
                    class="text-[48px] font-[500] px-[25px] text-start"
                >
                    {{ t('reviews.title') }}
                </h2>

                <!-- Custom Navigation Arrows -->
                <div
                    class="absolute bottom-0 right-5 z-10 flex gap-3 items-center"
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

            <!-- Mobile layout (меньше sm) -->
            <div class="sm:hidden block min-w-[0]">
                <h2
                    class="text-[32px] font-[500] px-[25px] pb-[30px] text-center"
                >
                    {{ t('reviews.title') }}
                </h2>

                <!-- Mobile Slider -->
                <Splide
                    ref="splideRefMobile"
                    :options="splideOptionsMobile"
                    :aria-label="t('reviews.sliderLabel')"
                    data-aos="zoom-in"
                    class="mb-[10px] block sm:hidden"
                >
                    <SplideSlide
                        v-for="(review, index) in reviewsList"
                        :key="index"
                        class="!h-fit pb-8 px-5 pt-3"
                    >
                        <ReviewCard :review="review" />
                    </SplideSlide>
                </Splide>

                <!-- Mobile Navigation Arrows -->
                <div class="flex gap-3 items-center justify-end px-[15px]">
                    <button
                        data-aos="fade-right"
                        @click="goPrevMobile"
                        class="w-12 h-12 rounded-xl bg-white text-[#606060] flex items-center justify-center cursor-pointer drop-shadow-lg transition-all duration-300 shadow-lg hover:bg-purple hover:text-white hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
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
                        @click="goNextMobile"
                        class="w-12 h-12 rounded-xl bg-white text-[#606060] flex items-center justify-center cursor-pointer drop-shadow-lg transition-all duration-300 shadow-lg hover:bg-purple hover:text-white hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
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
        </div>

        <!-- Desktop Slider (sm и больше) -->
        <Splide
            ref="splideRef"
            :options="splideOptionsDesktop"
            :aria-label="t('reviews.sliderLabel')"
            data-aos="zoom-in"
            class="justify-center items-center hidden sm:flex pt-4"
        >
            <SplideSlide
                v-for="(review, index) in reviewsList"
                :key="index"
                class="pb-8 pt-3 splide-slide-item"
            >
                <ReviewCard :review="review" />
            </SplideSlide>
        </Splide>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import ReviewCard from '~/entities/mainPage/ui/ReviewCard.vue';
import { reviewsList } from '../config/reviewsConfig';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// @ts-ignore
import '@splidejs/vue-splide/css';

const { t } = useI18n();

const splideRef = ref<any>(null);
const splideRefMobile = ref<any>(null);
const isMobile = ref<boolean>(false);

const splideOptionsDesktop = {
    type: 'slide',
    rewind: true,
    perPage: 4,
    perMove: 1,
    gap: '1rem',
    trimSpace: false,
    pagination: false,
    arrows: false,
    autoWidth: false,
    speed: 600,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    breakpoints: {
        1720: { perPage: 3 },
        1500: { perPage: 2 },
        955: { perPage: 2 },
        640: { perPage: 1.3, gap: '2.5rem' },
        355: { perPage: 1 },
    },
};

const splideOptionsMobile = {
    type: 'slide',
    rewind: true,
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    arrows: false,
    pagination: false,
    autoWidth: false,
    breakpoints: {
        425: { perPage: 1, autoWidth: true, gap: '0rem' },
    },
    trimSpace: true,
    speed: 600,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
};

const updateIsMobile = () => {
    isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
    updateIsMobile();
    const onResize = () => {
        const prev = isMobile.value;
        updateIsMobile();
        // коли змінюється breakpoint — refreshuємо splide після DOM оновлення
        if (prev !== isMobile.value) {
            nextTick(() => {
                splideRef.value?.splide?.refresh?.();
                splideRefMobile.value?.splide?.refresh?.();
            });
        } else {
            // все одно корисно освіжити при ресайзі
            splideRef.value?.splide?.refresh?.();
            splideRefMobile.value?.splide?.refresh?.();
        }
    };
    window.addEventListener('resize', onResize);
    onBeforeUnmount(() => window.removeEventListener('resize', onResize));
});

const goPrev = () => splideRef.value?.splide?.go('<');
const goNext = () => splideRef.value?.splide?.go('>');
const goPrevMobile = () => splideRefMobile.value?.splide?.go('<');
const goNextMobile = () => splideRefMobile.value?.splide?.go('>');
</script>

<style scoped>
.splide-slide-item {
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: stretch;
}
</style>
