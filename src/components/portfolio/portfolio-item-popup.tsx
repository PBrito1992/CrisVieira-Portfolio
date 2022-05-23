import Backdrop from "components/common/backdrop";
import ContextBox from "components/common/context-box";
import Icon from "components/common/icons";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC } from "react";
import ReactDOM from "react-dom";

export type PortfolioItemPopupType = {
  imgSrc: string;
  imgAlt: string;
  feature: string;
  title: string;
  onClose: () => void;
};

const PortfolioItemPopup: FC<PortfolioItemPopupType> = ({
  imgSrc,
  imgAlt,
  feature,
  title,
  onClose,
}) => {
  return ReactDOM.createPortal(
    <Backdrop>
      <ContextBox className="relative h-auto w-5/6 p-10">
        <>
          <div
            className="absolute top-4 right-4 cursor-pointer rounded-full bg-brand-hover p-2 shadow-brand"
            onClick={onClose}
          >
            <Icon icon="times" w={24} h={24} color="#d1d5db" />
          </div>
          <div className="flex gap-8">
            <img src={imgSrc} alt={imgAlt} className="w-1/3 rounded-lg" />
            <div className="w-2/3">
              <SectionTitle className="text-pink-700">
                Featured - {feature}
              </SectionTitle>
              <SectionTitleHighlighted className="mt-2 text-2xl text-gray-300">
                {title}
              </SectionTitleHighlighted>
            </div>
          </div>
        </>
      </ContextBox>
    </Backdrop>,
    document.body
  );
};

export default PortfolioItemPopup;
