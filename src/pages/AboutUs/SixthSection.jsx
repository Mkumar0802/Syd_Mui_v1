import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ButtonPE from '../../components/buttons/ButtonPE';
import section6 from '../../assets/aboutus/Mask_group.png';

const SixthSection = () => {
  const theme = useTheme();                                                // moved ABOVE return
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));            // same

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Grid container spacing={4} alignItems="center">

        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Ready to Work Together?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Whether you're planning an S/4HANA transformation, need expert SAP
            technical support, or want a trusted partner to simplify your SAP landscape,
            we're here to help.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <ButtonPE
                label="Get Started"
                variant="contained"
                size="medium"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ButtonPE
                label="Contact Us"
                variant="outlinedWhite"
                size="medium"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ButtonPE
                label="Learn More"
                variant="text"
                size="medium"
                fullWidth
                sx={{ color: theme.palette.text.primary }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={section6}
            alt="About us section illustration"
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default SixthSection;
