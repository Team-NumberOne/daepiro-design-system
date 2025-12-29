const fs = require("node:fs");
const path = require("node:path");

const ROOT_DIR = path.join(__dirname, "..");
const GENERATED_DIR = path.join(ROOT_DIR, "src/icons/generated");
const OUTPUT_FILE = path.join(ROOT_DIR, "src/icons/index.tsx");

function isValidIdentifier(name) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
}

async function main() {
  const files = await fs.promises.readdir(GENERATED_DIR);

  const tsxFiles = files.filter((file) => file.endsWith(".tsx"));

  if (tsxFiles.length === 0) {
    console.warn(
      "[generate-icons-index] No .tsx files found in generated folder."
    );
  }

  const iconNames = tsxFiles
    .map((file) => path.basename(file, ".tsx"))
    .filter((name) => {
      if (name === "index") {
        console.warn(
          `[generate-icons-index] Skip "index.tsx" (reserved name).`
        );
        return false;
      }
      if (!isValidIdentifier(name)) {
        console.warn(
          `[generate-icons-index] Skip "${name}.tsx" (not a valid TS identifier).`
        );
        return false;
      }
      return true;
    })
    .sort();

  // GeneratedIcons → RawIcons (내부용 맵)
  const rawIconsObject = `const RawIcons = {
${iconNames.map((name) => `  ${name}: GeneratedIcons.${name},`).join("\n")}
} as const;\n`;

  // IconBase를 감싼 정적 아이콘들 (Icon.ArrowDown 같은 애들)
  const iconsWrapperObject = `export const Icons = {
${iconNames
  .map(
    (name) => `  ${name}: (props: IconBaseProps) => (
    <IconBase name={"${name}" as IconName} {...props} />
  ),`
  )
  .join("\n")}
} as const;\n`;

  const template = `/* eslint-disable */
// ⚠️ 이 파일은 scripts/generate-icons-index.cjs 에 의해 자동 생성됩니다.
//    직접 수정하지 말고, 아이콘 SVG를 수정/추가한 후 "pnpm icons"를 다시 실행하세요.
import type { SVGProps } from 'react';
import * as GeneratedIcons from './generated/index';

${rawIconsObject}

export type IconName = keyof typeof RawIcons;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const iconSize: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export type IconBaseProps = {
  size?: IconSize | number;
  color?: string;
  decorative?: boolean;
  'aria-label'?: string;
} & Omit<SVGProps<SVGSVGElement>, 'color'>;

function IconBase({
  name,
  size = 'md',
  color,
  decorative = true,
  'aria-label': ariaLabel,
  style,
  ...rest
}: { name: IconName | string } & IconBaseProps) {
  const Component = RawIcons[name as IconName];
  const pixelSize =
    typeof size === 'number' ? size : iconSize[size];

  const accessibilityProps = decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': ariaLabel };

  return (
    <Component
      width={\`\${pixelSize}px\`}
      height={\`\${pixelSize}px\`}
      viewBox="0 0 24 24"
      style={{
        width: \`\${pixelSize}px\`,
        height: \`\${pixelSize}px\`,
        flexShrink: 0,
        ...(color ? { color } : {}),
        ...style,
      }}
      {...accessibilityProps}
      {...rest}
    />
  );
}

${iconsWrapperObject}

export const Icon = Object.assign(IconBase, Icons);
`;

  await fs.promises.mkdir(path.dirname(OUTPUT_FILE), {
    recursive: true,
  });
  await fs.promises.writeFile(OUTPUT_FILE, template, "utf8");

  console.log(
    `[generate-icons-index] Generated ${OUTPUT_FILE} with ${iconNames.length} icons.`
  );
}

main().catch((err) => {
  console.error("[generate-icons-index] Error:", err);
  process.exit(1);
});
