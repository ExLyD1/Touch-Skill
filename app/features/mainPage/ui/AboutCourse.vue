<template>
    <div class="relative">
        <SectionDecoration
            src="/images/palms/palms_about.webp"
            side="right"
            class="top-[-90px] hidden sm:block"
        />

        <h2
            data-aos="fade-up-right"
            class="text-[32px] sm:text-[48px] font-[500] text-center lg:text-start"
        >
            {{ t('about.title') }}
        </h2>

        <!-- Photo sits on top on mobile and on the right on desktop -->
        <div
            class="flex flex-col lg:flex-row-reverse lg:items-start lg:justify-between gap-10 lg:gap-[60px] xl:gap-[100px] mt-6 sm:mt-10"
        >
            <div
                data-aos="fade-left"
                class="about-photo relative w-full max-w-[448px] mx-auto lg:mx-0 lg:w-[388px] xl:w-[448px] flex-shrink-0 pt-3 pr-5 pb-3"
            >
                <!-- Outline tilted and nudged slightly right of and below the photo -->
                <div
                    aria-hidden="true"
                    class="absolute top-3 right-6 bottom-2.5 left-[-30px] rotate-[2.08deg] rounded-[20px] border border-lavender/70"
                ></div>
                <img
                    src="/images/general/about_new.webp"
                    :alt="t('about.imageAlt')"
                    width="800"
                    height="1200"
                    loading="lazy"
                    class="relative block w-full aspect-[2/3] object-cover rounded-[20px]"
                />
            </div>

            <div
                class="relative max-w-[650px] w-full flex flex-col gap-6 sm:gap-[50px]"
            >
                <SectionDecoration
                    src="/images/palms/palms_about_mobile.webp"
                    side="right"
                    class="top-[120px] block sm:hidden"
                />

                <p
                    data-aos="fade-right"
                    class="text-sm sm:text-base leading-[1.7]"
                >
                    {{ t('about.text') }}
                </p>

                <div class="flex flex-col gap-5 sm:gap-7">
                    <h3
                        data-aos="fade-right"
                        class="text-lavender text-[18px] sm:text-2xl font-[700]"
                    >
                        {{ t('about.whyTitle') }}
                    </h3>

                    <ul class="flex flex-col gap-3 sm:gap-5">
                        <li
                            v-for="(reason, index) in aboutReasons"
                            :key="index"
                            class="flex items-center gap-[10px] text-sm sm:text-base"
                            :data-aos="
                                index % 2 === 0 ? 'fade-left' : 'fade-right'
                            "
                        >
                            <img
                                src="/images/icons/done.svg"
                                alt=""
                                aria-hidden="true"
                                class="flex-shrink-0"
                            />

                            <span>{{ reason[locale] }}</span>
                        </li>
                    </ul>
                </div>

                <SplitButton
                    data-aos="zoom-in"
                    :label="t('about.chooseProgram')"
                    class="sm:max-w-[298px] w-full"
                    @click="scrollToElement('courseProgram')"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { aboutReasons } from '../config/aboutConfig';

const { t } = useI18n();
const locale = useAppLocale();
</script>

<style scoped>
/* The photo and its outline fade into the page on the left, as in the design */
@media screen and (min-width: 1024px) {
    .about-photo {
        mask-image: linear-gradient(to right, transparent 0%, #000 30%);
    }
}
</style>
