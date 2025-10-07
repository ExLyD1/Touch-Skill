<template>
    <header
        data-aos="zoom-in"
        class="w-full min-w-0 bg-white flex items-center justify-center"
    >
        <div
            class="m-auto xl:max-w-[80%] max-w-[100%] w-full min-w-0 flex items-center justify-between lg:gap-[20px] xl:gap-[50px] p-[13px]"
        >
            <!-- Main logo -->

            <NuxtImg
                src="/images/logo.png"
                alt="touch-skills-logo"
                class="logo block cursor-pointer flex-shrink-0 w-[52px] h-[50px] sm:w-[77px] sm:h-[73px]"
                width="77"
                height="73"
                loading="eager"
                :lazy="false"
                fetchpriority="high"
            />

            <!-- Route links -->
            <nav
                class="route-links hidden lg:flex w-[1100px] items-center lg:justify-between lg:gap-[15px] 2xl:gap-[65px]"
            >
                <p
                    v-for="item in headerConfigLinks"
                    :key="item.label"
                    @click="scrollToElement(item.href_id)"
                    class="font-[500] cursor-pointer whitespace-nowrap"
                >
                    {{ item.label }}
                </p>
            </nav>

            <!-- Social Media Links -->
            <div
                class="social-media-links hidden lg:flex items-center gap-5 flex-shrink-0"
            >
                <a
                    v-for="item in headerConfig"
                    :href="item.href"
                    :key="item.alt"
                    target="_blank"
                    class="rounded-full btn-purple-glow bg-purple hover:bg-purple-active hover:shadow-md hover:shadow-purple-active transition-all cursor-pointer p-2"
                >
                    <NuxtImg
                        :src="item.img"
                        :alt="`Touch&Skill ${item.alt} icon`"
                        loading="eager"
                        width="25"
                        height="25"
                        :lazy="false"
                        fetchpriority="high"
                        class="object-contain w-[25px] h-[25px]"
                    />
                </a>
            </div>

            <div class="menu-img block lg:hidden cursor-pointer">
                <input
                    :checked="isMenuVisible"
                    @change="$emit('openHeader')"
                    type="checkbox"
                    id="myInput"
                />
                <label for="myInput">
                    <span class="bar top"></span>
                    <span class="bar middle"></span>
                    <span class="bar bottom"></span>
                </label>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const props = defineProps<{
    isMenuVisible: boolean;
}>();

const emit = defineEmits(['openHeader']);
const isMounted = ref<boolean>(false);
onMounted(() => {
    isMounted.value = true;
});

const headerConfig = [
    {
        img: '/images/telegram.svg',
        alt: 'telegram',
        href: 'https://t.me/touch_skill',
    },
    {
        img: '/images/instagram.svg',
        alt: 'instagram',
        href: 'https://www.instagram.com/massage_teacher_eu?igsh=MTUxYXlkN2NmcnQwMw%3D%3D&utm_source=qr',
    },
    {
        img: '/images/facebook.svg',
        alt: 'facebook',
        href: 'https://www.facebook.com/share/1EWGw15QwB/?mibextid=wwXIfr',
    },
];

const headerConfigLinks = [
    { label: 'Головна', href_id: 'initial' },
    { label: 'Про курс', href_id: 'aboutCourse' },
    { label: 'Програма курсу', href_id: 'courseProgram' },
    { label: 'Для батьків', href_id: 'parentCourse' },
    { label: 'Про викладача', href_id: 'tutor' },
    { label: 'Посібник', href_id: 'book' },
    { label: 'Ціни', href_id: 'packages' },
];
</script>

<style scoped>
input[type='checkbox'] {
    display: none;
}

/* Change ~ to + and target the spans correctly */
input[type='checkbox']:checked + label .bar {
    background-color: black;
}

input[type='checkbox']:checked + label .top {
    transform: translateY(8.5px) rotateZ(45deg);
}

input[type='checkbox']:checked + label .bottom {
    transform: translateY(-8.5px) rotateZ(-45deg);
}

input[type='checkbox']:checked + label .middle {
    width: 0;
}

.middle {
    margin: 0 auto;
}

label {
    top: 10px;
    display: inline-block;
    padding: 7px 10px;
    background-color: transparent;
    cursor: pointer;
    z-index: 3;
}

.bar {
    display: block;
    background-color: black;
    width: 30px;
    height: 3px;
    border-radius: 5px;
    margin: 5px auto;
    transition: background-color 0.4s ease-in, transform 0.4s ease-in,
        width 0.4s ease-in;
}
</style>
