<template>
    <div
        class="parentCourse flex flex-col gap-[25px] relative max-w-[535px] w-full"
    >
        <h2
            data-aos="fade-up-right"
            class="text-[32px] sm:text-[48px] font-[500] px-[25px] text-center sm:text-start"
        >
            Курси для батьків
        </h2>

        <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
            Це індивідуальні заняття для батьків немовлят або батьків дітей з
            інвалідністю, на якому вони навчаться певним комплексам вправ та
            іншим рекомендаціям для виконання у домашніх умовах
        </p>

        <img
            data-aos="fade-left"
            src="/images/general/parents_image.webp"
            alt="Touch Skill-parents-image"
            class="baby-image lg:hidden block w-full"
        />

        <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
            Ці заняття дадуть можливість батькам в першу чергу подолати страх
            торкнутися свою дитину (це доволі часте явище), а також стереотип
            про те, що заняття проходять лише в стінах закладів з фахівцями
        </p>

        <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
            По-друге - постійні походи до фахівців заощадять час та сімейний
            бюджет.
        </p>

        <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
            По-третє отриманні знання та рекомендації залишаться з ними
            назавжди. <strong>Курс триває 2 дні</strong>
        </p>

        <a
            href="https://t.me/touch_skill"
            aria-label="Придбати електронну книгу про техніки масажу у Telegram від Touch&Skill"
            class="w-full sm:w-fit"
        >
            <SplitButton
                data-aos="zoom-in"
                class="mt-[30px] px-[15px] sm:max-w-[376px] w-full"
                label="Записатися на курс"
            />
        </a>
    </div>
</template>

<script setup lang="ts">
import SplitButton from '~/components/SplitButton.vue';
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

@media screen and (max-width: 615px) {
    .parentCourse {
        max-width: 100%;
    }
}
</style>
