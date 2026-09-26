<template>
    <div>
        <h2
            data-aos="fade-up-right"
            class="text-[32px] sm:text-[48px] font-medium sm:text-start text-center"
        >
            {{ t('packages.title') }}
        </h2>

        <div class="grid grid-cols-1 2xl:grid-cols-3 gap-[20px] mt-5 sm:mt-10">
            <div
                :data-aos="dataAos(index)"
                v-for="(item, index) in packagesList"
                :key="index"
                class="flex flex-col gap-[10px]"
            >
                <PackageItem
                    :package="item"
                    :is-detailed="true"
                    class="flex-1 2xl:max-w-[440px] max-w-full w-full"
                >
                </PackageItem>

                <div
                    v-if="index === 0"
                    class="h-fit flex-shrink-0 2xl:max-w-[440px] flex justify-between flex-col max-w-full w-full py-5 px-7 sm:px-10 rounded-2xl bg-purple text-white"
                >
                    <h3 class="text-2xl font-[500]">
                        {{ t('packages.parentsCourse') }}
                    </h3>

                    <div class="flex items-end gap-[20px] sm:gap-[50px] pt-6">
                        <a
                            :href="TELEGRAM_URL"
                            :aria-label="t('common.enrollAria')"
                            target="_blank"
                            class="group relative cursor-pointer bg-white text-black text-[12px] rounded-2xl py-4 px-6 font-medium flex items-center justify-center gap-2 z-10 transition-all hover:bg-[#E6E6E6] duration-500 drop-shadow-[0_0_5px_#E6E6E6] hover:scale-105 hover:drop-shadow-[0_0_10px_#E6E6E6] text-center"
                        >
                            {{ t('packages.enroll') }}

                            <img
                                src="/images/icons/arrow_down_black.svg"
                                alt=""
                                class="flex-shrink-0 h-[14px] w-[14px] absolute top-2 right-2 group-hover:top-3 group-hover:right-3 transition-all duration-500"
                            />
                        </a>

                        <div class="flex flex-col justify-center">
                            <p
                                class="line-through opacity-60 text-[#BCBCBC] font-medium text-sm sm:text-lg"
                            >
                                {{ formatPrice(parentsCoursePrices[locale].old, locale) }}
                            </p>
                            <p
                                class="text-[25px] sm:text-[36px] font-semibold mt-[-10px]"
                            >
                                {{ formatPrice(parentsCoursePrices[locale].current, locale) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PackageItem from '~/entities/mainPage/ui/PackageItem.vue';
import {
    packagesList,
    parentsCoursePrices,
} from '~/entities/mainPage/model/packagesConfig';

const { t } = useI18n();
const locale = useAppLocale();

const dataAos = (index: number) => {
    switch (index) {
        case 0:
            return 'fade-right';
            break;

        case 1:
            return 'fade-up';
            break;

        case 2:
            return 'fade-left';
            break;

        default:
            break;
    }
};
</script>

<style scoped></style>
