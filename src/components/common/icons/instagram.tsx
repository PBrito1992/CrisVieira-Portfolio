import { FC } from "react";
import { IconPropsType } from ".";

const Instagram: FC<IconPropsType> = ({ w, h, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w.toString()}
    height={h.toString()}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default Instagram;
