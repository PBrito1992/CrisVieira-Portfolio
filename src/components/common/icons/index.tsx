import { FC } from "react";
import Burger from "./burger";
import Pinterest from "./pinterest";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Times from "./times";
import Facebook from "./facebook";

export type IconPropsType = {
  icon: IconsType;
  w: number;
  h: number;
  color: string;
};

const icons = {
  pinterest: Pinterest,
  instagram: Instagram,
  linkedin: Linkedin,
  burger: Burger,
  times: Times,
  facebook: Facebook,
};

type IconsType = keyof typeof icons;

const Icon: FC<IconPropsType> = (props) => {
  const Component = icons[props.icon];
  return <Component {...props} />;
};

export default Icon;
