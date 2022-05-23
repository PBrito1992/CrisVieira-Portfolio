import ContextBox from "components/common/context-box";

export type ResumeListItemType = {
  title?: string;
  location: string;
  duration: {
    start: string;
    end?: string;
  };
  description?: string;
  grade?: string;
};

const ResumeListItem = ({
  title,
  location,
  duration,
  description,
  grade,
}: ResumeListItemType) => (
  <div className="relative mt-8 w-full before:absolute before:top-4 before:block before:h-4 before:w-4 before:rounded-full before:border-4 before:border-experience-color before:bg-portfolio-bg after:absolute after:top-5.5 after:block after:h-1 after:w-7 after:bg-experience-color first:mt-0 odd:before:-left-10.5 odd:after:-left-7 even:before:-left-10.5 even:after:-left-7 hover:before:bg-pink-700 lg:even:right-resume-even-item lg:even:before:inset-x-unset lg:even:before:-right-10.5 lg:even:after:inset-x-unset lg:even:after:-right-7">
    <ContextBox className="context-box-animation p-10">
      {title && (
        <div className="text-2xl font-semibold text-gray-300">{title}</div>
      )}
      <div
        className={`${
          title
            ? "mt-1 text-lg text-gray-400"
            : "text-2xl font-semibold text-gray-300"
        }`}
      >
        {location}
      </div>
      {description && (
        <div className="mt-2 text-sm text-gray-400">{description}</div>
      )}
      <div className="mt-6 text-sm text-gray-400">
        {duration.start} - {duration.end || "Current"}
      </div>
      {grade && <div className="mt-1 text-sm text-gray-400">{grade}</div>}
    </ContextBox>
  </div>
);

export default ResumeListItem;
