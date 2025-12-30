import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.11612 9.88388L4.88389 8.11611L12 15.2322L19.1161 8.11611L20.8839 9.88388L12 18.7678L3.11612 9.88388Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowDown;
