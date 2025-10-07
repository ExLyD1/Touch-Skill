div
<template>
    <div
        class="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-8 lg:gap-12"
    >
        <!-- Left Side Slider - Full Width on Mobile, Fixed Width on Desktop -->
        <ClientOnly> <BookSlider class="sm:block hidden" /> </ClientOnly>

        <!-- Right Side Text Information -->
        <div
            class="w-full max-w-[650px] lg:flex-1 flex flex-col gap-[30px] px-0 sm:px-4 lg:px-0"
        >
            <h1
                data-aos="fade-up-left"
                class="text-[32px] sm:text-[48px] font-[500] text-center lg:text-start"
            >
                Посібник
            </h1>

            <ClientOnly>
                <BookSlider data-aos="flip-up" class="sm:hidden flex" />
            </ClientOnly>

            <p data-aos="zoom-in" class="text-sm sm:text-lg leading-relaxed">
                Підручник «Посібник для масажиста. Авторський практичний
                довідник» створений для студентів, початківців і практикуючих
                масажистів, які прагнуть поглибити або освіжити свої знання та
                вдосконалити практичні навички. У виданні доступно і
                структуровано викладені основні техніки масажу,
                анатомо-фізіологічні основи процедур, показання та
                протипоказання, а також особливості роботи з різними групами
                клієнтів. Матеріал подано з орієнтацією на сучасні вимоги до
                фахівців у сфері здоров'я та реабілітації. Особливу увагу
                приділено анатомії, з чіткими кольоровими ілюстраціями для
                ретельного вивчення теоретичної бази. Підручник може бути
                використаний як базова навчальна література для курсів масажу, а
                також для самостійної підготовки
            </p>

            <div
                class="flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:max-h-[104px] h-full gap-4"
            >
                <div class="shrink-0" data-aos="fade-right">
                    <a
                        href="https://t.me/touch_skill"
                        class="group block btn-purple-glow max-w-full lg:max-w-[150px] rounded-[25px] py-5 text-center sm:text-start sm:pl-[12px] sm:pb-[20px] sm:pr-[20px] sm:pt-[45px] w-full shrink-0 relative cursor-pointer"
                    >
                        <img
                            class="absolute top-1 right-1 hidden lg:block group-hover:top-3 group-hover:right-3 transition-all duration-500"
                            src="/images/arrow_down.svg"
                            alt="touch&skill-arrow-down"
                        />
                        <p class="font-bold text-white">
                            Зв'язатися з менеджером
                        </p>
                    </a>
                </div>

                <div data-aos="fade-left" class="flex-grow">
                    <BasePriceButton
                        @click="
                            () => {
                                useMixpanel().trackBuy();
                            }
                        "
                        :disabled="loading"
                        label='Вивчай масаж за новим підручником - книга "Посібник для масажиста"'
                        :old-price="550"
                        :current-price="249"
                        :size="isSmallScreen === false ? 'lg' : 'xs'"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BookSlider from '~/components/BookSlider.vue';
import { useMediaQuery } from '#imports';

const isSmallScreen = useMediaQuery('(max-width:1024px)');
const screen = computed(() => isSmallScreen.value);
console.log(screen.value);

const loading = ref(false);
</script>

<style scoped></style>
