import React, { useEffect, useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import TestimonialCardBCVC from "../cards/TestimonialCardBCVC/TestimonialCardBCVC";

export default function TestimonialCarousel({ items = [], title = "Client Testimonials" }) {
    const trackRef = useRef(null);
    const autoplayRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    // Measure the exact width of the slide element (fixes 600–900px issues)
    const updateLayout = useCallback(() => {
        if (!trackRef.current) return;

        const firstSlide = trackRef.current.querySelector('[data-slide-index="0"]');
        if (firstSlide && firstSlide.clientWidth > 0) {
            setSlideWidth(firstSlide.clientWidth);
            return;
        }

        // fallback
        setSlideWidth(trackRef.current.clientWidth);
    }, []);

    useEffect(() => {
        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, [updateLayout]);

    const scrollToIndex = (index) => {
        if (!trackRef.current || slideWidth <= 0) return;

        const nextIndex = Math.max(0, Math.min(index, items.length - 1));
        trackRef.current.scrollTo({
            left: nextIndex * slideWidth,
            behavior: "smooth"
        });

        setCurrentIndex(nextIndex);
    };

    const handleNext = useCallback(() => {
        scrollToIndex(currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    }, [currentIndex, items.length]);

    // AUTOPLAY every 3s
    useEffect(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);

        autoplayRef.current = setInterval(handleNext, 3000);

        return () => clearInterval(autoplayRef.current);
    }, [handleNext]);

    if (!items.length) return null;

    return (
        <Box sx={{ width: "100%", py: { xs: 4, md: 6 }, overflow: "hidden" }}>


     

            {/* Slider Track */}
            <Box
                ref={trackRef}
                sx={{
                    display: "flex",
                    overflow: "hidden",
                    scrollSnapType: "x mandatory",
                    maxWidth: { xs: "100%", sm: "720px", md: "900px" },
                    mx: "auto"
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        data-slide-index={index}
                        sx={{
                            minWidth: "100%",
                            scrollSnapAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        <TestimonialCardBCVC
                            logoSrc={item.logoSrc}
                            quote={item.quote}
                            company={item.company}
                        />
                    </Box>
                ))}
            </Box>

            {/* Dots */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.2, mt: 3 }}>
                {items.map((_, idx) => {
                    const active = currentIndex === idx;
                    return (
                        <Box
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            sx={{
                                width: active ? "35px" : "9px",
                                height: "9px",
                                borderRadius: "4.5px",
                                bgcolor: active ? "#9F9F9F" : "#D9D9D9",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}

TestimonialCarousel.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string,
};
