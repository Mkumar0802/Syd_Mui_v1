import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingFallback = ({ message = 'Loading...' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                gap: 2,
            }}
        >
            <CircularProgress size={50} thickness={4} />
            <Typography variant="body1" color="text.secondary">
                {message}
            </Typography>
        </Box>
    );
};

export default LoadingFallback;
