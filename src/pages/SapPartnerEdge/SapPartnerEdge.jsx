import React from 'react';
import { Box, Typography, Grid, Button, Stack } from '@mui/material';
import FeatureList from "../../components/sectionmodules/FeatureListCard/FeatureList.jsx";
import AccordionFeatureList from "../../components/sectionmodules/AccordionItem/AccordionFeatureList";
import { sapPartnerEdgeData } from './SapPartnerEdgeData';
import SXContainer from '../../layout/SXContainer';
import ButtonPE from "../../components/buttons/ButtonPE.jsx";
import heroImage from "../../assets/SapPartnerEdge/why choose us.svg";

/* =========================
   HERO SECTION
========================= */
const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: '100svh', // ✅ mobile-safe full screen
                height: 'auto',     // changed to auto for content flexibility
                overflow: 'hidden',
                backgroundImage: `url(${heroImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',       // ✅ ensures full coverage
                backgroundPosition: 'center',  // ✅ avoids crop bias
                display: 'flex',
                alignItems: 'center',
                color: 'white',



            }}
        >
            <SXContainer
                maxWidth="xl"
                sx={{ position: 'relative', zIndex: 1 }}
            >
                <Typography
                    variant="h2"
                    fontWeight="semi-bold"
                    gutterBottom
                    sx={{
                        maxWidth: 600,
                        fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' },
                        lineHeight: 1.1
                    }}
                >
                    {sapPartnerEdgeData.hero.title}
                </Typography>

                <Typography variant="h5" sx={{ mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                    {sapPartnerEdgeData.hero.subtitle}
                </Typography>

                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    {sapPartnerEdgeData.hero.description}
                </Typography>
            </SXContainer>
        </Box>
    );
};

const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '32px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 2.5, md: 4 },
    color: '#000000',
};

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '20px' },
    lineHeight: { xs: '22px', sm: '25px', md: '29px' },
    letterSpacing: '0%',
    color: '#000000',
};

/* =========================
   PAGE
   ========================= */
function SapPartnerEdge() {
    return (
        <Box>
            <HeroSection />

            <SXContainer >
                {/* Intro Section */}
                <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: { xs: 6, md: 10 } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ ...titleStyle, minHeight: { md: '110px' } }}>
                            {sapPartnerEdgeData.intro.col1.title}
                        </Typography>
                        <Typography sx={{ ...paragraphStyle, textAlign: 'left' }}>
                            {sapPartnerEdgeData.intro.col1.description}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ ...titleStyle, minHeight: { md: '110px' } }}>
                            {sapPartnerEdgeData.intro.col2.title}
                        </Typography>
                        <Typography sx={{ ...paragraphStyle, textAlign: 'left' }}>
                            {sapPartnerEdgeData.intro.col2.description}
                        </Typography>
                    </Grid>
                </Grid>

                {/* Benefits */}
                <Box
                    sx={{
                        mb: { xs: 6, md: 10 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        textAlign: { xs: 'left', md: 'center' }
                    }}
                >
                    <Typography sx={{ ...titleStyle, mb: { xs: 4, md: 6 }, width: '100%' }}>
                        {sapPartnerEdgeData.benefits.title}
                    </Typography>
                    <Box sx={{ width: '100%', maxWidth: 900 }}>
                        <FeatureList data={sapPartnerEdgeData.benefits.items} />
                    </Box>
                </Box>

                {/* Capabilities */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Typography sx={{ ...titleStyle, mb: 2 }}>
                        {sapPartnerEdgeData.capabilities.title}
                    </Typography>

                    <Typography sx={{ ...paragraphStyle, mb: { xs: 4, md: 6 } }}>
                        {sapPartnerEdgeData.capabilities.description}
                    </Typography>

                    <AccordionFeatureList data={sapPartnerEdgeData.capabilities.items} />
                </Box>

                {/* Links Stack */}
                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Stack
                        direction="row"
                        spacing={{ xs: 2, sm: 4 }}
                        sx={{
                            flexWrap: 'wrap',
                            justifyContent: { xs: 'center', sm: 'space-between' },
                            gap: { xs: 2, sm: 0 }
                        }}
                    >
                        <Typography variant="button" fontWeight="bold" sx={{ cursor: 'pointer', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                            Learn more about SAP RISE →
                        </Typography>
                        <Typography variant="button" fontWeight="bold" sx={{ cursor: 'pointer', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                            Learn more about SAP GROW →
                        </Typography>
                        <Typography variant="button" fontWeight="bold" sx={{ cursor: 'pointer', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                            View Our Full Service Offerings →
                        </Typography>
                    </Stack>
                </Box>

                {/* CTA Section */}
                <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: { xs: 6, md: 10 } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ ...titleStyle, mb: 2 }}>
                            {sapPartnerEdgeData.cta.title}
                        </Typography>
                        <Typography sx={paragraphStyle}>
                            {sapPartnerEdgeData.cta.description}
                        </Typography>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: { xs: 'flex-start', md: 'flex-end' },
                            mt: { xs: 2, md: 0 }
                        }}
                    >
                        <Stack spacing={2} sx={{ width: { xs: '100%', md: 'auto' } }}>
                            {/* Row 1 – First button */}
                            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
                                <ButtonPE
                                    label={sapPartnerEdgeData.cta.buttons[0].label}
                                    onClick={sapPartnerEdgeData.cta.buttons[0].onClick}
                                />
                            </Stack>

                            {/* Row 2 – Last two buttons */}
                            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                                {sapPartnerEdgeData.cta.buttons.slice(1, 3).map((btn, i) => (
                                    <ButtonPE
                                        key={i}
                                        label={btn.label}
                                        onClick={btn.onClick}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

                {/* About */}
                <Box>
                    <Typography sx={{ ...titleStyle, mb: 2 }}>
                        {sapPartnerEdgeData.about.title}
                    </Typography>

                    <Typography sx={{ ...paragraphStyle, mb: 4 }}>
                        {sapPartnerEdgeData.about.description}
                    </Typography>

                    <Typography variant="button" fontWeight="bold" sx={{ cursor: 'pointer', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {sapPartnerEdgeData.about.link.label}
                    </Typography>
                </Box>
            </SXContainer>
        </Box >
    );
}

export default SapPartnerEdge;
