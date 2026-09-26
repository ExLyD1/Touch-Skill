type JsonLdNode = Record<string, unknown>;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const TUTOR_ID = `${SITE_URL}/#tutor`;

// Profile URLs without tracking parameters, for schema.org `sameAs`
const SAME_AS = [
    'https://www.instagram.com/massage_teacher_eu/',
    FACEBOOK_URL.split('?')[0],
    THREADS_URL.split('?')[0],
    TELEGRAM_URL,
    ETSY_SHOP_URL,
];

// Emits one JSON-LD @graph per page: the site-wide entities (organization,
// website, tutor) plus the page's own nodes, which reference them by @id
export const useStructuredData = (pageNodes: () => JsonLdNode[]) => {
    const { t } = useI18n();
    const locale = useAppLocale();

    const siteNodes = computed<JsonLdNode[]>(() => [
        {
            '@type': 'EducationalOrganization',
            '@id': ORGANIZATION_ID,
            name: 'Touch&Skill',
            alternateName: 'Touch and Skill',
            url: `${SITE_URL}/`,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/icons/app/icon-512.png`,
                width: 512,
                height: 512,
            },
            image: `${SITE_URL}${OG_IMAGES.home[locale.value]}`,
            description: t('seo.home.shortDescription'),
            telephone: SITE_PHONE,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Warszawa',
                addressCountry: 'PL',
            },
            areaServed: { '@type': 'City', name: 'Warsaw' },
            founder: { '@id': TUTOR_ID },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE_PHONE,
                contactType: 'customer service',
                availableLanguage: ['uk', 'en'],
                hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                    ],
                    opens: '09:00',
                    closes: '18:00',
                },
            },
            sameAs: SAME_AS,
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: `${SITE_URL}/`,
            name: 'Touch&Skill',
            inLanguage: ['uk-UA', 'en-US'],
            publisher: { '@id': ORGANIZATION_ID },
        },
        {
            '@type': 'Person',
            '@id': TUTOR_ID,
            name: t('seo.tutorName'),
            jobTitle: t('tutor.role'),
            image: `${SITE_URL}/images/general/your_tutor.webp`,
            worksFor: { '@id': ORGANIZATION_ID },
            workLocation: { '@type': 'Place', name: 'Warsaw, Poland' },
            sameAs: [SAME_AS[0]],
        },
    ]);

    useHead(() => ({
        script: [
            {
                key: 'structured-data',
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@graph': [...siteNodes.value, ...pageNodes()],
                }),
            },
        ],
    }));
};
