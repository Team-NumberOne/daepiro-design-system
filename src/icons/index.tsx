/* eslint-disable */
// ⚠️ 이 파일은 scripts/generate-icons-index.cjs 에 의해 자동 생성됩니다.
//    직접 수정하지 말고, 아이콘 SVG를 수정/추가한 후 "pnpm icons"를 다시 실행하세요.
import type { SVGProps } from 'react';
import * as GeneratedIcons from './generated/index';

const RawIcons = {
  ArrowDown: GeneratedIcons.ArrowDown,
  ArrowLeft: GeneratedIcons.ArrowLeft,
  ArrowRight: GeneratedIcons.ArrowRight,
  ArrowTop: GeneratedIcons.ArrowTop,
  Certification: GeneratedIcons.Certification,
  CheckBoxDisabled: GeneratedIcons.CheckBoxDisabled,
  CheckBoxEnabled: GeneratedIcons.CheckBoxEnabled,
  Close: GeneratedIcons.Close,
  Copy: GeneratedIcons.Copy,
  Delete: GeneratedIcons.Delete,
  DisasterInfo: GeneratedIcons.DisasterInfo,
  Eye: GeneratedIcons.Eye,
  Filter: GeneratedIcons.Filter,
  Good: GeneratedIcons.Good,
  HambugerBar: GeneratedIcons.HambugerBar,
  Logo: GeneratedIcons.Logo,
  Minus: GeneratedIcons.Minus,
  More: GeneratedIcons.More,
  NeighborhoodVerification: GeneratedIcons.NeighborhoodVerification,
  Noti: GeneratedIcons.Noti,
  Phone: GeneratedIcons.Phone,
  Photo: GeneratedIcons.Photo,
  Plus: GeneratedIcons.Plus,
  Reset: GeneratedIcons.Reset,
  Save: GeneratedIcons.Save,
  SendGreetings: GeneratedIcons.SendGreetings,
  Share: GeneratedIcons.Share,
  Start: GeneratedIcons.Start,
  Warning: GeneratedIcons.Warning,
  Weather: GeneratedIcons.Weather,
} as const;


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
      width={`${pixelSize}px`}
      height={`${pixelSize}px`}
      viewBox="0 0 24 24"
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        flexShrink: 0,
        ...(color ? { color } : {}),
        ...style,
      }}
      {...accessibilityProps}
      {...rest}
    />
  );
}

export const Icons = {
  ArrowDown: (props: IconBaseProps) => (
    <IconBase name={"ArrowDown" as IconName} {...props} />
  ),
  ArrowLeft: (props: IconBaseProps) => (
    <IconBase name={"ArrowLeft" as IconName} {...props} />
  ),
  ArrowRight: (props: IconBaseProps) => (
    <IconBase name={"ArrowRight" as IconName} {...props} />
  ),
  ArrowTop: (props: IconBaseProps) => (
    <IconBase name={"ArrowTop" as IconName} {...props} />
  ),
  Certification: (props: IconBaseProps) => (
    <IconBase name={"Certification" as IconName} {...props} />
  ),
  CheckBoxDisabled: (props: IconBaseProps) => (
    <IconBase name={"CheckBoxDisabled" as IconName} {...props} />
  ),
  CheckBoxEnabled: (props: IconBaseProps) => (
    <IconBase name={"CheckBoxEnabled" as IconName} {...props} />
  ),
  Close: (props: IconBaseProps) => (
    <IconBase name={"Close" as IconName} {...props} />
  ),
  Copy: (props: IconBaseProps) => (
    <IconBase name={"Copy" as IconName} {...props} />
  ),
  Delete: (props: IconBaseProps) => (
    <IconBase name={"Delete" as IconName} {...props} />
  ),
  DisasterInfo: (props: IconBaseProps) => (
    <IconBase name={"DisasterInfo" as IconName} {...props} />
  ),
  Eye: (props: IconBaseProps) => (
    <IconBase name={"Eye" as IconName} {...props} />
  ),
  Filter: (props: IconBaseProps) => (
    <IconBase name={"Filter" as IconName} {...props} />
  ),
  Good: (props: IconBaseProps) => (
    <IconBase name={"Good" as IconName} {...props} />
  ),
  HambugerBar: (props: IconBaseProps) => (
    <IconBase name={"HambugerBar" as IconName} {...props} />
  ),
  Logo: (props: IconBaseProps) => (
    <IconBase name={"Logo" as IconName} {...props} />
  ),
  Minus: (props: IconBaseProps) => (
    <IconBase name={"Minus" as IconName} {...props} />
  ),
  More: (props: IconBaseProps) => (
    <IconBase name={"More" as IconName} {...props} />
  ),
  NeighborhoodVerification: (props: IconBaseProps) => (
    <IconBase name={"NeighborhoodVerification" as IconName} {...props} />
  ),
  Noti: (props: IconBaseProps) => (
    <IconBase name={"Noti" as IconName} {...props} />
  ),
  Phone: (props: IconBaseProps) => (
    <IconBase name={"Phone" as IconName} {...props} />
  ),
  Photo: (props: IconBaseProps) => (
    <IconBase name={"Photo" as IconName} {...props} />
  ),
  Plus: (props: IconBaseProps) => (
    <IconBase name={"Plus" as IconName} {...props} />
  ),
  Reset: (props: IconBaseProps) => (
    <IconBase name={"Reset" as IconName} {...props} />
  ),
  Save: (props: IconBaseProps) => (
    <IconBase name={"Save" as IconName} {...props} />
  ),
  SendGreetings: (props: IconBaseProps) => (
    <IconBase name={"SendGreetings" as IconName} {...props} />
  ),
  Share: (props: IconBaseProps) => (
    <IconBase name={"Share" as IconName} {...props} />
  ),
  Start: (props: IconBaseProps) => (
    <IconBase name={"Start" as IconName} {...props} />
  ),
  Warning: (props: IconBaseProps) => (
    <IconBase name={"Warning" as IconName} {...props} />
  ),
  Weather: (props: IconBaseProps) => (
    <IconBase name={"Weather" as IconName} {...props} />
  ),
} as const;


export const Icon = Object.assign(IconBase, Icons);
