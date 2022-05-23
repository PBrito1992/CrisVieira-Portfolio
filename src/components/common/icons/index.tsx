import { FC } from "react";
import Burger from "./burger";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Times from "./times";

export type IconPropsType = {
  icon: IconsType;
  w: number;
  h: number;
  color: string;
};

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  burger: Burger,
  times: Times,
};

type IconsType = keyof typeof icons;

const Icon: FC<IconPropsType> = (props) => {
  const Component = icons[props.icon];
  return <Component {...props} />;
};

export default Icon;
