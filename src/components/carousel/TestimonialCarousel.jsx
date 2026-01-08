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
        } else {
            setSlideWidth(trackRef.current.clientWidth);
        }
    }, []);

    useEffect(() => {
        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, [updateLayout]);

    // SCROLL EFFECT: Sync scroll position with currentIndex
    useEffect(() => {
        if (!trackRef.current || slideWidth <= 0) return;
        trackRef.current.scrollTo({
            left: currentIndex * slideWidth,
            behavior: "smooth"
        });
    }, [currentIndex, slideWidth]);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
    };

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            // Re-check width if needed (safety fallback)
            // But main logic is just index update
            return prevIndex >= items.length - 1 ? 0 : prevIndex + 1;
        });
    }, [items.length]);

    // AUTOPLAY every 3s
    useEffect(() => {
        // If items are empty or only 1 item, don't autoplay? (Optional, but safe)
        if (items.length <= 1) return;

        autoplayRef.current = setInterval(handleNext, 3000);
        return () => clearInterval(autoplayRef.current);
    }, [handleNext, items.length]);

    if (!items.length) return null;

    return (
        <Box sx={{ width: "100%", overflow: "hidden" }}>
            {/* Slider Track */}
            <Box
                ref={trackRef}
                sx={{
                    display: "flex",
                    overflow: "hidden",
                    scrollSnapType: "x mandatory",
                    maxWidth: "100%",
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
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.3 }}>
                {items.map((_, idx) => {
                    const active = currentIndex === idx;
                    return (
                        <Box
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            sx={{
                                width: active ? 35 : 10,
                                height: 10,
                                borderRadius: active ? "6px" : "50%",
                                bgcolor: active ? "primary.main" : "#ccc",
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
