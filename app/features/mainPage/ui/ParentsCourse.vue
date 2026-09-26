<template>
    <div class="relative">
        <!-- Wide-screen photo beside the text; narrower screens show it inline -->
        <SectionDecoration
            src="/images/general/parents_image.webp"
            side="right"
            class="baby-image top-[-90px] hidden 2xl:block"
        />
        <SectionDecoration
            src="/images/palms/palms_parent.webp"
            side="left"
            class="top-[560px] hidden sm:block"
        />

        <div
            class="parentCourse flex flex-col gap-[25px] max-w-[535px] w-full"
        >
            <h2
                data-aos="fade-up-right"
                class="text-[32px] sm:text-[48px] font-[500] px-[25px] text-center sm:text-start"
            >
                {{ t('parents.title') }}
            </h2>

            <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
                {{ t('parents.intro') }}
            </p>

            <img
                data-aos="fade-left"
                src="/images/general/parents_image.webp"
                :alt="t('parents.imageAlt')"
                class="baby-image 2xl:hidden block w-full"
            />

            <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
                {{ t('parents.first') }}
            </p>

            <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
                {{ t('parents.second') }}
            </p>

            <p data-aos="zoom-in" class="px-[25px] text-sm sm:text-lg">
                {{ t('parents.third') }}
                <strong>{{ t('parents.duration') }}</strong>
            </p>

            <a
                :href="TELEGRAM_URL"
                target="_blank"
                rel="noopener"
                :aria-label="t('common.enrollAria')"
                class="w-full sm:w-fit"
            >
                <SplitButton
                    data-aos="zoom-in"
                    class="mt-[30px] px-[15px] sm:max-w-[376px] w-full"
                    :label="t('common.enroll')"
                />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import SplitButton from '~/components/SplitButton.vue';

const { t } = useI18n();
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

/* The desktop photo uses the softer fade it had in the layout */
.baby-image.absolute {
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

@media screen and (max-width: 615px) {
    .parentCourse {
        max-width: 100%;
    }
}
</style>
