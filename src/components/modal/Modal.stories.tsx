import { Button } from "@/components/button/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  args: {
    open: false,
    children: "모달 내용",
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "모달 열림/닫힘 상태",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "모달 크기",
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "오버레이 클릭 시 닫기 여부",
    },
    closeOnEscape: {
      control: "boolean",
      description: "ESC 키로 닫기 여부",
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Modal 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받을 때 사용합니다.

## 주요 기능

- **크기 옵션**: small (400px), medium (600px), large (800px)
- **닫기 방법**: 오버레이 클릭, ESC 키, 닫기 버튼
- **애니메이션**: 열기/닫기 시 부드러운 전환 효과
- **접근성**: ARIA 속성 지원, 키보드 네비게이션 지원

## 사용 방법

### 기본 사용법

\`\`\`tsx
<Modal open={open} onOpenChange={setOpen}>
  <div>모달 내용</div>
</Modal>
\`\`\`

### 컴파운드 패턴

더 유연한 구조를 위해 컴파운드 패턴을 사용할 수 있습니다:

\`\`\`tsx
<Modal.Root open={open} onOpenChange={setOpen}>
  <Modal.Overlay>
    <Modal.Content>
      <Modal.CloseButton />
      <div>커스텀 레이아웃</div>
    </Modal.Content>
  </Modal.Overlay>
</Modal.Root>
\`\`\`
        `,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 모달 상태를 관리하는 래퍼 컴포넌트
 */
function ModalWrapper({
  children,
  ...props
}: React.ComponentProps<typeof Modal>) {
  const [open, setOpen] = useState(props.open);

  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal {...props} open={open} onOpenChange={setOpen}>
        {children}
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>모달 제목</h2>
        <p style={{ margin: 0 }}>
          이것은 기본 모달입니다. 내용을 여기에 작성할 수 있습니다.
        </p>
      </div>
    ),
  },
};

export const Small: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "small",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>작은 모달</h2>
        <p style={{ margin: 0 }}>작은 크기의 모달입니다 (400px).</p>
      </div>
    ),
  },
};

export const Medium: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>중간 모달</h2>
        <p style={{ margin: 0 }}>중간 크기의 모달입니다 (600px).</p>
      </div>
    ),
  },
};

export const Large: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "large",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>큰 모달</h2>
        <p style={{ margin: 0 }}>큰 크기의 모달입니다 (800px).</p>
      </div>
    ),
  },
};

export const WithoutCloseButton: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    showCloseButton: false,
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>닫기 버튼 없음</h2>
        <p style={{ margin: 0 }}>
          이 모달은 닫기 버튼이 없습니다. 오버레이 클릭이나 ESC 키로만 닫을 수
          있습니다.
        </p>
      </div>
    ),
  },
};

export const DisableOverlayClick: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    closeOnOverlayClick: false,
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
          오버레이 클릭 비활성화
        </h2>
        <p style={{ margin: 0 }}>
          이 모달은 오버레이 클릭으로 닫을 수 없습니다. 닫기 버튼이나 ESC 키만
          사용할 수 있습니다.
        </p>
      </div>
    ),
  },
};

export const DisableEscape: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    closeOnEscape: false,
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>ESC 키 비활성화</h2>
        <p style={{ margin: 0 }}>
          이 모달은 ESC 키로 닫을 수 없습니다. 닫기 버튼이나 오버레이 클릭만
          사용할 수 있습니다.
        </p>
      </div>
    ),
  },
};

export const LongContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>긴 내용</h2>
        <div style={{ marginBottom: "16px" }}>
          <p>이 모달은 스크롤 가능한 긴 내용을 포함합니다.</p>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={`paragraph-${i + 1}`} style={{ margin: "8px 0" }}>
              {i + 1}번째 문단입니다. 모달의 최대 높이는 90vh로 제한되며, 내용이
              길 경우 자동으로 스크롤됩니다.
            </p>
          ))}
        </div>
      </div>
    ),
  },
};

export const WithForm: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>폼 예제</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("제출되었습니다!");
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "8px" }}
            >
              이름
            </label>
            <input
              id="name"
              type="text"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "8px" }}
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
          >
            <Button variant="default" type="button">
              취소
            </Button>
            <Button variant="primary" type="submit">
              제출
            </Button>
          </div>
        </form>
      </div>
    ),
  },
};

export const WithActionButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          actionButton={{
            label: "119 신고하기",
            onClick: () => {
              alert("119에 신고되었습니다!");
              setOpen(false);
            },
          }}
        >
          {args.children}
        </Modal>
      </>
    );
  },
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>맞아요!</h2>
        <p style={{ margin: 0 }}>119에 도움을 요청해보세요!</p>
      </div>
    ),
  },
};

