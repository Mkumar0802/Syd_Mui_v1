import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../../../layout/HeroSection.jsx'
import SXContainer from '../../../layout/SXContainer.jsx'
import heroImg from '../../../assets/aboutus/hero.jpg'
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack } from '@mui/material'
import CSCard from '../../../components/cards/CSCard/CSCard.jsx'
import AFCard from '../../../components/sectionmodules/AFSectionsCard/AFCard.jsx'
import AFSectionItems from '../../../data/AFSection/index.js'
import ArrowButton from '../../../components/buttons/NavigationLR.jsx'
import ButtonPE from '../../../components/buttons/ButtonPE.jsx'
// Import module images
import moduleImg1 from '../../../assets/home/service1.jpg'
import moduleImg2 from '../../../assets/home/service2.jpg'
import moduleImg3 from '../../../assets/home/service3.jpg'
import moduleImg4 from '../../../assets/home/service4.jpg'
import mitre10Img from '../../../assets/home/service1.jpg' // Placeholder - replace with actual Mitre10 image

// Style definitions
const sectionPadding = {
    py: { xs: 6, md: 10 }
}



const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '38px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 2.5, md: 4 },
    color: '#000000',
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

const itemTitleStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: { xs: '18px', md: '20px' },
    lineHeight: '28px',
    color: '#000000',
    mb: 1,
}

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '18px' },
    lineHeight: { xs: '22px', sm: '25px', md: '27px' },
    letterSpacing: '0%',
    color: '#000000',
    mb: 2
}

const moduleSubtitleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '18px', sm: '20px', md: '24px' },
    lineHeight: { xs: '24px', sm: '26px', md: '30px' },
    color: '#000000',
}

const moduleDescriptionStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '14px', sm: '15px', md: '17px' },
    lineHeight: { xs: '20px', sm: '21px', md: '25px' },
    color: '#000000',
}

// Module expertise data
const moduleExpertiseData = [
    {
        id: 1,
        image: moduleImg1,
        title: 'Finance & Controlling (FI/CO)',
        description: 'Complete financial management from general ledger and accounts payable/receivable through to cost centre accounting, profitability analysis, and financial reporting. We help organisations achieve financial transparency, streamline period-end close, and support regulatory compliance.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 2,
        image: moduleImg2,
        title: 'Materials Management (MM)',
        description: 'End-to-end procurement and inventory management covering purchasing, goods receipt, invoice verification, and material valuation. We optimise procurement processes, improve supplier relationships, and enhance inventory control.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 3,
        image: moduleImg3,
        title: 'Sales & Distribution (SD)',
        description: 'Comprehensive order-to-cash processes including customer master data, pricing, order management, shipping, and billing. We design solutions that improve customer experience, accelerate order fulfilment, and increase revenue visibility.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 4,
        image: moduleImg4,
        title: 'Production Planning (PP)',
        description: 'Manufacturing and production planning capabilities spanning demand management, MRP, shop floor control, and production execution. We help manufacturers optimise production schedules, reduce waste, and improve on-time delivery.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 5,
        image: moduleImg1,
        title: 'Quality Management (QM)',
        description: 'Quality planning, inspection, and certification processes integrated throughout the supply chain. We implement quality controls that reduce defects, ensure compliance, and protect brand reputation.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 6,
        image: moduleImg2,
        title: 'Plant Maintenance (PM)',
        description: 'Preventive and corrective maintenance management for equipment, facilities, and assets. We design maintenance strategies that maximise asset availability, extend equipment life, and control maintenance costs.',
        ctaLabel: 'Learn more →',
    },
    {
        id: 7,
        image: moduleImg3,
        title: 'Human Resources (HR)',
        description: 'Workforce management including organisational management, personnel administration, time management, and payroll. We help organisations streamline HR processes and improve employee experience.',
        ctaLabel: 'Learn more →',
    },
]

