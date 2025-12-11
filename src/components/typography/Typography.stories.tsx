import type { Meta, StoryObj } from "@storybook/react";
import { typography } from "@/tokens/typography";

const meta = {
  title: "Tokens/Typography",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TypographyPlayground = () => {
  const typographyKeys = Object.keys(typography) as Array<
    keyof typeof typography
  >;

  return (
    <div style={{ padding: "24px", fontFamily: typography.h1.fontFamily }}>
      <h2 style={{ marginBottom: "32px", fontSize: "24px", fontWeight: 700 }}>
        Typography Playground
      </h2>
      {typographyKeys.map((key) => {
        const style = typography[key];
        return (
          <div
            key={key}
            style={{
              marginBottom: "32px",
              padding: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                marginBottom: "8px",
                fontSize: "12px",
                color: "#6b7280",
                fontWeight: 500,
              }}
            >
              {key}
            </div>
            <div
              style={{
                fontFamily: style.fontFamily,
                fontWeight: style.fontWeight,
                fontSize: style.fontSize,
                lineHeight: style.lineHeight,
                letterSpacing: style.letterSpacing,
                color: "#111827",
              }}
            >
              프리텐다드 The quick brown fox jumps over the lazy dog
            </div>
            <div
              style={{
                marginTop: "8px",
                fontSize: "11px",
                color: "#9ca3af",
                fontFamily: "monospace",
              }}
            >
              fontSize: {style.fontSize}px | fontWeight: {style.fontWeight} |
              lineHeight: {style.lineHeight} | letterSpacing:{" "}
              {style.letterSpacing}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Playground: Story = {
  render: () => <TypographyPlayground />,
};
