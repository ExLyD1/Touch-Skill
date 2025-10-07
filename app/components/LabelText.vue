<template>
    <div
        class="flex items-center w-fit px-4 sm:px-[25px] gap-2 py-2 sm:py-[15px] rounded-2xl bg-[#E8EAF6]"
    >
        <slot>{{ label }}</slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string;
}>();
</script>

<style scoped></style>