const SAPMODULESpecialisation = () => {
    const [activeExpertise, setActiveExpertise] = useState(2); // Default to Industry Experience (index 2)
    const navigate = useNavigate();

    const handleCtaClick = (item) => {
        console.log(`${item.title} clicked`)
    }

    return (
        <div>
            <HeroSection
                background={heroImg}
                eyebrow="WHAT WE DO"
                title={["SAP Module", "Specialisation"]}
                layout={{ height: "auto" }}
            />

            <SXContainer maxWidth="xl">
                {/* Introduction Section */}
                <Box {...sectionPadding}>
                    <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                        <Typography sx={paragraphStyle}>
                            SYD Consulting provides deep functional expertise across core SAP modules including Finance (FI/CO), Materials Management (MM), Sales & Distribution (SD), Production Planning (PP), Quality Management (QM), Plant Maintenance (PM), and Human Resources (HR). Our consultants combine technical knowledge with industry-specific experience to deliver practical, outcome-driven solutions.
                        </Typography>

                        <Typography sx={paragraphStyle}>
                            Great SAP implementations don't just work technically, they transform how businesses operate. SYD's functional consultants bring deep module expertise combined with real-world industry knowledge, working shoulder-to-shoulder with your teams to configure, optimise, and support SAP solutions that deliver measurable business value.
                        </Typography>

                        <Typography sx={paragraphStyle}>
                            We solve business problems with SAP solutions. Whether you're streamlining financial processes, optimising supply chain operations, or enhancing production planning, our consultants understand both the SAP technology and the business context that makes it valuable.
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>

            {/* Module Expertise Grid Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                {/* Section Title */}
                <Box sx={{ mb: { xs: 4, md: 6 } }}>
                    <Typography component="h2" sx={titleStyle}>
                        Our Core Module Expertise
                    </Typography>
                </Box>

                {/* Responsive Grid Layout */}
                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4, lg: 5 }}
                >
                    {moduleExpertiseData.map((item) => (
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

            {/* Industry-Specific Solutions Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                {/* Section Title */}
                <Box sx={{ mb: { xs: 3, md: 4 } }}>
                    <Typography component="h3" sx={{
                        fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '20px', sm: '24px', md: '30px' },
                        lineHeight: { xs: '28px', sm: '32px', md: '38px' },
                        letterSpacing: '0%',
                        mb: { xs: 2, md: 3 },
                        color: '#000000',
                    }}>
                        Industry-Specific Solutions
                    </Typography>
                    <Typography sx={{
                        ...paragraphStyle,
                        maxWidth: '1000px',
                        mb: { xs: 3, md: 4 }
                    }}>
                        Our functional expertise extends across key New Zealand industries, where we understand the unique challenges and requirements of each sector:
                    </Typography>
                </Box>

                {/* Industry Table */}
                <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 0,
                        overflow: 'hidden'
                    }}
                >
                    <Table sx={{ minWidth: { xs: 300, sm: 650 } }}>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#000000',
                                    borderBottom: '2px solid #e0e0e0',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Industry
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#000000',
                                    borderBottom: '2px solid #e0e0e0',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    SAP Focus Areas
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#000000',
                                    borderBottom: '2px solid #e0e0e0',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Business Outcomes
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:hover': { bgcolor: '#fafafa' } }}>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Retail & Consumer Goods
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    SD, MM, PP, QM, O2C, I2B, P2P, IBP
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Inventory optimisation, demand forecasting, multi-channel fulfilment
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { bgcolor: '#fafafa' } }}>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Manufacturing
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    PP, QM, PM, MM, IBP, O2C
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Production efficiency, quality control, supply chain visibility
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { bgcolor: '#fafafa' } }}>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Utilities & Infrastructure
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    PM, PS, FI/CO
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 }
                                }}>
                                    Asset management, project accounting, regulatory compliance
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:hover': { bgcolor: '#fafafa' } }}>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 },
                                    borderBottom: 'none'
                                }}>
                                    Agribusiness
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 },
                                    borderBottom: 'none'
                                }}>
                                    MM, SD, PP, QM
                                </TableCell>
                                <TableCell sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#000000',
                                    py: { xs: 2, md: 2.5 },
                                    borderBottom: 'none'
                                }}>
                                    Traceability, quality assurance, seasonal demand planning
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </SXContainer>

            {/* Our Approach Carousel Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '22px', sm: '26px', md: '38px' },
                        lineHeight: { xs: '30px', sm: '36px', md: '45px' },
                        mb: { xs: 3, md: 4 },
                        color: '#000000',
                    }}
                >
                    Our Approach
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
                    {AFSectionItems.map((item, idx) => (
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

            {/* From Implementation to Optimisation Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <Typography
                    component="h3"
                    sx={{
                        fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '20px', sm: '24px', md: '30px' },
                        lineHeight: { xs: '28px', sm: '32px', md: '38px' },
                        mb: { xs: 4, md: 6 },
                        color: '#000000',
                    }}
                >
                    From Implementation to Optimisation
                </Typography>

                {/* Carousel Track */}
                <Box
                    data-carousel="implementation"
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
                    {/* Step 01 */}
                    <Box
                        sx={{
                            flex: '0 0 calc(31.25% - 16px)', // Shows 3.2 cards (3 full + 20% of 4th)
                            minWidth: { xs: '280px', sm: '300px', md: '340px' },
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    background: 'linear-gradient(135deg, #6533FF 0%, #00D0FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '56px', md: '64px' },
                                    lineHeight: 1,
                                    mb: 2,
                                }}
                            >
                                01
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '18px', md: '20px' },
                                    lineHeight: 1.3,
                                    color: '#000000',
                                    mb: 1.5,
                                }}
                            >
                                Design & Configuration
                            </Typography>
                            <Box
                                sx={{
                                    width: '200px',
                                    maxWidth: '100%',
                                    height: '2px',
                                    bgcolor: '#000000',
                                    mb: 2,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '15px' },
                                    lineHeight: 1.6,
                                    color: '#000000',
                                }}
                            >
                                We work with your teams to design SAP processes that align with business requirements and industry best practices.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Step 02 */}
                    <Box
                        sx={{
                            flex: '0 0 calc(31.25% - 16px)', // Shows 3.2 cards (3 full + 20% of 4th)
                            minWidth: { xs: '280px', sm: '300px', md: '340px' },
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    background: 'linear-gradient(135deg, #6533FF 0%, #00D0FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '56px', md: '64px' },
                                    lineHeight: 1,
                                    mb: 2,
                                }}
                            >
                                02
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '18px', md: '20px' },
                                    lineHeight: 1.3,
                                    color: '#000000',
                                    mb: 1.5,
                                }}
                            >
                                Integration & Testing
                            </Typography>
                            <Box
                                sx={{
                                    width: '200px',
                                    maxWidth: '100%',
                                    height: '2px',
                                    bgcolor: '#000000',
                                    mb: 2,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '15px' },
                                    lineHeight: 1.6,
                                    color: '#000000',
                                }}
                            >
                                We ensure seamless integration across modules and with external systems, with comprehensive testing protocols.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Step 03 */}
                    <Box
                        sx={{
                            flex: '0 0 calc(31.25% - 16px)', // Shows 3.2 cards (3 full + 20% of 4th)
                            minWidth: { xs: '280px', sm: '300px', md: '340px' },
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    background: 'linear-gradient(135deg, #6533FF 0%, #00D0FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '56px', md: '64px' },
                                    lineHeight: 1,
                                    mb: 2,
                                }}
                            >
                                03
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '18px', md: '20px' },
                                    lineHeight: 1.3,
                                    color: '#000000',
                                    mb: 1.5,
                                }}
                            >
                                Training & Change Management
                            </Typography>
                            <Box
                                sx={{
                                    width: '200px',
                                    maxWidth: '100%',
                                    height: '2px',
                                    bgcolor: '#000000',
                                    mb: 2,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '15px' },
                                    lineHeight: 1.6,
                                    color: '#000000',
                                }}
                            >
                                We prepare your teams for success with hands-on training and clear process documentation.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Step 04 */}
                    <Box
                        sx={{
                            flex: '0 0 calc(31.25% - 16px)', // Shows 3.2 cards (3 full + 20% of 4th)
                            minWidth: { xs: '280px', sm: '300px', md: '340px' },
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    background: 'linear-gradient(135deg, #6533FF 0%, #00D0FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '56px', md: '64px' },
                                    lineHeight: 1,
                                    mb: 2,
                                }}
                            >
                                04
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '18px', md: '20px' },
                                    lineHeight: 1.3,
                                    color: '#000000',
                                    mb: 1.5,
                                }}
                            >
                                Go-Live Support
                            </Typography>
                            <Box
                                sx={{
                                    width: '200px',
                                    maxWidth: '100%',
                                    height: '2px',
                                    bgcolor: '#000000',
                                    mb: 2,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '15px' },
                                    lineHeight: 1.6,
                                    color: '#000000',
                                }}
                            >
                                We provide intensive support during cutover and stabilisation to ensure smooth transition to live operations.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Step 05 */}
                    <Box
                        sx={{
                            flex: '0 0 calc(31.25% - 16px)', // Shows 3.2 cards (3 full + 20% of 4th)
                            minWidth: { xs: '280px', sm: '300px', md: '340px' },
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    background: 'linear-gradient(135deg, #6533FF 0%, #00D0FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '56px', md: '64px' },
                                    lineHeight: 1,
                                    mb: 2,
                                }}
                            >
                                05
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '18px', md: '20px' },
                                    lineHeight: 1.3,
                                    color: '#000000',
                                    mb: 1.5,
                                }}
                            >
                                Continuous Improvement
                            </Typography>
                            <Box
                                sx={{
                                    width: '200px',
                                    maxWidth: '100%',
                                    height: '2px',
                                    bgcolor: '#000000',
                                    mb: 2,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '15px' },
                                    lineHeight: 1.6,
                                    color: '#000000',
                                }}
                            >
                                We support ongoing optimisation and enhancement to evolve your SAP solution to meet your business needs.
                            </Typography>
                        </Box>
                    </Box>
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
                            const container = document.querySelector('[data-carousel="implementation"]');
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
                            const container = document.querySelector('[data-carousel="implementation"]');
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

            {/* Why choose SYD Section */}
            <SXContainer
                maxWidth="xl"
                {...sectionPadding}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: '"Microsoft JhengHei UI", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '22px', sm: '26px', md: '38px' },
                        lineHeight: { xs: '30px', sm: '36px', md: '45px' },
                        mb: { xs: 4, md: 6 },
                        color: '#000000',
                    }}
                >
                    Why choose SYD for Functional Expertise?
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 6 },
                    }}
                >
                    {/* Left side - Titles */}
                    <Box
                        sx={{ flex: 1 }}
                        onMouseLeave={() => setActiveExpertise(2)} // Reset to default (Industry Experience)
                    >
                        {[
                            { title: 'Senior Consultants', description: 'Work directly with experienced specialists, not junior resources' },
                            { title: 'Local Knowledge', description: 'Understanding of New Zealand business environment and requirements' },
                            { title: 'Industry Experience', description: 'Deep sector knowledge from years of delivering similar solutions' },
                            { title: 'Trusted Relationships', description: 'Clients follow our consultants from organisation to organisation' },
                            { title: 'Full Lifecycle Support', description: 'From initial design through to long-term enhancement' },
                        ].map((item, index) => (
                            <Typography
                                key={index}
                                onMouseEnter={() => setActiveExpertise(index)}
                                sx={{
                                    fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                    fontSize: { xs: '18px', md: '32px' },
                                    lineHeight: 2,
                                    color: activeExpertise === index ? '#000000' : '#CCCCCC',
                                    fontWeight: activeExpertise === index ? 600 : 400,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Box>

                    {/* Right side - Description */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: '"Microsoft JhengHei UI", sans-serif',
                                fontWeight: 400,
                                fontSize: { xs: '15px', md: '24px' },
                                lineHeight: 1.6,
                                color: '#000000',
                            }}
                        >
                            {[
                                'Work directly with experienced specialists, not junior resources',
                                'Understanding of New Zealand business environment and requirements',
                                'Deep sector knowledge from years of delivering similar solutions',
                                'Clients follow our consultants from organisation to organisation',
                                'From initial design through to long-term enhancement',
                            ][activeExpertise]}
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>

            {/* Customer Success Story Section */}
            <Box sx={{ bgcolor: '#F5F5F5', py: { xs: 6, md: 8 } }}>
                <SXContainer maxWidth="xl">
                    <Typography sx={sectionTitleStyle}>Customer Success Story</Typography>
                    <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src={mitre10Img}
                                alt="Mitre 10 outdoor furniture"
                                sx={{
                                    width: '100%',
                                    height: '440px',
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
                            }}>Zespri</Typography>
                            <Typography sx={paragraphStyle}>
                                Zespri International is one of the world’s leading horticultural
                                companies and the global supplier of premium kiwifruit, managing operations across more than 50 countries. Following their move to SAP S/4HANA RISE Private Cloud, Zespri faced challenges ensuring security, compliance, and cost transparency within their new environment. ​Post-implementation, Zespri identified a complex and unsustainable SAP security and roles model that not only created operational inefficiencies but also posed potential licensing and financial risks. They partnered with SYD Consulting to review, redesign, and implement a fit-for-purpose security framework that aligned with business needs, compliance requirements, and SAP best practices
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <ButtonPE
                                    label="View case study →"
                                    variant="contained"
                                    onClick={() => navigate('/case-studies/mitre10')}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </SXContainer>
            </Box>

            {/* Final CTA Section */}
            <SXContainer maxWidth="xl">
                <Box sx={{ py: { xs: 6, md: 10 } }}>


                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={paragraphStyle}>
                            Our functional consultants have delivered successful SAP implementations and optimisation projects across some of New Zealand's leading enterprises, helping them achieve operational excellence and business transformation.
                        </Typography>
                    </Grid>
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: '"Microsoft JhengHei UI", sans-serif',
                            fontWeight: 500,
                            fontSize: { xs: '22px', sm: '26px', md: '38px' },
                            lineHeight: { xs: '30px', sm: '36px', md: '45px' },
                            mb: { xs: 3, md: 4 },
                            color: '#000000',
                        }}
                    >
                        Let's Discuss Your SAP Requirements
                    </Typography>

                    <Grid container spacing={{ xs: 4, md: 8 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={paragraphStyle}>
                                Whether you're implementing new SAP modules, optimising existing functionality, or need expert support for ongoing operations, SYD brings the functional expertise your business needs.
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
                                <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-start' } }}>
                                    <ButtonPE
                                        label="Contact us today →"
                                        size="medium"
                                        onClick={() => navigate('/contact')}
                                        sx={{
                                            minWidth: { xs: '100%', md: 200 }
                                        }}
                                    />
                                </Stack>

                                <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                                    <ButtonPE
                                        label="Learn about Managed Services →"
                                        size="medium"
                                        onClick={() => navigate('/managed-services')}
                                        sx={{
                                            minWidth: { xs: 'calc(50% - 8px)', md: 200 }
                                        }}
                                    />
                                    <ButtonPE
                                        label="View case studies →"
                                        size="medium"
                                        onClick={() => navigate('/case-studies')}
                                        sx={{
                                            minWidth: { xs: 'calc(50% - 8px)', md: 200 }
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* SAP Documentation Link */}
                    <Box sx={{ mt: { xs: 4, md: 6 } }}>
                        <Typography
                            sx={{
                                fontFamily: '"Segoe UI", sans-serif',
                                fontSize: { xs: '14px', md: '15px' },
                                color: '#000000',
                            }}
                        >
                            For more information about SAP modules and capabilities, visit{' '}
                            <Typography
                                component="a"
                                href="https://help.sap.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    fontFamily: '"Segoe UI", sans-serif',
                                    fontSize: { xs: '14px', md: '15px' },
                                    color: '#000000',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                SAP's official documentation →
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </SXContainer>
        </div >
    )
}

export default SAPMODULESpecialisation