import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import ButtonPE from '../../components/buttons/ButtonPE';
import section6 from '../../assets/aboutus/Mask_group.png';
import SXContainer from '../../layout/SXContainer';

const SixthSection = () => {
  return (
    <SXContainer maxWidth="xl" py={{ xs: 6, sm: 8, md: 12 }}>
      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

        {/* Left Content */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2.5,
              fontSize: { xs: '28px', sm: '32px', md: '36px' },
              fontFamily: '"Microsoft JhengHei UI", sans-serif',
            }}
          >
            Ready to Work Together?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: 'text.primary',
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px'
            }}
          >
            Whether you're planning an S/4HANA transformation, need expert SAP
            technical support, or want a trusted partner to simplify your SAP landscape,
            we're here to help.
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            flexWrap: 'wrap',
            width: '100%'
          }}>
            <ButtonPE
              label="Get in touch →"
              size="medium"
              sx={{
                whiteSpace: 'nowrap',
                px: 3,
                width: { xs: '100%', sm: 'auto' }
              }}
            />

            <ButtonPE
              label="Explore what we do →"
              size="medium"
              sx={{
                whiteSpace: 'nowrap',
                px: 3,
                width: { xs: '100%', sm: 'auto' }
              }}
            />

            <ButtonPE
              label="Customer Success Stories →"
              size="medium"
              sx={{
                whiteSpace: 'nowrap',
                px: 3,
                width: { xs: '100%', sm: 'auto' }
              }}
            />
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={section6}
            alt="Ready to Work Together handshake"
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: { xs: '300px', md: '400px' },
              objectFit: 'cover',
              borderRadius: '8px', // Subtle radius for polished look
            }}
          />
        </Grid>

      </Grid>
    </SXContainer>
  );
};

export default SixthSection;
