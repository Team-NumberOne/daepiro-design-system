import { style } from "@vanilla-extract/css";
import { colors } from "@/tokens/colors";
import { typography } from "@/tokens/typography";
import { shadows } from "@/tokens/shadows";

export const floating = style({
  ...typography["subtitle-1"],
  display: "inline-flex",
  height: "40px",
  padding: "0 12px 0 20px",
  alignItems: "center",
  borderRadius: "20px",
  border: "none",
  backgroundColor: colors.white,
  color: colors.G[800],
  cursor: "pointer",
  gap: "4px",
  boxShadow: shadows.floating,
  transition: "all 0.2s ease",
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: colors.G[50],
      boxShadow:
        "2px 2px 4px 0 rgba(0, 0, 0, 0.10), 0 0 4px 0 rgba(0, 0, 0, 0.15)",
    },
    "&:active:not(:disabled)": {
      backgroundColor: colors.G[50],
      boxShadow:
        "2px 2px 4px 0 rgba(0, 0, 0, 0.10), 0 0 4px 0 rgba(0, 0, 0, 0.15)",
    },
    "&:disabled": {
      backgroundColor: colors.white,
      color: colors.G[200],
      boxShadow:
        "2px 2px 4px 0 rgba(0, 0, 0, 0.10), 0 0 4px 0 rgba(0, 0, 0, 0.15)",
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
});

export const rightIcon = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
});