export const WithActionButtonLeftIcon: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          actionButton={{
            label: "119 신고하기",
            leftIcon: <span style={{ fontSize: "18px" }}>📞</span>,
            onClick: () => {
              alert("119에 신고되었습니다!");
              setOpen(false);
            },
          }}
        >
          {args.children}
        </Modal>
      </>
    );
  },
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>맞아요!</h2>
        <p style={{ margin: 0 }}>
          119에 도움을 요청해보세요! (왼쪽 아이콘 포함)
        </p>
      </div>
    ),
  },
};

export const WithActionButtonRightIcon: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal
          {...args}
          open={open}
          onOpenChange={setOpen}
          actionButton={{
            label: "다음 단계",
            rightIcon: <span style={{ fontSize: "18px" }}>→</span>,
            onClick: () => {
              alert("다음 단계로 이동합니다!");
              setOpen(false);
            },
          }}
        >
          {args.children}
        </Modal>
      </>
    );
  },
  args: {
    size: "medium",
    children: (
      <div>
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>진행하시겠어요?</h2>
        <p style={{ margin: 0 }}>
          다음 단계로 진행하려면 버튼을 클릭하세요. (오른쪽 아이콘 포함)
        </p>
      </div>
    ),
  },
};

export const AllSizes: Story = {
  render: () => {
    const sizes = ["small", "medium", "large"] as const;

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
                Size
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
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => {
              const SizeRow = () => {
                const [open, setOpen] = useState(false);
                return (
                  <>
                    <Button onClick={() => setOpen(true)}>모달 열기</Button>
                    <Modal size={size} open={open} onOpenChange={setOpen}>
                      <div>
                        <h3 style={{ marginTop: 0, marginBottom: "8px" }}>
                          {size} 모달
                        </h3>
                        <p style={{ margin: 0 }}>
                          {size === "small"
                            ? "작은 크기의 모달입니다."
                            : size === "medium"
                              ? "중간 크기의 모달입니다."
                              : "큰 크기의 모달입니다."}
                        </p>
                      </div>
                    </Modal>
                  </>
                );
              };

              return (
                <tr key={size}>
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
                    {size} (
                    {size === "small"
                      ? "400px"
                      : size === "medium"
                        ? "600px"
                        : "800px"}
                    )
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <SizeRow />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
};

// ============================================
// 컴파운드 패턴 스토리
// ============================================

/**
 * 컴파운드 패턴 래퍼 컴포넌트
 */
function CompoundModalWrapper({
  children,
  ...props
}: React.ComponentProps<typeof Modal.Root>) {
  const [open, setOpen] = useState(props.open);

  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal.Root {...props} open={open} onOpenChange={setOpen}>
        {children}
      </Modal.Root>
    </>
  );
}

export const CompoundPattern: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>컴파운드 패턴 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton />
              <div>
                <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
                  컴파운드 패턴
                </h2>
                <p style={{ margin: 0 }}>
                  이 모달은 컴파운드 패턴으로 구성되었습니다. 각 부분을
                  독립적으로 제어할 수 있어 더 유연한 레이아웃이 가능합니다.
                </p>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>
    );
  },
};

export const CompoundCustomLayout: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>커스텀 레이아웃 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="large">
          <Modal.Overlay>
            <Modal.Content>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "24px",
                }}
              >
                <h2 style={{ margin: 0 }}>커스텀 레이아웃</h2>
                <Modal.CloseButton />
              </div>
              <div>
                <p>
                  닫기 버튼을 상단 오른쪽이 아닌 다른 위치에 배치할 수 있습니다.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "flex-end",
                    marginTop: "24px",
                  }}
                >
                  <Button variant="default" onClick={() => setOpen(false)}>
                    취소
                  </Button>
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    확인
                  </Button>
                </div>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>
    );
  },
};

export const CompoundWithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>닫기 버튼 없는 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay>
            <Modal.Content>
              <div>
                <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
                  닫기 버튼 없음
                </h2>
                <p style={{ margin: 0 }}>
                  컴파운드 패턴을 사용하면 닫기 버튼을 아예 렌더링하지 않을 수
                  있습니다.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "flex-end",
                    marginTop: "24px",
                  }}
                >
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    확인
                  </Button>
                </div>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>
    );
  },
};

export const CompoundWithCustomOverlay: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>커스텀 오버레이 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)", // 더 어두운 오버레이
            }}
          >
            <Modal.Content>
              <Modal.CloseButton />
              <div>
                <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
                  커스텀 오버레이
                </h2>
                <p style={{ margin: 0 }}>
                  오버레이의 스타일을 커스터마이징할 수 있습니다.
                </p>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>
    );
  },
};

export const CompoundWithHeader: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>헤더 있는 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>모달 제목</Modal.Header>
              <p style={{ margin: 0 }}>
                Modal.Header 컴포넌트를 사용하여 일관된 스타일의 제목을 표시할
                수 있습니다.
              </p>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>
    );
  },
};
