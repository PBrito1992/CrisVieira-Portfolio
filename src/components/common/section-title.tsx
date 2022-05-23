import { FC, ReactNode } from "react";

type SectionTitleType = {
  className?: string;
  children: ReactNode;
};

const SectionTitle: FC<SectionTitleType> = ({ className, children }) => (
  <h2 className={`text-sm uppercase tracking-wide lg:text-base ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
