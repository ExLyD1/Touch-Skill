export type AppLocale = 'uk' | 'en';

// A value that has one variant per site language
export type Localized<T> = Record<AppLocale, T>;
