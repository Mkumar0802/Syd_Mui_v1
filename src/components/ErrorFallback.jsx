import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';

const ErrorFallback = ({ error, errorInfo, onReset }) => {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    const handleReload = () => {
        if (onReset) {
            onReset();
        }
        window.location.reload();
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        textAlign: 'center',
                        borderRadius: 2,
                        maxWidth: 600,
                    }}
                >
                    <ErrorOutlineIcon
                        sx={{
                            fontSize: 80,
                            color: 'error.main',
                            mb: 2,
                        }}
                    />

                    <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                        Oops! Something went wrong
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        We're sorry for the inconvenience. An unexpected error has occurred.
                        Please try refreshing the page or return to the homepage.
                    </Typography>

                    {process.env.NODE_ENV === 'development' && error && (
                        <Box
                            sx={{
                                mt: 3,
                                p: 2,
                                bgcolor: 'grey.100',
                                borderRadius: 1,
                                textAlign: 'left',
                                overflow: 'auto',
                                maxHeight: 200,
                            }}
                        >
                            <Typography variant="caption" component="pre" sx={{ fontSize: '0.75rem' }}>
                                {error.toString()}
                                {errorInfo && errorInfo.componentStack}
                            </Typography>
                        </Box>
                    )}

                    <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            startIcon={<RefreshIcon />}
                            onClick={handleReload}
                            size="large"
                        >
                            Reload Page
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<HomeIcon />}
                            onClick={handleGoHome}
                            size="large"
                        >
                            Go to Homepage
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default ErrorFallback;
