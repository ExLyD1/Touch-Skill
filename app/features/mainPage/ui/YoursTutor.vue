<template>
    <div class="relative">
        <SectionDecoration
            src="/images/palms/palms_tutor_mobile_left.webp"
            side="left"
            class="top-[-80px] block sm:hidden"
        />
        <SectionDecoration
            src="/images/palms/palms_tutor_mobile_right.webp"
            side="right"
            class="top-[-80px] block sm:hidden"
        />

        <div
            class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12"
        >
            <!-- Text -->
            <div class="flex flex-col w-full lg:max-w-[640px] min-w-0">
                <h2
                    data-aos="fade-up-right"
                    class="text-[32px] sm:text-[48px] font-[500] text-center lg:text-start"
                >
                    {{ t('tutor.title') }}
                </h2>

                <div data-aos="fade-right" class="mt-6 sm:mt-8">
                    <p
                        class="text-[34px]/[1.15] sm:text-[64px]/[1.1] font-[600]"
                    >
                        {{ t('tutor.surname') }}
                    </p>
                    <p
                        class="text-[26px]/[1.2] sm:text-[48px]/[1.15] font-[600]"
                    >
                        {{ t('tutor.givenNames') }}
                    </p>
                </div>

                <p
                    data-aos="fade-right"
                    class="mt-3 sm:mt-5 text-lavender uppercase font-bold text-base sm:text-2xl"
                >
                    {{ t('tutor.role') }}
                </p>

                <div
                    data-aos="zoom-in"
                    class="mt-5 sm:mt-10 flex flex-col gap-4 sm:gap-[10px] text-sm/[1.45] sm:text-lg/[30px]"
                >
                    <p v-for="(paragraph, index) in tutorBio" :key="index">
                        <RichText :text="paragraph[locale]" />
                    </p>
                </div>

                <!-- Handwritten slogan -->
                <div data-aos="fade-up" class="mt-8 sm:mt-12 w-fit">
                    <p
                        class="font-caveat text-lavender text-[40px]/[40px] sm:text-[64px]/[60px] whitespace-pre-line -rotate-3 origin-left"
                    >
                        {{ t('tutor.slogan') }}
                    </p>
                    <svg
                        aria-hidden="true"
                        class="w-[230px] sm:w-[350px] h-auto ml-8 sm:ml-12 -mt-1"
                        viewBox="0 0 350 44"
                        fill="none"
                    >
                        <path
                            d="M2 41C98 27 218 10 348 3"
                            stroke="currentColor"
                            class="text-lavender"
                            stroke-width="2.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </div>

            <!-- Photo and social links -->
            <div
                class="w-full lg:w-[420px] xl:w-[500px] 2xl:w-[560px] flex-shrink-0 flex flex-col gap-5"
            >
                <img
                    data-aos="fade-left"
                    src="/images/general/your_tutor.webp"
                    :alt="t('tutor.imageAlt')"
                    width="857"
                    height="1200"
                    loading="lazy"
                    class="tutor-photo block w-full aspect-[857/1200] object-cover rounded-[20px]"
                />

                <!-- Side by side; they wrap on tablets, where the column is narrow -->
                <div
                    class="flex flex-wrap items-center gap-2 sm:gap-4 justify-between lg:justify-end"
                >
                    <LabelText data-aos="fade-right" class="flex-1 lg:flex-none">
                        <a
                            :href="TELEGRAM_URL"
                            :aria-label="t('social.telegram')"
                            target="_blank"
                            rel="noopener"
                            class="flex items-center justify-center gap-2 w-full"
                        >
                            <img
                                src="/images/icons/telegram_mini.svg"
                                alt=""
                                class="w-4 sm:w-auto h-4 sm:h-auto"
                            />
                            <span class="sm:text-[20px] text-xs font-bold">
                                @touch_skill
                            </span>
                        </a>
                    </LabelText>
                    <LabelText data-aos="fade-left" class="flex-1 lg:flex-none">
                        <a
                            :href="INSTAGRAM_URL"
                            :aria-label="t('social.instagram')"
                            target="_blank"
                            rel="noopener"
                            class="flex items-center justify-center gap-2 w-full"
                        >
                            <img
                                src="/images/icons/instagram_mini.svg"
                                alt=""
                                class="w-4 sm:w-auto h-4 sm:h-auto"
                            />
                            <span class="sm:text-[20px] text-xs font-bold">
                                @massage_teacher_eu
                            </span>
                        </a>
                    </LabelText>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LabelText from '~/components/LabelText.vue';
import { tutorBio } from '../config/tutorConfig';

const { t } = useI18n();
const locale = useAppLocale();
</script>

<style scoped>
/* On desktop the photo fades into the page on the left, as in the design */
@media screen and (min-width: 1024px) {
    .tutor-photo {
        mask-image: linear-gradient(to right, transparent 0%, #000 25%);
    }
}
</style>
