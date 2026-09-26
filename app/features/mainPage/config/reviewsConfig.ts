import type { Localized } from '~/types/locale';

export interface IReview {
    name: Localized<string>;
    image: string;
    date: string;
    rating: number;
    // Line breaks ("\n") are preserved when rendered
    text: Localized<string>;
}

export const reviewsList: IReview[] = [
    {
        name: { uk: 'Анна Мельник', en: 'Anna Melnyk' },
        image: '/images/reviews/person8.png',
        date: '25.08.2026',
        rating: 5,
        text: {
            uk: 'Дуже задоволена навчанням.\nВсе пояснюють буквально з нуля, тому навіть без попереднього досвіду було комфортно навчатися',
            en: 'Very happy with the training.\nEverything is explained literally from scratch, so even without any prior experience it was comfortable to learn',
        },
    },
    {
        name: { uk: 'Дмитро Поліщук', en: 'Dmytro Polishchuk' },
        image: '/images/reviews/person9.png',
        date: '01.09.2026',
        rating: 5,
        text: {
            uk: 'Сподобався формат навчання та подача матеріалу.\nВсе структуровано, зрозуміло і без перевантаження.\nПісля завершення курсу залишилося відчуття, що отримав не просто теорію, а навички, які можна використовувати на практиці',
            en: 'I liked the training format and the way the material is presented.\nEverything is structured, clear and not overwhelming.\nAfter the course I felt I had gained not just theory, but skills I can use in practice',
        },
    },
    {
        name: { uk: 'Олена Савчук', en: 'Olena Savchuk' },
        image: '/images/reviews/person10.png',
        date: '24.09.2026',
        rating: 5,
        text: {
            uk: 'Ілля, щиро дякую за курс!\nСпочатку переживала, що буде складно, але все виявилося дуже зрозуміло',
            en: 'Illia, thank you so much for the course!\nAt first I was worried it would be difficult, but everything turned out to be very clear',
        },
    },
    {
        name: { uk: 'Марина Шевченко', en: 'Maryna Shevchenko' },
        image: '/images/reviews/person1.png',
        date: '15.01.2025',
        rating: 5,
        text: {
            uk: 'Сподобалося, що на курсах не тільки показували техніки, а й розповідали, як правильно спілкуватися з клієнтами, які є протипоказання. Це додає впевненості, що працюєш безпечно та професійно.',
            en: 'I liked that the course didn’t just show techniques but also explained how to communicate with clients properly and what the contraindications are. It gives you confidence that you work safely and professionally.',
        },
    },
    {
        name: { uk: 'Марія Тимошенко', en: 'Mariia Tymoshenko' },
        image: '/images/reviews/person2.png',
        date: '24.01.2025',
        rating: 5,
        text: {
            uk: 'Я читала кілька книжок про масаж, але цей посібник найзрозуміліший. Немає зайвої теорії, тільки все по суті. Вже кілька разів користувалася схемами з книги-працюють чудово.',
            en: 'I’ve read several books on massage, but this manual is the clearest. No unnecessary theory, just the essentials. I’ve already used the diagrams from the book several times - they work great.',
        },
    },
    {
        name: { uk: 'Оксана Кравченко', en: 'Oksana Kravchenko' },
        image: '/images/reviews/person3.png',
        date: '10.02.2025',
        rating: 5,
        text: {
            uk: 'Довго шукала курси, де можна навчитися масажу для себе та родини. Сподобалося, що тут усе зрозуміло, без складних термінів. Викладачі терплячі, пояснювали по кілька разів, якщо потрібно.',
            en: 'I spent a long time looking for a course where I could learn massage for myself and my family. I liked that everything here is clear, without complicated terms. The tutors are patient and explained things several times when needed.',
        },
    },
    {
        name: { uk: 'Ірина Левченко', en: 'Iryna Levchenko' },
        image: '/images/reviews/person4.png',
        date: '13.02.2025',
        rating: 5,
        text: {
            uk: 'Це справжня знахідка для початківців. Книга структурована, є покрокові інструкції та поради щодо безпеки. Тепер почуваюся впевненіше, коли роблю масаж рідним.',
            en: 'A real find for beginners. The book is well structured, with step-by-step instructions and safety tips. Now I feel more confident when I give massages to my loved ones.',
        },
    },
    {
        name: { uk: 'Катерина Мазур', en: 'Kateryna Mazur' },
        image: '/images/reviews/person5.png',
        date: '15.03.2025',
        rating: 5,
        text: {
            uk: 'Я купила посібник, щоб поглибити знання після курсів. Дуже сподобалося, що є розділи з анатомією — тепер краще розумію, як працюють м’язи. Чудове доповнення до навчання!',
            en: 'I bought the manual to deepen my knowledge after the course. I really liked the anatomy sections - now I understand much better how muscles work. A great addition to the training!',
        },
    },
    {
        name: { uk: 'Наталя Романко', en: 'Natalia Romanko' },
        image: '/images/reviews/person6.png',
        date: '28.03.2025',
        rating: 5,
        text: {
            uk: 'Прийшла на курси, бо давно цікавилася масажем, але не знала, з чого почати. Атмосфера дуже дружня, викладач пояснює просто і зрозуміло.Дякую)',
            en: 'I came to the course because I had long been interested in massage but didn’t know where to start. The atmosphere is very friendly, and the tutor explains things simply and clearly. Thank you)',
        },
    },
    {
        name: { uk: 'Андрій Мельник', en: 'Andrii Melnyk' },
        image: '/images/reviews/person7.png',
        date: '01.04.2025',
        rating: 5,
        text: {
            uk: 'Дякую викладачу за професіоналізм. Спочатку прийшов просто заради цікавості, а зараз серйозно думаю відкрити свій кабінет. Дуже практичні знання, відчувається, що викладає людина з реальним досвідом роботи.',
            en: 'Thanks to the tutor for his professionalism. At first I came just out of curiosity, and now I’m seriously thinking about opening my own practice. Very practical knowledge - you can tell it’s taught by someone with real work experience.',
        },
    },
];
