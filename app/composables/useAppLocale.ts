import type { AppLocale } from '~/types/locale';

// Current site language, typed to the locales configured in nuxt.config.ts
export const useAppLocale = () => {
    const { locale } = useI18n();
    return computed(() => locale.value as AppLocale);
};
