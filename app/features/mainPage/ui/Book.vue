<template>
    <div
        class="relative flex flex-col lg:flex-row items-start justify-between lg:items-end gap-8 lg:gap-12"
    >
        <SectionDecoration
            src="/images/palms/palms_book.webp"
            side="right"
            class="top-[-290px] hidden sm:block"
        />

        <!-- Desktop Slider -->
        <ClientOnly> <BookSlider class="sm:block hidden" /> </ClientOnly>

        <!-- Right Side Text Information -->
        <div
            class="w-full max-w-[650px] lg:flex-1 flex flex-col gap-[30px] px-0 sm:px-4 lg:px-0"
        >
            <h2
                data-aos="fade-up-left"
                class="text-[32px] sm:text-[48px] font-[500] text-center lg:text-start"
            >
                {{ t('guide.title') }}
            </h2>

            <!-- Mobile Slider -->
            <ClientOnly>
                <BookSlider data-aos="flip-up" class="sm:hidden flex" />
            </ClientOnly>

            <p data-aos="zoom-in" class="text-sm sm:text-lg leading-relaxed">
                {{ t('guide.text') }}
            </p>

            <div
                class="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-[10px] sm:h-[100px]"
            >
                <!-- Contact a manager -->
                <a
                    data-aos="fade-right"
                    :href="TELEGRAM_URL"
                    target="_blank"
                    rel="noopener"
                    :aria-label="t('guide.contactManagerAria')"
                    class="group btn-purple-glow relative flex items-center sm:items-end justify-center sm:justify-start shrink-0 sm:w-[150px] rounded-[25px] py-5 sm:py-0 sm:pl-3 sm:pr-4 sm:pb-[14px] text-center sm:text-start"
                >
                    <img
                        class="absolute top-2 right-2 hidden sm:block group-hover:top-3 group-hover:right-3 transition-all duration-500"
                        src="/images/icons/arrow_down.svg"
                        alt=""
                    />
                    <span class="font-bold text-white text-sm leading-tight">
                        {{ t('guide.contactManager') }}
                    </span>
                </a>

                <!-- Buy the textbook through the manager on Telegram -->
                <a
                    data-aos="fade-left"
                    :href="TELEGRAM_URL"
                    target="_blank"
                    rel="noopener"
                    :aria-label="t('guide.promoAria')"
                    class="btn-purple-glow relative flex items-center flex-1 sm:max-w-[470px] rounded-[25px] px-8 sm:px-12 py-6 sm:py-0"
                    @click="useMixpanel().trackBuy()"
                >
                    <img
                        src="/images/icons/favorite.svg"
                        alt=""
                        aria-hidden="true"
                        class="absolute -top-1 right-10"
                    />
                    <span class="text-white font-medium text-sm sm:text-[15px]">
                        {{ t('guide.promo') }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BookSlider from '~/components/BookSlider.vue';

const { t } = useI18n();
</script>
