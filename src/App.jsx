// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage/HomePage";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import AboutUs from "./pages/AboutUs/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
