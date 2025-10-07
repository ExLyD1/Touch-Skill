<template>
    <div
        class="w-full h-full flex flex-col justify-between rounded-3xl p-8 shadow-2xl relative"
        :style="{
            backgroundColor: package.styles.backgroundColor,
            color: package.styles.textColor,
        }"
    >
        <!-- Header Data -->
        <div>
            <!-- Header -->
            <div class="text-center mb-6 z-10">
                <h2 class="text-2xl sm:text-4xl font-[600] mb-2">
                    {{ package.stage }}
                </h2>
                <p class="text-[16px] sm:font-bold font-medium">
                    {{ package.type }}
                </p>
            </div>

            <!-- Divider -->
            <div
                class="w-full h-px mb-6 opacity-30 z-10"
                :class="`bg-[${package.styles.dividerColor}]`"
                :style="{
                    backgroundColor: package.styles.dividerColor,
                }"
            ></div>

            <!-- Items List -->
            <ul class="space-y-4 mb-0 sm:mb-8 list-circle z-10">
                <li
                    v-for="(item, index) in package.servicesList"
                    :key="index"
                    class="flex items-center gap-2 sm:gap-3"
                >
                    <span
                        class="flex-shrink-0 w-[7px] sm:w-[10px] h-[7px] sm:h-[10px] rounded-full"
                        :style="{
                            backgroundColor: package.styles.pointColor,
                        }"
                    ></span>
                    <span class="text-base leading-relaxed pl-2">{{
                        item
                    }}</span>
                </li>
            </ul>
        </div>

        <!-- Detailed List -->
        <div
            v-if="isDetailed"
            class="flex flex-col justify-center items-center"
        >
            <!-- Price -->
            <div class="text-center mb-6 sm:mt-0 mt-6 z-10">
                <p
                    class="text-lg line-through opacity-80"
                    :style="{
                        color: package.styles.oldPriceColor,
                    }"
                >
                    {{ package.oldPrice }}zł
                </p>
                <p
                    class="text-5xl font-bold"
                    :style="{
                        color: package.styles.newPriceColor,
                    }"
                >
                    {{ package.currentPrice }}zł
                </p>
            </div>

            <!-- Button -->
            <a
                href="https://t.me/@touch_skill"
                target="_blank"
                class="group relative w-full rounded-2xl py-4 px-6 font-semibold text-lg flex items-center justify-center gap-2 mb-6 z-10 cursor-pointer"
                :style="{
                    backgroundColor: package.styles.buttonBgColor,
                    color: package.styles.buttonTextColor,
                }"
                :class="{
                    'bg-purple transition-all hover:bg-purple-active duration-500 drop-shadow-[0_0_5px_rgba(73,20,231,1)] hover:scale-105  hover:drop-shadow-[0_0_10px_rgba(73,20,231,1)]':
                        package.styles.buttonBgColor === '#5521F1',
                    'bg-цршеу transition-all hover:bg-[#E6E6E6] duration-500 drop-shadow-[0_0_5px_#E6E6E6] hover:scale-105  hover:drop-shadow-[0_0_10px_#E6E6E6]':
                        package.styles.buttonBgColor === '#FFFFFF',
                }"
            >
                записатися на курс

                <img
                    :src="
                        package.styles.buttonBgColor === '#FFFFFF'
                            ? '/images/arrow_down_black.svg'
                            : '/images/arrow_down.svg'
                    "
                    alt="skill&touch-course-subscription-button-arrow-down-image"
                    class="flex-shrink-0 absolute top-2 right-2 group-hover:top-3 group-hover:right-4 transition-all duration-500"
                />
            </a>

            <!-- Timer -->
            <div class="text-center z-10">
                <p class="text-sm opacity-80 mb-3">підняття ціни через:</p>
                <div class="flex justify-center gap-3">
                    <div
                        v-for="(item, index) in timerData"
                        class="flex items-start gap-3"
                    >
                        <div class="flex flex-col items-center">
                            <span class="text-4xl font-bold leading-none">{{
                                formatTime(item.value)
                            }}</span>
                            <span class="text-xs opacity-70 mt-1"
                                >{{ item.label }}
                            </span>
                        </div>

                        <span class="text-2xl font-semibold opacity-50">
                            {{ index < timerData.length - 1 ? ':' : '' }}</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <slot name="bg-effects"></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

import type { IPackage } from '../model/packagesConfig';

// Props
defineProps<{ package: IPackage; isDetailed: boolean }>();

// State
// const time = ref({ ...props.countdown });

type TimerItem = { label: string; value: number };

const timerData = ref<TimerItem[]>([
    { label: 'днів', value: 0 },
    { label: 'годин', value: 0 },
    { label: 'хвилин', value: 0 },
    { label: 'секунд', value: 0 },
]);

let timer: number | null = null;

function updateTimer() {
    const now = new Date();
    // Початок наступного місяця (00:00:00 першого числа наступного місяця)
    const startOfNextMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1,
        0,
        0,
        0,
        0
    );
    let diffMs = startOfNextMonth.getTime() - now.getTime();

    if (diffMs < 0) diffMs = 0; // захист на випадок мілісекундних зсувів

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerData.value = [
        { label: 'днів', value: days },
        { label: 'годин', value: hours },
        { label: 'хвилин', value: minutes },
        { label: 'секунд', value: seconds },
    ];
}

onMounted(() => {
    updateTimer(); // одразу виставити поточні значення
    timer = window.setInterval(updateTimer, 1000);
});

onUnmounted(() => {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
});

const formatTime = (value: any) => String(value).padStart(2, '0');
</script>
