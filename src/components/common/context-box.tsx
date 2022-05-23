import { FC, ReactNode } from "react";

type ContextBoxType = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const ContextBox: FC<ContextBoxType> = ({ className, children, onClick }) => (
  <div
    className={`rounded-lg bg-brand text-gray-100 shadow-brand ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

export default ContextBox;
