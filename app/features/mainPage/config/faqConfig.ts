import type { Localized } from '~/types/locale';

export interface IFaqItem {
    number: number;
    value: string;
    title: Localized<string>;
    content: Localized<string>;
}

// Also the source for the FAQPage structured data, so the page and the
// JSON-LD can't drift apart
export const faqItems: IFaqItem[] = [
    {
        number: 1,
        value: 'item-1',
        title: {
            uk: 'Чи потрібен попередній досвід для навчання на курсі?',
            en: 'Do I need any prior experience to take the course?',
        },
        content: {
            uk: 'Ні, курс підходить як для початківців, так і для тих, хто вже має базові знання або досвід.',
            en: 'No, the course suits complete beginners as well as those who already have some basic knowledge or experience.',
        },
    },
    {
        number: 2,
        value: 'item-2',
        title: {
            uk: 'Як забронювати місце на курсі?',
            en: 'How do I book a place on the course?',
        },
        content: {
            uk: 'Щоб забронювати місце, зв’яжіться з нами через телефон або напишіть у телеграм (контакти на сайті).',
            en: 'To book a place, call us or message us on Telegram (contacts are on the website).',
        },
    },
    {
        number: 3,
        value: 'item-3',
        title: {
            uk: 'Який розклад занять?',
            en: 'What is the class schedule?',
        },
        content: {
            uk: 'Точний розклад складається окремо до кожної групи або індивідуального заняття.',
            en: 'The exact schedule is set separately for each group or one-to-one session.',
        },
    },
    {
        number: 4,
        value: 'item-4',
        title: {
            uk: 'Чи є можливість оплати за навчання частинами?',
            en: 'Can I pay for the course in installments?',
        },
        content: {
            uk: 'Так, ми пропонуємо можливість розбити оплату курсу на частини.',
            en: 'Yes, you can split the course payment into installments.',
        },
    },
    {
        number: 5,
        value: 'item-5',
        title: {
            uk: 'Чи надається підтримка після завершення курсу?',
            en: 'Is there any support after the course?',
        },
        content: {
            uk: 'Так, ми забезпечуємо онлайн підтримку після закінчення навчання. Ви завжди можете звернутися за консультаціями.',
            en: 'Yes, we provide online support after the course ends. You can always reach out to us for advice.',
        },
    },
    {
        number: 6,
        value: 'item-6',
        title: {
            uk: 'Чи є знижки на курси?',
            en: 'Are there any discounts on the courses?',
        },
        content: {
            uk: 'Так, при переході на іншу ступінь навчання враховується знижка 15%.',
            en: 'Yes, a 15% discount applies when you move on to the next level of training.',
        },
    },
];
