import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImg2 from '../../assets/aboutus/sectionthree.jpg';
import SXContainer from '../../layout/SXContainer';

const StoryBanner = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '300px', sm: '400px', md: '550px' }, // More granular height steps
                backgroundImage: ` url(${heroImg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                color: 'white',
            }}
        >
            <SXContainer maxWidth="xl" py={{ xs: 4, sm: 6, md: 10 }}> {/* Reduced py on mobile */}
                <Box sx={{ maxWidth: '800px' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            display: 'block',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: { xs: '14px', md: '16px' },
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            mb: 1,
                            textTransform: 'uppercase',
                        }}
                    >
                        Our Story
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '24px', sm: '28px', md: '32px' },
                            fontWeight: 700,
                            lineHeight: 1.2,
                            fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        }}
                    >
                        Built for New Zealand Businesses
                    </Typography>
                </Box>
            </SXContainer>
        </Box>
    );
};

export default StoryBanner;
