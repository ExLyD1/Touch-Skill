<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { useScroll } from '#imports';
const { check } = useScroll();
const throttledCheck = throttle(check, 200);

onMounted(async () => {
    await check();
    window.addEventListener('scroll', throttledCheck, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', throttledCheck);
});

const baseUrl = 'https://touchskill.online';
const pageUrl = `${baseUrl.replace(/\/$/, '')}/`;
const ogImage = `${baseUrl.replace(/\/$/, '')}/images/general/logo.png`;

const title =
    'Курси масажу у Варшаві | Touch&Skill - Професійне навчання масажистів';
const description =
    'Професійні курси масажу у Варшаві від Touch&Skill. Навчання класичного, спортивного, лімфодренажного масажу. Сертифікат, практика на реальних клієнтах, допомога з працевлаштуванням. Знижки при ранньому бронюванні!';
const shortDescription =
    'Курси професійного масажу у Варшаві. Базові та професійні програми навчання. Досвідчені викладачі, практика, сертифікат.';
const price = '249';
const currency = 'UAH';

const bookJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Book',
    '@id': `${pageUrl}#book`,
    name: 'Посібник для масажиста. Авторський практичний довідник',
    author: { '@type': 'Person', name: 'Шулежко Ілля Олександрович' },
    datePublished: '2025-01-01',
    publisher: { '@type': 'Organization', name: 'Touch Skill', url: baseUrl },
    description:
        'Практичний підручник для студентів, початківців та практикуючих масажистів: техніки, анатомія, показання/протипоказання та кольорові ілюстрації.',
    image: ogImage,
    inLanguage: 'uk',
    isbn: 'ISBN-BOOK-001',
};

const productJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: 'Посібник для масажиста — електронна книга',
    description:
        'Електронна версія підручника «Посібник для масажиста» — техніки, 3D-ілюстрації та практичні вправи.',
    image: ogImage,
    sku: 'BOOK-001',
    brand: { '@type': 'Brand', name: 'Touch Skill' },
    offers: {
        '@type': 'Offer',
        url: `${pageUrl}#buy`,
        priceCurrency: currency,
        price,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
    },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Головна',
            item: baseUrl + '/',
        },
    ],
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Чи потрібен попередній досвід для навчання на курсі?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ні, курс розрахований на людей з будь-яким рівнем підготовки.',
            },
        },
        {
            '@type': 'Question',
            name: 'Як забронювати місце на курсі?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Для бронювання місця звяжіться з нами через Telegram. Кількість місць у групах обмежена.',
            },
        },
        {
            '@type': 'Question',
            name: 'Чи є можливість оплати за навчання частинами?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Так, ми пропонуємо гнучкі умови оплати.',
            },
        },
        {
            '@type': 'Question',
            name: 'Чи отримаю я сертифікат після закінчення курсу?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Після успішного завершення кожного рівня та здачі екзамену ви отримуєте офіційний сертифікат.',
            },
        },
        {
            '@type': 'Question',
            name: 'Чи допоможете ви з працевлаштуванням?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ми активно підтримуємо наших випускників у пошуку роботи.',
            },
        },
    ],
};

const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${baseUrl}#organization`,
    name: 'Touch&Skill',
    description: shortDescription,
    url: baseUrl,
    logo: ogImage,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warsaw',
        addressCountry: 'PL',
    },
    areaServed: { '@type': 'City', name: 'Warsaw' },
};

const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    name: 'Курси професійного масажу',
    description: shortDescription,
    provider: { '@type': 'Organization', name: 'Touch&Skill' },
    educationalCredentialAwarded: 'Сертифікат',
    inLanguage: 'uk',
};

useHead({
    title,
    link: [
        { rel: 'canonical', href: pageUrl },
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
        { rel: 'apple-touch-icon', href: '/images/general/logo16x16.svg' },
    ],
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        {
            name: 'robots',
            content:
                'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        },
        { name: 'author', content: 'Шулежко Ілля Олександрович' },
        { name: 'application-name', content: 'Touch&Skill' },
        { name: 'theme-color', content: '#4914e7' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'PL-MZ' },
        { name: 'geo.placename', content: 'Warsaw' },

        { property: 'og:locale', content: 'uk_UA' },
        { property: 'og:type', content: 'website' },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
            property: 'og:image:alt',
            content: 'Курси масажу Touch&Skill у Варшаві',
        },
        { property: 'og:site_name', content: 'Touch&Skill' },

        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        { name: 'twitter:image', content: ogImage },
    ],
    script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(bookJsonLd) },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(productJsonLd),
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(breadcrumbJsonLd),
        },
        { type: 'application/ld+json', innerHTML: JSON.stringify(faqJsonLd) },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(localBusinessJsonLd),
        },
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(courseJsonLd),
        },
    ],
});
</script>

<style>
:root {
    --font-sans: 'Montserrat', ui-sans-serif, system-ui, -apple-system,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans';
}

html,
body {
    scroll-behavior: smooth;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

.btn-purple-glow {
    background-color: #4914e7;
    transition: all 0.5s ease;
    filter: drop-shadow(0 0 5px rgba(73, 20, 231, 1));
    cursor: pointer;
}

.btn-purple-glow:hover {
    background-color: #3a0fc9;
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(73, 20, 231, 1));
}

.btn-purple-glow:active {
    transform: scale(1.02);
}

.btn-purple-glow-smooth {
    background-color: #4914e7;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    filter: drop-shadow(0 0 5px rgba(73, 20, 231, 1));
    will-change: transform, filter, background-color;
}

.btn-purple-glow-smooth:hover {
    background-color: #3a0fc9;
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(73, 20, 231, 1));
}

.scroll-target {
    scroll-margin-top: var(--header-height, 99px);
}
</style>
