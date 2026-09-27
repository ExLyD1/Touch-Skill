<template>
    <div
        class="w-[318px] xl:w-[348px] h-[385px] xl:h-[395px] bg-white rounded-3xl p-6 shadow-[0_6px_18px_rgba(0,0,0,0.14)] flex flex-col"
    >
        <!-- Header -->
        <div class="flex items-start gap-4 mb-4">
            <img
                :src="review.image"
                :alt="review.name[locale]"
                class="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
                <h3 class="font-medium text-lg mb-1 truncate">
                    {{ review.name[locale] }}
                </h3>
                <div class="flex gap-0.5 mb-1">
                    <svg
                        v-for="i in review.rating"
                        :key="i"
                        class="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                    </svg>
                </div>
                <p class="text-gray-500">{{ review.date }}</p>
            </div>
        </div>

        <!-- Review Text -->
        <p class="leading-relaxed text-gray-700 flex-1 whitespace-pre-line">
            {{ review.text[locale] }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import type { IReview } from '~/features/mainPage/config/reviewsConfig';

defineProps<{
    review: IReview;
}>();

const locale = useAppLocale();
</script>
