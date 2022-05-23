import { FC } from "react";
import { IconPropsType } from ".";

const Burger: FC<IconPropsType> = ({ w, h, color }) => (
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
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default Burger;
