import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC, useState } from "react";
import PortfolioFilter, {
  FiltersType,
  PortfolioFilters,
} from "./portfolio-filter";
import PortfolioItem, { PortfolioItemType } from "./portfolio-item";
import PortfolioItemPopup, {
  PortfolioItemPopupType,
} from "./portfolio-item-popup";

type PortfolioItem = {
  filterId: FiltersType;
  items: PortfolioItemType[];
};

const portfolioItems: PortfolioItem[] = [
  {
    filterId: "javascript",
    items: [
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
        imgAlt: "image test",
        title: "The services provide for design",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
        imgAlt: "image test",
        title: "The services provide for design",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
        imgAlt: "image test",
        title: "The services provide for design",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg",
        imgAlt: "image test",
        title: "The services provide for design",
      },
    ],
  },
  {
    filterId: "productDesign",
    items: [
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & app maintain",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & app maintain",
      },
    ],
  },
  {
    filterId: "wordpress",
    items: [
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
        imgAlt: "image test",
        title: "Logo design creativity & Application",
      },
    ],
  },
  {
    filterId: "python",
    items: [
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
      {
        imgSrc:
          "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
        imgAlt: "image test",
        title: "Mobile app landing design & services",
      },
    ],
  },
];

const Portfolio: FC = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<FiltersType>("javascript");
  const [selectedItem, setSelectedItem] =
    useState<PortfolioItemPopupType | null>(null);

  const portfolioItemsToDisplay = portfolioItems.find(
    (item) => item.filterId === selectedFilter
  );

  const portfolioItemSelectedHandler = (item: PortfolioItemType) => {
    setSelectedItem({
      ...item,
      feature: PortfolioFilters[selectedFilter],
      onClose: () => setSelectedItem(null),
    });
  };

  return (
    <div
      id="portfolio"
      className="mx-auto h-auto min-h-screen w-full border-b-2 border-gray-900 px-5 py-10 lg:w-5/6 lg:py-28 lg:px-0"
    >
      <SectionTitle className="text-pink-700">
        Visit My Portfolio and keep your feedback
      </SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        My Portfolio
      </SectionTitleHighlighted>
      <div className="mt-10 flex flex-col items-start gap-8 lg:flex-row">
        <PortfolioFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {portfolioItemsToDisplay?.items?.map((item, index) => (
            <PortfolioItem
              key={`${item.title}-${index}`}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              onClick={() => portfolioItemSelectedHandler(item)}
            />
          ))}
        </div>
        {selectedItem && <PortfolioItemPopup {...selectedItem} />}
      </div>
    </div>
  );
};

export default Portfolio;
