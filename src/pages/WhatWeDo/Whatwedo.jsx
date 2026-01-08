import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Grid, Stack } from '@mui/material'
import HeroSection from '../../layout/HeroSection.jsx'
import SXContainer from '../../layout/SXContainer.jsx'
import FTLCardGrid from '../../components/cards/FTLCard/FTLCardGrid.jsx'
import heroImg from '../../assets/whychooseus/section1.jpg'
import FTLCardData from '../../data/FTLCard.jsx/index.js'
import ButtonPE from '../../components/buttons/ButtonPE.jsx'
import CSCard from '../../components/cards/CSCard/CSCard.jsx'

// Icons - you can replace these with actual icon imports or images
import SettingsIcon from '@mui/icons-material/Settings'
import CloudIcon from '@mui/icons-material/Cloud'
import SecurityIcon from '@mui/icons-material/Security'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SchoolIcon from '@mui/icons-material/School'
import SpeedIcon from '@mui/icons-material/Speed'
import AnalyticsIcon from '@mui/icons-material/Analytics'

// Typography styles as provided
const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '38px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 2.5, md: 4 },
    color: '#000000',
};

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '20px' },
    lineHeight: { xs: '22px', sm: '25px', md: '29px' },
    letterSpacing: '0%',
    color: '#000000',
};

// Consistent section spacing
const sectionPadding = { py: { xs: 6, md: 8 } };

// Service data for FTLCards
const servicesData = [
    {
        id: 1,
        icon: <SettingsIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'SAP Basis & Administration',
        description: 'Expert SAP Basis support for system maintenance, performance tuning, and infrastructure management.',
    },
    {
        id: 2,
        icon: <CloudIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'S/4HANA Migration',
        description: 'Seamless migration to SAP S/4HANA with minimal disruption and maximum business value.',
    },
    {
        id: 3,
        icon: <SecurityIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'Security & Compliance',
        description: 'Comprehensive security assessments, authorizations management, and compliance solutions.',
    },
    {
        id: 4,
        icon: <IntegrationInstructionsIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'Custom Development',
        description: 'Tailored SAP solutions and custom development to meet your unique business requirements.',
    },
    {
        id: 5,
        icon: <SupportAgentIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'Managed Services',
        description: 'Ongoing support and management to keep your SAP systems running smoothly 24/7.',
    },
    {
        id: 6,
        icon: <SchoolIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'Training & Enablement',
        description: 'Expert training programs to empower your team with SAP knowledge and best practices.',
    },
    {
        id: 7,
        icon: <SpeedIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'Performance Optimization',
        description: 'System performance analysis and optimization for enhanced efficiency and user experience.',
    },
    {
        id: 8,
        icon: <AnalyticsIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        title: 'SAP Analytics',
        description: 'Business intelligence and analytics solutions to drive data-driven decision making.',
    },
];

// Case Study / Project data for CSCarousel
const caseStudyData = [
    {
        id: 1,
        image: heroImg, // Replace with actual case study images
        title: 'SAP Technical Specialisation',
        description: 'Keep your SAP systems secure, stable, and performing at their best with proactive Basis management. We handle monitoring, patching, tuning, and security so you can focus on running your business, not managing infrastructure.',
        ctaLabel: 'Learn more about our SAP Technical expertise →',
        onCta: () => console.log('SAP Technical clicked'),
    },
    {
        id: 2,
        image: heroImg,
        title: 'SAP Module Specialisation',
        description: 'Deep functional expertise across core SAP modules - FI/CO, MM, SD, PP, QM, PM, and HR—delivered by consultants who understand your industry. From retail to manufacturing, utilities to agribusiness, we bring practical solutions that drive real business outcomes.',
        ctaLabel: 'Explore our SAP Module expertise →',
        onCta: () => console.log('SAP Module clicked'),
    },
    {
        id: 3,
        image: heroImg,
        title: 'S/4HANA Full Stack Services',
        description: 'Navigate your S/4HANA journey with confidence. From assessment and planning through migration and optimisation, we deliver complete lifecycle support that reduces risk, accelerates value, and prepares your business for the future of SAP.',
        ctaLabel: 'Plan your S/4HANA migration →',
        onCta: () => console.log('S/4HANA clicked'),
    },
    {
        id: 4,
        image: heroImg,
        title: 'SYD Consulting Managed Services',
        description: 'End-to-end SAP management that delivers stability, performance, and peace of mind. Our locally delivered managed services combine Basis support, functional expertise, security management, and incident response - giving you reliable SAP operations without the overhead.',
        ctaLabel: 'Discover our Managed Services →',
        onCta: () => console.log('Managed Services clicked'),
    },
    {
        id: 5,
        image: heroImg,
        title: 'Resource Augmentation',
        description: 'Strengthen your SAP team with flexible, trusted expertise exactly when you need it. From project peaks to specialist gaps, we provide on-demand consultants who integrate seamlessly with your team and deliver results you can count on.',
        ctaLabel: 'Get the right SAP talent →',
        onCta: () => console.log('Resource Augmentation clicked'),
    },
];

