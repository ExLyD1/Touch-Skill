<template>
    <div class="flex gap-[6px] items-center w-full sm:w-auto flex-nowrap">
        <div
            class="flex-grow text-white text-sm sm:text-lg font-[700] py-[21px] sm:py-[24px] px-[40px] sm:px-[58px] w-fit rounded-xl text-center cursor-pointer bg-purple transition-all hover:bg-purple-active duration-500 hover:drop-shadow-[0_0_10px_rgba(73,20,231,1)] text-nowrap"
        >
            {{ label }}
        </div>

        <div
            class="h-[62px] w-[62px] sm:h-[70px] sm:w-[70px] flex-shrink-0 flex items-center justify-center cursor-pointer rounded-xl bg-purple transition-all hover:bg-purple-active duration-500 hover:drop-shadow-[0_0_10px_rgba(73,20,231,1)]"
        >
            <img src="/images/arrow_top.svg" alt="skill&touch_arrow_top" />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    label: string;
}>();
</script>

<style scoped></style>
