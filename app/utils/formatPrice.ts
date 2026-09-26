import type { AppLocale } from '~/types/locale';

const eurFormatter = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
});

// UA prices are in złoty and keep the site's existing "1490zł" style;
// the English version shows euros, e.g. "€350"
export const formatPrice = (amount: number, locale: AppLocale): string =>
    locale === 'en' ? eurFormatter.format(amount) : `${amount}zł`;
