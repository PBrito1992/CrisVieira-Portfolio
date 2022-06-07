import Backdrop from "components/common/backdrop";
import ContextBox from "components/common/context-box";
import Icon from "components/common/icons";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { StaticImageData } from "next/image";
import { FC } from "react";
import ReactDOM from "react-dom";
import PortfolioCarousel from "./portfolio-carousel";

export type PortfolioItemPopupType = {
  imgSrc: StaticImageData[] | string[];
  imgAlt?: string;
  feature: string;
  title?: string;
  body?: string;
  onClose: () => void;
};

const PortfolioItemPopup: FC<PortfolioItemPopupType> = ({
  imgSrc,
  imgAlt,
  feature,
  title,
  body,
  onClose,
}) => {
  return ReactDOM.createPortal(
    <Backdrop>
      <ContextBox className="h-auto max-h-screen w-full p-5 lg:relative lg:max-h-none lg:w-5/6 lg:p-10">
        <>
          <div className="mb-3 flex justify-end">
            <div
              className="inline-block w-auto cursor-pointer rounded-full bg-brand-hover p-2 shadow-brand"
              onClick={onClose}
            >
              <Icon icon="times" w={24} h={24} color="#d1d5db" />
            </div>
          </div>

          <div className="scrollbar-hidden h-auto max-h-screen justify-center gap-8 overflow-y-scroll lg:flex lg:h-auto">
            <div className="w-full lg:w-1/3">
              <PortfolioCarousel images={imgSrc} />
            </div>
            {body && (
              <div className="lg:scrollbar-hidden w-full lg:max-h-90vh-minus-padding lg:w-2/3 lg:overflow-y-scroll">
                <SectionTitle className=" text-pink-700">
                  {feature}
                </SectionTitle>
                <SectionTitleHighlighted className="mt-2 mb-4 text-lg text-gray-300 lg:text-2xl">
                  {title}
                </SectionTitleHighlighted>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            )}
          </div>
        </>
      </ContextBox>
    </Backdrop>,
    document.body
  );
};

export default PortfolioItemPopup;
