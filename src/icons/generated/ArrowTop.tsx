import type { SVGProps } from "react";

const SvgArrowTop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.8839 14.1161L19.1161 15.8839L12 8.76777L4.88388 15.8839L3.11611 14.1161L12 5.23224L20.8839 14.1161Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowTop;
