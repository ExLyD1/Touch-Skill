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

export interface IPackage {
    stage: string;
    type: string;
    servicesList: string[];
    oldPrice: number;
    currentPrice: number;
    styles: IPackageStyles;
}

export const packagesList: IPackage[] = [
    {
        stage: 'І ступінь:',
        type: 'Класік (базовий курс)',
        servicesList: [
            'Вивчення анатомії та фізіології',
            'Клініко-фізіологічне обґрунтування масажних прийомів',
            'Прийоми класичного масажу',
            'Розвиток тактильності та стереогнозії (рівень I)',
            'Практика',
            'Екзамен (теорія та практика)',
        ],
        oldPrice: 2980,
        currentPrice: 1490,
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
        stage: 'ІІ ступінь:',
        type: 'Класік+ (поглиблений)',
        servicesList: [
            'Вивчення анатомії та фізіології',
            'Клініко-фізіологічне обґрунтуваннямасажних прийомів',
            'Класичний масаж',
            'Спортивний масаж',
            'Лімфодренажний масаж',
            'Дитячий масаж',
            'Апаратні та допоміжні методи',
            'Розвиток тактильності та стереогнозії (рівень II)',
            'Практика',
            'Екзамен (теорія та практика)',
        ],
        oldPrice: 4980,
        currentPrice: 2490,
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
        stage: 'ІІІ ступінь:',
        type: 'Майстер (експертний рівень)',
        servicesList: [
            'Включає всі попередні ступені',
            'Косметичний масаж',
            'Міофасціальні ланцюги',
            'Основи маркетингу масажного бізнесу',
            'Розвиток тактильності та  стереогнозії (рівень III)',
            'Практика',
            'Екзамен (теорія, практика та перший платний клієнт)',
        ],
        oldPrice: 6980,
        currentPrice: 3490,
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
