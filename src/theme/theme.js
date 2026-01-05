import { createTheme } from "@mui/material/styles";
const baseFontStack = `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif`;

const themeOptions = {
  typography: {
    fontFamily: baseFontStack,
    button: {
      fontWeight: 700,
      textTransform: "none",
      lineHeight: "100%",
      letterSpacing: "0px",
      fontFamily: baseFontStack,
    },
    subtitle1: {
      fontFamily: baseFontStack,
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: baseFontStack,
      fontSize: "14px",
      lineHeight: "20px",
    },
    testimonialBCVC: {
      fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "left",
    },
    profileName: {
      fontFamily: baseFontStack,
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "100%",
      textAlign: "center",
    },
    profileRole: {
      fontFamily: baseFontStack,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "100%",
      textAlign: "center",
    },
    featureTitle: {
      fontFamily: baseFontStack,
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "29px",
      textAlign: "left",
    },
    featureSubtitle: {
      fontFamily: baseFontStack,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "left",
    },
    navHeading: {
      fontFamily: `"Microsoft JhengHei UI", "Microsoft JhengHei", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial`,
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "22px",
    },
    navSublink: {
      fontFamily: baseFontStack,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "35px",
    },
    footerTitle: {
      fontFamily: `"Microsoft JhengHei UI", "Microsoft JhengHei", "Segoe UI", sans-serif`,
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "22px",
    },
    footerSublink: {
      fontFamily: baseFontStack,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "35px",
    },
    title32: {
      fontFamily: `"Microsoft JhengHei UI", "Microsoft JhengHei", "Segoe UI", sans-serif`,
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "100%",
    },
    bodyContent20: {
      fontFamily: baseFontStack,
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "29px",
    },
    testimonialQuote32: {
      fontFamily: baseFontStack,
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "100%",
    },
    sectionTitle: {
      fontFamily: `"Microsoft JhengHei UI", sans-serif`,
      fontWeight: 700,
      fontSize: {
        xs: "clamp(20px, 6vw, 26px)",
        sm: "clamp(24px, 4vw, 30px)",
        md: "32px",
      },
      lineHeight: {
        xs: "120%",
        sm: "120%",
        md: "44px",
      },
    },
    heroTitle48: {
      fontFamily: `"Microsoft JhengHei UI", sans-serif`,
      fontWeight: 700,
      fontSize: {
        xs: "clamp(28px, 8vw, 34px)",
        sm: "clamp(34px, 6vw, 42px)",
        md: "48px",
      },
      lineHeight: "100%",
    },
    segoe20Semi: {
      fontFamily: baseFontStack,
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "29px",
    },
    segoe24Semi: {
      fontFamily: `"Segoe UI"`,
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "100%",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: baseFontStack,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: baseFontStack,
        },
      },
      variants: [
        { props: { variant: "heroTitle48" }, style: ({ theme }) => theme.typography.heroTitle48 },
        { props: { variant: "sectionTitle" }, style: ({ theme }) => theme.typography.sectionTitle },
        { props: { variant: "title32" }, style: ({ theme }) => theme.typography.title32 },
        { props: { variant: "navHeading" }, style: ({ theme }) => theme.typography.navHeading },
        { props: { variant: "navSublink" }, style: ({ theme }) => theme.typography.navSublink },
        { props: { variant: "footerTitle" }, style: ({ theme }) => theme.typography.footerTitle },
        { props: { variant: "footerSublink" }, style: ({ theme }) => theme.typography.footerSublink },
        { props: { variant: "bodyContent20" }, style: ({ theme }) => theme.typography.bodyContent20 },
        { props: { variant: "testimonialQuote32" }, style: ({ theme }) => theme.typography.testimonialQuote32 },
        { props: { variant: "segoe20Semi" }, style: ({ theme }) => theme.typography.segoe20Semi },
        { props: { variant: "segoe24Semi" }, style: ({ theme }) => theme.typography.segoe24Semi },
      ],
    },
  },
};

export const homeTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: "#6533FF",
    },
    background: {
      default: "#0F0B21",
      paper: "#150F35",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
});

export const commonTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: "#6533FF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9FB",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
});

export default commonTheme;
