import { createTheme } from "@mui/material/styles";
const baseFontStack = `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif`;

const theme = createTheme({
  typography: {
    // Global font
     // Global font
   // Global font
    fontFamily: baseFontStack,

    button: {
      fontWeight: 700,
      textTransform: "none",
      lineHeight: "100%",
      letterSpacing: "0px",
        fontFamily: baseFontStack,
    },

    // Custom Tokens
    subtitle1: {
        fontFamily: baseFontStack,
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
        fontFamily: baseFontStack,
    },

    body2: {
        fontFamily: baseFontStack,
      fontSize: "14px",
      lineHeight: "20px",
    },
    // Custom BCVC testimonial font style
    testimonialBCVC: {
      fontFamily:
        '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "100%",   // as requested
      letterSpacing: "0%",
      textAlign: "left",
    },
    profileName: {
        fontFamily: baseFontStack,
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },

    profileRole: {
        fontFamily: baseFontStack,
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    featureTitle: {
        fontFamily: baseFontStack,
      fontWeight: 600,           // semibold
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "29px",
      letterSpacing: "0%",
      textAlign: "left",
    },

    featureSubtitle: {
        fontFamily: baseFontStack,
      fontWeight: 400,           // normal body text (use 400 for description)
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
      textAlign: "left",
    },
    /* ---------- New custom nav tokens ---------- */

    // title heading (Microsoft JhengHei UI / Bold / 18px / 22px)
    navHeading: {
      fontFamily:
        `"Microsoft JhengHei UI", "Microsoft JhengHei", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial`,
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "0px",
      textTransform: "none",
    },

    // sublink (Segoe UI / Regular / 16px / 35px)
    navSublink: {
      fontFamily:
        `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif`,
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "35px",
      letterSpacing: "0px",
      textTransform: "none",
    },
    // Footer section title / heading
    footerTitle: {
      fontFamily:
        `"Microsoft JhengHei UI", "Microsoft JhengHei", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif`,
      fontWeight: 700,          // requested
      fontStyle: "normal",      // "Bold" is represented by fontWeight:700
      fontSize: "18px",         // requested
      lineHeight: "22px",       // requested
      letterSpacing: "0px",     // 0%
      textTransform: "none",
    },

    // Footer sublink text
    footerSublink: {
      fontFamily:
        `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif`,
      fontWeight: 400,          // Regular
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "35px",       // requested (large touch-friendly height)
      letterSpacing: "0px",
      textTransform: "none",
    },
    title32: {
      fontFamily: `"Microsoft JhengHei UI", "Microsoft JhengHei", "Segoe UI", sans-serif`,
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "32px",
      lineHeight: "100%",
      letterSpacing: "0px",
      textTransform: "none",
    },
    bodyContent20: {
        fontFamily: baseFontStack,
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "29px",
      letterSpacing: "0px",
      textTransform: "none",
    },
    testimonialQuote32: {
        fontFamily: baseFontStack,
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "32px",
      lineHeight: "100%",
      letterSpacing: "0px",
      textTransform: "none",
    },
    sectionTitle: {
      fontFamily: `"Microsoft JhengHei UI", sans-serif`,
      fontWeight: 700,
      fontStyle: "normal",

      // Responsive font sizes
      fontSize: {
        xs: "clamp(20px, 6vw, 26px)",   // mobile
        sm: "clamp(24px, 4vw, 30px)",   // tablet
        md: "32px",                     // desktop
      },

      // Responsive line-height
      lineHeight: {
        xs: "120%",
        sm: "120%",
        md: "44px",                    // design requirement
      },

      letterSpacing: "0px",
      textTransform: "none",
    },
    heroTitle48: {
      fontFamily: `"Microsoft JhengHei UI", sans-serif`,
      fontWeight: 700,
      fontStyle: "normal",

      fontSize: {
        xs: "clamp(28px, 8vw, 34px)",   // mobile
        sm: "clamp(34px, 6vw, 42px)",   // tablet
        md: "48px",                     // desktop
      },

      lineHeight: "100%",
      letterSpacing: "0px",
      textTransform: "none",

    },

    segoe20Semi: {
        fontFamily: baseFontStack,
      fontWeight: 600,          // Semibold
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "29px",
      letterSpacing: "0px",
      textTransform: "none",
    },

    // NEW REQUESTED STYLE
    segoe24Semi: {
      fontFamily: `"Segoe UI"`,
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0px",
    },


  },

  //   palette: {
  //     grey: {
  //       100: "#F2F2F2", // your default card bg
  //     },
  //   },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            fontFamily: baseFontStack,
        },
      },
    },
    MuiTypography: {
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

        // NEW
        { props: { variant: "segoe24Semi" }, style: ({ theme }) => theme.typography.segoe24Semi },
      ],
        styleOverrides: {
        root: {
          // defensive: ensure Typography root has base font stack
          fontFamily: baseFontStack,
        },
      },
    },
  },
});

export default theme;
