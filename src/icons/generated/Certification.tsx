import type { SVGProps } from "react";

const SvgCertification = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.3 15.0357L16.0172 10.5431L14.9828 9.45691L11.3 12.9643L9.01724 10.7902L7.98276 11.8764L11.3 15.0357Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCertification;
