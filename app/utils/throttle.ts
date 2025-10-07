export function throttle<Fn extends (...args: any[]) => any>(
    fn: Fn,
    wait: number
) {
    let last = 0;
    return function (
        this: ThisParameterType<Fn>,
        ...args: Parameters<Fn>
    ): ReturnType<Fn> | undefined {
        const now = Date.now();
        if (now - last >= wait) {
            last = now;
            return fn.apply(this, args) as ReturnType<Fn>;
        }
        return undefined;
    };
}
