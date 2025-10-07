<template>
    <div>
        <h1
            data-aos="fade-up-right"
            class="text-[48px] font-[500] text-center sm:text-start"
        >
            Про курс
        </h1>

        <div class="flex items-center gap-[100px]">
            <!-- Course image -->
            <img
                data-aos="flip-right"
                src="/images/course_image.webp"
                alt="touch&skill-about-course-image"
                class="flex-shrink-0 image"
            />

            <!-- Right side -->
            <div
                class="max-w-[650px] w-full flex flex-col gap-6 sm:gap-[50px] sm:pt-0 pt-5"
            >
                <p data-aos="fade-left">
                    Курси Touch&Skill - це про максимально професійний підхід у
                    процесі навчання та відповідальність перед кожним пацієнтом,
                    який потрапить до рук нашого випускника. Ми не просто
                    навчаємо технікам масажу - ми формуємо професіоналів, які
                    легко знаходять своїх перших клієнтів і швидко виходять на
                    стабільний дохід
                </p>

                <div class="flex flex-col gap-7">
                    <h1
                        data-aos="fade-right"
                        class="text-[#7B83B3] text-[18px] sm:text-2xl font-[700]"
                    >
                        Чому саме курс Touch&Skill?
                    </h1>

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
                                src="/images/done.svg"
                                alt="touch&skill-done-course-image"
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
