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
        '@nuxtjs/sitemap',
    ],

    site: {
        url: 'https://touchskill.online',
        name: 'Touch Skill',
    },

    sitemap: {
        sitemapName: 'sitemap.xml',
        urls: ['/'],
        autoLastmod: true,
        credits: false,
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
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap',
                },
            ],
        },
    },
});
