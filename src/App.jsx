import ButtonPE from "./components/buttons/ButtonPE"
import ArrowButton from "./components/buttons/NavigationLR";
import { Stack } from "@mui/material";
import FeatureGridSection from "./components/sectionmodules/FeatureGridSection/FeatureGridSection";
import { featureItems } from "./data/FeatureGridSection";
import FeatureGrid from "./components/sectionmodules/FeatureCard/FeatureGrid.jsx";
import features from "./data/FeatureCard";
import TestimonialCardBCVC from "./components/cards/TestimonialCardBCVC/TestimonialCardBCVC.jsx";
import { testimonialCardBCVC } from "./data/TestimonialCardBCVC";


function App() {


  return (
    <>
      <div className=" button-group" style={{ display: "flex", gap: "16px" }}>

        <ButtonPE label="Get in touch" size="medium" />
        <ButtonPE label="Explore who we are" size="medium" />

      </div>
      <Stack direction="row" spacing={2}>
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </Stack>
      <Stack sx={{ mt: 4 }}>
        <FeatureGridSection
          // title="Why clients work with us"
          items={featureItems}
          containerWidth="lg"
          gap={3}
        />
      </Stack>
      <Stack sx={{ mt: 4 }}>
          <FeatureGrid items={features} />
      </Stack>
      <Stack sx={{ mt: 4 }} spacing={4} alignItems="center">
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
    </>
  )
}

export default App
