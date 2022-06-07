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
}) => {
  return (
    <ContextBox
      className="context-box-animation cursor-pointer p-10"
      onClick={onClick}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <PortfolioCarousel images={imgSrc} />
      </div>
      <div className="mt-3 text-base font-semibold text-gray-300">{title}</div>
    </ContextBox>
  );
};

export default PortfolioItem;
