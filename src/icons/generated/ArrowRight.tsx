import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.88388 20.8839L8.11611 19.1161L15.2322 12L8.11611 4.88391L9.88388 3.11614L18.7678 12L9.88388 20.8839Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowRight;
