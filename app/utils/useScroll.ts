export const useScroll = () => {
    const isScrolled25 = ref(false);
    const isScrolled50 = ref(false);

    const check = () => {
        const currentSroll = window.scrollY;
        const screenHeight = window.innerHeight;
        const totalScroll = document.body.scrollHeight;

        const toScroll = totalScroll - currentSroll - screenHeight;
        const scrolled = currentSroll + screenHeight;
        const scrollable = Math.round((scrolled * 100) / totalScroll);

        if (scrollable > 25 && !isScrolled25.value) {
            console.log('[Mixpanel] Tracked scroll: 25%');
            useMixpanel().trackScroll(25);
            isScrolled25.value = true;
        }

        if (scrollable > 50 && !isScrolled50.value) {
            console.log('[Mixpanel] Tracked scroll: 50%');
            useMixpanel().trackScroll(50);
            isScrolled50.value = true;
        }
    };

    const onScrollPercent = (percent: number, callback: () => void) => {
        if (percent < 0 || percent > 100) {
            console.warn('Percent should be between 0 and 100');
            return;
        }

        let triggered = false;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPercent = (scrollTop / docHeight) * 100;

            if (!triggered && scrolledPercent >= percent) {
                triggered = true;
                callback();
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    };

    const throttledCheck = throttle(check, 200);

    window.addEventListener('scroll', throttledCheck, { passive: true });
    check();

    return {
        onScrollPercent,
    };
};
