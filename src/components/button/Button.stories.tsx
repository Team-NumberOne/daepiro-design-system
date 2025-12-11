import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "@/icons";
import { colors } from "@/tokens/colors";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Text",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "gray", "primary"],
    },
    full: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => {
    const buttonRows = [
      {
        label: "default",
        variant: "default" as const,
        withIcon: false,
      },
      {
        label: "gray",
        variant: "gray" as const,
        withIcon: false,
      },
      {
        label: "primary",
        variant: "primary" as const,
        withIcon: false,
      },
      {
        label: "primary",
        variant: "primary" as const,
        withIcon: true,
      },
    ];

    return (
      <div style={{ padding: "24px" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Button
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                default
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                pressed
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                disabled
              </th>
            </tr>
          </thead>
          <tbody>
            {buttonRows.map((row, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "16px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#374151",
                    borderBottom: "1px solid #e5e7eb",
                    verticalAlign: "middle",
                  }}
                >
                  {row.label}
                </td>
                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    <Button
                      variant={row.variant}
                      leftIcon={
                        row.withIcon ? (
                          <Icon name="Noti" size="md" color="white" />
                        ) : undefined
                      }
                      style={
                        row.withIcon
                          ? {
                              minWidth: "140px", // 아이콘(24px) + 간격(16px) + 텍스트 + 패딩(32px)
                            }
                          : undefined
                      }
                    >
                      Text
                    </Button>
                  </div>
                </td>
                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    <Button
                      variant={row.variant}
                      leftIcon={
                        row.withIcon ? (
                          <Icon name="Noti" size="md" color="white" />
                        ) : undefined
                      }
                      style={{
                        ...(row.withIcon ? { minWidth: "140px" } : {}),
                        pointerEvents: "none",
                        backgroundColor:
                          row.variant === "default"
                            ? colors.G[75]
                            : row.variant === "gray"
                            ? colors.G[600]
                            : colors.O[600],
                        color:
                          row.variant === "default"
                            ? colors.G[600]
                            : colors.white,
                      }}
                    >
                      Text
                    </Button>
                  </div>
                </td>
                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    <Button
                      variant={row.variant}
                      leftIcon={
                        row.withIcon ? (
                          <Icon name="Noti" size="md" color="white" />
                        ) : undefined
                      }
                      disabled
                      style={
                        row.withIcon
                          ? {
                              minWidth: "140px",
                            }
                          : undefined
                      }
                    >
                      Text
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
