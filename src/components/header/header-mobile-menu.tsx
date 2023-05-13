import Backdrop from "components/common/backdrop";
import HeaderItem from "./header-item";
import IntroFindMe from "components/intro/intro-find-me";
import Icon from "components/common/icons";
import Image from "next/image";

type HeaderMobileMenuType = {
  headerSections: any[];
  findMeTitle: string;
  findMeContacts: any[];
  imageUrl: string;
  onClose: () => void;
};

const HeaderMobileMenu = ({
  headerSections,
  findMeTitle,
  findMeContacts,
  imageUrl,
  onClose,
}: HeaderMobileMenuType) => (
  <Backdrop className="bg-black bg-opacity-80">
    <div className="fixed left-0 top-0 z-1000 h-full w-90vw animate-mobile-menu bg-portfolio-bg p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-gray-400">
          <Image src={imageUrl} width={60} height={60} alt="" />
        </div>
        <div
          className="rounded-full bg-white bg-opacity-5 p-3"
          onClick={onClose}
        >
          <Icon icon="times" w={20} h={20} color="#be185d" />
        </div>
      </div>
      <div className="flex h-mobile-menu-body-minus-header flex-col justify-between">
        <nav className="my-10 flex flex-col gap-10 border-b border-t border-gray-400 border-opacity-30 py-10">
          {headerSections.map((item) => (
            <HeaderItem key={item.text} {...item} onClick={onClose} />
          ))}
        </nav>
        <div>
          <IntroFindMe title={findMeTitle} contacts={findMeContacts} />
        </div>
      </div>
    </div>
  </Backdrop>
);

export default HeaderMobileMenu;
