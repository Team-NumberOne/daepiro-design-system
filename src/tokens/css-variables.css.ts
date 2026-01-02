import { createGlobalThemeContract } from "@vanilla-extract/css";

/**
 * CSS 변수 계약 정의
 * 사용처에서 이 변수들을 덮어씌워서 테마를 변경할 수 있습니다.
 */
export const themeContract = createGlobalThemeContract({
  primary: {
    50: "color-primary-50",
    100: "color-primary-100",
    200: "color-primary-200",
    300: "color-primary-300",
    400: "color-primary-400",
    500: "color-primary-500",
    600: "color-primary-600",
    700: "color-primary-700",
    800: "color-primary-800",
    900: "color-primary-900",
  },
  secondary: {
    50: "color-secondary-50",
    100: "color-secondary-100",
    200: "color-secondary-200",
    300: "color-secondary-300",
    400: "color-secondary-400",
    500: "color-secondary-500",
    600: "color-secondary-600",
    700: "color-secondary-700",
    800: "color-secondary-800",
    900: "color-secondary-900",
  },
  tertiary: {
    50: "color-tertiary-50",
    100: "color-tertiary-100",
    200: "color-tertiary-200",
    300: "color-tertiary-300",
    400: "color-tertiary-400",
    500: "color-tertiary-500",
    600: "color-tertiary-600",
    700: "color-tertiary-700",
    800: "color-tertiary-800",
    900: "color-tertiary-900",
  },
  gray: {
    50: "color-gray-50",
    75: "color-gray-75",
    100: "color-gray-100",
    200: "color-gray-200",
    300: "color-gray-300",
    400: "color-gray-400",
    500: "color-gray-500",
    600: "color-gray-600",
    700: "color-gray-700",
    800: "color-gray-800",
    900: "color-gray-900",
  },
  fontFamily: {
    sans: "font-family-sans",
  },
  typography: {
    h1: {
      fontSize: "typography-h1-font-size",
      fontWeight: "typography-h1-font-weight",
      lineHeight: "typography-h1-line-height",
      letterSpacing: "typography-h1-letter-spacing",
    },
    h2: {
      fontSize: "typography-h2-font-size",
      fontWeight: "typography-h2-font-weight",
      lineHeight: "typography-h2-line-height",
      letterSpacing: "typography-h2-letter-spacing",
    },
    h3: {
      fontSize: "typography-h3-font-size",
      fontWeight: "typography-h3-font-weight",
      lineHeight: "typography-h3-line-height",
      letterSpacing: "typography-h3-letter-spacing",
    },
    h4: {
      fontSize: "typography-h4-font-size",
      fontWeight: "typography-h4-font-weight",
      lineHeight: "typography-h4-line-height",
      letterSpacing: "typography-h4-letter-spacing",
    },
    h5: {
      fontSize: "typography-h5-font-size",
      fontWeight: "typography-h5-font-weight",
      lineHeight: "typography-h5-line-height",
      letterSpacing: "typography-h5-letter-spacing",
    },
    h6: {
      fontSize: "typography-h6-font-size",
      fontWeight: "typography-h6-font-weight",
      lineHeight: "typography-h6-line-height",
      letterSpacing: "typography-h6-letter-spacing",
    },
    "subtitle-1": {
      fontSize: "typography-subtitle-1-font-size",
      fontWeight: "typography-subtitle-1-font-weight",
      lineHeight: "typography-subtitle-1-line-height",
      letterSpacing: "typography-subtitle-1-letter-spacing",
    },
    "body-1": {
      fontSize: "typography-body-1-font-size",
      fontWeight: "typography-body-1-font-weight",
      lineHeight: "typography-body-1-line-height",
      letterSpacing: "typography-body-1-letter-spacing",
    },
    "subtitle-2": {
      fontSize: "typography-subtitle-2-font-size",
      fontWeight: "typography-subtitle-2-font-weight",
      lineHeight: "typography-subtitle-2-line-height",
      letterSpacing: "typography-subtitle-2-letter-spacing",
    },
    "body-2": {
      fontSize: "typography-body-2-font-size",
      fontWeight: "typography-body-2-font-weight",
      lineHeight: "typography-body-2-line-height",
      letterSpacing: "typography-body-2-letter-spacing",
    },
    caption: {
      fontSize: "typography-caption-font-size",
      fontWeight: "typography-caption-font-weight",
      lineHeight: "typography-caption-line-height",
      letterSpacing: "typography-caption-letter-spacing",
    },
    overline: {
      fontSize: "typography-overline-font-size",
      fontWeight: "typography-overline-font-weight",
      lineHeight: "typography-overline-line-height",
      letterSpacing: "typography-overline-letter-spacing",
    },
  },
});
