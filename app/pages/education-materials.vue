<template>
    <div class="2xl:max-w-[80%] max-w-[100%] w-full m-auto px-[15px] pt-6 sm:pt-10">
        <div class="hidden sm:flex items-start justify-between gap-6">
            <nav :aria-label="t('materials.breadcrumb')">
                <ol class="flex items-center gap-3 text-sm">
                    <li>
                        <NuxtLink
                            :to="localePath('/')"
                            class="hover:text-purple transition-colors"
                        >
                            {{ t('nav.home') }}
                        </NuxtLink>
                    </li>
                    <li aria-hidden="true" class="text-[10px]">•</li>
                    <li aria-current="page" class="text-purple">
                        {{ t('materials.title') }}
                    </li>
                </ol>
            </nav>

            <NuxtLink
                :to="localePath('/')"
                :aria-label="t('materials.close')"
                class="p-1 -m-1 hover:text-purple transition-colors"
            >
                <svg
                    aria-hidden="true"
                    class="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                >
                    <path d="M4 4l16 16M20 4L4 20" />
                </svg>
            </NuxtLink>
        </div>

        <h1
            data-aos="fade-up-right"
            class="sm:mt-14 text-[32px] sm:text-[48px] font-[500]"
        >
            {{ t('materials.title') }}
        </h1>

        <div class="mt-8 sm:mt-16 flex flex-col gap-20 sm:gap-[120px]">
            <EducationMaterialItem
                v-for="material in materials"
                :key="material.id"
                :material="material"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import EducationMaterialItem from '~/features/educationMaterials/ui/EducationMaterialItem.vue';
import {
    educationMaterialsByLocale,
    type IEducationMaterial,
} from '~/features/educationMaterials/config/educationMaterialsConfig';

const { t } = useI18n();
const locale = useAppLocale();
const localePath = useLocalePath();

const materials = computed(() => educationMaterialsByLocale[locale.value]);

// SEO
const { pageUrl, imageUrl } = usePageSeo({
    title: () => t('seo.materials.title'),
    description: () => t('seo.materials.description'),
    path: '/education-materials',
    image: () => OG_IMAGES.materials[locale.value],
    imageAlt: () => t('seo.materials.title'),
});

const homeUrl = computed(() => `${SITE_URL}${localePath('/').replace(/\/$/, '')}`);
const inLanguage = computed(() => (locale.value === 'en' ? 'en-US' : 'uk-UA'));

// First paragraph of a product's copy, without the "**" emphasis markers
const summaryOf = (material: IEducationMaterial) => {
    const first = material.content.find(block => block.type === 'paragraph');
    return first && 'text' in first ? first.text.replaceAll('**', '') : '';
};

useStructuredData(() => [
    {
        '@type': 'CollectionPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: t('seo.materials.title'),
        description: t('seo.materials.description'),
        inLanguage: inLanguage.value,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORGANIZATION_ID },
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: imageUrl.value,
            width: 1200,
            height: 630,
        },
        breadcrumb: { '@id': `${pageUrl.value}#breadcrumb` },
        mainEntity: { '@id': `${pageUrl.value}#materials` },
    },
    {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl.value}#breadcrumb`,
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: t('nav.home'),
                item: homeUrl.value,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: t('materials.title'),
                item: pageUrl.value,
            },
        ],
    },
    {
        '@type': 'ItemList',
        '@id': `${pageUrl.value}#materials`,
        numberOfItems: materials.value.length,
        itemListElement: materials.value.map((material, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Book',
                name: material.name,
                description: summaryOf(material),
                image: `${SITE_URL}${material.image}`,
                author: { '@id': TUTOR_ID },
                publisher: { '@id': ORGANIZATION_ID },
                bookFormat: 'https://schema.org/EBook',
                inLanguage: inLanguage.value,
                url: ETSY_SHOP_URL,
            },
        })),
    },
]);
</script>
