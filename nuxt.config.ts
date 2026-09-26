// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        'nuxt-aos',
        '@nuxtjs/i18n',
    ],

    i18n: {
        baseUrl: 'https://touchskill.online',
        defaultLocale: 'uk',
        // Ukrainian keeps its existing unprefixed URLs, English lives under /en
        strategy: 'prefix_except_default',
        detectBrowserLanguage: false,
        locales: [
            { code: 'uk', language: 'uk-UA', name: 'UA', file: 'uk.json' },
            { code: 'en', language: 'en-US', name: 'EN', file: 'en.json' },
        ],
    },

    shadcn: {
        prefix: '',
        componentDir: './app/components/ui',
    },

    runtimeConfig: {
        LIQPAY_SECRET_KEY: 'sandbox_ityehHznzMAHDDqIBaLisbp34VOpCgoJoMaIKx7X',
        public: {
            NUXT_PUBLIC_LIQPAY_KEY: 'sandbox_i16455500653',
            APP_URL: 'http://localhost:3000',
            MIXPANEL_TOKEN: '2b0b73e7df1eeea54352dc97a6017e50',
        },
    },

    app: {
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400&family=Montserrat:wght@300;400;500;600;700&display=swap',
                },
            ],

            meta: [
                {
                    name: 'google-site-verification',
                    content: 'mBKTpSWUFUXNmmsprqtjzrD4mWklu6r8pNS87gpmJH8',
                },
            ],

            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-1YBYQLY94B',
                    async: true,
                },
                {
                    innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1YBYQLY94B');
          `,
                    type: 'text/javascript',
                },
            ],
        },
    },
});
