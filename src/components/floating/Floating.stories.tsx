import type { Meta, StoryObj } from "@storybook/react";
import { Floating } from "./Floating";
import { Icon } from "@/icons";
import { colors } from "@/tokens/colors";

const meta = {
  title: "Components/Floating",
  component: Floating,
  args: {
    children: "Text",
  },
} satisfies Meta<typeof Floating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
    rightIcon: <Icon name="Plus" size="sm" />,
  },
};

export const AllStates: Story = {
  render: () => {
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
                State
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
            <tr>
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
                Floating
              </td>
              <td
                style={{
                  padding: "16px",
                  textAlign: "center",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <Floating rightIcon={<Icon name="Plus" size="sm" />}>
                    Text
                  </Floating>
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
                  <Floating
                    rightIcon={<Icon name="Plus" size="sm" />}
                    style={{
                      backgroundColor: colors.G[50],
                      boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.10), 0 0 4px 0 rgba(0, 0, 0, 0.15)",
                      transform: "translateY(1px)",
                      pointerEvents: "none",
                    }}
                  >
                    Text
                  </Floating>
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
                  <Floating
                    rightIcon={<Icon name="Plus" size="sm" />}
                    disabled
                  >
                    Text
                  </Floating>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

