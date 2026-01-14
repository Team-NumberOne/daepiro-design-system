export type TypographyToken = {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: string;
  letterSpacing: number;
};

const FONT_FAMILY =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif";

const FONT_WEIGHT = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
} as const;

const FONT_SIZE = {
  H1: 96,
  H2: 60,
  H3: 48,
  H4: 34,
  H5: 24,
  H6: 20,
  BODY_1: 16,
  BODY_2: 14,
  CAPTION: 12,
  OVERLINE: 10,
} as const;

export const typography = {
  h1: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.H1,
    lineHeight: "115px",
    letterSpacing: -1.5,
  },
  h2: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontSize: FONT_SIZE.H2,
    lineHeight: "72px",
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.H3,
    lineHeight: "58px",
    letterSpacing: 0,
  },
  h4: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.H4,
    lineHeight: "42px",
    letterSpacing: 0,
  },
  h5: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.H5,
    lineHeight: "32px",
    letterSpacing: 0,
  },
  h6: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.H6,
    lineHeight: "28px",
    letterSpacing: 0.1,
  },
  "subtitle-1": {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.BODY_1,
    lineHeight: "24px",
    letterSpacing: 0.15,
  },
  "body-1": {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.BODY_1,
    lineHeight: "24px",
    letterSpacing: 0.15,
  },
  "body-1-b": {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.BODY_1,
    lineHeight: "24px",
    letterSpacing: 0.15,
  },
  "subtitle-2": {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.BODY_2,
    lineHeight: "22px",
    letterSpacing: -0.25,
  },
  "body-2": {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.BODY_2,
    lineHeight: "22px",
    letterSpacing: -0.25,
  },
  caption: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.CAPTION,
    lineHeight: "16px",
    letterSpacing: 0,
  },
  overline: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.OVERLINE,
    lineHeight: "12px",
    letterSpacing: 0,
  },
} as const;
