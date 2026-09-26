<template>
    <!-- Positioned against its (horizontally centered) section, but pinned to
         the viewport edge, so it follows the section instead of fixed page offsets -->
    <img
        :src="src"
        alt=""
        aria-hidden="true"
        loading="lazy"
        class="pointer-events-none absolute -z-10 max-w-[100vw] select-none"
        :class="
            side === 'left'
                ? 'left-[calc((100%_-_100vw)/2)]'
                : 'right-[calc((100%_-_100vw)/2)]'
        "
    />
</template>

<script lang="ts" setup>
defineProps<{
    src: string;
    side: 'left' | 'right';
}>();
</script>
