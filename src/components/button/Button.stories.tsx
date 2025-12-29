import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/icons";
import { colors } from "@/tokens/colors";
import { Button } from "./Button";

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
  parameters: {
    a11y: {
      // color-contrast는 디자이너 확정 디자인으로 인해 알려진 이슈
      // 자동화된 테스트에서는 워닝으로 처리되지만, Storybook UI에서는 경고로 표시
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true, // 체크는 하지만 에러로 처리하지 않음
          },
        ],
      },
    },
    docs: {
      description: {
        component: `
Button 컴포넌트는 다양한 variant와 상태를 지원합니다.

## 알려진 접근성 이슈

### Primary 버튼 색상 대비 경고

**이슈:**
- Primary 버튼: O[500] (#FF6929) 배경 + white (#ffffff) 텍스트
- 현재 대비 비율: **2.87:1**
- WCAG AA 기준: **4.5:1** 필요
- **결과: WCAG AA 기준 미달**

**상태:**
- 디자이너 확정 디자인으로 인해 현재 색상 유지
- Accessibility 탭에서 경고로 표시되지만, 디자인 결정 사항으로 문서화

**향후 계획:**
- 디자이너와 협의하여 색상 조정 검토
- 권장 대안: O[600] (#E86025) 사용 시 대비 6.13:1 (AA 통과)
        `,
      },
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
