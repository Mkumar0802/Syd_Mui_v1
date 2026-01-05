import React from 'react';
import { Box, Typography } from '@mui/material';
import grantImg from '../../assets/people/grant.jpg';
import SXContainer from '../../layout/SXContainer';

const SectionFifth = () => {
    return (
        <SXContainer
            maxWidth="xl"
            py={{ xs: 6, md: 8 }}
            disableGutters
            sx={{ overflow: 'hidden' }} // Prevent horizontal overflow
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' }, // Stack on tablet too if it feels cramped
                    width: '100%',
                    minHeight: { xs: 'auto', lg: '450px' },
                }}
            >
                {/* Left Image */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '50%' },
                        height: { xs: '300px', sm: '400px', lg: 'auto' },
                        backgroundImage: `url(${grantImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: { xs: '300px', lg: '100%' }
                    }}
                    role="img" aria-label="Grant, Founder of SYD"
                />

                {/* Right Content */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '50%' },
                        bgcolor: '#14142B',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: { xs: 4, sm: 6, md: 8, lg: 10 },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: '"Segoe UI", sans-serif',
                            fontWeight: 400,
                            mb: 4,
                            fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
                            lineHeight: "135%",
                        }}
                    >
                        We built SYD to make SAP simple and valuable for the businesses powering New Zealand.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: '"Segoe UI", sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        Grant, Founder
                    </Typography>
                </Box>
            </Box>
        </SXContainer>
    );
};

export default SectionFifth;
