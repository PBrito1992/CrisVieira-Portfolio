import Icon from "components/common/icons";
import { useAppContext } from "context/app-context";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import HeaderItem, { HeaderItemType } from "./header-item";

const HeaderItems: HeaderItemType[] = [
  {
    text: "Home",
    linkRef: "#home",
  },
  {
    text: "Features",
    linkRef: "#features",
  },
  {
    text: "Portfolio",
    linkRef: "#portfolio",
  },
  {
    text: "Resume",
    linkRef: "#resume",
  },
  {
    text: "Contact",
    linkRef: "#contact",
  },
];

const Header: FC = () => {
  const { layoutRef } = useAppContext();
  const [isOnTop, setIsOnTop] = useState(true);

  const updateHeader = () => {
    if (!layoutRef?.current) return;

    setIsOnTop(layoutRef.current.scrollTop === 0);
  };

  useEffect(() => {
    if (!layoutRef?.current) return;

    const containerRef = layoutRef?.current;
    containerRef.addEventListener("scroll", updateHeader);

    return () => containerRef.removeEventListener("scroll", updateHeader);
  }, [layoutRef]);

  return (
    <header
      className={`flex w-full items-center justify-between py-5 px-5 lg:px-20 ${
        isOnTop
          ? ""
          : "fixed top-0 z-10 bg-portfolio-bg bg-opacity-90 shadow-xl"
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-gray-400">
        <img src="/images/me-face.JPG" alt="" />
      </div>
      <nav className="hidden items-center gap-10 lg:flex">
        {HeaderItems.map((item) => (
          <HeaderItem key={item.text} {...item} />
        ))}
      </nav>
      <span className="lg:hidden">
        <Icon icon="burger" w={42} h={42} color="#be185d" />
      </span>
    </header>
  );
};

export default Header;
