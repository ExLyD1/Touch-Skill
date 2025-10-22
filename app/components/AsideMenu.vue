<template>
    <aside
        class="dropdown_menu !pt-[0px] h-full"
        :class="{
            open: isOpen,
            close: isTrigger,
        }"
    >
        <a
            v-for="item in menuConfig"
            @click="emits('scrolling', item.href_id)"
            type="text"
            placeholder="Половина"
            class="flex dropdown_item w-full py-[25px] border-b border-gray-500 font-[700] text-lg bg-white p-4"
        >
            {{ item.label }}
        </a>
        <!-- Footer Social Media Links -->
        <div
            class="dropdown_item m-auto flex items-center gap-5 bg-white p-5 justify-center w-full"
        >
            <a
                v-for="item in menuConfigMedia"
                :href="item.href"
                :key="item.alt"
                target="_blank"
                class="rounded-full bg-purple hover:bg-purple-active hover:shadow-md hover:shadow-purple-active transition-all duration-300 cursor-pointer p-2"
                :aria-label="item.aria_label"
            >
                <NuxtImg
                    :src="item.img"
                    :alt="`Touch&Skill ${item.alt} icon`"
                    loading="eager"
                    width="25"
                    height="25"
                    :lazy="false"
                    fetchpriority="high"
                    class="object-contain"
                />
            </a>
        </div>
    </aside>
</template>

<script setup lang="ts">
defineProps<{
    isOpen: boolean;
    isTrigger: boolean;
}>();

const emits = defineEmits(['scrolling']);

const menuConfig = [
    { label: 'Головна', href_id: 'initial' },
    { label: 'Про курс', href_id: 'aboutCourse' },
    { label: 'Програма курсу', href_id: 'courseProgram' },
    { label: 'Для батьків', href_id: 'parentCourse' },
    { label: 'Про викладача', href_id: 'tutor' },
    { label: 'Посібник', href_id: 'book' },
    { label: 'Ціни', href_id: 'packages' },
];

const menuConfigMedia = [
    {
        img: '/images/icons/telegram.svg',
        alt: 'telegram',
        href: 'https://t.me/touch_skill',
        aria_label: 'Написати нам у Telegram',
    },
    {
        img: '/images/icons/instagram.svg',
        alt: 'instagram',
        href: 'https://www.instagram.com/massage_teacher_eu?igsh=MTUxYXlkN2NmcnQwMw%3D%3D&utm_source=qr',
        aria_label: 'Написати нам у Instagram',
    },
    {
        img: '/images/icons/facebook.svg',
        alt: 'facebook',
        href: 'https://www.facebook.com/share/1EWGw15QwB/?mibextid=wwXIfr',
        aria_label: 'Написати нам у Facebook',
    },
    {
        img: '/images/icons/email_white.svg',
        alt: 'threads',
        href: 'https://www.threads.com/@massage_teacher_eu?igshid=NTc4MTIwNjQ2YQ==',
        aria_label: 'Написати нам у Threads',
    },
];
</script>

<style scoped>
/* BASE: items start hidden (scale 0, opacity 0) */

/* OPEN: run scaleIn animation with per-item delay */
.dropdown_menu.open .dropdown_item {
    opacity: 0;
    transform-origin: top center;
    transform: scale(0);
    /* ensure they don't capture pointer when hidden */
    pointer-events: none;
    animation: scaleIn 300ms var(--delay, 0ms) cubic-bezier(0.2, 0.9, 0.2, 1)
        forwards;
    pointer-events: auto; /* allow interaction when visible */
}

/* CLOSE: run scaleOut animation with REVERSE stagger */
.dropdown_menu.close .dropdown_item {
    opacity: 1;
    transform-origin: top center;
    transform: scale(1);
    /* ensure they don't capture pointer when hidden */
    pointer-events: none;
    animation: scaleOut 300ms var(--close-delay, 0ms)
        cubic-bezier(0.6, 0, 0.8, 0.2) forwards;
    pointer-events: none;
}

/* ---------- OPEN stagger delays (forward order) ---------- */
.dropdown_menu.open .dropdown_item:nth-child(1) {
    --delay: 0ms;
}
.dropdown_menu.open .dropdown_item:nth-child(2) {
    --delay: 60ms;
}
.dropdown_menu.open .dropdown_item:nth-child(3) {
    --delay: 120ms;
}
.dropdown_menu.open .dropdown_item:nth-child(4) {
    --delay: 180ms;
}
.dropdown_menu.open .dropdown_item:nth-child(5) {
    --delay: 240ms;
}
.dropdown_menu.open .dropdown_item:nth-child(6) {
    --delay: 300ms;
}
.dropdown_menu.open .dropdown_item:nth-child(7) {
    --delay: 360ms;
}

/* ---------- CLOSE stagger delays (reverse order) ---------- */
.dropdown_menu.close .dropdown_item:nth-child(1) {
    --close-delay: 360ms;
}
.dropdown_menu.close .dropdown_item:nth-child(2) {
    --close-delay: 300ms;
}
.dropdown_menu.close .dropdown_item:nth-child(3) {
    --close-delay: 240ms;
}
.dropdown_menu.close .dropdown_item:nth-child(4) {
    --close-delay: 180ms;
}
.dropdown_menu.close .dropdown_item:nth-child(5) {
    --close-delay: 120ms;
}
.dropdown_menu.close .dropdown_item:nth-child(6) {
    --close-delay: 60ms;
}
.dropdown_menu.close .dropdown_item:nth-child(7) {
    --close-delay: 0ms;
}

/* ---------- Keyframes ---------- */
@keyframes scaleIn {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    80% {
        transform: scale(1.07);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes scaleOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    20% {
        transform: scale(1.07);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}
</style>
