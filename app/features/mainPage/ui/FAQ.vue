<template>
    <div>
        <div
            class="flex items-center justify-center sm:justify-between w-full text-center sm:text-start"
        >
            <h2
                data-aos="fade-up-right"
                class="text-[32px] sm:text-[48px] font-[500] text-center sm:text-start"
            >
                Часті запитання
            </h2>

            <p class="text-[#7B83B3] text-3xl hidden sm:block">FAQ</p>
        </div>

        <div
            class="mt-[20px] sm:mt-[50px] flex lg:gap-[80px] flex-col lg:flex-row"
        >
            <Accordion
                type="single"
                class="w-full border-t sm:border-y border-black text-black"
                collapsible
                v-for="(accordion, index) in [accordionItems1, accordionItems2]"
                :class="{ 'border-b': index === 1 }"
            >
                <AccordionItem
                    :data-aos="index === 0 ? 'fade-right' : 'fade-left'"
                    v-for="(item, index) in accordion"
                    :key="item.value"
                    :value="item.value"
                    class="border-b border-black group"
                >
                    <AccordionTrigger
                        class="hover:no-underline cursor-pointer py-3 sm:py-6 px-0 flex items-center"
                    >
                        <template #icon
                            ><div
                                class="plus-button relative w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] bg-transparent rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#4914e7] group-hover:shadow-[0_0_20px_rgba(73,20,231,0.6)]"
                            >
                                <div
                                    class="absolute w-4 sm:w-6 h-[2px] bg-black group-hover:bg-white transition-colors duration-300"
                                ></div>
                                <div
                                    class="absolute w-4 sm:w-6 h-[2px] bg-black group-hover:bg-white rotate-90 transition-colors duration-300"
                                ></div></div
                        ></template>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex items-center gap-7">
                                <span
                                    class="text-[8px] sm:text-xl font-semibold"
                                    >0{{ item.number }}</span
                                >
                                <span
                                    class="text-[12px] sm:text-2xl text-left font-semibold flex-1"
                                >
                                    {{ item.title }}
                                </span>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent
                        class="pb-6 px-0 text-black text-sm sm:text-xl"
                    >
                        {{ item.content }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion';

const accordionItems1 = [
    {
        number: 1,
        value: 'item-1',
        title: 'Чи потрібен попередній досвід для навчання на курсі?',
        content:
            'Ні, курс розрахований на людей з будь-яким рівнем підготовки. Ми починаємо з базової анатомії та основних технік масажу, поступово переходячи до більш складних методик. Програма побудована так, щоб кожен студент міг освоїти матеріал у комфортному темпі. Навіть якщо ви ніколи раніше не займалися масажем, наші викладачі допоможуть вам здобути всі необхідні навички.',
    },
    {
        number: 2,
        value: 'item-2',
        title: 'Як забронювати місце на курсі?',
        content:
            "Для бронювання місця зв'яжіться з нами через Telegram (@touch_skill) або зателефонуйте за номером, вказаним на сайті. Наш менеджер проконсультує вас щодо доступних груп, розкладу та умов навчання. Після підтвердження ви отримаєте всю необхідну інформацію для початку занять. Кількість місць у групах обмежена, тому радимо бронювати заздалегідь.",
    },
    {
        number: 3,
        value: 'item-3',
        title: 'Який розклад занять?',
        content:
            'Розклад занять формується індивідуально для кожної групи з урахуванням побажань студентів. Зазвичай заняття проходять 2-3 рази на тиждень по 3-4 години. Ми пропонуємо як денні, так і вечірні групи, щоб кожен міг знайти зручний час для навчання. Точний графік ви отримаєте при реєстрації на курс.',
    },
    {
        number: 4,
        value: 'item-4',
        title: 'Скільки часу займає повний курс навчання?',
        content:
            'Тривалість курсу залежить від обраного рівня. Базовий курс триває від 2 до 3 місяців, середній рівень - 3-4 місяці, професійний рівень - від 4 до 6 місяців. Загальна кількість академічних годин включає як теоретичні заняття, так і практичні вправи на реальних клієнтах. Після успішного завершення кожного рівня ви отримуєте сертифікат.',
    },
    {
        number: 5,
        value: 'item-5',
        title: 'Які техніки масажу викладаються на курсі?',
        content:
            'На наших курсах ви вивчите широкий спектр технік: класичний масаж, спортивний масаж, лімфодренажний масаж, масаж обличчя, антицелюлітний масаж, масаж спини та шийно-комірцевої зони. Також приділяємо увагу роботі з різними групами клієнтів, включаючи вагітних жінок та дітей. Кожна техніка відпрацьовується на практиці під контролем досвідчених викладачів.',
    },
];

const accordionItems2 = [
    {
        number: 6,
        value: 'item-6',
        title: 'Чи є можливість оплати за навчання частинами?',
        content:
            'Так, ми розуміємо, що повна оплата може бути значним навантаженням, тому пропонуємо гнучкі умови оплати. Ви можете розбити вартість курсу на 2-3 частини з внесенням першого платежу при реєстрації. Також можлива оплата по місяцях протягом навчання. Детальні умови розстрочки обговорюються індивідуально з кожним студентом при записі на курс.',
    },
    {
        number: 7,
        value: 'item-7',
        title: 'Чи надається підтримка після завершення курсу?',
        content:
            "Так, ми підтримуємо зв'язок з нашими випускниками і після завершення навчання. Ви зможете звертатися до викладачів за консультаціями, отримувати поради щодо роботи з клієнтами та розвитку практики. Також ми організовуємо майстер-класи для випускників, де можна оновити знання та вивчити нові техніки. У нас є закрита група в Telegram для випускників, де ви можете ділитися досвідом та отримувати підтримку від колег.",
    },
    {
        number: 8,
        value: 'item-8',
        title: 'Чи є знижки на курси?',
        content:
            'Так, ми пропонуємо декілька варіантів знижок. Студенти, які успішно завершили попередній рівень, отримують знижку 15% на наступний курс. Також діють знижки при ранньому бронюванні місця (за 1-2 місяці до початку курсу). Для груп від 3 осіб передбачені спеціальні умови. Слідкуйте за нашими акціями в соціальних мережах - періодично проводимо спеціальні пропозиції для нових студентів.',
    },
    {
        number: 9,
        value: 'item-9',
        title: 'Чи отримаю я сертифікат після закінчення курсу?',
        content:
            'Після успішного завершення кожного рівня навчання та здачі фінального екзамену ви отримуєте офіційний сертифікат від Touch&Skill. Цей сертифікат підтверджує вашу кваліфікацію та може бути використаний при працевлаштуванні або відкритті власної практики. Сертифікат містить інформацію про пройдені техніки, кількість годин навчання та ваш рівень підготовки.',
    },
    {
        number: 10,
        value: 'item-10',
        title: 'Чи допоможете ви з працевлаштуванням після курсу?',
        content:
            'Ми активно підтримуємо наших випускників у пошуку роботи. Маємо партнерські відносини з SPA-салонами, медичними центрами та фітнес-клубами у Варшаві, які регулярно шукають кваліфікованих масажистів. Найкращі студенти отримують рекомендації від наших викладачів. Також під час навчання ви отримаєте перших клієнтів для практики, що допоможе сформувати початкове портфоліо та отримати відгуки.',
    },
];
</script>

<style scoped>
/* Додаткові стилі для кнопки акордеону */
:deep(.accordion-trigger) {
    font-weight: 500;
}

/* Стилізація іконки (плюс/мінус) */
:deep([data-state='open'] svg) {
    transform: rotate(180deg);
}

/* Анімація для іконки */
:deep(svg) {
    transition: transform 0.3s ease;
}

/* Ховаємо стандартну іконку */
:deep(button[data-radix-collection-item] > svg) {
    display: none;
}

/* Стан коли акордеон відкритий */
:deep([data-state='open'] .plus-button) {
    transform: rotate(45deg);
    background: #4914e7;
    box-shadow: 0 0 20px rgba(73, 20, 231, 0.6);
}

:deep([data-state='open'] .plus-button > div) {
    background: white;
}
</style>
