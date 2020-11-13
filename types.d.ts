declare module "az-omega-utilities" {
    /**
     * 
     * @param fn callback
     * @param wait milliseconds
     * @param [immediate] invoke fn immediately, default = true
     */
    export function debounce(
        fn: () => any,
        wait: number, 
        immediate?: boolean
    ): () => void;

    /**
     * 
     * @param fn callback
     * @param interval milliseconds
     * @param [trailing] invoke fn after last call, default = true
     */
    export function throttle(
        fn: () => any,
        interval: number,
        trailing?: boolean
    ): () => void;
}
