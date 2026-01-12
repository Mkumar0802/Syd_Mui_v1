import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import HeroSection from '../../../layout/HeroSection.jsx'
import SXContainer from '../../../layout/SXContainer.jsx'
import heroImg from '../../../assets/whatwedo/sydmanagedservices-hero section-syd.svg'
import ButtonPE from '../../../components/buttons/ButtonPE.jsx'
import AccordionFeatureList from "../../../components/sectionmodules/AccordionItem/AccordionFeatureList";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AFCard from '../../../components/sectionmodules/AFSectionsCard/AFCard.jsx'
import ArrowButton from '../../../components/buttons/NavigationLR.jsx'
import AFSectionItems from '../../../data/AFSection/index.js'
// Asset imports
import localIcon from '../../../assets/whatwedo/local expertise.svg'
import transIcon from '../../../assets/whatwedo/transparent communication.svg'
import flexIcon from '../../../assets/whatwedo/flexible engagemnet models.svg'
import trustIcon from '../../../assets/whatwedo/long term partnership.svg'
import costIcon from '../../../assets/whatwedo/de-risked delivery.svg'
import mitre10Img from '../../../assets/whatwedo/CustomerSuccessStory.svg'

const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '38px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 4, md: 6 },
    color: '#000000',
}

const sectionTitleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '20px', sm: '24px', md: '32px' },
    lineHeight: { xs: '28px', sm: '32px', md: '40px' },
    letterSpacing: '0%',
    mb: { xs: 2, md: 4 },
    color: '#000000',
}

const sectionPadding = {
    py: { xs: 4, md: 6 }
}

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '18px' },
    lineHeight: { xs: '22px', sm: '25px', md: '27px' },
    letterSpacing: '0%',
    color: '#000000',
    mb: 2,
}

const itemTitleStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: { xs: '18px', md: '20px' },
    lineHeight: '28px',
    color: '#000000',
    mb: 1,
}

const capabilityDescriptionStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '14px', md: '15px' },
    lineHeight: { xs: '20px', md: '22px' },
    color: '#000000',
}

const servicesAccordionData = [
    {
        id: 'technical-support',
        title: 'Technical Support & Basis Management',
        subtitle: 'Ensure the health and stability of your SAP environment with proactive technical management.',
        points: [
            '24/7 system monitoring and proactive issue resolution',
            'Performance tuning and capacity management',
            'Security patching and SAP note implementation',
            'Database administration and optimisation',
            'Backup, recovery, and disaster preparedness',
            'System upgrades and infrastructure changes'
        ]
    },
    {
        id: 'functional-support',
        title: 'Functional Application Support',
        subtitle: 'Expert support across your SAP functional modules to keep business processes running smoothly.',
        points: [
            'Configuration management across SAP modules (FI/CO, MM, SD, PP, etc.)',
            'Process troubleshooting and enhancement support',
            'Report development and modification',
            'Master data management and governance',
            'Integration support with connected systems',
            'Monthly release management and testing'
        ]
    },
    {
        id: 'security-compliance',
        title: 'Security & Compliance',
        subtitle: 'Protect your business-critical data while ensuring regulatory compliance and audit readiness.',
        points: [
            'SAP authorisations design and management',
            'Security audit and compliance monitoring',
            'User access governance and SOD controls',
            'Security patch assessment and deployment',
            'Regulatory compliance support (SOX, GDPR, etc.)'
        ]
    },
    {
        id: 'incident-change',
        title: 'Incident & Change Management',
        subtitle: 'Structured response and controlled change processes to minimise disruption and risk.',
        points: [
            'Structured incident response with defined SLAs',
            'Root cause analysis and resolution documentation',
            'Change request assessment and implementation',
            'Emergency support with rapid escalation paths',
            'Service reporting and continuous improvement reviews'
        ]
    },
    {
        id: 'strategic-advisory',
        title: 'Strategic Advisory',
        subtitle: 'Forward-looking guidance to align your SAP roadmap with evolving business objectives.',
        points: [
            'Quarterly business reviews and roadmap planning',
            'Emerging SAP capabilities assessment',
            'Optimisation recommendations and value realisation',
            'Technology trend guidance and strategic planning'
        ]
    }
];



const AFSectionItems1 = [
    {
        image: localIcon,
        title: "Local Ownership & Accountability",
        description: "Our New Zealand-based team works alongside you with genuine accountability. We agree SLA and deliver accordingly, we understand the local context, and operate as part of your team"
    },
    {
        image: transIcon,
        title: "Transparency & Communication",
        description: "No black box service delivery. We provide clear reporting, regular communication, and proactive updates. You always know what we're working on, what issues we're managing, and how your SAP landscape is performing."
    },
    {
        image: flexIcon,
        title: "Flexible & Scalable",
        description: "Our managed services flex with your needs. We ramp up support during peak periods, add specialist capability for projects, or adjust service levels as requirements change."
    },
    {
        image: trustIcon,
        title: "Trusted Expertise",
        description: "Work with senior SAP consultants. Our team includes specialists who are requested by name and trusted across some of New Zealand's leading enterprises."
    },
    {
        image: costIcon,
        title: "Cost Predictability",
        description: "Fixed monthly pricing with transparent inclusions = no surprise charges, no hidden fees. Plan your SAP budget with confidence."
    }
];

