import ButtonPE from "./components/buttons/ButtonPE";
import ArrowButton from "./components/buttons/NavigationLR";
import { Stack, Typography } from "@mui/material";

import FeatureGridSection from "./components/sectionmodules/FeatureGridSection/FeatureGridSection";
import { featureItems } from "./data/FeatureGridSection";

import FeatureGrid from "./components/sectionmodules/FeatureCard/FeatureGrid.jsx";
import features from "./data/FeatureCard";

import TestimonialCardBCVC from "./components/cards/TestimonialCardBCVC/TestimonialCardBCVC.jsx";
import { testimonialCardBCVC } from "./data/TestimonialCardBCVC";

import ProfileGrid from "./components/cards/TestimonialCardBCVC/ProfileCard/ProfileGrid.jsx";

// import FeatureList from "./components/sectionmodules/FeatureListCard/FeatureList.jsx";

function App() {
  return (
    <>
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
      {/* <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
        <Typography variant="h5">Key Highlights</Typography>

        <FeatureList />
      </Stack> */}
    </>
  );
}

export default App;
