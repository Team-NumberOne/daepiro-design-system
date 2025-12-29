import type { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 13.25L4 13.25L4 10.75L20 10.75L20 13.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 4L13.25 20L10.75 20L10.75 4L13.25 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlus;
