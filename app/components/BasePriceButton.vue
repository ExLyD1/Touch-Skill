<template>
    <button
        :type="type"
        :class="[
            `relative w-full  gap-[30px] sm:gap-[34px] rounded-[25px]  flex items-center  h-full`,
            sizeClass,
            variantClass,
            { 'sm:gap-[64px]': size === 'lg' },
        ]"
        :style="sizeStyles"
        :aria-label="ariaLabel"
        @click="$emit('click', $event)"
    >
        <!-- Optional icon slot (fallback to bookmark image) -->

        <slot name="icon">
            <img
                src="/images/favorite.svg"
                alt="touch&skill-favorite-img"
                class="absolute -top-2 right-10"
                aria-hidden="true"
            />
        </slot>

        <!-- Content / label -->
        <div class="text-left min-w-0 max-w-[180px] sm:max-w-[220px]">
            <p class="font-medium" :class="labelClass">
                <slot>{{ label }}</slot>
            </p>
        </div>

        <!-- Price block -->
        <div class="flex items-start gap-2 shrink-0">
            <div class="flex flex-col items-start leading-none">
                <span
                    v-if="hasOldPrice"
                    class="line-through text-[#BBBBBB] sm:mb-0 mb-[-5px]"
                    :class="[oldPriceClass, { 'sm:mb-[-7px]': size === 'xs' }]"
                >
                    {{ formattedOldPrice }}
                    <span class="text-sm" :class="currencyClass">{{
                        currency
                    }}</span>
                </span>
                <span class="font-semibold" :class="currentPriceClass">
                    {{ formattedCurrentPrice }}
                    <span class="text-sm" :class="currencyClass">{{
                        currency
                    }}</span>
                </span>
            </div>
        </div>
    </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
    oldPrice: { type: [Number, String], default: null },
    currentPrice: { type: [Number, String], required: true },
    size: { type: String as () => 'lg' | 'md' | 'sm' | 'xs', default: 'lg' },
    variant: { type: String as () => 'primary' | 'ghost', default: 'primary' },
    currency: { type: String, default: 'грн' },
    type: {
        type: String as () => 'button' | 'submit' | 'reset',
        default: 'button',
    },
    ariaLabel: { type: String, default: '' },
    locale: { type: String, default: undefined },
    customGap: { type: String, default: '34px' },
});

const { size, variant, oldPrice, currentPrice } = toRefs(props);

const sizesMap = {
    lg: {
        padding: '18px 24px',
        labelSize: 'text-base ',
        oldPriceSize: 'text-base',
        currentPriceSize: 'text-3xl',
    },
    md: {
        padding: '14px 20px',
        labelSize: 'text-sm',
        oldPriceSize: 'text-sm',
        currentPriceSize: 'text-2xl',
    },
    sm: {
        padding: '12px 16px',
        labelSize: 'text-sm',
        oldPriceSize: 'text-xs',
        currentPriceSize: 'text-xl',
    },
    xs: {
        padding: ' 7px 37px 10px 20px',
        labelSize: 'text-xs font-medium',
        oldPriceSize: 'text-xs font-medium',
        currentPriceSize: 'text-lg font-medium',
    },
};

const sizeClass = computed(() => {
    return ''; // layout sized via inline CSS var (sizeStyles) and utility classes for fonts below
});

const sizeStyles = computed(() => {
    const s = sizesMap[size.value as keyof typeof sizesMap] || sizesMap.md;
    return {
        padding: s.padding,
    };
});

const labelClass = computed(
    () => sizesMap[size.value as keyof typeof sizesMap].labelSize
);
const oldPriceClass = computed(
    () => sizesMap[size.value as keyof typeof sizesMap].oldPriceSize
);
const currentPriceClass = computed(
    () => sizesMap[size.value as keyof typeof sizesMap].currentPriceSize
);
const currencyClass = computed(
    () => sizesMap[size.value as keyof typeof sizesMap].oldPriceSize
);

const variantClass = computed(() => {
    // primary
    return 'bg-purple text-white ';
});

const hasOldPrice = computed(
    () =>
        oldPrice.value !== null &&
        oldPrice.value !== undefined &&
        oldPrice.value !== ''
);

function formatNumber(value: string | number | null | undefined) {
    if (value == null || value === '') return '';
    const num =
        typeof value === 'number'
            ? value
            : Number(String(value).replace(/[^\d.-]/g, ''));
    try {
        if (props.locale) {
            return new Intl.NumberFormat(props.locale).format(num);
        }
        return new Intl.NumberFormat('ru-RU').format(num);
    } catch {
        return String(num);
    }
}

const formattedOldPrice = computed(() =>
    hasOldPrice.value ? formatNumber(props.oldPrice) : ''
);
const formattedCurrentPrice = computed(() => formatNumber(currentPrice.value));
</script>

<style scoped></style>