const benefitsData = [
    "Organisations without full-time SAP teams",
    "Businesses seeking to reduce SAP operational costs",
    "Companies needing after-hours or weekend support coverage",
    "Enterprises planning S/4HANA migrations requiring stable ongoing support",
    "Teams facing recruitment challenges for specialist SAP roles",
    "Growing businesses requiring scalable SAP expertise"
];



function Consulting_Manged_Services() {
    const navigate = useNavigate();
    const [activeBenefit, setActiveBenefit] = useState(0);

    return (
        <div>
            <HeroSection
                background={heroImg}
                eyebrow=""
                title={["Expert SAP Management", "Basis, Functional Support & Security"]}
                layout={{ height: "auto" }}
            />

            <SXContainer maxWidth="xl">
                {/* Introduction Section */}
                <Box {...sectionPadding}>
                    <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                        <Typography sx={paragraphStyle}>
                            In an increasingly complex digital landscape, maintaining the stability, performance, and security of your SAP environment is critical. SYD Consulting Provides comprehensive Managed Services that go beyond traditional support, acting as a true extension of your team to ensure your SAP systems deliver maximum value to your business.
                        </Typography>

                        <Typography sx={paragraphStyle}>
                            Our approach is built on deep technical expertise, proactive management, and a commitment to understanding your unique operational requirements. We don't just react to issues; we anticipate them, providing the stability you need to focus on innovation and growth.
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>

            {/* What's Included Section */}
            <SXContainer maxWidth="xl" {...sectionPadding} sx={{ pt: 0 }}>
                <Typography component="h2" sx={sectionTitleStyle}>
                    What's Included
                </Typography>
                <AccordionFeatureList data={servicesAccordionData} />
            </SXContainer>

            {/* Service Delivery Models Section */}
            <Box sx={{ bgcolor: '#F9F9F9' }}>
                <SXContainer maxWidth="xl" {...sectionPadding}>
                    <Typography component="h2" sx={sectionTitleStyle}>
                        Service Delivery Models
                    </Typography>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{
                                bgcolor: '#E0E0E0',
                                p: { xs: 2, md: 3 },
                                height: '100%',
                            }}>
                                <Typography sx={{ ...itemTitleStyle, mb: 1.5 }}>
                                    Fully Managed
                                </Typography>
                                <Typography sx={capabilityDescriptionStyle}>
                                    Complete SAP operations management where we handle everything from daily monitoring to strategic planning. Ideal for organisations without dedicated SAP teams or those seeking to fully outsource SAP management.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{
                                bgcolor: '#E0E0E0',
                                p: { xs: 2, md: 3 },
                                height: '100%',
                            }}>
                                <Typography sx={{ ...itemTitleStyle, mb: 1.5 }}>
                                    Co-Managed
                                </Typography>
                                <Typography sx={capabilityDescriptionStyle}>
                                    Partnership model where we complement your internal SAP capability with specialist expertise, after-hours coverage, or additional capacity. Perfect for teams who want to maintain strategic control while augmenting operational support.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{
                                bgcolor: '#E0E0E0',
                                p: { xs: 2, md: 3 },
                                height: '100%',
                            }}>
                                <Typography sx={{ ...itemTitleStyle, mb: 1.5 }}>
                                    Targeted Support
                                </Typography>
                                <Typography sx={capabilityDescriptionStyle}>
                                    Focused managed services for specific areas such as Basis management, security and authorisations, or functional support for particular modules. Suitable for organisations with selective capability gaps.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </SXContainer>
            </Box>

            {/* Our Approach Carousel Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <Typography
                    component="h2"
                    sx={sectionTitleStyle}
                >
                    The SYD Difference
                </Typography>

                {/* Carousel Track */}
                <Box
                    data-carousel="approach"
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: { xs: 2, md: 3 },
                        pb: 2,
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {AFSectionItems1.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                flex: '0 0 calc(31.25% - 16px)', // Shows 3.2 cards (3 full + 20% of 4th)
                                minWidth: { xs: '280px', sm: '320px', md: '360px' },
                                scrollSnapAlign: 'start',
                            }}
                        >
                            <AFCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                sx={{
                                    height: '100%',
                                    minHeight: { xs: '400px', md: '450px' },
                                }}
                            />
                        </Box>
                    ))}
                </Box>

                {/* Navigation Arrows */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        justifyContent: 'flex-end',
                        mt: 4,
                    }}
                >
                    <ArrowButton
                        direction="left"
                        onClick={() => {
                            const container = document.querySelector('[data-carousel="approach"]');
                            if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                        }}
                        sx={{
                            bgcolor: '#8A38F5',
                            color: 'white',
                            '&:hover': { bgcolor: '#7a2ee3' }
                        }}
                    />
                    <ArrowButton
                        direction="right"
                        onClick={() => {
                            const container = document.querySelector('[data-carousel="approach"]');
                            if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                        }}
                        sx={{
                            bgcolor: '#8A38F5',
                            color: 'white',
                            '&:hover': { bgcolor: '#7a2ee3' }
                        }}
                    />
                </Box>
            </SXContainer>


            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                    <Typography component="h2" sx={sectionTitleStyle}>
                        Who Benefits from Managed Services?
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {benefitsData.map((benefit, idx) => {
                            const isActive = activeBenefit === idx;
                            return (
                                <Box
                                    key={idx}
                                    onMouseEnter={() => setActiveBenefit(idx)}
                                    onMouseLeave={() => setActiveBenefit(0)} // Resets to first item being default
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 3,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Box
                                        className="arrow-box"
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            bgcolor: isActive ? '#8A38F5' : '#E0E0E0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            flexShrink: 0
                                        }}
                                    >
                                        <KeyboardArrowRightIcon
                                            className="arrow-icon"
                                            sx={{
                                                color: isActive ? '#FFFFFF' : '#000000',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    </Box>
                                    <Typography sx={{
                                        ...paragraphStyle,
                                        mb: 0,
                                        fontSize: { xs: '16px', md: '20px' },
                                        color: '#000000',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {benefit}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </SXContainer>

            {/* Getting Started Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                    <Typography component="h2" sx={sectionTitleStyle}>
                        Getting Started
                    </Typography>
                    <Typography sx={paragraphStyle}>
                        Transitioning to managed services is straightforward and fast. We get up to speed quickly, understanding your environment, spotting opportunities, and designing a service model that fits your business. Our team knows SAP inside out, so we don't need months to figure things out. We work at your pace, whether you need immediate support or a carefully phased transition. Either way, there are no surprises, no disruption, and no lengthy handovers, just reliable expertise when you need it.
                    </Typography>
                </Box>
            </SXContainer>

            {/* Customer Success Story Section */}
            <Box sx={{ bgcolor: '#F5F5F5', ...sectionPadding }}>
                <SXContainer maxWidth="xl">
                    <Typography sx={sectionTitleStyle}>Customer Success Story</Typography>
                    <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src={mitre10Img}
                                alt="Mitre 10 outdoor furniture"
                                sx={{
                                    width: '100%',
                                    height: { xs: '300px', md: '400px' },
                                    borderRadius: 0,
                                    display: 'block',
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{
                                ...itemTitleStyle,
                                fontSize: { xs: '22px', md: '28px' },
                                mb: 2
                            }}>Tait Communications</Typography>
                            <Typography sx={{ ...paragraphStyle, mb: 3 }}>
                                Tait Communications is a global provider of critical communications solutions, supporting customers in public safety, utilities, and transport sectors worldwide. Their SAP landscape, built on a legacy platform, remains central to managing key operational and financial processes. Tait partnered with SYD Consulting to provide Managed Services including day-to-day support and maintenance of their legacy SAP environment. The primary objectives were to reduce operational costs, improve process efficiency, and ensure business continuity while managing the complexities of older technology.
                            </Typography>
                            <ButtonPE
                                label="View case study →"
                                variant="contained"
                                onClick={() => navigate('/case-studies/mitre10')}
                            />
                        </Grid>
                    </Grid>
                </SXContainer>
            </Box>

            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid>
                        <Typography component="h2" sx={sectionTitleStyle}>
                            Getting Started
                        </Typography>
                        <Typography sx={paragraphStyle}>
                            Transitioning to managed services is straightforward and fast. We get up to speed quickly, understanding your environment, spotting opportunities, and designing a service model that fits your business. Our team knows SAP inside out, so we don't need months to figure things out. We work at your pace, whether you need immediate support or a carefully phased transition. Either way, there are no surprises, no disruption, and no lengthy handovers, just reliable expertise when you need it.
                        </Typography>

                    </Grid>
                </Grid>
            </SXContainer>

            {/* Final CTA Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography component="h2" sx={sectionTitleStyle}>
                            Experience SAP Operations with Peace of Mind
                        </Typography>
                        <Typography sx={paragraphStyle}>
                            Whether you need comprehensive SAP management or targeted support for specific areas, SYD delivers the reliability, expertise, and partnership your business deserves.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { md: 'flex-end' }, pt: { md: 2 } }}>
                        <ButtonPE
                            label="Explore Resource Augmentation →"
                            variant="contained"
                            sx={{ bgcolor: '#8A38F5', '&:hover': { bgcolor: '#7730d4' } }}
                            onClick={() => navigate('/what-we-do/resource-augmentation')}
                        />
                    </Grid>
                </Grid>
            </SXContainer>
        </div>
    )
}

export default Consulting_Manged_Services