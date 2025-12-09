import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import ButtonPE from "../../components/buttons/ButtonPE";
import Title from "../../layout/Title.jsx";

export default function SectionOne({
    title,
    body1,
    body2,
    buttonLabel = "Learn more",
    onButtonClick = () => { },
}) {
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: { xs: 4, md: 2 },
            }}
        >
            {/* LEFT SIDE */}
            <Box sx={{ flex: 1 }}>
                <Title
                    sx={{
                        mb: 2,
                        fontFamily: `"Microsoft JhengHei UI", "Segoe UI", sans-serif`,
                    }}
                >
                    {title}
                </Title>

                {/* Paragraph 1 */}
                {body1 && (
                    <Typography
                        sx={{
                            mt: 2,
                            mb: 2,
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "text.primary",
                        }}
                    >
                        {body1}
                    </Typography>
                )}

                {/* Paragraph 2 */}
                {body2 && (
                    <Typography
                        sx={{
                            fontFamily: `"Segoe UI", sans-serif`,
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "text.primary",
                        }}
                    >
                        {body2}
                    </Typography>
                )}
            </Box>

            {/* RIGHT CTA BUTTON */}
            <Box
                sx={{
                    width: { xs: "100%", md: "auto" },
                    textAlign: { xs: "left", md: "right" },
                }}
            >
                <ButtonPE
                    label={buttonLabel}
                    size="medium"
                    onClick={onButtonClick}
                    sx={{ minWidth: 190 }}
                />
            </Box>
        </Box>

    );
}

SectionOne.propTypes = {
    title: PropTypes.string.isRequired,
    body1: PropTypes.string,
    body2: PropTypes.string,
    buttonLabel: PropTypes.string,
    onButtonClick: PropTypes.func,
};
