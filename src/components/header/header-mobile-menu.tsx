import Backdrop from "components/common/backdrop";
import { HeaderItems } from ".";
import HeaderItem from "./header-item";
import IntroFindMe from "components/intro/intro-find-me";
import Icon from "components/common/icons";

type HeaderMobileMenuType = {
  onClose: () => void;
};

const HeaderMobileMenu = ({ onClose }: HeaderMobileMenuType) => (
  <Backdrop className="bg-black bg-opacity-80">
    <div className="fixed top-0 left-0 z-1000 h-full w-90vw animate-mobile-menu bg-portfolio-bg p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-gray-400">
          <img src="/images/me-face.JPG" alt="" />
        </div>
        <div
          className="rounded-full bg-white bg-opacity-5 p-3"
          onClick={onClose}
        >
          <Icon icon="times" w={20} h={20} color="#be185d" />
        </div>
      </div>
      <div className="flex h-mobile-menu-body-minus-header flex-col justify-between">
        <nav className="my-10 flex flex-col gap-10 border-t border-b border-gray-400 border-opacity-30 py-10">
          {HeaderItems.map((item) => (
            <HeaderItem key={item.text} {...item} onClick={onClose} />
          ))}
        </nav>
        <div>
          <IntroFindMe />
        </div>
      </div>
    </div>
  </Backdrop>
);

export default HeaderMobileMenu;
