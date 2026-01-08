import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingFallback from "../components/LoadingFallback";

const MainLayout = () => {
  return (
    <Box>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <Box component="main">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback message="Loading page..." />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Box>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </Box>
  );
};

export default MainLayout;