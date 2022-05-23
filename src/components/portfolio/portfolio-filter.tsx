import ContextBox from "components/common/context-box";
import { Dispatch, SetStateAction } from "react";
import FilterItem from "../common/filter-item";

export const PortfolioFilters = {
  javascript: "Javascript",
  productDesign: "Product Design",
  wordpress: "Wordpress",
  python: "Python",
};

export type FiltersType = keyof typeof PortfolioFilters;

type PortfolioFilterType = {
  selectedFilter: FiltersType;
  setSelectedFilter: Dispatch<SetStateAction<FiltersType>>;
};

const PortfolioFilter = ({
  selectedFilter,
  setSelectedFilter,
}: PortfolioFilterType) => {
  return (
    <ContextBox className="z-10 w-full lg:sticky lg:top-header-height lg:w-auto">
      {Object.entries(PortfolioFilters).map(([key, filter]) => (
        <FilterItem
          key={key}
          isSelected={key === selectedFilter}
          onClick={() => setSelectedFilter(key as FiltersType)}
          text={filter}
        />
      ))}
    </ContextBox>
  );
};

export default PortfolioFilter;
