import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import MainLayout from '../layout/MainLayout';

const PlaceholderPage = ({ title }) => {
    return (
        <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
            <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    {title || 'Page Under Development'}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    We are currently working on this page. Please check back later!
                </Typography>
            </Box>
        </Container>
    );
};

export default PlaceholderPage;
