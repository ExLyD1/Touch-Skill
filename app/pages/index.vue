<template>
    <div class="2xl:max-w-[80%] max-w-[100%] w-full m-auto relative">
        <!-- Initial Introduction -->
        <div
            id="initial"
            class="initial_holder scroll-target px-[15px] flex m-auto mt-[50px] relative"
        >
            <!-- Left side -->
            <div
                class="mt-[20px] sm:mt-[30px] flex flex-col gap-[15px] sm:gap-[30px] z-0"
            >
                <h1
                    class="font-[600] text-[32px]/[34px] sm:text-[64px]/16 xl:w-[702px] w-full slide-left delay-[200ms]"
                    style="animation-delay: 0s"
                >
                    Курси професійного масажу у Варшаві - Touch&Skill
                </h1>

                <p
                    class="text-[14px] sm:text-[24px] slide-left delay-[400ms]"
                    style="animation-delay: 0.2s"
                >
                    Унікальна методика навчання <br />
                    Тут не про "за 2 дні з нуля"
                </p>

                <div class="flex flex-col gap-[10px]">
                    <LabelText
                        class="slide-left delay-[0.6s]"
                        style="animation-delay: 0.4s"
                        ><img
                            src="/images/icons/ready.svg"
                            alt="tousch&skill-ready-image"
                        />
                        <p class="text-lg sm:text-xl font-[700] pl-2">
                            Випускаються тільки профі
                        </p></LabelText
                    >
                    <LabelText
                        class="slide-left delay-[0.8s]"
                        style="animation-delay: 0.6s"
                        ><img
                            src="/images/icons/ready.svg"
                            alt="tousch&skill-ready-image"
                        />
                        <p class="text-lg sm:text-xl font-[700] pl-2">
                            Перші клієнти вже на курсі
                        </p></LabelText
                    >
                </div>

                <a
                    href="https://t.me/touch_skill"
                    aria-label="Придбати електронну книгу про техніки масажу у Telegram від Touch&Skill"
                    class="w-fit"
                >
                    <SplitButton
                        style="animation-delay: 0.8s"
                        label="Записатися на курс"
                        class="sm:mt-0 hidden sm:flex max-w-[300px] slide-left delay-[1s]"
                    />
                </a>
            </div>

            <!-- Right side Logo -->
            <div
                class="logo_main z-10 ml-[0px] sm:ml-[-50px] 2xl:ml-[50px] w-fit min-w-0 scale-50 xl:scale-75 2xl:scale-100"
            >
                <!-- Hands -->
                <img
                    src="/images/general/logo_hands.png"
                    alt="tousch&skill-logo-hands"
                    class="appear-animation"
                />

                <div class="logo-content">
                    <!-- Touch -->
                    <div class="touch-container">
                        <img
                            src="/images/general/touch.png"
                            alt="tousch&skill-logo-touch"
                            class="appear-animation"
                        />
                        <p class="touch-text text-touch-animation">
                            <span class="inline-block text-reveal"
                                >Будь профі</span
                            >
                        </p>
                    </div>

                    <!-- &Skill -->
                    <div class="skill-container">
                        <p class="skill-text text-skill-animation">
                            <span class="inline-block text-reveal"
                                >Вчись у профі</span
                            >
                        </p>
                        <img
                            src="/images/general/skill.png"
                            alt="tousch&skill-logo-skill"
                            class="appear-animation"
                        />
                    </div>
                </div>
            </div>

            <a
                href="https://t.me/touch_skill"
                aria-label="Придбати електронну книгу про техніки масажу у Telegram від Touch&Skill"
                class="w-full sm:w-fit"
            >
                <SplitButton
                    label="Записатися на курс"
                    class="!mt-10 buttMobile flex sm:hidden w-full"
                />
            </a>
        </div>

        <!-- About Course -->
        <AboutCourse
            id="aboutCourse"
            class="px-[15px] mt-[55px] sm:mt-[150px] scroll-target"
        />

        <!-- Course Program -->
        <CourseProgram
            id="courseProgram"
            class="px-[15px] mt-[55px] sm:mt-[150px] scroll-target"
        />

        <!-- Courses for parents -->
        <ParentsCourse
            id="parentCourse"
            class="lg:m-0 lg:mt-[120px] mt-[55px] scroll-target"
        />

        <!-- Yours Tutor -->
        <YoursTutor
            id="tutor"
            class="px-[15px] mt-[55px] sm:mt-[120px] scroll-target"
        />

        <!-- Book -->
        <Book
            id="book"
            class="px-[15px] min-w-[0] mt-[55px] sm:mt-[120px] scroll-target"
        />

        <!-- Reviews -->
        <Reviews id="reviews" class="my-[55px] sm:mt-[150px] scroll-target" />

        <!-- Price And Packages -->
        <PriceAndPackages
            id="packages"
            class="px-[15px] mt-[60px] sm:mt-[150px] scroll-target"
        />

        <!-- Info Banner -->
        <div data-aos="flip-up" class="px-[15px]">
            <div
                class="bg-[#F4F5FD] flex flex-col-reverse lg:flex-row gap-[20px] lg:gap-[120px] items-center w-full rounded-3xl px-4 sm:px-[35px] lg:px-20 py-5 mt-[30px]"
            >
                <img
                    src="/images/general/procent.webp"
                    alt="Touch Skill-procent-data-image"
                    class="2xl:flex-shrink-0 size-48 sm:size-auto lg:size-72 xl:size-auto"
                />

                <div
                    class="flex flex-col gap-[20px] items-center lg:items-start"
                >
                    <h3 class="font-bold text-black text-base sm:text-2xl">
                        Студенти, які успішно завершили попередній рівень,
                        можуть перейти на наступний зі значною знижкою. В інших
                        випадках діє повна вартість курсу
                    </h3>

                    <p class="text-sm sm:text-base">
                        При відмові продовжувати курс - кошти не повертаються
                        (за виключенням підтверджених форс-мажорних обставин)
                    </p>

                    <div
                        class="font-bold text-white bg-purple rounded-xl p-3 sm:p-4 text-center w-fit"
                    >
                        Є можливість оплати частинами
                    </div>
                </div>
            </div>
        </div>

        <!-- Accordion FAQ Block -->
        <FAQ class="px-[15px] mt-[55px] sm:mt-[100px]" />

        <!-- Advertisment -->
        <div
            v-if="isAdvertismentVisible"
            data-aos="zoom-in"
            class="fixed right-5 bottom-5 hidden sm:flex flex-col items-center gap-5 w-[328px] rounded-2xl p-4 border border-gray-400 bg-[#0048FF1A] backdrop-blur-md z-50 shadow-lg"
        >
            <!-- Close button -->
            <button
                @click="toggleAdvertisment"
                class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-[#5521F1] rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
                <img
                    src="/images/icons/close.svg"
                    alt="Touch Skill-close-advertisment"
                    class="w-4 h-4"
                />
            </button>

            <!-- Title -->
            <div
                class="text-black text-2xl sm:text-3xl font-medium text-center pt-6"
            >
                Вивчай масаж <br />
                за новим підручником
            </div>

            <!-- Book image -->
            <img
                src="/images/book/book.png"
                alt="Touch Skill-book"
                class="w-[200px] h-[168px] object-cover rounded-lg shadow-md"
            />

            <!-- Buttons -->
            <div class="flex flex-col gap-3 w-full">
                <!-- Price button -->
                <a
                    href="https://t.me/touch_skill"
                    aria-label="Придбати електронну книгу про техніки масажу у Telegram від Touch&Skill"
                >
                    <BasePriceButton
                        label="Купуй підручник у цифровому форматі - вивчай масаж будь-де!"
                        :old-price="550"
                        :current-price="249"
                        size="xs"
                        ><template #icon>
                            <img
                                src="/images/icons/favorite.svg"
                                alt="Touch Skill-favorite-img"
                                class="absolute -top-1 right-6"
                                aria-hidden="true"
                            /> </template></BasePriceButton
                ></a>

                <!-- Buy button -->
                <a
                    href="https://t.me/touch_skill"
                    aria-label="Придбати електронну книгу про техніки масажу у Telegram від Touch&Skill"
                    class="relative flex items-center justify-center w-full rounded-2xl font-semibold text-xs text-white bg-purple p-2 hover:bg-purple-active transition-all shadow-md"
                >
                    Придбати електронну книгу
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AboutCourse from '~/features/mainPage/ui/AboutCourse.vue';
import CourseProgram from '~/features/mainPage/ui/CourseProgram.vue';
import ParentsCourse from '~/features/mainPage/ui/ParentsCourse.vue';
import YoursTutor from '~/features/mainPage/ui/YoursTutor.vue';
import Book from '~/features/mainPage/ui/Book.vue';
import Reviews from '~/features/mainPage/ui/Reviews.vue';
import PriceAndPackages from '~/features/mainPage/ui/PriceAndPackages.vue';
import FAQ from '~/features/mainPage/ui/FAQ.vue';

const isAdvertismentVisible = ref<boolean>(false);
const toggleAdvertisment = () => {
    isAdvertismentVisible.value = !isAdvertismentVisible.value;
};

onMounted(() => {
    useScroll().onScrollPercent(10, () => (isAdvertismentVisible.value = true));
});
</script>

<style scoped>
@media screen and (max-width: 980px) {
    .logo_main {
        margin-left: -150px;
    }
}
@media screen and (max-width: 880px) {
    .logo_main {
        margin-left: 0px;
    }
    .initial_holder {
        flex-wrap: wrap;
    }
}

.slide-left {
    animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
    transform: translateX(-50px);
}

@keyframes slideFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideFromRight {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Logo responsive container */
.logo-content {
    margin-left: 10px;
    margin-top: -265px;
}

/* Touch container */
.touch-container {
    display: flex;
    align-items: flex-end;
}

.touch-text {
    font-size: 42px;
    font-weight: 500;
    white-space: nowrap;
    margin-left: -40px;
}

/* Skill container */
.skill-container {
    display: flex;
    align-items: flex-start;
    margin-left: -81px;
}

.skill-text {
    font-size: 42px;
    font-weight: 500;
    white-space: nowrap;
}
@media screen and (max-width: 1680px) {
    .logo-content {
        scale: 0.75;
    }
}

/* Responsive adjustments for logo */
@media (max-width: 1536px) {
    .logo-content {
        margin-top: -220px;
    }

    .touch-text,
    .skill-text {
        font-size: 36px;
    }

    .touch-text {
        margin-left: -35px;
    }

    .skill-container {
        margin-left: -70px;
    }
}

@media (max-width: 1280px) {
    .logo-content {
        margin-top: -130px;
        margin-bottom: -200px;
    }

    .touch-text,
    .skill-text {
        font-size: 30px;
    }

    .touch-text {
        margin-left: -30px;
    }

    .skill-container {
        margin-left: -60px;
    }
}

@media (max-width: 640px) {
    .logo_main {
        scale: 0.6;
        margin-left: -50px;
        margin-top: -20px;
    }
    .logo-content {
        margin-left: 8px;
        margin-top: -230px !important;
    }

    .touch-text,
    .skill-text {
        font-size: 21px;
    }

    .touch-text {
        margin-left: -35px;
    }

    .skill-container {
        margin-left: -40px;
    }

    .initial_holder {
        margin-top: 0px;
    }

    .buttMobile {
        padding-top: 70px;
    }
}

@media (max-width: 360px) {
    .logo-content {
        margin-top: -200px !important;
    }
}

.hands-animation {
    animation: slideDownHands 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    transform: translateY(-100%);
    opacity: 0;
}

@keyframes slideDownHands {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Touch image animation - appear from top to bottom with smooth ease */
.touch-animation {
    animation: slideDownTouch 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
}

@keyframes slideDownTouch {
    0% {
        transform: translateY(-150%) scale(0.8);
        opacity: 0;
    }
    60% {
        transform: translateY(10px) scale(1.02);
    }
    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

.appear-animation {
    animation: appearSlow 3s 1s both;
}

@keyframes appearSlow {
    0% {
        scale: 0.75;
        opacity: 0;
    }
    100% {
        scale: 1;
        opacity: 100;
    }
}

/* Skill image animation - appear from bottom to top with smooth ease */
.skill-animation {
    animation: slideUpSkill 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
}

@keyframes slideUpSkill {
    0% {
        transform: translateY(150%) scale(0.8);
        opacity: 0;
    }
    60% {
        transform: translateY(-10px) scale(1.02);
    }
    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

/* Touch text animation - appear with gradient reveal effect */
.text-touch-animation {
    opacity: 0;
    animation: fadeInText 0.4s ease-out 1.9s forwards;
}

.text-touch-animation .text-reveal {
    display: inline-block;
    background: linear-gradient(90deg, transparent 0%, currentColor 0%);
    background-clip: text;
    -webkit-background-clip: text;
    animation: revealGradient 0.8s ease-out 1.9s forwards;
    background-size: 0% 100%;
    background-repeat: no-repeat;
    color: transparent;
}

@keyframes fadeInText {
    to {
        opacity: 1;
    }
}

@keyframes revealGradient {
    0% {
        background-size: 0% 100%;
        color: transparent;
    }
    100% {
        background-size: 100% 100%;
        color: currentColor;
    }
}

/* Skill text animation - appear with gradient reveal effect */
.text-skill-animation {
    opacity: 0;
    animation: fadeInText 0.4s ease-out 1.9s forwards;
}

.text-skill-animation .text-reveal {
    display: inline-block;
    background: linear-gradient(90deg, transparent 0%, currentColor 0%);
    background-clip: text;
    -webkit-background-clip: text;
    animation: revealGradient 0.8s ease-out 1.9s forwards;
    background-size: 0% 100%;
    background-repeat: no-repeat;
    color: transparent;
}

/* Add subtle glow effect on final state */
.hands-animation,
.touch-animation,
.skill-animation {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}
</style>
