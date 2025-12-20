import { Button } from "@/components/button/Button";
import { Icon, Icons, iconSize } from "@/icons";
import { colors } from "@/tokens/colors";
import { typography } from "@/tokens/typography";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section
    style={{
      marginBottom: "48px",
      padding: "24px",
      border: `1px solid ${colors.G[200]}`,
      borderRadius: "12px",
      backgroundColor: colors.white,
    }}
  >
    <h2
      style={{
        ...typography.h5,
        marginBottom: "24px",
        color: colors.G[900],
        borderBottom: `2px solid ${colors.G[200]}`,
        paddingBottom: "12px",
      }}
    >
      {title}
    </h2>
    {children}
  </section>
);

export function App() {
  const typographyKeys = Object.keys(typography) as Array<
    keyof typeof typography
  >;
  const iconNames = Object.keys(Icons) as Array<keyof typeof Icons>;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: typography.h1.fontFamily,
        background: colors.G[50],
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ marginBottom: "48px", textAlign: "center" }}>
          <h1 style={{ ...typography.h3, color: colors.G[900], marginBottom: "8px" }}>
            Design System Playground
          </h1>
          <p style={{ ...typography["body-2"], color: colors.G[600] }}>
            컴포넌트와 토큰을 확인하고 테스트할 수 있는 플레이그라운드
          </p>
        </header>

        {/* Buttons Section */}
        <Section title="Buttons">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                Variants
              </h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="default">Default</Button>
                <Button variant="gray">Gray</Button>
                <Button variant="primary">Primary</Button>
              </div>
            </div>

            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                With Icons
              </h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button
                  variant="primary"
                  leftIcon={<Icon name="Noti" size="md" color="white" />}
                >
                  Left Icon
                </Button>
                <Button
                  variant="primary"
                  rightIcon={<Icon name="ArrowRight" size="md" color="white" />}
                >
                  Right Icon
                </Button>
              </div>
            </div>

            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                States
              </h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="primary">Default</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                Full Width
              </h3>
              <Button variant="primary" full style={{ maxWidth: "400px" }}>
                Full Width Button
              </Button>
            </div>
          </div>
        </Section>

        {/* Icons Section */}
        <Section title="Icons">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                All Icons
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "16px",
                }}
              >
                {iconNames.slice(0, 12).map((name) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      padding: "16px",
                      border: `1px solid ${colors.G[200]}`,
                      borderRadius: "8px",
                      backgroundColor: colors.G[50],
                    }}
                  >
                    <Icon name={name} size="md" />
                    <span
                      style={{
                        ...typography.caption,
                        color: colors.G[700],
                        textAlign: "center",
                        wordBreak: "break-word",
                      }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                Sizes
              </h3>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                  <div
                    key={size}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon name="ArrowRight" size={size} />
                    <span style={{ ...typography.caption, color: colors.G[600] }}>
                      {size} ({iconSize[size]}px)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{
                  ...typography["subtitle-1"],
                  marginBottom: "16px",
                  color: colors.G[700],
                }}
              >
                Colors
              </h3>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Icon name="Warning" size="md" />
                <Icon name="Warning" size="md" color={colors.O[500]} />
                <Icon name="Warning" size="md" color={colors.R[500]} />
                <Icon name="Warning" size="md" color={colors.Gre[500]} />
              </div>
            </div>
          </div>
        </Section>

        {/* Typography Section */}
        <Section title="Typography">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {typographyKeys.map((key) => {
              const style = typography[key];
              return (
                <div
                  key={key}
                  style={{
                    padding: "16px",
                    border: `1px solid ${colors.G[200]}`,
                    borderRadius: "8px",
                    backgroundColor: colors.G[50],
                  }}
                >
                  <div
                    style={{
                      ...style,
                      color: colors.G[900],
                      marginBottom: "8px",
                    }}
                  >
                    프리텐다드 The quick brown fox jumps over the lazy dog
                  </div>
                  <div
                    style={{
                      ...typography.caption,
                      color: colors.G[600],
                      fontFamily: "monospace",
                    }}
                  >
                    {key} | fontSize: {style.fontSize}px | fontWeight:{" "}
                    {style.fontWeight} | lineHeight: {style.lineHeight} |
                    letterSpacing: {style.letterSpacing}px
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Colors Section */}
        <Section title="Colors">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { name: "Gray", palette: colors.G },
              { name: "Orange", palette: colors.O },
              { name: "Green", palette: colors.Gre },
              { name: "Red", palette: colors.R },
            ].map(({ name, palette }) => (
              <div key={name}>
                <h3
                  style={{
                    ...typography["subtitle-1"],
                    marginBottom: "16px",
                    color: colors.G[700],
                  }}
                >
                  {name}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {Object.entries(palette).map(([key, value]) => (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: `1px solid ${colors.G[200]}`,
                      }}
                    >
                      <div
                        style={{
                          height: "60px",
                          backgroundColor: value,
                          borderBottom: `1px solid ${colors.G[200]}`,
                        }}
                      />
                      <div
                        style={{
                          padding: "8px",
                          backgroundColor: colors.white,
                        }}
                      >
                        <div
                          style={{
                            ...typography.caption,
                            fontWeight: 600,
                            color: colors.G[900],
                            marginBottom: "4px",
                          }}
                        >
                          {name[0]}[{key}]
                        </div>
                        <div
                          style={{
                            ...typography.caption,
                            color: colors.G[600],
                            fontFamily: "monospace",
                            fontSize: "10px",
                          }}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
