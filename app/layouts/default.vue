<template>
    <div
        :class="{ 'overflow-y-hidden!': isMenuVisible }"
        class="flex flex-col relative"
    >
        <Header
            @open-header="toggleMenuVisibility"
            :is-menu-visible="isMenuVisible"
            class="z-20 fixed"
        />

        <div v-if="!isMenuVisible" :style="{ height: `99px` }"></div>

        <AsideMenu
            v-if="isMenuVisible"
            :is-open="isMenuVisible"
            :is-trigger="isTriggerAnimation"
            @scrolling="(id:string) => {
                toggleMenuVisibility();
                scrollToElement(id)
            }"
            class="fixed w-full top-16 z-50 overflow-hidden! bg-white"
        />

        <main class="flex-grow z-0">
            <slot />
        </main>

        <!-- Profi Block -->
        <div
            class="profi py-[60px] mt-[60px] sm:mt-[120px] sm:pt-[100px] sm:pb-[200px] px-[15px] max-h-[530px] h-full flex items-center justify-center"
        >
            <div
                data-aos="zoom-in"
                class="max-w-[860px] w-full flex flex-col gap-[30px] items-center justify-center"
            >
                <h1
                    data-aos="zoom-in"
                    class="text-[18px]/[100%] sm:text-5xl font-semibold text-center"
                >
                    Вчись у профі - будь <span class="text-purple">профі</span>!
                    Записуйся на <span class="text-purple">курс</span> вже
                    сьогодні!
                </h1>

                <SplitButton label="Записатися на курс" />
            </div>
        </div>

        <Footer />

        <ClientOnly>
            <img
                src="/images/parents_image.webp"
                alt="touch&skill-parents-image"
                class="baby-image absolute right-0 top-[2525.08px] -z-10"
        /></ClientOnly>

        <img
            src="/images/palms/palms_about.webp"
            alt="touch&skill-parents-image"
            class="absolute right-0 top-[744px] hidden sm:block -z-10"
        />

        <img
            src="/images/palms/palms_about_mobile.webp"
            alt="touch&skill-parents-image"
            class="absolute right-0 top-[1055px] block sm:hidden -z-10"
        />

        <img
            src="/images/palms/palms_parent.webp"
            alt="touch&skill-parents-image"
            class="absolute left-0 top-[3175.08px] hidden sm:block -z-10"
        />

        <img
            src="/images/palms/palms_book.webp"
            alt="touch&skill-parents-image"
            class="absolute right-0 top-[3900px] hidden sm:block -z-10"
        />

        <img
            src="/images/palms/palms_faq.webp"
            alt="touch&skill-parents-image"
            class="absolute right-0 top-[6838px] hidden sm:block -z-10"
        />

        <img
            src="/images/palms/palms_tutor_mobile_left.webp"
            alt="touch&skill-parents-image"
            class="palm_tutor absolute left-0 top-[4324px] block sm:hidden -z-10"
        />

        <img
            src="/images/palms/palms_tutor_mobile_right.webp"
            alt="touch&skill-parents-image"
            class="palm_tutor absolute right-0 top-[4324px] block sm:hidden -z-10"
        />
    </div>
</template>

<script lang="ts" setup>
import Header from '~/features/layout/ui/Header.vue';
import Footer from '~/features/layout/ui/Footer.vue';

const isMenuVisible = ref<boolean>(false);
const isTriggerAnimation = ref<boolean>(false);

const toggleMenuVisibility = () => {
    // Open Menu
    if (isMenuVisible.value === false) {
        isTriggerAnimation.value = false;
        isMenuVisible.value = true;
    }
    // Close Menu
    else {
        isTriggerAnimation.value = true;
        setTimeout(() => {
            isTriggerAnimation.value = false;
            isMenuVisible.value = false;
        }, 700);
    }
};

// Блокування скролу сторінки
watch(
    () => isMenuVisible.value,
    newValue => {
        if (newValue === true) {
            // Блокуємо скрол

            document.body.style.overflow = 'hidden';
            console.log(document.body.style.overflow);
        } else {
            // Відновлюємо скрол
            console.log(1);

            document.body.style.overflow = '';
        }
    }
);

onMounted(async () => {
    await nextTick();
    useScroll();
});
</script>

<style scoped>
.baby-image {
    border-radius: 20px;
    mask-image: radial-gradient(
        ellipse 40% 40% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: radial-gradient(
        ellipse 40% 40% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
    );
}

.profi {
    position: relative;
    background-image: url('/images/profi.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* Маска зверху */
    -webkit-mask-image: radial-gradient(
        ellipse 50% 50% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0.2) 100%
    );
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: top;
    -webkit-mask-size: cover;

    mask-image: radial-gradient(
        ellipse 50% 50% at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0.2) 100%
    );
    mask-repeat: no-repeat;
    mask-position: top;
    mask-size: cover;
}

@media screen and (max-width: 1536px) {
    .baby-image {
        top: 3500px;
    }
}

@media screen and (max-width: 1340px) {
    .baby-image {
        top: 3600px;
    }
}

@media screen and (max-width: 1024px) {
    .baby-image {
        display: none;
    }
}

@media screen and (max-width: 640px) {
    .profi {
        background-size: cover;

        -webkit-mask-image: radial-gradient(
            ellipse 50% 50% at center,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.2) 100%
        );

        mask-image: radial-gradient(
            ellipse 60% 60% at center,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.2) 100%
        );
    }
}

@media screen and (max-width: 380px) {
    .palm_tutor {
        top: 4424px;
    }
}

@media screen and (max-width: 376px) {
    .palm_tutor {
        top: 4524px;
    }
}

@media screen and (max-width: 368px) {
    .palm_tutor {
        top: 4624px;
    }
}

@media screen and (max-width: 358px) {
    .palm_tutor {
        top: 4724px;
    }
}
@media screen and (max-width: 325px) {
    .palm_tutor {
        top: 4824px;
    }
}
</style>
