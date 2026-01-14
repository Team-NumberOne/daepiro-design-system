import { colors } from "@/tokens/colors";
import { themeContract } from "@/tokens/css-variables.css";
import { shadows } from "@/tokens/shadows";
import { typography } from "@/tokens/typography";
import { style, styleVariants } from "@vanilla-extract/css";

// Base styles
export const baseButton = style({
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

// Variant styles
export const buttonVariants = styleVariants({
  default: [
    baseButton,
    {
      backgroundColor: themeContract.gray[50],
      color: themeContract.gray[700],
      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${themeContract.gray[700]}`,
          outlineOffset: "2px",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: themeContract.gray[75],
          color: themeContract.gray[600],
        },
        "&:active:not(:disabled)": {
          backgroundColor: themeContract.gray[75],
          color: themeContract.gray[600],
          boxShadow: shadows["btn-pressed"],
        },
      },
    },
  ],
  gray: [
    baseButton,
    {
      backgroundColor: themeContract.gray[700],
      color: colors.white,
      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${themeContract.gray[300]}`,
          outlineOffset: "2px",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: themeContract.gray[600],
          color: colors.white,
        },
        "&:active:not(:disabled)": {
          backgroundColor: themeContract.gray[600],
          color: colors.white,
          boxShadow: shadows["btn-pressed"],
        },
      },
    },
  ],
  primary: [
    baseButton,
    {
      backgroundColor: themeContract.primary[500],
      color: colors.white,
      // ⚠️ WCAG AA 대비 경고: primary[500] (#FF6929) 배경 + white 텍스트 = 2.87:1 (AA 미달, 4.5:1 필요)
      // 디자인 확정으로 인해 현재 색상 유지
      // 향후 디자이너와 협의하여 primary[600] (#E86025, 대비 6.13:1) 또는 다른 색상으로 조정 검토 예정
      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${themeContract.primary[600]}`,
          outlineOffset: "2px",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: themeContract.primary[600],
          color: colors.white,
        },
        "&:active:not(:disabled)": {
          backgroundColor: themeContract.primary[600],
          color: colors.white,
          boxShadow: shadows["btn-pressed"],
        },
      },
    },
  ],
});

// Full width style
export const fullWidth = style({
  width: "100%",
});

// Icon styles
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
