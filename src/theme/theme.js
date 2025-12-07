import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // Global font
    fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,

    // Default MUI Button typography
    button: {
      fontWeight: 700,
      textTransform: "none",
      lineHeight: "100%",
      letterSpacing: "0px",
    },

    // Custom Tokens
    subtitle1: {
      fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
    },

    body2: {
      fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
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
      fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },

    profileRole: {
      fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    featureTitle: {
      fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
      fontWeight: 600,           // semibold
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "29px",
      letterSpacing: "0%",
      textAlign: "left",
    },

    featureSubtitle: {
      fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
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
          fontFamily: `"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`,
        },
      },
    },
  },
});

export default theme;
