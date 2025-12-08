import ButtonPE from "./components/buttons/ButtonPE";
import ArrowButton from "./components/buttons/NavigationLR";
import { Stack, Typography, Box } from "@mui/material";

import FeatureGridSection from "./components/sectionmodules/FeatureGridSection/FeatureGridSection";
import { featureItems } from "./data/FeatureGridSection";

import FeatureGrid from "./components/sectionmodules/FeatureCard/FeatureGrid.jsx";
import features from "./data/FeatureCard";

import TestimonialCardBCVC from "./components/cards/TestimonialCardBCVC/TestimonialCardBCVC.jsx";
import { testimonialCardBCVC } from "./data/TestimonialCardBCVC";

import ProfileGrid from "./components/cards/TestimonialCardBCVC/ProfileCard/ProfileGrid.jsx";

import FeatureList from "./components/sectionmodules/FeatureListCard/FeatureList.jsx";
import AccordionFeatureList from "./components/sectionmodules/AccordionItem/AccordionFeatureList";
import FHGrid from "./components/cards/FHCard/FHGrid.jsx";
import FHCards from "./data/FHCard";
import PFHGrid from "./components/cards/PFHCard/PFHGrid"; // default import
import { PFHPeople } from "./data/PFHCard";
import CSGrid from "./components/cards/CSCard/CSGrid";
import CSItems from "./data/CSCard";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import HomePage from "./pages/Homepage/HomePage.jsx";
import FTLCardGrid from "./components/cards/FTLCard/FTLCardGrid";
import FTLCardData from "./data/FTLCard.jsx";
import AFSection from "./components/sectionmodules/AFSectionsCard/AFSectionCard.jsx";
import AFSectionItems from "./data/AFSection";
import PartnerTestimonial from "./pages/Homepage/PartnerTestimonial.jsx";
import partnerImage from "./assets/home/cloud_demo.jpg";
import HeroPage from "./pages/Homepage/HeroPage.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import HomePage1 from "./pages/Homepage/Homepage1.jsx";
import WhySydSection from "./pages/Homepage/WhySydSection.jsx";
import section_three from "./data/HomePage/index.js";
import PartnerSection from "./pages/Homepage/PartnerSection.jsx";



const partner = {
  imageSrc: partnerImage,
  eyebrow: "Partnering with New Zealand's Leading Organisations",
  quote:
    "They take real ownership – proactive, accountable, and committed to getting the job done.",
  company: "Kordia Group",
  ctaLabel: "Learn more",
  onCta: () => console.log("Partner CTA clicked"),
};





