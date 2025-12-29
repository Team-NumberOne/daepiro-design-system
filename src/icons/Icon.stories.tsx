import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconName, type IconSize, Icons, iconSize } from "./index";

const meta = {
  title: "Components/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

const iconNames = Object.keys(Icons) as IconName[];

export const Playground: Story = {
  args: {
    name: "ArrowRight",
    size: "md",
  },
  render: () => (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: "32px", fontSize: "24px", fontWeight: 700 }}>
        Icon Playground
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "24px",
        }}
      >
        {iconNames.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              padding: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <Icon name={name} size="md" />
            <div
              style={{
                fontSize: "12px",
                color: "#6b7280",
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    name: "ArrowRight",
    size: "md",
  },
  render: () => {
    const sizes: IconSize[] = ["xs", "sm", "md", "lg", "xl"];
    return (
      <div style={{ padding: "24px" }}>
        <h2
          style={{
            marginBottom: "32px",
            fontSize: "24px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Icon Sizes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sizes.map((size) => (
            <div
              key={size}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
              }}
            >
              <Icon name="ArrowRight" size={size} />
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "2px",
                  }}
                >
                  {size}
                </div>
                <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                  {iconSize[size]}px
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  args: {
    name: "Warning",
    size: "md",
  },
  render: () => {
    const colors = [
      { name: "Default", color: undefined },
      { name: "Red", color: "#ef4444" },
      { name: "Blue", color: "#3b82f6" },
      { name: "Green", color: "#10b981" },
      { name: "Orange", color: "#f97316" },
    ];
    return (
      <div style={{ padding: "24px" }}>
        <h2 style={{ marginBottom: "32px", fontSize: "24px", fontWeight: 700 }}>
          Icon Colors
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {colors.map(({ name, color }) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            >
              <Icon name="Warning" size="md" color={color} />
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {name}
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  {color || "inherit"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const StaticIcons: Story = {
  args: {
    name: "ArrowRight",
    size: "md",
  },
  render: () => (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: "32px", fontSize: "24px", fontWeight: 700 }}>
        Static Icons (Icon.ArrowRight)
      </h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Icons.ArrowRight size="md" />
        <Icons.ArrowLeft size="md" />
        <Icons.ArrowTop size="md" />
        <Icons.ArrowDown size="md" />
        <Icons.Plus size="md" />
        <Icons.Minus size="md" />
        <Icons.Close size="md" />
        <Icons.CheckBoxEnabled size="md" />
        <Icons.CheckBoxDisabled size="md" />
      </div>
    </div>
  ),
};
