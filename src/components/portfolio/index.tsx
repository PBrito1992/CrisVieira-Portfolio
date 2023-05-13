import { storyblokEditable } from "@storyblok/react";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import PortfolioFilter from "./portfolio-filter";
import PortfolioItem from "./portfolio-item";
import { PortfolioItemPopupType } from "./portfolio-item-popup";

const PortfolioItemPopup = dynamic(() => import("./portfolio-item-popup"));

type TPortfolio = {
  blok: any;
};

const Portfolio: FC<TPortfolio> = ({ blok }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    blok?.filters?.[0]?.id || ""
  );
  const [selectedItem, setSelectedItem] =
    useState<PortfolioItemPopupType | null>(null);

  const portfolioItemsToDisplay = blok[`portfolio_${selectedFilter}_section`];

  const portfolioItemSelectedHandler = (item: any) => {
    setSelectedItem({
      ...item,
      imgSrc: item.images.map((img: any) => img.filename),
      feature: blok?.filters.find((filter: any) => filter.id === item.section)
        ?.text,
      onClose: () => setSelectedItem(null),
    });
  };

  return (
    <div
      {...storyblokEditable(blok)}
      id="portfolio"
      className="mx-auto h-auto min-h-screen w-full border-b-2 border-gray-900 px-5 py-10 lg:w-5/6 lg:px-0 lg:py-28"
    >
      <SectionTitle className="text-pink-700">{blok.intro_title}</SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        {blok.title}
      </SectionTitleHighlighted>
      <div className="mt-10 flex flex-col items-start gap-8 lg:flex-row">
        <PortfolioFilter
          options={blok?.filters || []}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div className="grid w-full grid-cols-1 gap-8 lg:w-4/5 lg:grid-cols-3">
          {portfolioItemsToDisplay?.map((item: any) => (
            <PortfolioItem
              key={item._uid}
              imgSrc={item.images.map((img: any) => img.filename)}
              imgAlt={""}
              title={item.title}
              onClick={() => portfolioItemSelectedHandler(item)}
            />
          ))}
        </div>
        {selectedItem && (
          <PortfolioItemPopup
            {...selectedItem}
            feature={
              blok?.filters.find((filter: any) => filter.id === selectedFilter)
                .text
            }
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
