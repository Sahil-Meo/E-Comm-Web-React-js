export const scrollNext = (ref) => {
    const wrapper = ref.current;
    const visibleWidth = wrapper.offsetWidth;
    if (ref.current) {
        ref.current.scrollBy({
            left: visibleWidth +12,
            behavior: "smooth",
        });
    }
};


export const scrollPrev = (ref) => {
    const wrapper = ref.current;
    const visibleWidth = wrapper.offsetWidth;

    if (ref.current) {
        ref.current.scrollBy({
            left: -visibleWidth -12,
            behavior: "smooth",
        });
    }
};