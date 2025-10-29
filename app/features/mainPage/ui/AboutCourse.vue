<template>
    <div>
        <h2
            data-aos="fade-up-right"
            class="text-[48px] font-[500] text-center sm:text-start"
        >
            Про курс
        </h2>

        <div class="flex items-center gap-[100px]">
            <!-- Course image -->
            <img
                data-aos="flip-right"
                src="/images/general/course_image.webp"
                alt="Touch Skill-about-course-image"
                class="flex-shrink-0 image"
            />

            <!-- Right side -->
            <div
                class="max-w-[650px] w-full flex flex-col gap-6 sm:gap-[50px] sm:pt-0 pt-5"
            >
                <p data-aos="fade-left">
                    Курси масажу у Варшаві від школи Touch&Skill — це професійне
                    навчання масажу з акцентом на практику та результат. Наші
                    викладачі мають великий досвід і допомагають кожному
                    студенту опанувати сучасні техніки масажу на високому рівні.
                    Ми не просто навчаємо — ми готуємо справжніх
                    масажистів-професіоналів, які впевнено працюють з клієнтами
                    та швидко виходять на стабільний дохід. Обираючи
                    <em>курси масажу у Варшаві від Touch&Skill</em>, ви
                    отримуєте якісну освіту, практику з першого заняття та
                    підтримку у старті кар’єри.
                </p>

                <div class="flex flex-col gap-7">
                    <h2
                        data-aos="fade-right"
                        class="text-[#7B83B3] text-[18px] sm:text-2xl font-[700]"
                    >
                        Чому саме курс Touch&Skill?
                    </h2>

                    <div class="flex flex-col gap-3 sm:gap-5">
                        <div
                            v-for="(item, index) in reasonsList"
                            :key="item.label"
                            class="flex items-center gap-[10px]"
                            :data-aos="
                                index % 2 === 0 ? 'fade-left' : 'fade-right'
                            "
                        >
                            <img
                                src="/images/icons/done.svg"
                                alt="Touch Skill-done-course-image"
                            />

                            <p>{{ item.label }}</p>
                        </div>
                    </div>
                </div>

                <SplitButton
                    data-aos="zoom-in"
                    label="Обрати програму"
                    class="sm:max-w-[298px] w-full"
                    @click="scrollToElement('courseProgram')"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const reasonsList = [
    {
        label: 'Унікальна методика розвитку мануальних здібностей',
    },
    {
        label: 'Інтерактивні вправи для вивчення теорії',
    },
    {
        label: 'Малогрупові та індивідуальні заняття',
    },
    {
        label: '3D анатомічний атлас',
    },
    {
        label: 'Практика з перших занять',
    },
    {
        label: 'Три ступені навчання',
    },
    {
        label: 'Підтримка після курсу',
    },
];
</script>

<style scoped>
@media screen and (max-width: 1000px) {
    .image {
        display: none;
    }
}
</style>
