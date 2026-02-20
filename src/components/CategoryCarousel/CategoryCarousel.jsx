import { useEffect, useRef } from "react";

function CategoryCarousel() {
    const categories = [
        "Драмає",
        "Комедія",
        "Трилер",
        "Наукова фантастика",
        "Фентезі",
        "Мультфільм",
        "Документальний",
        "Пригоди",
        "Жахи",
        "Романтика",
    ];

    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let animationFrameId;
        let scrollAmount = 0;
        const scrollSpeed = 1;

        function step() {
            if (!carousel) return;
            scrollAmount += scrollSpeed;
            if (scrollAmount >= carousel.scrollWidth / 2) {
                scrollAmount = 0;
            }
            carousel.scrollLeft = scrollAmount;
            animationFrameId = requestAnimationFrame(step);
        }

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Дублюємо список для безшовної прокрутки
    const doubledCategories = [...categories, ...categories];

    return (
        <div
            ref={carouselRef}
            style={{
                whiteSpace: "nowrap",
                overflowX: "hidden",
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
            }}
        >
            {doubledCategories.map((cat, index) => (
                <div
                    key={index}
                    style={{
                        display: "inline-block",
                        padding: "0 15px",
                        userSelect: "none",
                        flexShrink: 0,
                    }}
                >
                    {cat}
                </div>
            ))}
        </div>
    );
}

export default CategoryCarousel;
