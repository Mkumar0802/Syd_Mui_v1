// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage/HomePage";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import AppLayout from "./layout/AppLayout";
import PlaceholderPage from "./pages/PlaceholderPage";
import Whoweare from "./pages/WhoWeAre/Whoweare";
import SapPartnerEdge from "./pages/SapPartnerEdge/SapPartnerEdge";


export default function App() {
  return (
    <BrowserRouter>
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
          <Route path="/what" element={<PlaceholderPage title="What We Do" />} />
          <Route path="/sap-technical-specialisation" element={<PlaceholderPage title="SAP Technical Specialisation" />} />
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
    </BrowserRouter>
  );
}
