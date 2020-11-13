export const debounce = (fn, wait, immediate = false) => {
    let timerId;
    let immediatellyCalled = false;

    return function debounced() {
        if (immediate && !immediatellyCalled) {
            immediatellyCalled = true;

            fn();

            return;
        }

        clearTimeout(timerId);

        timerId = setTimeout(fn, wait);
    };
};
