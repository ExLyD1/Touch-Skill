<template>
    <template v-for="(segment, index) in segments" :key="index">
        <strong v-if="segment.bold" class="font-bold">{{ segment.text }}</strong>
        <template v-else>{{ segment.text }}</template>
    </template>
</template>

<script lang="ts" setup>
const props = defineProps<{
    text: string;
}>();

const segments = computed(() => parseRichText(props.text));
</script>
