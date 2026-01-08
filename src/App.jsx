// src/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingFallback from "./components/LoadingFallback";

// Lazy load layout components
const MainLayout = lazy(() => import("./layout/MainLayout"));
const AppLayout = lazy(() => import("./layout/AppLayout"));

// Lazy load page components
const HomePage = lazy(() => import("./pages/Homepage/HomePage"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs/WhyChooseUs"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage"));
const Whoweare = lazy(() => import("./pages/WhoWeAre/Whoweare"));
const SapPartnerEdge = lazy(() => import("./pages/SapPartnerEdge/SapPartnerEdge"));
const Whatwedo = lazy(() => import("./pages/WhatWeDo/Whatwedo"));
const SAPTechnicalSpecialiSation = lazy(() => import("./pages/WhatWeDo/SAPTechnicalSpecialiSation/SAPTechnicalSpecialiSation"));

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback message="Loading application..." />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/AppLayout" element={<AppLayout />} />

              {/* Who we are */}
              <Route path="/who" element={<Whoweare />} />
              <Route path="/our-team" element={<PlaceholderPage title="Our Team" />} />
              <Route path="/consultant-opportunities" element={<PlaceholderPage title="Consultant Opportunities" />} />
              <Route path="/job-opportunities" element={<PlaceholderPage title="Job Opportunities" />} />
              <Route path="/sap-partner-edge" element={<SapPartnerEdge />} />

              {/* What we do */}
              <Route path="/what" element={<Whatwedo />} />
              <Route path="/sap-technical-specialisation" element={<SAPTechnicalSpecialiSation />} />
              <Route path="/sap-module-specialisation" element={<PlaceholderPage title="SAP Module Specialisation" />} />
              <Route path="/sap-s4hana-services" element={<PlaceholderPage title="SAP S/4HANA Full Stack Services" />} />
              <Route path="/managed-services" element={<PlaceholderPage title="SYD Consulting Managed Services" />} />
              <Route path="/resource-augmentation" element={<PlaceholderPage title="Resource Augmentation" />} />

              {/* Our Work */}
              <Route path="/work" element={<PlaceholderPage title="Our Work" />} />
              <Route path="/client-video" element={<PlaceholderPage title="Client Video" />} />
              <Route path="/case-studies" element={<PlaceholderPage title="Case Studies" />} />
              <Route path="/case-study-1" element={<PlaceholderPage title="Case Study 1" />} />
              <Route path="/case-study-2" element={<PlaceholderPage title="Case Study 2" />} />
              <Route path="/case-study-3" element={<PlaceholderPage title="Case Study 3" />} />
              <Route path="/client-testimonials" element={<PlaceholderPage title="Client Testimonials" />} />

              {/* Our Thinking */}
              <Route path="/thinking" element={<PlaceholderPage title="Our Thinking" />} />
              <Route path="/news-insights" element={<PlaceholderPage title="News & Insights" />} />
              <Route path="/stay-connected" element={<PlaceholderPage title="Stay Connected" />} />

              {/* Contact Us */}
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/contact-form" element={<PlaceholderPage title="Contact Form" />} />
              <Route path="/address-details" element={<PlaceholderPage title="Address Details" />} />

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
