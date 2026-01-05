// src/SectionFour.jsx
import { Typography, Stack, Box } from "@mui/material";
import SXContainer from "../../layout/SXContainer.jsx";

export default function SectionFour() {
    return (
        <SXContainer
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "#F9F9FB", // Light gray background as seen in reference
            }}
        >
            <Box sx={{ maxWidth: 1000, mx: "auto" }}>
                <Stack spacing={4}>

                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                            lineHeight: 1.8,
                            textAlign: "center", // Centered as per reference/previous discussion
                            color: "#4A4A4A",
                            fontWeight: 400,
                        }}
                    >
                        When SAP consulting became synonymous with complexity, we saw a better way.
                        New Zealand enterprises needed local experts who understood their world, people
                        who could make SAP work for them, and reliably deliver business outcomes every time.
                        Grant spotted a gap and founded SYD to bring clarity, control, and confidence back to SAP delivery,
                        putting the customer firmly at the centre.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                            lineHeight: 1.8,
                            textAlign: "center", // Centered as per reference/previous discussion
                            color: "#4A4A4A",
                            fontWeight: 400,
                        }}
                    >
                        We turn technology into an enabler, not a barrier. Over the past 13 years, we've delivered
                        225+ projects for 29 customers across infrastructure, retail, utilities, manufacturing, and agriculture.
                        We've built lasting partnerships with iconic Kiwi brands like Zespri, Mitre 10, and Kordia, organisations
                        that trust us to deliver, time and again.
                    </Typography>

                </Stack>
            </Box>
        </SXContainer>
    );
}
