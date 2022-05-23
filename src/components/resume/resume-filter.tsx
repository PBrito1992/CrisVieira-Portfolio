import ContextBox from "components/common/context-box";
import FilterItem from "components/common/filter-item";
import { Dispatch, SetStateAction } from "react";

export const ResumeFilters = {
  education: "Education",
  experience: "Experience",
};

export type ResumeFiltersType = keyof typeof ResumeFilters;

type ResumeFilterType = {
  selectedFilter: ResumeFiltersType;
  setSelectedFilter: Dispatch<SetStateAction<ResumeFiltersType>>;
};

const ResumeFilter = ({
  selectedFilter,
  setSelectedFilter,
}: ResumeFilterType) => {
  return (
    <ContextBox className="z-10 flex flex-col lg:flex-row">
      {Object.entries(ResumeFilters).map(([key, filter]) => (
        <FilterItem
          key={key}
          className="flex-1"
          isSelected={key === selectedFilter}
          onClick={() => setSelectedFilter(key as ResumeFiltersType)}
          text={filter}
        />
      ))}
    </ContextBox>
  );
};

export default ResumeFilter;
