<template>
    <!-- Mobile: image, text, button. Desktop: image with the button below it on
         the left, text on the right. -->
    <article
        class="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-[90px] lg:gap-y-[100px] lg:items-start"
    >
        <img
            data-aos="fade-right"
            :src="material.image"
            :alt="material.imageAlt"
            :width="material.imageWidth"
            :height="material.imageHeight"
            loading="lazy"
            class="w-full h-auto rounded-[20px] lg:col-start-1 lg:row-start-1"
        />

        <div
            data-aos="fade-left"
            class="flex flex-col gap-[22px] text-base/[1.45] sm:text-lg/[1.45] lg:col-start-2 lg:row-start-1 lg:row-span-2 min-w-0"
        >
            <template v-for="(block, index) in material.content" :key="index">
                <p
                    v-if="block.type === 'paragraph'"
                    :class="{ 'font-medium': block.emphasis }"
                >
                    <RichText :text="block.text" />
                </p>

                <h2
                    v-else-if="block.type === 'heading'"
                    class="text-lavender font-bold text-base sm:text-lg"
                    :class="{ uppercase: block.uppercase }"
                >
                    {{ block.text }}
                </h2>

                <ul
                    v-else-if="block.type === 'bullets'"
                    class="grid grid-cols-1 gap-x-10 gap-y-3 sm:gap-y-4"
                    :class="{ 'md:grid-cols-2': block.columns === 2 }"
                >
                    <li
                        v-for="item in block.items"
                        :key="item"
                        class="flex items-start gap-4"
                    >
                        <span
                            aria-hidden="true"
                            class="mt-[0.55em] w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple flex-shrink-0"
                        ></span>
                        <span><RichText :text="item" /></span>
                    </li>
                </ul>

                <ul
                    v-else-if="block.type === 'checks'"
                    class="flex flex-col gap-3 sm:gap-4"
                >
                    <li
                        v-for="item in block.items"
                        :key="item"
                        class="flex items-start gap-4"
                    >
                        <img
                            src="/images/icons/done.svg"
                            alt=""
                            aria-hidden="true"
                            class="mt-[0.15em] flex-shrink-0"
                        />
                        <span><RichText :text="item" /></span>
                    </li>
                </ul>

                <ul v-else-if="block.type === 'lines'">
                    <li v-for="item in block.items" :key="item">
                        <RichText :text="item" />
                    </li>
                </ul>
            </template>
        </div>

        <a
            data-aos="zoom-in"
            :href="ETSY_SHOP_URL"
            target="_blank"
            rel="noopener"
            :aria-label="t('materials.buyAria', { name: material.name })"
            class="block w-full lg:col-start-1 lg:row-start-2"
            @click="useMixpanel().trackBuy()"
        >
            <SplitButton :label="t('common.buy')" class="sm:w-full" />
        </a>
    </article>
</template>

<script lang="ts" setup>
import type { IEducationMaterial } from '../config/educationMaterialsConfig';

defineProps<{
    material: IEducationMaterial;
}>();

const { t } = useI18n();
</script>
