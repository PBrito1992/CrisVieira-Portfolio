import { FC, ReactNode } from "react";

type SectionTitleHighlightedType = {
  className?: string;
  children: ReactNode;
};

const SectionTitleHighlighted: FC<SectionTitleHighlightedType> = ({
  className,
  children,
}) => (
  <h3 className={`text-4xl font-bold lg:text-6xl ${className}`}>{children}</h3>
);

export default SectionTitleHighlighted;
