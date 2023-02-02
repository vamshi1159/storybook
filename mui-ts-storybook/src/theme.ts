import { createTheme } from "@mui/material";
import React from "react";

export const COLORS = {
  purple: {
    main: "#6C5DD3",
    dark: "#393552",
    light: "#B4A9FF",
  },
  backgrounds: {
    default: "#19181C",
  },
  grey: {
    100: "#262529",
    200: "#201F24",
    300: "#2D2D30",
  },
  borders: {
    high: "#413F4D",
    low: "#28272B",
  },
  icon: {
    low: "#D4D2DE",
    high: "#727080",
  },
};

declare module "@mui/material/styles" {
  interface CustomPalette {
    purple: {
      main: string;
      dark: string;
      light: string;
    };
    grey: {
      100: string;
      200: string;
      300: string;
    };
    borders: {
      high: string;
      low: string;
    };
    icon: {
      low: string;
      high: string;
    };
  }

  interface CustomTypographyVariantOptions {
    title: React.CSSProperties;
    button: React.CSSProperties;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface TypographyVariantsOptions extends CustomTypographyVariantOptions {}
  interface TypographyVariants extends CustomTypographyVariantOptions {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    button: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#E8E8E9",
    },
    text: {
      disabled: "#A5A5A6",
      primary: "#E8E7F0",
      secondary: "#C9C8CC",
    },
    ...COLORS,
  },
  typography: {
    title: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "42px",
    },
    button: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
    },
    caption : {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '15px'
    },
    body2: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '17px',
    },
    body1: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '140%',
    },
    h1: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '42px'
    },
    h2: {
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '150%'
    }
  },
  components:{
    MuiButtonBase:{
      defaultProps:{
        disableRipple: true
      }
    }
  }
});

export default theme;
