import Icon from "components/common/icons";
import { useAppContext } from "context/app-context";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import HeaderItem from "./header-item";
import dynamic from "next/dynamic";

const HeaderMobileMenu = dynamic(() => import("./header-mobile-menu"));

type THeader = {
  blok: any;
  findMeTitle: string;
  findMeContacts: any[];
};

const Header: FC<THeader> = ({ blok, findMeTitle, findMeContacts }) => {
  const { layoutRef } = useAppContext();
  const [isOnTop, setIsOnTop] = useState(true);
  const [displayMenu, setDisplayMenu] = useState(false);

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
      className={`flex w-full items-center justify-between px-5 py-5 lg:px-20 ${
        isOnTop
          ? ""
          : "fixed top-0 z-10 bg-portfolio-bg bg-opacity-90 shadow-xl"
      }`}
    >
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-gray-400">
        <Image src={blok?.image?.filename} width={60} height={60} alt="" />
      </div>
      <nav className="hidden items-center gap-10 lg:flex">
        {blok?.sections?.map((item: any) => (
          <HeaderItem key={item.text} {...item} />
        ))}
      </nav>
      <span className="lg:hidden" onClick={() => setDisplayMenu(true)}>
        <Icon icon="burger" w={42} h={42} color="#be185d" />
      </span>
      {displayMenu && (
        <HeaderMobileMenu
          headerSections={blok?.sections || []}
          findMeTitle={findMeTitle}
          findMeContacts={findMeContacts}
          imageUrl={blok?.image?.filename}
          onClose={() => setDisplayMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;
