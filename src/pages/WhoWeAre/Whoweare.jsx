import React from 'react'
import HeroWhoWeAre from "./HeroWhoWeAre";
import PFHGrid from "../../components/cards/PFHCard/PFHGrid"; // default import
import { PFHPeople } from "../../data/PFHCard";
import ProfileGrid from "../../components/cards/TestimonialCardBCVC/ProfileCard/ProfileGrid.jsx";
import OffshoreTeam from "./OffshoreTeam";
import SectionEight from './SectionEight.jsx';
import TestimonialCarousel from "../../components/carousel/TestimonialCarousel.jsx";
import { visionandambitioncard } from "../../data/VisionandAmbitionCard";
import { Box, Typography } from "@mui/material";
import SXContainer from "../../layout/SXContainer";

function Whoweare() {
    return (
        <div>
            <HeroWhoWeAre />
            <PFHGrid title="Our Leadership" items={PFHPeople} containerWidth="xl" />
            <Box sx={{ width: "100%", py: 4 }}>
                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        fontWeight: 700,
                        textAlign: { xs: "center", md: "left" },
                        px: { xs: 2, sm: 3, md: 4 },

                        mx: "auto",
                    }}
                >

                    <SXContainer>New Zealand Delivery Leads</SXContainer>

                </Typography>
                <ProfileGrid />
            </Box>
            <OffshoreTeam />
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "#F5F5F5", // Light gray background as seen in design
                    py: { xs: 6, md: 8, lg: 10 }
                }}
            >


                <Box >
                    <SXContainer>
                        <Typography
                            variant="h5"
                            sx={{

                                fontWeight: 700,
                                textAlign: { xs: "center", md: "left" },


                                mx: "auto",
                            }}
                        >

                            Our Vision and Ambition

                        </Typography>
                        <TestimonialCarousel items={visionandambitioncard} title="Our Vision and Ambition" />
                    </SXContainer>
                </Box>
            </Box>
            <SectionEight />

        </div>

    )
}

export default Whoweare;