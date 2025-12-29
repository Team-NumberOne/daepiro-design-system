import { colors } from "./colors";

export const semanticColors = {
  // Primary (Orange)
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

  // Secondary (Green)
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

  // Tertiary (Red)
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

  // Gray (기존 G와 동일)
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
} as const;
