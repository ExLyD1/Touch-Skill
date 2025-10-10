<template>
    <div
        class="yoursTutor flex items-center justify-between w-full gap-5 relative"
    >
        <!-- Left Side Text Information -->
        <div
            class="asideText flex flex-col gap-[5px] sm:gap-[30px] lg:max-w-[705px] w-full"
        >
            <h1
                data-aos="fade-up-right"
                class="text-[32px] sm:text-[48px] font-[500] text-center sm:text-start"
            >
                Ваш викладач
            </h1>

            <img
                data-aos="flip-right"
                class="tutorImageDesktop block lg:hidden flex-shrink-0 max-h-[412px] max-w-[312px] m-auto"
                src="/images/general/tutor_image.webp"
                alt="Touch Skill-tutor-image"
            />

            <p data-aos="zoom-in" class="text-sm sm:text-lg px-2 sm:px-0">
                Шулежко Ілля Олександрович - реабілітолог-кінезіотерапевт із
                12-річним досвідом роботи та сотнями задоволених пацієнтів.
                Розпочав свою практику у 2013 році, одразу після закінчення вишу
                за фахом "фізична реабілітація". З 2016 року працює в
                Міжнародному реабілітаційному центрі у м.Варшава. За роки праці
                впровадив власні авторські методи та підходи у реабілітації
                дітей, які використовуються на сьогодні. У 2025 випустив власний
                підручник з масажу, який успішно використовується серед фахівців
                з масажу та власних учнів
            </p>

            <div class="flex items-center mt-4 gap-2 sm:gap-4">
                <LabelText data-aos="fade-right">
                    <a
                        href="https://t.me/touch_skill"
                        target="_blank"
                        class="flex items-center gap-1"
                    >
                        <img
                            src="/images/icons/telegram_mini.svg"
                            alt="Touch Skill-telegram-mini-image"
                            class="w-4 sm:w-auto h-4 sm:h-auto"
                        />

                        <p class="sm:text-[20px] text-xs font-bold">
                            @touch_skill
                        </p>
                    </a>
                </LabelText>
                <LabelText data-aos="fade-left">
                    <a
                        href="https://www.instagram.com/massage_teacher_eu?igsh=MTUxYXlkN2NmcnQwMw%3D%3D&utm_source=qr"
                        target="_blank"
                        class="flex items-center gap-1"
                    >
                        <img
                            src="/images/icons/instagram_mini.svg"
                            alt="Touch Skill-telegram-mini-image"
                            class="w-4 sm:w-auto h-4 sm:h-auto"
                        />

                        <p class="sm:text-[20px] text-xs font-bold">
                            @massage_teacher_eu
                        </p></a
                    >
                </LabelText>
            </div>
        </div>

        <!-- Right Side Image -->
        <img
            data-aos="flip-right"
            class="tutorImageDesktop hidden lg:block flex-shrink-0 sm:scale-75 xl:scale-100"
            src="/images/general/tutor_image.webp"
            alt="Touch Skill-tutor-image"
        />
    </div>
</template>

<script setup lang="ts">
import LabelText from '~/components/LabelText.vue';
</script>

<style scoped>
.baby-image {
    border-radius: 20px;
    mask-image: radial-gradient(
        ellipse 60% 50% at center,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0.8) 70%,
        rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: radial-gradient(
        ellipse 60% 50% at center,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0.8) 70%,
        rgba(0, 0, 0, 0) 100%
    );
}

@media screen and (max-width: 1000px) {
    .yoursTutor {
        flex-direction: column;
    }
}

@media screen and (max-width: 615px) {
    .asideText {
        max-width: 100%;
    }
}
</style>
