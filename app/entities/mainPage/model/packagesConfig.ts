import type { Localized } from '~/types/locale';

export interface IPackageStyles {
    textColor: string;
    oldPriceColor: string;
    newPriceColor: string;
    buttonBgColor: string;
    buttonTextColor: string;
    backgroundColor: string;
    pointColor: string;
    dividerColor: string;
}

// Amounts are in the locale's currency: złoty for UA, euro for EN
export interface IPrice {
    old: number;
    current: number;
}

export interface IPackage {
    stage: Localized<string>;
    type: Localized<string>;
    servicesList: Localized<string[]>;
    prices: Localized<IPrice>;
    styles: IPackageStyles;
}

export const packagesList: IPackage[] = [
    {
        stage: { uk: 'І ступінь:', en: 'Level I:' },
        type: { uk: 'Класік (базовий курс)', en: 'Classic (basic course)' },
        servicesList: {
            uk: [
                'Вивчення анатомії та фізіології',
                'Клініко-фізіологічне обґрунтування масажних прийомів',
                'Прийоми класичного масажу',
                'Розвиток тактильності та стереогнозії (рівень I)',
                'Практика',
                'Екзамен (теорія та практика)',
            ],
            en: [
                'Anatomy and physiology',
                'Clinical and physiological rationale for massage techniques',
                'Classic massage techniques',
                'Developing tactile sensitivity and stereognosis (level I)',
                'Practice',
                'Exam (theory and practice)',
            ],
        },
        prices: {
            uk: { old: 2980, current: 1490 },
            en: { old: 700, current: 350 },
        },
        styles: {
            textColor: '#FFFFFF',
            oldPriceColor: '#BCBCBC',
            newPriceColor: '#FFFFFF',
            buttonBgColor: '#FFFFFF',
            buttonTextColor: '#000000',
            backgroundColor: '#5521F1',
            pointColor: '#FFFFFF',
            dividerColor: '#FFFFFF',
        },
    },
    {
        stage: { uk: 'ІІ ступінь:', en: 'Level II:' },
        type: { uk: 'Класік+ (поглиблений)', en: 'Classic+ (advanced)' },
        servicesList: {
            uk: [
                'Вивчення анатомії та фізіології',
                'Клініко-фізіологічне обґрунтування масажних прийомів',
                'Класичний масаж',
                'Спортивний масаж',
                'Лімфодренажний масаж',
                'Дитячий масаж',
                'Апаратні та допоміжні методи',
                'Розвиток тактильності та стереогнозії (рівень II)',
                'Практика',
                'Екзамен (теорія та практика)',
            ],
            en: [
                'Anatomy and physiology',
                'Clinical and physiological rationale for massage techniques',
                'Classic massage',
                'Sports massage',
                'Lymphatic drainage massage',
                "Children's massage",
                'Hardware and supplementary methods',
                'Developing tactile sensitivity and stereognosis (level II)',
                'Practice',
                'Exam (theory and practice)',
            ],
        },
        prices: {
            uk: { old: 4980, current: 2490 },
            en: { old: 1150, current: 575 },
        },
        styles: {
            textColor: '#000000',
            oldPriceColor: '#5521F1',
            newPriceColor: '#5521F1',
            buttonBgColor: '#5521F1',
            buttonTextColor: '#FFFFFF',
            backgroundColor: '#F4F5FD',
            pointColor: '#5521F1',
            dividerColor: '#000000',
        },
    },
    {
        stage: { uk: 'ІІІ ступінь:', en: 'Level III:' },
        type: { uk: 'Майстер (експертний рівень)', en: 'Master (expert level)' },
        servicesList: {
            uk: [
                'Включає всі попередні ступені',
                'Косметичний масаж',
                'Міофасціальні ланцюги',
                'Основи маркетингу масажного бізнесу',
                'Розвиток тактильності та стереогнозії (рівень III)',
                'Практика',
                'Екзамен (теорія, практика та перший платний клієнт)',
            ],
            en: [
                'Includes all previous levels',
                'Cosmetic massage',
                'Myofascial chains',
                'Marketing basics for a massage business',
                'Developing tactile sensitivity and stereognosis (level III)',
                'Practice',
                'Exam (theory, practice and your first paying client)',
            ],
        },
        prices: {
            uk: { old: 6980, current: 3490 },
            en: { old: 1600, current: 800 },
        },
        styles: {
            textColor: '#FFFFFF',
            oldPriceColor: '#BCBCBC',
            newPriceColor: '#BCBCBC',
            buttonBgColor: '#FFFFFF',
            buttonTextColor: '#000000',
            backgroundColor: '#1F1F1F',
            pointColor: '#5521F1',
            dividerColor: '#FFFFFF',
        },
    },
];

export const parentsCoursePrices: Localized<IPrice> = {
    uk: { old: 580, current: 290 },
    en: { old: 130, current: 65 },
};
