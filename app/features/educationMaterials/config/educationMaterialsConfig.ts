import type { AppLocale } from '~/types/locale';

// Text supports "**bold**" fragments (rendered by RichText)
export type MaterialContentBlock =
    | { type: 'paragraph'; text: string; emphasis?: boolean }
    | { type: 'heading'; text: string; uppercase?: boolean }
    | { type: 'bullets'; items: string[]; columns?: 1 | 2 }
    | { type: 'checks'; items: string[] }
    | { type: 'lines'; items: string[] };

export interface IEducationMaterial {
    id: string;
    name: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
    content: MaterialContentBlock[];
}

const clientIntakeGuideUk: IEducationMaterial = {
    id: 'client-intake-guide',
    name: 'Посібник з опитування клієнта — 20 кроків, щоб зрозуміти свого клієнта',
    image: '/images/education_materials/image_one_ukr.webp',
    imageWidth: 667,
    imageHeight: 1000,
    imageAlt:
        'Обкладинка посібника «20 кроків, щоб зрозуміти свого клієнта» від Touch&Skill',
    content: [
        {
            type: 'paragraph',
            text: 'Посібник з опитування клієнта — **20 кроків**, щоб зрозуміти свого клієнта',
        },
        {
            type: 'paragraph',
            text: 'Перестаньте здогадуватися, що запитати клієнта перед масажем. Побудуйте чіткий і структурований процес опитування ще до початку сеансу',
        },
        {
            type: 'paragraph',
            text: 'Цей **20-кроковий** посібник з опитування клієнта допоможе масажисту ставити правильні запитання, вибудовувати кращий контакт із клієнтом, розуміти його індивідуальні потреби та приймати більш обґрунтовані професійні рішення до і під час сеансу масажу',
        },
        {
            type: 'paragraph',
            text: 'Це практичний професійний ресурс, який виходить далеко за межі звичайної анкети клієнта. Посібник дає структурований підхід до збору та оцінювання інформації — від основної скарги та характеру симптомів до анамнезу, протипоказань і застережень, побажань щодо тиску, реакції на біль, інформованої згоди та комунікації під час сеансу',
        },
        { type: 'heading', text: 'Що всередині:', uppercase: true },
        {
            type: 'bullets',
            items: [
                '20 практичних кроків для структурованого опитування клієнта',
                'Чіткі пояснення, що запитувати та навіщо',
                'Реальні приклади та практичні поради',
                'Виявлення тривожних ознак і скринінг протипоказань',
                'Рекомендації щодо реакції на скарги клієнта про біль',
                'Побажання щодо тиску, чутливість і попередній досвід масажу',
                'Інформована згода та професійна комунікація',
                'Практичне прийняття рішень: продовжити, адаптувати, уникнути певної зони, відкласти або рекомендувати звернення до відповідного фахівця',
                'Структурований підхід до розуміння очікувань і потреб клієнта',
            ],
        },
        { type: 'heading', text: 'Для кого цей посібник?', uppercase: true },
        {
            type: 'checks',
            items: [
                'Масажистів',
                'Студентів масажної терапії',
                'Початківців, які формують професійний підхід до роботи',
                'Досвідчених масажистів, які хочуть зробити процес опитування більш структурованим',
                'Викладачів навчальних програм з масажу',
            ],
        },
    ],
};

const manualEn: IEducationMaterial = {
    id: 'manual-for-massage-therapists',
    name: 'Manual for Massage Therapists',
    image: '/images/education_materials/image_one_eng.webp',
    imageWidth: 1000,
    imageHeight: 1000,
    imageAlt: 'Manual for Massage Therapists - a practical guide, 120+ pages',
    content: [
        {
            type: 'paragraph',
            text: 'A practical massage therapy textbook covering anatomy, physiology, and the effects of massage techniques — clear, concise, and easy to follow. Designed with structured content and focused labels to help massage therapists and students quickly understand, memorize, and apply the knowledge in real-world practice',
        },
    ],
};

const terminologyEn: IEducationMaterial = {
    id: 'massage-therapist-terminology',
    name: 'Massage Therapist Terminology',
    image: '/images/education_materials/image_two_eng.webp',
    imageWidth: 1000,
    imageHeight: 947,
    imageAlt:
        'Massage Therapist Terminology - professional quick-reference guide with 226 unique terms',
    content: [
        {
            type: 'paragraph',
            text: 'Build your professional vocabulary and find essential massage therapy terms quickly with this practical Massage Therapist Terminology Quick Reference Guide',
        },
        {
            type: 'paragraph',
            text: 'Designed for massage therapists, massage therapy students, instructors, and bodywork professionals, this guide brings together 226 essential professional terms with clear, concise clinical definitions',
        },
        { type: 'heading', text: "What's inside", uppercase: true },
        {
            type: 'paragraph',
            text: '13 organized sections covering:',
            emphasis: true,
        },
        {
            type: 'bullets',
            columns: 2,
            items: [
                'General Medical Terminology',
                'Anatomical Orientation & Position',
                'Muscles, Fascia & Connective Tissues',
                'Movement & Kinesiology',
                'Pain & Sensory Symptoms',
                'Nervous System',
                'Circulatory & Lymphatic Systems',
                'Skin & Superficial Tissues',
                'Massage & Manual Practice',
                'Assessment & Clinical Examination',
                'Injuries & Pathological Conditions',
                'Safety & Systemic Symptoms',
                'Additional Professional Terms',
            ],
        },
    ],
};

