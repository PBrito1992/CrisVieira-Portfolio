import ContextBox from "components/common/context-box";
import { Dispatch, FC, SetStateAction } from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

type TPortfolioFilter = {
  options: string[];
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
};

const PortfolioFilter: FC<TPortfolioFilter> = ({
  options,
  selectedFilter,
  setSelectedFilter,
}) => {
  const parsedOptions: any[] =
    options?.map((option: any) => ({
      label: option.text as string,
      value: option.id as string,
    })) || [];

  return (
    <ContextBox className="w-full lg:sticky lg:top-header-height lg:z-10 lg:w-1/5">
      <label className="sr-only" htmlFor="portfolio-filter">
        Portfolio Filter
      </label>
      <Select
        inputId="portfolio-filter"
        instanceId="portfolio-filter"
        className="w-full"
        classNamePrefix="react-select"
        isSearchable={false}
        value={parsedOptions.find((val: any) => val.value === selectedFilter)}
        options={parsedOptions}
        onChange={(val: any) => setSelectedFilter(val?.value)}
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
