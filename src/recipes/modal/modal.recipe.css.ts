import { colors } from "@/tokens/colors";
import { themeContract } from "@/tokens/css-variables.css";
import { shadows } from "@/tokens/shadows";
import { style } from "@vanilla-extract/css";

// Overlay styles
export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 200ms ease-in-out",
  selectors: {
    '&[data-open="true"]': {
      opacity: 1,
      pointerEvents: "auto",
    },
    '&[data-closing="true"]': {
      opacity: 0,
    },
  },
});

// Content styles
export const content = style({
  backgroundColor: colors.white,
  borderRadius: "20px",
  padding: "24px",
  maxWidth: "90vw",
  maxHeight: "90vh",
  overflow: "auto",
  boxShadow: shadows.dimmed,
  position: "relative",
  transform: "scale(0.95)",
  transition: "transform 200ms ease-in-out",
  selectors: {
    '[data-open="true"] &': {
      transform: "scale(1)",
    },
    '[data-closing="true"] &': {
      transform: "scale(0.95)",
    },
  },
});

// Size variants
export const contentSizes = {
  small: style({
    width: "400px",
  }),
  medium: style({
    width: "600px",
  }),
  large: style({
    width: "800px",
  }),
};

// Close button styles
export const closeButton = style({
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  borderRadius: "4px",
  cursor: "pointer",
  color: themeContract.gray[600],
  transition: "background-color 150ms ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.gray[50],
    },
    "&:active": {
      backgroundColor: themeContract.gray[100],
    },
    "&:focus-visible": {
      outline: `2px solid ${themeContract.gray[700]}`,
      outlineOffset: "2px",
    },
  },
});

// Header styles
export const header = style({
  marginTop: 0,
  marginBottom: "16px",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "28px",
  color: themeContract.gray[900],
});
