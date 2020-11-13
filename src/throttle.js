export const throttle = (fn, interval, trailing = true) => {
    let lastCallTime;
    let timerId;

    return function throttled() {
        clearTimeout(timerId);
        
        const now = Date.now();

        if (!lastCallTime) {
            lastCallTime = now;

            fn();
        } else if (now - lastCallTime >= interval) {
            lastCallTime = now;

            fn();
        } else if (trailing) {
            timerId = setTimeout(function timeout() {
                lastCallTime = Date.now();

                fn();
            }, interval);
        }
    }
};