function App() {
  return (
    <>

      <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        {/* <Typography variant="h5">Header</Typography> */}
        <Header />
      </Stack >
      <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        {/* <Typography variant="h5">Home Page Hero Section (Renamed)</Typography> */}
        <HomePage1

        />
        <PartnerSection partner={partner} csItems={CSItems} />

        <WhySydSection
          title="What makes SYD Consulting your Ideal SAP Partner"
          description="New Zealand organisations choose SYD when they want exceptional SAP expertise delivered with agility, transparency, and genuine partnership."
          ctaLabel="Explore who we are"
          items={section_three.sections}
        />
        <PartnerTestimonial
          image={partnerImage}
          eyebrow="Partnering with New Zealand's Leading Organisations"
          quote="They take real ownership – proactive, accountable, and committed to getting the job done. When challenges arise, SYD step up and deliver."
          company="Kordia Group"
          ctaLabel="Learn more"
          onCta={() => console.log("CTA clicked")}
        />
      </Stack >
          <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        {/* <Typography variant="h5">Footer</Typography> */}
        <Footer />
      </Stack >
      {/* -------------------------------------------------------------- */}
      {/* 1. BUTTON GROUP */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mb: 4 }} alignItems="center" spacing={2}>
        <Typography variant="h5">Buttons</Typography>

        <div className="button-group" style={{ display: "flex", gap: "16px" }}>
          <ButtonPE label="Get in touch" size="medium" />
          <ButtonPE label="Explore who we are" size="medium" />
        </div>
      </Stack>

      {/* -------------------------------------------------------------- */}
      {/* 2. NAVIGATION ARROWS */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} alignItems="center" spacing={2}>
        <Typography variant="h5">Navigation Buttons</Typography>

        <Stack direction="row" spacing={2}>
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </Stack>
      </Stack>

      {/* -------------------------------------------------------------- */}
      {/* 3. FEATURE GRID SECTION */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} alignItems="center" spacing={2}>
        <Typography variant="h5">Why Clients Work With Us</Typography>

        <FeatureGridSection
          items={featureItems}
          containerWidth="lg"
          gap={3}
        />
      </Stack>

      {/* -------------------------------------------------------------- */}
      {/* 4. FEATURE CARD GRID */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} alignItems="center" spacing={2}>
        <Typography variant="h5">Our Capabilities</Typography>

        <FeatureGrid items={features} />
      </Stack>

      {/* -------------------------------------------------------------- */}
      {/* 5. TESTIMONIAL CARDS */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Client Testimonials</Typography>

        {testimonialCardBCVC.map((item, index) => (
          <TestimonialCardBCVC
            key={index}
            logoSrc={item.logoSrc}
            quote={item.quote}
            badgeText={item.badgeText}
            company={item.company}
            width={820}
            height={283}
          />
        ))}
      </Stack>

      {/* -------------------------------------------------------------- */}
      {/* 6. TEAM PROFILE GRID */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Meet Our Team</Typography>

        <ProfileGrid />
      </Stack>

      {/* -------------------------------------------------------------- */}
      {/* 7. FEATURE LIST SECTION */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Key Highlights</Typography>

        <FeatureList />
      </Stack>
      {/* -------------------------------------------------------------- */}
      {/* 8. ACCORDION FEATURE LIST */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Accordion Item</Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: "95%", sm: "90%", md: "1030px" }, // matches your Figma width
              minHeight: "249px", // only enforce height if required
            }}
          >
            <AccordionFeatureList />
          </Box>
        </Box>
      </Stack>
      {/* -------------------------------------------------------------- */}
      {/* 9. FH CARD GRID */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">FH Card Grid11</Typography>

        <FHGrid items={FHCards} containerWidth="lg" />
      </Stack>
      {/* -------------------------------------------------------------- */}
      {/* 10. PFH CARD GRID */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        <PFHGrid title="Our Leadership" items={PFHPeople} containerWidth="xl" />
      </Stack>
      {/* -------------------------------------------------------------- */}
      {/* 11. CS CARD GRID */}
      {/* -------------------------------------------------------------- */}
      <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">CS Card Grid</Typography>

        <CSGrid title="Customer Success Stories" items={CSItems} containerWidth="lg" />
      </Stack>
      {/* -------------------------------------------------------------- */}


      <FTLCardGrid
        title="Why Choose SYD?"
        items={FTLCardData}
      />
      {/* -------------------------------------------------------------- */}
      {/* 12. AF SECTION CARD */}
      {/* -------------------------------------------------------------- */}
      <AFSection
        title="Our Approach"
        items={AFSectionItems}
      />

      <PartnerTestimonial
        image={partnerImage}
        eyebrow="Partnering with New Zealand's Leading Organisations"
        quote="They take real ownership – proactive, accountable, and committed to getting the job done. When challenges arise, SYD step up and deliver."
        company="Kordia Group"
        ctaLabel="Learn more"
        onCta={() => console.log("CTA clicked")}
      />


      <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Footer</Typography>
        <Footer />
      </Stack >
      {/* <Stack sx={{ mt: 4, mb: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Home Page Hero Section</Typography> */}
      {/* <HomePage /> */}
      {/* <HeroPage /> */}
      {/* </Stack > */}
      <Stack sx={{ mb: 4 }} alignItems="center" spacing={2}>
        <Typography variant="h5">About Us Page Hero Section</Typography>
        <AboutUs />
      </Stack >


    </>
  );
}

export default App;