const clientIntakeGuideEn: IEducationMaterial = {
    id: 'client-intake-guide',
    name: 'Massage Client Intake Guide — 20 Steps to Understand Your Client',
    image: '/images/education_materials/image_three_eng.webp',
    imageWidth: 667,
    imageHeight: 1000,
    imageAlt:
        '20 Steps to Understand Your Client - Touch&Skill client intake guide cover',
    content: [
        {
            type: 'paragraph',
            text: 'Massage Client Intake Guide — **20 Steps** to Understand Your Client',
        },
        {
            type: 'paragraph',
            text: 'Stop guessing what to ask your massage clients. Start every session with a clear, structured intake process',
        },
        {
            type: 'paragraph',
            text: 'This **20-step** Massage Client Intake Guide helps massage therapists ask better questions, build stronger client connections, understand individual needs, and make more informed professional decisions before and during the massage session',
        },
        {
            type: 'paragraph',
            text: 'Created as a practical professional resource, this guide goes far beyond a basic client intake form. It provides a structured approach to understanding the client, from their main complaint and symptom behavior to medical history, contraindications, pressure preferences, pain communication, informed consent, and communication throughout the session',
        },
        { type: 'heading', text: 'Inside the guide:', uppercase: true },
        {
            type: 'bullets',
            items: [
                '20 practical steps for a structured client intake',
                'Clear explanations of what to ask and why',
                'Real-world examples and practical tips',
                'Red flags and contraindication screening',
                'Guidance for responding when a client reports pain',
                'Pressure, sensitivity & previous massage experience',
                'Informed consent & professional communication',
                'Practical decision-making: proceed, modify, avoid, postpone or refer',
                'A structured approach to understanding client expectations and needs',
            ],
        },
        { type: 'heading', text: 'Who is it for?', uppercase: true },
        {
            type: 'checks',
            items: [
                'Massage therapists',
                'Massage therapy students',
                'New practitioners building their professional routine',
                'Experienced therapists who want a more structured intake process',
                'Massage educators and training programs',
            ],
        },
    ],
};

const unexpectedSituationsEn: IEducationMaterial = {
    id: 'unexpected-client-situations',
    name: '10 Unexpected Client Situations and How to Handle Them',
    image: '/images/education_materials/image_four_eng.webp',
    imageWidth: 1000,
    imageHeight: 1000,
    imageAlt:
        '10 Unexpected Client Situations and How to Handle Them - guide cover',
    content: [
        {
            type: 'paragraph',
            text: '10 Unexpected Client Situations and How to Handle Them',
        },
        {
            type: 'paragraph',
            text: 'A practical guide for massage therapists',
        },
        {
            type: 'paragraph',
            text: 'Not every client situation goes according to plan. Some moments are awkward, unexpected, or difficult to handle professionally — especially when you have to react on the spot.',
        },
        {
            type: 'paragraph',
            text: 'This guide gives you 10 real-life situations that massage therapists may encounter and shows you how to respond with confidence, professionalism, and clear boundaries.',
        },
        { type: 'heading', text: 'Inside you’ll find:' },
        {
            type: 'lines',
            items: [
                '10 realistic client situations',
                'Practical solutions for each situation',
                'Ready-to-use phrases for professional communication',
                'Clear Do / Don’t guidance',
                'Key takeaways you can apply immediately',
            ],
        },
        {
            type: 'paragraph',
            text: 'From late arrivals and phone use to inappropriate requests, complaints, and unexpected changes during a session — know what to say, what to do, and how to stay professional.',
        },
        {
            type: 'paragraph',
            text: 'Perfect for massage therapists who want to communicate better, handle difficult moments confidently, and provide a more professional client experience',
        },
    ],
};

// The two languages intentionally offer different catalogues
export const educationMaterialsByLocale: Record<AppLocale, IEducationMaterial[]> =
    {
        uk: [clientIntakeGuideUk],
        en: [manualEn, terminologyEn, clientIntakeGuideEn, unexpectedSituationsEn],
    };
