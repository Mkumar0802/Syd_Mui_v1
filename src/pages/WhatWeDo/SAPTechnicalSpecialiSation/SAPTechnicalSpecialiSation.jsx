import React from 'react'
import { Box, Typography, Stack, Grid } from '@mui/material'
import HeroSection from '../../../layout/HeroSection.jsx'
import SXContainer from '../../../layout/SXContainer.jsx'
import heroImg from '../../../assets/aboutus/hero.jpg'
import agribusinessImg from '../../../assets/whatwedo/agribusiness.png'
import mitre10Img from '../../../assets/whatwedo/mitre10_furniture.png'
import ButtonPE from '../../../components/buttons/ButtonPE.jsx'
import { useNavigate } from 'react-router-dom'

const titleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '22px', sm: '26px', md: '38px' },
    lineHeight: { xs: '30px', sm: '36px', md: '45px' },
    letterSpacing: '0%',
    mb: { xs: 2.5, md: 4 },
    color: '#000000',
};

const sectionTitleStyle = {
    fontFamily: '"Microsoft JhengHei UI", sans-serif',
    fontWeight: 500,
    fontSize: { xs: '20px', sm: '24px', md: '32px' },
    lineHeight: { xs: '28px', sm: '32px', md: '40px' },
    letterSpacing: '0%',
    mb: { xs: 3, md: 5 },
    color: '#000000',
};

const itemTitleStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 600,
    fontSize: { xs: '18px', md: '20px' },
    lineHeight: '28px',
    color: '#000000',
    mb: 1,
};

const paragraphStyle = {
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '17px', md: '18px' },
    lineHeight: { xs: '22px', sm: '25px', md: '27px' },
    letterSpacing: '0%',
    color: '#000000',
    mb: 2
};


const sectionPadding = { pt: { xs: 6, md: 8 } };

const includedItems = [
    {
        title: "Proactive System Monitoring",
        description: "24/7 monitoring of system health, performance metrics, and resource utilisation. We identify and resolve issues before they impact your business."
    },
    {
        title: "Security & Patch Management",
        description: "Regular security updates, kernel upgrades, and SAP note implementation to keep your systems protected and compliant."
    },
    {
        title: "Backup & Disaster Recovery",
        description: "Robust backup strategies and tested recovery procedures to protect your data and minimise downtime."
    },
    {
        title: "Scalability & Capacity Planning",
        description: "Forward-looking analysis to ensure your SAP landscape can grow with your business needs."
    },
    {
        title: "Performance Optimisation",
        description: "Continuous tuning of databases, application servers, and system resources to maintain optimal response times and user experience."
    },
    {
        title: "System Upgrades & Migration Support",
        description: "Expert guidance and execution for OS/DB migrations, version upgrades, and cloud transitions ensuring minimal disruption."
    }
];

