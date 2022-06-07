import ContextBox from "components/common/context-box";
import { Dispatch, SetStateAction } from "react";
import FilterItem from "../common/filter-item";

export const PortfolioFilters = {
  design: "Design",
  photoEdition: "Photo Edition",
  mockups: "Mockups",
  logos: "Logos",
  socialNetworks: "Social Networks",
  blogPosts: "Blog Posts",
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
    <ContextBox className="w-full lg:sticky lg:top-header-height lg:z-10 lg:w-auto">
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
