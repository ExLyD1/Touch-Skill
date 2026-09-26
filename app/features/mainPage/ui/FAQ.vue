<template>
    <div class="relative">
        <SectionDecoration
            src="/images/palms/palms_faq.webp"
            side="right"
            class="top-[-370px] hidden sm:block"
        />

        <div
            class="flex items-center justify-center sm:justify-between w-full text-center sm:text-start"
        >
            <h2
                data-aos="fade-up-right"
                class="text-[32px] sm:text-[48px] font-[500] text-center sm:text-start"
            >
                {{ t('faq.title') }}
            </h2>

            <p class="text-[#7B83B3] text-3xl hidden sm:block">FAQ</p>
        </div>

        <div
            class="mt-[20px] sm:mt-[50px] flex lg:gap-[80px] flex-col lg:flex-row"
        >
            <Accordion
                type="single"
                class="w-full border-t sm:border-y border-black text-black"
                collapsible
                v-for="(accordion, index) in accordionColumns"
                :key="index"
                :class="{ 'border-b': index === 1 }"
            >
                <AccordionItem
                    :data-aos="index === 0 ? 'fade-right' : 'fade-left'"
                    v-for="(item, index) in accordion"
                    :key="item.value"
                    :value="item.value"
                    class="border-b border-black group"
                >
                    <AccordionTrigger
                        class="hover:no-underline cursor-pointer py-3 sm:py-6 px-0 flex items-center"
                    >
                        <template #icon
                            ><div
                                class="plus-button relative w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] bg-transparent rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#4914e7] group-hover:shadow-[0_0_20px_rgba(73,20,231,0.6)]"
                            >
                                <div
                                    class="absolute w-4 sm:w-6 h-[2px] bg-black group-hover:bg-white transition-colors duration-300"
                                ></div>
                                <div
                                    class="absolute w-4 sm:w-6 h-[2px] bg-black group-hover:bg-white rotate-90 transition-colors duration-300"
                                ></div></div
                        ></template>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex items-center gap-7">
                                <span
                                    class="text-[8px] sm:text-xl font-semibold"
                                    >0{{ item.number }}</span
                                >
                                <span
                                    class="text-[12px] sm:text-2xl text-left font-semibold flex-1"
                                >
                                    {{ item.title[locale] }}
                                </span>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent
                        class="pb-6 px-0 text-black text-sm sm:text-xl"
                    >
                        {{ item.content[locale] }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion';
import { faqItems } from '../config/faqConfig';

const { t } = useI18n();
const locale = useAppLocale();

// Two accordion columns of three questions each
const accordionColumns = [faqItems.slice(0, 3), faqItems.slice(3)];
</script>

<style scoped>
/* Додаткові стилі для кнопки акордеону */
:deep(.accordion-trigger) {
    font-weight: 500;
}

/* Стилізація іконки (плюс/мінус) */
:deep([data-state='open'] svg) {
    transform: rotate(180deg);
}

/* Анімація для іконки */
:deep(svg) {
    transition: transform 0.3s ease;
}

/* Ховаємо стандартну іконку */
:deep(button[data-radix-collection-item] > svg) {
    display: none;
}

/* Стан коли акордеон відкритий */
:deep([data-state='open'] .plus-button) {
    transform: rotate(45deg);
    background: #4914e7;
    box-shadow: 0 0 20px rgba(73, 20, 231, 0.6);
}

:deep([data-state='open'] .plus-button > div) {
    background: white;
}
</style>
