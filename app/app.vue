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
console.log(pageUrl);
console.log(ogImage);

const title = 'Посібник для масажиста — практичний підручник | Touch&Skill';
const description =
    'Курси професійного масажу | Варшава | Вивчай масаж за новим авторським підручником! Посібник для масажиста — авторський практичний довідник Іллі Шулежка. Техніки, анатомія, кольорові ілюстрації та практичні вправи. Купити електронну книгу — доставка миттєва, 249 грн. Завантажуй та вчися! Книга для початківців і практикуючих масажистів. Записуйся на курси масажу в Touch Skill! Знижки на навчання! ';
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
            name: 'У якому форматі доступна книга?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Електронна версія в форматі PDF та оптимізований Web-view для мобільних пристроїв.',
            },
        },
        {
            '@type': 'Question',
            name: 'Як відбувається доставка купленої електронної книги?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Після оплати на вашу пошту миттєво надходить посилання для завантаження, також доступ у особистому кабінеті.',
            },
        },
        {
            '@type': 'Question',
            name: 'Чи є повернення коштів?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Повернення можливе протягом 14 днів за умови, що файл не був завантажений. Деталі — у політиці повернень.',
            },
        },
        {
            '@type': 'Question',
            name: 'Чи підходить книга для початківців?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Так — книга створена для студентів, початківців і практикуючих масажистів; містить теорію та практичні вправи.',
            },
        },
        {
            '@type': 'Question',
            name: 'Чи отримаю я сертифікат після прочитання книги?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Книга — навчальний посібник. Сертифікат видається після проходження офлайн/онлайн курсу, а не лише від прочитання книги.',
            },
        },
    ],
};

useHead({
    title,
    link: [
        { rel: 'canonical', href: pageUrl },
        {
            rel: 'icon',
            href: '/images/general/logo.svg',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/images/general/logo32x32.svg',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/images/general/logo16x16.svg',
        },
        { rel: 'apple-touch-icon', href: '/images/general/logo16x16.svg' },
    ],
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        {
            name: 'keywords',
            content:
                'Touch Skill, масаж, анатомія, масажист, практичний посібник, техніки масажу, довідник, посібник для масажиста, книга для масажиста, підручник для масажиста, навчання масажу, техніки масажу, анатомія для масажиста, масаж для початківців, електронна книга масаж, практичний довідник масажиста',
        },
        { name: 'author', content: 'Шулежко Ілля Олександрович' },

        { property: 'og:locale', content: 'uk_UA' },

        { property: 'og:type', content: 'product' },
        {
            property: 'og:title',
            content: 'ВЧИСЬ У ПРОФІ - БУДЬ ПРОФІ - TOUCH&SKILL',
        },
        {
            property: 'og:description',
            content:
                'курси професійного масажу | Варшава | Вивчай масаж за новим авторським підручником!',
        },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:site_name', content: 'Touch&Skill' },
        { property: 'og:locale', content: 'uk_UA' },
        { property: 'product:price:amount', content: price },
        { property: 'product:price:currency', content: currency },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
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
