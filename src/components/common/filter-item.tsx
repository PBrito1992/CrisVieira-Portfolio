type FilterItemType = {
  isSelected: boolean;
  onClick: () => void;
  text: string;
  className?: string;
};

const FilterItem = ({
  isSelected,
  onClick,
  text,
  className,
}: FilterItemType) => (
  <div
    className={`cursor-pointer whitespace-nowrap py-5 px-20 text-center text-xl ${className} ${
      isSelected
        ? "rounded-lg bg-portfolio-bg text-pink-700 shadow-brand"
        : "text-gray-300 hover:bg-brand hover:text-pink-700"
    }`}
    onClick={onClick}
  >
    {text}
  </div>
);

export default FilterItem;
