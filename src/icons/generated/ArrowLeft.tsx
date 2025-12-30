import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.1161 3.11609L15.8839 4.88386L8.76777 12L15.8839 19.1161L14.1161 20.8839L5.23224 12L14.1161 3.11609Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowLeft;
