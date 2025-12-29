import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./colors";
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
});
