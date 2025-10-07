import mixpanel from 'mixpanel-browser';

export const useMixpanel = () => {
    const trackScroll = (percentage: number) => {
        console.log('[Mixpanel] Tracked Page Scroll');
        return mixpanel.track('Page Scroll', {
            scroll_percent: percentage,
        });
    };

    const trackBuy = () => {
        console.log('[Mixpanel] Tracked Button buy Click');
        return mixpanel.track('Button buy Click');
    };

    const trackDownload = () => {
        console.log('[Mixpanel] Tracked Button download Click');
        return mixpanel.track('Button download Click');
    };

    const trackPageView = () => {
        console.log('[Mixpanel] Tracked Page View');
        return mixpanel.track('Page View');
    };

    return {
        trackScroll,
        trackBuy,
        trackDownload,
        trackPageView,
    };
};
