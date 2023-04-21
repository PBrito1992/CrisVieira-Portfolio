import ContextBox from "components/common/context-box";
import { Dispatch, SetStateAction } from "react";
import Select from "react-select";

export const PortfolioFilters = {
  design: "Design",
  photoEdition: "Photo Edition",
  mockups: "Mockups",
  logos: "Logos",
  socialNetworks: "Social Networks",
  blogPosts: "Blog Posts",
  ebooks: "Ebooks",
  brochures: "Brochures",
};

const filterOptions = Object.entries(PortfolioFilters).map(([key, filter]) => ({
  label: filter,
  value: key,
}));

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
    <ContextBox className="w-full lg:sticky lg:top-header-height lg:z-10 lg:w-1/5">
      <label className="sr-only" htmlFor="portfolio-filter">
        Portfolio Filter
      </label>
      <Select
        id="portfolio-filter"
        instanceId="portfolio-filter"
        className="w-full"
        classNamePrefix="react-select"
        isSearchable={false}
        value={filterOptions.find((val) => val.value === selectedFilter)}
        options={filterOptions}
        onChange={(val) => setSelectedFilter(val?.value as FiltersType)}
        components={{ IndicatorSeparator: () => null }}
        styles={{
          menuPortal: (provided) => ({ ...provided, zIndex: 10 }),
          menu: (provided) => ({ ...provided, zIndex: 10 }),
        }}
      />
    </ContextBox>
  );
};

export default PortfolioFilter;
