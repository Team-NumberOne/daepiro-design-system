import type { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 20V4H5V20H19ZM7.52838 17.7511V6.2829L13.0123 7.31674V16.6815L7.52838 17.7511Z"
      fill="#FF6929"
    />
  </svg>
);
export default SvgLogo;
