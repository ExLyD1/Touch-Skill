<template>
    <div>
        <h1
            data-aos="fade-up-right"
            class="text-[32px] sm:text-[48px] font-medium sm:text-start text-center"
        >
            Ціна та пакети
        </h1>

        <div class="grid grid-cols-1 2xl:grid-cols-3 gap-[20px] mt-5 sm:mt-10">
            <div
                :data-aos="dataAos(index)"
                v-for="(item, index) in packagesList"
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
                    <h1 class="text-2xl font-[500]">Курс для батьків</h1>

                    <div class="flex items-end gap-[20px] sm:gap-[50px] pt-6">
                        <a href="https://t.me/@touch_skill" target="_blank">
                            <button
                                class="group relative cursor-pointer w-full bg-white text-black text-[12px] rounded-2xl py-4 px-6 font-medium flex items-center justify-center gap-2 z-10 transition-all hover:bg-[#E6E6E6] duration-500 drop-shadow-[0_0_5px_#E6E6E6] hover:scale-105 hover:drop-shadow-[0_0_10px_#E6E6E6] text-center"
                            >
                                записатися на курс

                                <img
                                    src="/images/arrow_down_black.svg"
                                    alt="skill&touch-course-subscription-button-arrow-down-image"
                                    class="flex-shrink-0 h-[14px] w-[14px] absolute top-2 right-2 group-hover:top-3 group-hover:right-3 transition-all duration-500"
                                />
                            </button>
                        </a>

                        <div class="flex flex-col justify-center">
                            <p
                                class="line-through opacity-60 text-[#BCBCBC] font-medium text-sm sm:text-lg"
                            >
                                580zł
                            </p>
                            <p
                                class="text-[25px] sm:text-[36px] font-semibold mt-[-10px]"
                            >
                                290zł
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
import { packagesList } from '~/entities/mainPage/model/packagesConfig';

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
