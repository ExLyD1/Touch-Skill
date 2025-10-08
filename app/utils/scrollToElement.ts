export const scrollToElement = async (id: string): Promise<void> => {
    // if (!import.meta.client) return;

    await nextTick();
    const el = document.querySelector(`#${id}`);

    if (!el) {
        console.log(`Element with id "${id}" not found`);
        return;
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
