<template>
    <div
        ref="rootRef"
        class="relative"
        :class="variant === 'accordion' ? 'w-full' : 'w-fit'"
        @keydown.esc="isOpen = false"
    >
        <button
            type="button"
            class="flex items-center gap-2 cursor-pointer"
            :class="
                variant === 'accordion'
                    ? 'w-full justify-between py-[18px] font-medium text-base'
                    : 'font-[500]'
            "
            :aria-expanded="isOpen"
            :aria-label="`${t('header.language')}: ${currentLocale.name}`"
            @click="isOpen = !isOpen"
        >
            <span>{{ currentLocale.name }}</span>
            <svg
                aria-hidden="true"
                class="w-4 h-4 text-lavender transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>

        <ul
            v-show="isOpen"
            :class="
                variant === 'accordion'
                    ? 'pb-4'
                    : 'absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-[110px] bg-white rounded-lg shadow-lg py-3 px-6 z-30'
            "
        >
            <li v-for="option in otherLocales" :key="option.code">
                <NuxtLink
                    :to="switchLocalePath(option.code)"
                    :hreflang="option.language"
                    class="block font-medium hover:text-purple active:text-purple focus-visible:text-purple transition-colors"
                    @click="isOpen = false"
                >
                    {{ option.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';

withDefaults(
    defineProps<{
        variant?: 'dropdown' | 'accordion';
    }>(),
    { variant: 'dropdown' }
);

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);

onClickOutside(rootRef, () => (isOpen.value = false));

const currentLocale = computed(
    () => locales.value.find(item => item.code === locale.value)!
);
const otherLocales = computed(() =>
    locales.value.filter(item => item.code !== locale.value)
);
</script>