function SAPTechnicalSpecialiSation() {
    const navigate = useNavigate();

    return (
        <main>
            <HeroSection
                background={heroImg}
                eyebrow="WHAT WE DO"
                title={["SAP Technical", "Specialisation"]}
                layout={{ height: "auto" }}
            />

            <SXContainer maxWidth="xl">
                {/* Introduction Section */}
                <Box {...sectionPadding}>
                    <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                        <Typography sx={paragraphStyle}>
                            Your SAP environment is the backbone of your business operations. Whether you're running traditional on-premise systems or embracing SAP RISE or GROW, we provide expert management of your SAP technical foundation covering system administration, performance monitoring, security patching, and infrastructure optimisation. SYD delivers this as a flexible, scalable service that keeps your SAP landscape running smoothly without the need for in-house Basis specialists.
                        </Typography>

                        <Typography sx={paragraphStyle}>
                            We provide comprehensive SAP Basis support across private and public cloud environments, from SAP NetWeaver administration and database management to system monitoring, backup strategies, and disaster recovery planning. Our deep platform expertise extends to SAP RISE and GROW deployments, ensuring your cloud-first SAP journey is robust and secure. Our team handles the technical heavy lifting so your business can focus on strategic initiatives, not infrastructure firefighting.
                        </Typography>
                    </Box>
                </Box>

                {/* What's Included Section */}
                <Box sx={{ bgcolor: '#FFFFFF', ...sectionPadding }}>
                    <Typography sx={sectionTitleStyle}>What's Included</Typography>
                    <Grid container spacing={{ xs: 4, md: 6 }}>
                        {includedItems.map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Typography sx={itemTitleStyle}>{item.title}</Typography>
                                <Typography sx={paragraphStyle}>{item.description}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* The SYD Difference Section */}
                <Box {...sectionPadding}>
                    <Grid container spacing={{ xs: 4, md: 8 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src={agribusinessImg}
                                alt="Agribusiness growth"
                                sx={{
                                    width: '100%',
                                    height: '300px',
                                    minHeight: { xs: '300px', md: 'auto' },
                                    objectFit: 'cover',
                                    borderRadius: 0,
                                    display: 'block'
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box>
                                <Typography sx={sectionTitleStyle}>The SYD Difference</Typography>
                                <Typography sx={paragraphStyle}>
                                    SYD provides senior-level Basis expertise with local accountability. Our consultants know your environment intimately, respond quickly when issues arise, and work as part of your team.
                                </Typography>
                                <Typography sx={paragraphStyle}>
                                    We've successfully delivered Basis services for organisations across retail, utilities, manufacturing, and agribusiness sectors, including the world's first SAP migration to the Microsoft Azure platform. Our clients trust us because we deliver consistent results with transparency and no surprises.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Benefits Section */}
                <Box sx={{ bgcolor: '#FFFFFF', ...sectionPadding }}>
                    <Typography sx={{ ...sectionTitleStyle, px: 2 }}>
                        Benefits of our Technical Specialisation Service
                    </Typography>
                    <Grid container spacing={{ xs: 4, md: 6 }}>
                        {[
                            { title: "Predictable Costs", desc: "Fixed monthly pricing with no unexpected charges", active: true },
                            { title: "High Availability", desc: "Minimised downtime through proactive management" },
                            { title: "Expert Support", desc: "Access to certified SAP Basis specialists" },
                            { title: "Reduced Risk", desc: "Security, compliance, and business continuity assured" },
                            { title: "Scalability", desc: "Flexible service levels that adapt to your changing needs" },
                            { title: "Knowledge Transfer", desc: "We work alongside your team, building internal capability" }
                        ].map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Stack direction="row" spacing={2} alignItems="flex-start">
                                    <Box sx={{
                                        mt: 0.5,
                                        minWidth: '24px',
                                        width: '24px',
                                        height: '24px',
                                        bgcolor: item.active ? '#8A2BE2' : '#E0E0E0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Typography sx={{ color: item.active ? '#FFF' : '#000', fontSize: '14px', lineHeight: 1, fontWeight: 'bold' }}>›</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ ...itemTitleStyle, mb: 0.5 }}>{item.title}</Typography>
                                        <Typography sx={paragraphStyle}>{item.desc}</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Who Basis is for Section */}
                <Box {...sectionPadding} sx={{
                    py: {
                        xs: 6, md: 6,
                        mt: 6
                    }
                }}>
                    <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
                        <Typography sx={{ ...sectionTitleStyle }}>Who Basis as a Service is for</Typography>
                        <Stack spacing={3} sx={{ mt: 4, maxWidth: '800px', mx: 'auto' }}>
                            {[
                                { text: "Organisation without dedicated in-house Basis resources", active: true },
                                { text: "Businesses planning SAP system upgrades or migrations" },
                                { text: "Companies seeking to reduce infrastructure management overhead" },
                                { text: "Teams needing supplemental Basis expertise during peak periods" },
                                { text: "Enterprises requiring consistent, reliable SAP operations" }
                            ].map((item, index) => (
                                <Stack key={index} direction="row" spacing={3} alignItems="center">
                                    <Box sx={{
                                        minWidth: '24px',
                                        width: '24px',
                                        height: '24px',
                                        bgcolor: item.active ? '#8A2BE2' : '#E0E0E0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Typography sx={{ color: item.active ? '#FFF' : '#000', fontSize: '14px', lineHeight: 1, fontWeight: 'bold' }}>›</Typography>
                                    </Box>
                                    <Typography sx={{ ...paragraphStyle, mb: 0 }}>{item.text}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </SXContainer>

            {/* Customer Success Story Section - Full Width */}
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
                            }}>Mitre 10</Typography>
                            <Typography sx={paragraphStyle}>
                                Mitre 10 embarked on a major digital transformation to modernize operations and migrate to SAP S/4HANA RISE Private Cloud, one of the first implementations of its kind in New Zealand. They partnered with SYD Consulting to provide technical and functional retail SAP specialists to support them through their transformation journey. With no internal SAP capability and limited experience in large-scale ERP projects, Mitre 10 needed expert guidance to build capability, understand their new operating model, and transition successfully into ongoing support.
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

            <SXContainer maxWidth="xl">
                {/* CTA Section */}
                <Box sx={{ py: { xs: 6, md: 12 } }}>
                    <Grid container spacing={{ xs: 4, md: 10 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ ...titleStyle, mb: 2 }}>
                                Talk to Us About Optimising
                                Your SAP Landscape
                            </Typography>
                            <Typography sx={paragraphStyle}>
                                Whether you need comprehensive Basis management or targetted support for specific initiatives, SYD delivers the expertise and reliability your business deserves.
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
                </Box>
            </SXContainer>
        </main>
    )
}

export default SAPTechnicalSpecialiSation