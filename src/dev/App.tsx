import { Button } from "@/components/button/Button";
import { Icon } from "@/icons";
import { colors } from "@/tokens/colors";

export function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: "white",
      }}
    >
      <Button disabled>Primary</Button>
      <Button>Ghost</Button>
      <Button full style={{ maxWidth: 240 }} leftIcon={<Icon.Phone />}>
        text
      </Button>

      <Icon.Delete color={colors.O[500]} />
      <Icon.Warning color={colors.R[500]} />
      <Icon name="Delete" />
    </div>
  );
}
