import ContextBox from "components/common/context-box";
import { StaticImageData } from "next/image";
import { FC } from "react";
import PortfolioCarousel from "./portfolio-carousel";

export type PortfolioItemType = {
  imgSrc: StaticImageData[] | string[];
  imgAlt?: string;
  title?: string;
  body?: string;
  onClick?: () => void;
};

const PortfolioItem: FC<PortfolioItemType> = ({
  imgSrc,
  imgAlt,
  title,
  onClick,
}) => (
  <ContextBox className="flex cursor-pointer flex-col justify-between p-5">
    <div>
      <div>
        <PortfolioCarousel images={imgSrc} />
      </div>
      <div className="mt-3 text-center text-base font-semibold text-gray-300">
        {title}
      </div>
    </div>
    <button
      className="context-box-animation mt-4 h-12  w-full rounded-lg bg-experience-color bg-opacity-50 font-semibold text-pink-700"
      onClick={onClick}
    >
      Full Content
    </button>
  </ContextBox>
);

export default PortfolioItem;
