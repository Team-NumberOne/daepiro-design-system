import type { SVGProps } from "react";
const SvgWeather = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
      fill="currentColor"
    />
    <rect x={11.5} y={2} width={1} height={3} fill="currentColor" />
    <rect x={11.5} y={19} width={1} height={3} fill="currentColor" />
    <rect
      x={2}
      y={12.5}
      width={1}
      height={3}
      transform="rotate(-90 2 12.5)"
      fill="currentColor"
    />
    <rect
      x={19}
      y={12.5}
      width={1}
      height={3}
      transform="rotate(-90 19 12.5)"
      fill="currentColor"
    />
    <rect
      x={5.28247}
      y={19.4246}
      width={1}
      height={3}
      transform="rotate(-135 5.28247 19.4246)"
      fill="currentColor"
    />
    <rect
      x={17.3033}
      y={7.40381}
      width={1}
      height={3}
      transform="rotate(-135 17.3033 7.40381)"
      fill="currentColor"
    />
    <rect
      x={19.4246}
      y={18.7175}
      width={1}
      height={3}
      transform="rotate(135 19.4246 18.7175)"
      fill="currentColor"
    />
    <rect
      x={7.40381}
      y={6.69672}
      width={1}
      height={3}
      transform="rotate(135 7.40381 6.69672)"
      fill="currentColor"
    />
  </svg>
);
export default SvgWeather;
