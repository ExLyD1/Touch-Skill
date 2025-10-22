<template>
    <div>
        <h2
            data-aos="fade-up-right"
            class="sm:text-[48px] text-[34px] sm:text-start text-center font-[500]"
        >
            Програма курсу
        </h2>

        <div
            class="flex gap-5 mt-[25px] sm:mt-[50px] items-center flex-col 2xl:flex-row 2xl:items-start"
        >
            <PackageItem
                :data-aos="dataAos(index)"
                v-for="(item, index) in packagesList"
                :package="item"
                :is-detailed="false"
                class="h-fit flex-shrink-0 2xl:max-w-[440px] max-w-full w-full"
            >
                <template #bg-effects>
                    <img
                        v-if="index === 0"
                        class="absolute bottom-0 left-0 z-0 rounded-3xl"
                        src="/images/palms/course_palm1.png"
                        alt="Touch Skill Palm Image"
                    />

                    <img
                        v-if="index === 0"
                        class="absolute left-0 top-0 z-0 rounded-3xl"
                        src="/images/palms/course_palm2.png"
                        alt="Touch Skill Palm Image"
                    />

                    <img
                        v-if="index === 1"
                        class="absolute left-0 top-0 z-0 rounded-3xl"
                        src="/images/palms/course_palm3.png"
                        alt="Touch Skill Palm Image"
                    />

                    <img
                        v-if="index === 1"
                        class="absolute bottom-0 right-0 z-0 rounded-3xl"
                        src="/images/palms/course_palm4.png"
                        alt="Touch Skill Palm Image"
                    />

                    <img
                        v-if="index === 2"
                        class="absolute bottom-0 right-0 z-0 rounded-3xl"
                        src="/images/palms/course_palm5.png"
                        alt="Touch Skill Palm Image"
                    />
                </template>
            </PackageItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PackageItem from '~/entities/mainPage/ui/PackageItem.vue';
import { packagesList } from '~/entities/mainPage/model/packagesConfig';

const dataAos = (index: number) => {
    switch (index) {
        case 0:
            return 'fade-right';
            break;

        case 1:
            return 'fade-up';
            break;

        case 2:
            return 'fade-left';
            break;

        default:
            break;
    }
};
</script>

<style scoped></style>
