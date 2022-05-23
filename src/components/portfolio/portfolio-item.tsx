import ContextBox from "components/common/context-box";
import { FC } from "react";

export type PortfolioItemType = {
  imgSrc: string;
  imgAlt: string;
  title: string;
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
      <>
        <img src={imgSrc} alt={imgAlt} className="rounded-lg" />
        <div className="mt-3 text-xl font-semibold text-gray-300">{title}</div>
      </>
    </ContextBox>
  );
};

export default PortfolioItem;
