import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "@/tokens/colors";
import { typography } from "@/tokens/typography";
import { shadows } from "@/tokens/shadows";

const baseButton = style({
  ...typography["subtitle-1"],
  borderRadius: "8px",
  border: "none",
  padding: "0 16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  height: "48px",
  selectors: {
    // 아이콘이 없는 경우: center 정렬, gap 4px
    "&:not(:has(span))": {
      justifyContent: "center",
      gap: "4px",
    },
    // 아이콘이 있는 경우: space-between 정렬
    "&:has(span)": {
      justifyContent: "space-between",
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const buttonVariants = styleVariants({
  default: [
    baseButton,
    {
      backgroundColor: colors.G[50],
      color: colors.G[700],
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: colors.G[75],
          color: colors.G[600],
        },
        "&:active:not(:disabled)": {
          backgroundColor: colors.G[75],
          color: colors.G[600],
          boxShadow: shadows["btn-pressed"],
        },
      },
    },
  ],
  gray: [
    baseButton,
    {
      backgroundColor: colors.G[700],
      color: colors.white,
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: colors.G[600],
          color: colors.white,
        },
        "&:active:not(:disabled)": {
          backgroundColor: colors.G[600],
          color: colors.white,
          boxShadow: shadows["btn-pressed"],
        },
      },
    },
  ],
  primary: [
    baseButton,
    {
      backgroundColor: colors.O[500],
      color: colors.white,
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: colors.O[600],
          color: colors.white,
        },
        "&:active:not(:disabled)": {
          backgroundColor: colors.O[600],
          color: colors.white,
          boxShadow: shadows["btn-pressed"],
        },
      },
    },
  ],
});

export const fullWidth = style({
  width: "100%",
});

export const leftIcon = style({
  display: "inline-flex",
  flexShrink: 0,
});

export const rightIcon = style({
  display: "inline-flex",
  flexShrink: 0,
});

export const iconSpacer = style({
  display: "inline-flex",
  width: "24px", // 아이콘 크기와 동일 (md 사이즈)
  flexShrink: 0,
});
