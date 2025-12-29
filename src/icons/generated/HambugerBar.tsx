import type { SVGProps } from "react";

const SvgHambugerBar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 7.75L4 7.75L4 5.25L20 5.25L20 7.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 13.25L4 13.25L4 10.75L20 10.75L20 13.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 18.75L4 18.75L4 16.25L20 16.25L20 18.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHambugerBar;
