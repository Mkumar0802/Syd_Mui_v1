import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../../../../layout/HeroSection.jsx'
import SXContainer from '../../../../layout/SXContainer.jsx'
import heroImg from '../../../../assets/whatwedo/Homepag-HeroSection1.svg'
import aiTechImg from '../../../../assets/whatwedo/whyactnow.svg'
import { Box, Typography, Grid } from '@mui/material'
import fioriIcon from '../../../../assets/whatwedo/fioruserexperience icon.svg'
import abapIcon from '../../../../assets/whatwedo/abapdevelopment.svg'
import hanaIcon from '../../../../assets/whatwedo/hanadatabase.svg'
import cloudIcon from '../../../../assets/whatwedo/cloudinfrastructure.svg'
import integrationIcon from '../../../../assets/whatwedo/integration_implementation.svg'
import deRiskedIcon from '../../../../assets/whatwedo/de-risked delivery.svg'
import localExpertiseIcon from '../../../../assets/whatwedo/local expertise.svg'
import flexibleEngagementIcon from '../../../../assets/whatwedo/flexible engagemnet models.svg'
import transparentCommIcon from '../../../../assets/whatwedo/transparent communication.svg'
import longTermPartnershipIcon from '../../../../assets/whatwedo/long term partnership.svg'
import riseIcon from '../../../../assets/whatwedo/rise with sap-syd 1.png'
import awsIcon from '../../../../assets/whatwedo/aws-syd 1.png'
import privateCloudIcon from '../../../../assets/whatwedo/Private-cloud-icon-syd 1.png'
import onPremiseIcon from '../../../../assets/whatwedo/on-premise-icon-syd 1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonPE from '../../../../components/buttons/ButtonPE.jsx'
import AccordionFeatureList from "../../../../components/sectionmodules/AccordionItem/AccordionFeatureList";
import CSCard from '../../../../components/cards/CSCard/CSCard.jsx'
import mitre10Img from '../../../../assets/whatwedo/CustomerSuccessStory.svg'
import moduleImg1 from '../../../../assets/home/service1.jpg'
import moduleImg2 from '../../../../assets/home/service2.jpg'
import moduleImg3 from '../../../../assets/home/service3.jpg'

// Style definitions
const sectionPadding = {
    py: { xs: 6, md: 10 }
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

const servicesAccordionData = [
    {
        id: 'assessment',
        title: 'Assessment & Strategy',
        subtitle: 'Understand your starting point and define the optimal path forward',
        points: [
            'Current landscape assessment and technical readiness analysis',
            'Business case development and ROI modelling',
            'Deployment option evaluation (cloud, on-premise, hybrid)',
            'Migration strategy definition (Greenfield, Brownfield, Bluefield)',
            'Roadmap development with phased milestones and resource requirements'
        ]
    },
    {
        id: 'migration',
        title: 'Migration & Implementation',
        subtitle: 'Execute your S/4HANA transformation with precision and minimal disruption',
        points: [
            'Project planning and governance framework',
            'System conversion and data migration',
            'Custom code remediation and simplification',
            'Integration architecture design and implementation',
            'SAP Fiori deployment and UX modernisation',
            'Comprehensive testing and quality assurance',
            'Change management and training programmes',
            'Cutover planning and go-live support'
        ]
    },
    {
        id: 'optimisation',
        title: 'Optimisation & Innovation',
        subtitle: 'Maximise value from your S/4HANA investment',
        points: [
            'Post-go-live stabilisation and hyper-care',
            'Business process optimisation using S/4HANA capabilities',
            'Advanced analytics and embedded intelligence activation',
            'Continuous improvement roadmap',
            'Performance tuning and technical optimisation',
            'Innovation workshops and value realisation reviews'
        ]
    }
];

const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '38px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 4, md: 6 },
    color: '#000000',
}

const capabilityTitleStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: { xs: '18px', md: '20px' },
    lineHeight: '28px',
    color: '#000000',
    mb: 2,
}

const capabilityDescriptionStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '14px', md: '15px' },
    lineHeight: { xs: '20px', md: '22px' },
    color: '#000000',
}
const itemTitleStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: { xs: '18px', md: '20px' },
    lineHeight: '28px',
    color: '#000000',
    mb: 1,
}


const sectionTitleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '20px', sm: '24px', md: '32px' },
    lineHeight: { xs: '28px', sm: '32px', md: '40px' },
    letterSpacing: '0%',
    mb: { xs: 3, md: 5 },
    color: '#000000',
}

const moduleExpertiseData = [
    {
        id: 1,
        image: moduleImg1,
        title: 'Finance & Controlling (FI/CO)',
        description: 'Complete financial management from general ledger and accounts payable/receivable through to cost centre accounting, profitability analysis, and financial reporting.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 2,
        image: moduleImg2,
        title: 'Materials Management (MM)',
        description: 'End-to-end procurement and inventory management covering purchasing, goods receipt, invoice verification, and material valuation.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 3,
        image: moduleImg3,
        title: 'Sales & Distribution (SD)',
        description: 'Comprehensive sales process management from inquiry and quotation through to order fulfilment, shipping, and billing.',
        ctaLabel: 'Learn more →',
    }
];


function S4hanaFullStackServices() {
    const navigate = useNavigate();

    const handleCtaClick = (item) => {
        // Handle CTA click logic, e.g., navigate to a specific module page
        console.log(`Clicked on ${item.title}`);
        navigate('/what-we-do/sap-module-specialisation');
    };

    return (
        <div>
            <HeroSection
                background={heroImg}
                eyebrow="S/4HANA FULLSTACK SERVICES"
                title={["Navigate your S/4HANA", "journey with confidence"]}
                layout={{ height: "auto" }}
            />

            <SXContainer maxWidth="xl">
                {/* Introduction Section */}
                <Box {...sectionPadding}>
                    <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                        <Typography sx={paragraphStyle}>
                            SAP S/4HANA is SAP's next-generation ERP platform, built on the in-memory HANA database to deliver real-time analytics, simplified data models, and modern user experiences. With SAP ending mainstream support for ECC in 2027, organisations must plan their migration strategy now. SYD provides complete S/4HANA lifecycle services from assessment and roadmap development through migration execution and ongoing optimisation.
                        </Typography>

                        <Typography sx={paragraphStyle}>
                            The move to S/4HANA represents both significant opportunity and complexity. It's not just a technical upgrade, it's a chance to reimagine business processes, modernise user experiences, and build a digital foundation for future growth. But the stakes are high, and the path can be uncertain.
                        </Typography>

                        <Typography sx={paragraphStyle}>
                            SYD removes the uncertainty. We've guided New Zealand organisations through successful S/4HANA transformations, combining deep technical expertise with pragmatic project delivery. Whether you're just beginning to explore S/4HANA or ready to execute your migration, we provide the full-stack capability and trusted partnership you need to succeed.
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>

            <SXContainer maxWidth="xl">
                <Typography component="h2" sx={titleStyle}>
                    Complete Lifecycle S/4HANA Services
                </Typography>
                <AccordionFeatureList data={servicesAccordionData} />
            </SXContainer>


            {/*  Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Typography component="h2" sx={titleStyle}>

                </Typography>

                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
                >
                    {/* FIORI & User Experience */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box>
                            <Box
                                sx={{
                                    width: '64px',
                                    height: '64px',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                }}
                            >
                                <Box component="img" src={fioriIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                FIORI & User Experience
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Deploy SAP Fiori applications across 600+ business roles with intuitive, mobile-ready interfaces. Create custom apps using low-code/no-code tools or advanced developer frameworks. Implement the Fiori Launchpad as your central hub for personalised, role-based access.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* ABAP Development */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box>
                            <Box
                                sx={{
                                    width: '64px',
                                    height: '64px',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                }}
                            >
                                <Box component="img" src={abapIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                ABAP Development
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Leverage ABAP for robust backend extensibility and customisation. Build bespoke reports, automated workflows, and seamless integrations. Write upgrade-safe, modular code that supports long-term agility and innovation.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* HANA Database */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box>
                            <Box
                                sx={{
                                    width: '64px',
                                    height: '64px',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                }}
                            >
                                <Box component="img" src={hanaIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                HANA Database
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Harness the power of in-memory computing for real-time analytics, simplified data models, and enhanced performance. Optimise HANA for your specific workloads and business requirements.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Cloud & Infrastructure */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box>
                            <Box
                                sx={{
                                    width: '64px',
                                    height: '64px',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                }}
                            >
                                <Box component="img" src={cloudIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Cloud & Infrastructure
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Deploy S/4HANA on your chosen infrastructure—SAP RISE, private cloud, public cloud (AWS, Azure, Google Cloud), or on-premise. We've delivered the world's first SAP migration to Microsoft Azure platform and bring certified cloud expertise.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Integration & Extensions */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box>
                            <Box
                                sx={{
                                    width: '64px',
                                    height: '64px',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                }}
                            >
                                <Box component="img" src={integrationIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Integration & Extensions
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Connect S/4HANA with existing systems, third-party applications, and emerging technologies. Design integration architectures that are secure, scalable, and maintainable.
                            </Typography>
                        </Box>
                    </Grid>




                </Grid>
            </SXContainer>

            {/* Why Act Now Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    {/* Left Column - Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            component="h2"
                            sx={{
                                fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                fontWeight: 500,
                                fontSize: { xs: '28px', sm: '32px', md: '42px' },
                                lineHeight: { xs: '36px', sm: '40px', md: '50px' },
                                mb: { xs: 3, md: 4 },
                                color: '#000000',
                            }}
                        >
                            Why Act Now?
                        </Typography>

                        <Box component="ul" sx={{ pl: 3, m: 0 }}>
                            <Box component="li" >
                                <Typography >
                                    2027 Deadline Approaching
                                </Typography>
                                <Typography component="li" sx={{ ...paragraphStyle, mb: 0 }}>
                                    SAP's mainstream maintenance for ECC ends in 2027.
                                </Typography>
                            </Box>

                            <Box component="li" >
                                <Typography component="li" sx={{ ...paragraphStyle, mb: 0 }}>
                                    While extended support will be available, organisations that delay face increasing technical debt, limited support, and missed opportunities for digital transformation.
                                </Typography>
                            </Box>

                            <Box component="li" >
                                <Typography component="li" sx={paragraphStyle} mb={0}>
                                    Business Value Beyond Compliance
                                </Typography>
                                <Typography component="li" sx={{ ...paragraphStyle, mb: 0 }}>
                                    S/4HANA offers transformational capabilities with real-time insights, simplified processes, AI/ML enablement, and modern user experiences.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column - Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src={aiTechImg}
                            alt="AI Technology and S/4HANA Innovation"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '440px',
                                objectFit: 'contain',
                                borderRadius: '0px',
                                // boxShadow: '0 4px 20px rgba(0,0,0,0.1)', // Optional: check if SVG needs shadow
                            }}
                        />
                    </Grid>
                </Grid>
            </SXContainer>

            {/* The SYD Advantage Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Typography component="h2" sx={titleStyle}>
                    The SYD Advantage
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
                >
                    {/* De-Risked Delivery */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={deRiskedIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                De-Risked Delivery
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                We've successfully delivered complex SAP transformations for some New Zealand's leading enterprises. Our proven methodologies, experienced team, and local presence minimise project risk.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Local Expertise, Global Standards */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={localExpertiseIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Local Expertise, Global Standards
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Access SAP-certified consultants who understand New Zealand business requirements while bringing international best practices and technical standards.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Flexible Engagement Models */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={flexibleEngagementIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Flexible Engagement Models
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Choose the support model that fits your needs, choosing between full project delivery, co-delivery with your internal team, or strategic advisory with tactical augmentation.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Transparent Communication */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={transparentCommIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Transparent Communication
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                No jargon, no surprises. We communicate progress, risks, and decisions clearly so you always know where you stand.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Long-Term Partnership */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={longTermPartnershipIcon} sx={{ width: 64, height: 64 }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Long-Term Partnership
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                S/4HANA implementation is just the beginning. We provide ongoing managed services and optimisation support to ensure sustained value delivery.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </SXContainer>

            {/* Deployment Options Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Typography component="h2" sx={titleStyle}>
                    Deployment Options We Support
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
                >
                    {/* SAP RISE & SAP GROW */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={riseIcon} sx={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                SAP RISE & SAP GROW
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Cloud-based subscription services with SAP managing infrastructure and baseline support.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Public Cloud */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={awsIcon} sx={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Public Cloud
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                S/4HANA Cloud on AWS, Azure, or Google Cloud Platform with flexible infrastructure and rapid deployment.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Private Cloud */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={privateCloudIcon} sx={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                Private Cloud
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Dedicated cloud environments for enhanced control, customisation, and regulatory compliance.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* On-Premise */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box>
                            <Box sx={{ mb: 2.5 }}>
                                <Box component="img" src={onPremiseIcon} sx={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </Box>
                            <Typography sx={capabilityTitleStyle}>
                                On-Premise
                            </Typography>
                            <Typography sx={capabilityDescriptionStyle}>
                                Traditional on-premise deployment for organisations requiring complete infrastructure ownership.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </SXContainer>

            {/* Customer Success Story Section */}
            <Box sx={{ bgcolor: '#F5F5F5', py: { xs: 6, md: 8 } }}>
                <SXContainer maxWidth="xl">
                    <Typography component="h2" sx={sectionTitleStyle}>Customer Success Story</Typography>
                    <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src={mitre10Img}
                                alt="Mitre 10 outdoor furniture"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '440px',
                                    objectFit: 'contain',
                                    borderRadius: 0,
                                    display: 'block'
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{
                                ...itemTitleStyle,
                                fontSize: { xs: '22px', md: '28px' },
                                mb: 3
                            }}>Mitre 10</Typography>
                            <Typography sx={paragraphStyle}>
                                Mitre 10 embarked on a major digital transformation to
                                modernize operations and migrate to SAP S/4HANA RISE
                                Private Cloud, one of the first implementations of its kind in
                                New Zealand. ​ They partnered with SYD Consulting to support them through their transformation journey. With no internal
                                SAP capability and limited experience in large-scale ERP projects, Mitre 10 needed expert guidance to build capability, understand their new operating model, and transition successfully into ongoing support.
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <ButtonPE
                                    label="View Case Study →"
                                    variant="contained"
                                    onClick={() => navigate('/case-studies')}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </SXContainer>
            </Box>


            {/* Plan Your S/4HANA Journey Section */}
            <SXContainer maxWidth="xl" {...sectionPadding}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography component="h2" sx={{
                            ...titleStyle,
                            mb: 3
                        }}>
                            Plan Your S/4HANA Journey with SYD
                        </Typography>
                        <Typography sx={paragraphStyle}>
                            The time to act is now. Whether you need a roadmap assessment, full migration delivery, or ongoing optimisation support, SYD brings the expertise and partnership to make your S/4HANA transformation a success.
                        </Typography>

                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            flexDirection: 'column',
                            justifyContent: { xs: 'flex-start', md: 'flex-end' }
                        }}>
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'flex-start', md: 'flex-end' }, mb: 2 }}>
                                <ButtonPE
                                    label="Learn about Managed Services"
                                    endIcon={<ArrowForwardIcon />}
                                />
                                <ButtonPE
                                    label="View our track record"
                                    endIcon={<ArrowForwardIcon />}
                                />
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </SXContainer>
        </div>
    )
}

export default S4hanaFullStackServices