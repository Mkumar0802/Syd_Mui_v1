// src/components/sections/SecondSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

import SXContainer from "../../layout/SXContainer.jsx";
import CSCarousel from "../../components/carousel/CSCarousel.jsx";

export default function SecondSection({ partner = {}, csItems = [] }) {
    const imgW = 602.0594482421875;
    const imgH = 401.5622863769531;

    return (
        <SXContainer component="section" py={{ xs: 8, md: 12 }}>
            {/* SERVICES CAROUSEL */}
            <CSCarousel
                items={csItems}
                title="Comprehensive SAP Consulting Services"
                description={[
                    "End-to-end SAP solutions designed for your success,from strategic planning through ",
                    "implementation to ongoing optimisation."
                ]}
            />
        </SXContainer>
    );
}

SecondSection.propTypes = {
    partner: PropTypes.shape({
        imageSrc: PropTypes.string,
        eyebrow: PropTypes.string,
        quote: PropTypes.string,
        company: PropTypes.string,
        ctaLabel: PropTypes.string,
        onCta: PropTypes.func,
    }),
    csItems: PropTypes.array,
};
