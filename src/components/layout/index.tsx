import { useAppContext } from "context/app-context";
import { FC, ReactNode, useEffect, useRef } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { setLayoutRef } = useAppContext();
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLayoutRef(layoutRef);
  }, []);

  return (
    <div
      ref={layoutRef}
      className="scrollbar-hidden lg:scrollbar h-screen overflow-y-scroll bg-portfolio-bg"
    >
      {children}
    </div>
  );
};

export default Layout;
