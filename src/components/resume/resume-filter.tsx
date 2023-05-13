import ContextBox from "components/common/context-box";
import FilterItem from "components/common/filter-item";
import { Dispatch, SetStateAction } from "react";

type ResumeFilterType = {
  filters: any[];
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
};

const ResumeFilter = ({
  filters,
  selectedFilter,
  setSelectedFilter,
}: ResumeFilterType) => {
  return (
    <ContextBox className="z-10 flex flex-col lg:flex-row">
      {filters.map((filter) => (
        <FilterItem
          key={filter._uid}
          className="flex-1"
          isSelected={filter.id === selectedFilter}
          onClick={() => setSelectedFilter(filter.id)}
          text={filter.text}
        />
      ))}
    </ContextBox>
  );
};

export default ResumeFilter;