function Whatwedo() {
    const navigate = useNavigate();

    const handleCtaClick = (item) => {
        if (item.id === 1) {
            navigate('/sap-technical-specialisation');
        } else {
            console.log(`${item.title} clicked`);
        }
    };

    return (
        <main>
            {/* Hero Section */}
            <HeroSection
                background={heroImg}
                eyebrow="WHAT WE DO"
                title={["SAP Expertise that makes", "complex simple"]}
                layout={{ height: "auto" }}
            />

            {/* Introduction Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    <Typography sx={titleStyle}>
                        From Basis management to S/4HANA migration - trusted solutions that give New Zealand businesses confidence, control, and capability.
                    </Typography>

                    <Typography sx={{ ...paragraphStyle, mb: { xs: 2, md: 3 } }}>
                        SYD Consulting delivers specialist SAP consulting services across New Zealand, including SAP Basis management, S/4HANA migration, functional module expertise, managed services, and flexible resource augmentation. We combine enterprise-grade capability with local agility to help businesses unlock SAP's potential without the complexity.
                    </Typography>

                    <Typography sx={paragraphStyle}>
                        From initial implementation through to ongoing support, we deliver world-class SAP solutions that are robust, scalable, and tailored to your business needs. Whether you need proactive system management, expert guidance on your S/4HANA journey, or trusted consultants to strengthen your internal team, SYD provides the expertise and partnership you can rely on.
                    </Typography>
                </Box>
            </SXContainer>

            {/* Case Studies Grid Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                {/* Section Title and Description */}
                {/* <Box sx={{ mb: { xs: 4, md: 6 } }}>
                    <Typography sx={titleStyle}>
                        Our Work in Action
                    </Typography>
                    <Typography sx={paragraphStyle}>
                        See how we've helped New Zealand businesses transform their SAP landscapes.
                    </Typography>
                </Box> */}

                {/* Responsive Grid Layout */}
                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
                >
                    {caseStudyData.map((item) => (
                        <Grid
                            size={{ xs: 12, sm: 6, md: 4 }}
                            key={item.id}
                        >
                            <CSCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                ctaLabel={item.ctaLabel}
                                onCta={() => handleCtaClick(item)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </SXContainer>

            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <FTLCardGrid
                    title="Why Choose SYD?"
                    items={FTLCardData}
                />


            </SXContainer>


            {/* Call to Action Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <Grid container spacing={{ xs: 4, md: 8 }}
                    sx={{ mb: { xs: 6, md: 40 } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ ...titleStyle, mb: 2 }}>
                            Ready to Transform Your SAP Landscape?
                        </Typography>
                        <Typography sx={paragraphStyle}>
                            Whether you're planning an S/4HANA migration, need reliable ongoing support, or want to strengthen your internal team,
                            we're here to help.
                        </Typography>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: { xs: 'flex-start', md: 'flex-end' },
                            mt: { xs: 2, md: 0 }
                        }}
                    >
                        <Stack spacing={2} sx={{ width: { xs: '100%', md: 'auto' } }}>
                            {/* Row 1 – First button */}
                            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
                                <ButtonPE
                                    label="Contact us today →"
                                    size="medium"
                                    onClick={() => console.log('Contact clicked')}
                                    sx={{
                                        minWidth: { xs: '100%', md: 200 }
                                    }}
                                />
                            </Stack>

                            {/* Row 2 – Last two buttons */}
                            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                                <ButtonPE
                                    label="View our case studies →"
                                    size="medium"
                                    onClick={() => console.log('Case studies clicked')}
                                    sx={{
                                        minWidth: { xs: 'calc(50% - 8px)', md: 200 }
                                    }}
                                />
                                <ButtonPE
                                    label="Learn about SYD →"
                                    size="medium"
                                    onClick={() => console.log('Learn about SYD clicked')}
                                    sx={{
                                        minWidth: { xs: 'calc(50% - 8px)', md: 200 }
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

            </SXContainer>
        </main>
    )
}

export default Whatwedo