import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./colors";
import { typography } from "./typography";
import { themeContract } from "./css-variables.css";

/**
 * 기본 테마 값 할당
 * :root에 CSS 변수로 기본값이 설정됩니다.
 */
export const theme = createGlobalTheme(":root", themeContract, {
  primary: {
    50: colors.O[50],
    100: colors.O[100],
    200: colors.O[200],
    300: colors.O[300],
    400: colors.O[400],
    500: colors.O[500],
    600: colors.O[600],
    700: colors.O[700],
    800: colors.O[800],
    900: colors.O[900],
  },
  secondary: {
    50: colors.Gre[50],
    100: colors.Gre[100],
    200: colors.Gre[200],
    300: colors.Gre[300],
    400: colors.Gre[400],
    500: colors.Gre[500],
    600: colors.Gre[600],
    700: colors.Gre[700],
    800: colors.Gre[800],
    900: colors.Gre[900],
  },
  tertiary: {
    50: colors.R[50],
    100: colors.R[100],
    200: colors.R[200],
    300: colors.R[300],
    400: colors.R[400],
    500: colors.R[500],
    600: colors.R[600],
    700: colors.R[700],
    800: colors.R[800],
    900: colors.R[900],
  },
  gray: {
    50: colors.G[50],
    75: colors.G[75],
    100: colors.G[100],
    200: colors.G[200],
    300: colors.G[300],
    400: colors.G[400],
    500: colors.G[500],
    600: colors.G[600],
    700: colors.G[700],
    800: colors.G[800],
    900: colors.G[900],
  },
  fontFamily: {
    sans: typography.h1.fontFamily,
  },
  typography: {
    h1: {
      fontSize: `${typography.h1.fontSize}px`,
      fontWeight: `${typography.h1.fontWeight}`,
      lineHeight: typography.h1.lineHeight,
      letterSpacing: `${typography.h1.letterSpacing}px`,
    },
    h2: {
      fontSize: `${typography.h2.fontSize}px`,
      fontWeight: `${typography.h2.fontWeight}`,
      lineHeight: typography.h2.lineHeight,
      letterSpacing: `${typography.h2.letterSpacing}px`,
    },
    h3: {
      fontSize: `${typography.h3.fontSize}px`,
      fontWeight: `${typography.h3.fontWeight}`,
      lineHeight: typography.h3.lineHeight,
      letterSpacing: `${typography.h3.letterSpacing}px`,
    },
    h4: {
      fontSize: `${typography.h4.fontSize}px`,
      fontWeight: `${typography.h4.fontWeight}`,
      lineHeight: typography.h4.lineHeight,
      letterSpacing: `${typography.h4.letterSpacing}px`,
    },
    h5: {
      fontSize: `${typography.h5.fontSize}px`,
      fontWeight: `${typography.h5.fontWeight}`,
      lineHeight: typography.h5.lineHeight,
      letterSpacing: `${typography.h5.letterSpacing}px`,
    },
    h6: {
      fontSize: `${typography.h6.fontSize}px`,
      fontWeight: `${typography.h6.fontWeight}`,
      lineHeight: typography.h6.lineHeight,
      letterSpacing: `${typography.h6.letterSpacing}px`,
    },
    "subtitle-1": {
      fontSize: `${typography["subtitle-1"].fontSize}px`,
      fontWeight: `${typography["subtitle-1"].fontWeight}`,
      lineHeight: typography["subtitle-1"].lineHeight,
      letterSpacing: `${typography["subtitle-1"].letterSpacing}px`,
    },
    "body-1": {
      fontSize: `${typography["body-1"].fontSize}px`,
      fontWeight: `${typography["body-1"].fontWeight}`,
      lineHeight: typography["body-1"].lineHeight,
      letterSpacing: `${typography["body-1"].letterSpacing}px`,
    },
    "subtitle-2": {
      fontSize: `${typography["subtitle-2"].fontSize}px`,
      fontWeight: `${typography["subtitle-2"].fontWeight}`,
      lineHeight: typography["subtitle-2"].lineHeight,
      letterSpacing: `${typography["subtitle-2"].letterSpacing}px`,
    },
    "body-2": {
      fontSize: `${typography["body-2"].fontSize}px`,
      fontWeight: `${typography["body-2"].fontWeight}`,
      lineHeight: typography["body-2"].lineHeight,
      letterSpacing: `${typography["body-2"].letterSpacing}px`,
    },
    caption: {
      fontSize: `${typography.caption.fontSize}px`,
      fontWeight: `${typography.caption.fontWeight}`,
      lineHeight: typography.caption.lineHeight,
      letterSpacing: `${typography.caption.letterSpacing}px`,
    },
    overline: {
      fontSize: `${typography.overline.fontSize}px`,
      fontWeight: `${typography.overline.fontWeight}`,
      lineHeight: typography.overline.lineHeight,
      letterSpacing: `${typography.overline.letterSpacing}px`,
    },
  },
});
