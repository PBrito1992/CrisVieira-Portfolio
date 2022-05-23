import { ReactNode } from "react";

type BackdropType = {
  children: ReactNode;
};

const Backdrop = ({ children }: BackdropType) => (
  <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-portfolio-bg">
    {children}
  </div>
);

export default Backdrop;
