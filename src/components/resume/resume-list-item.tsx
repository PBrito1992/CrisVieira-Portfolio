import ContextBox from "components/common/context-box";

const ResumeListItem = ({ ...item }: any) => (
  <div className="relative mt-8 w-full before:absolute before:top-4 before:block before:h-4 before:w-4 before:rounded-full before:border-4 before:border-experience-color before:bg-portfolio-bg after:absolute after:top-5.5 after:block after:h-1 after:w-7 after:bg-experience-color first:mt-0 odd:before:-left-10.5 odd:after:-left-7 even:before:-left-10.5 even:after:-left-7 hover:before:bg-pink-700 lg:even:right-resume-even-item lg:even:before:inset-x-unset lg:even:before:-right-10.5 lg:even:after:inset-x-unset lg:even:after:-right-7">
    <ContextBox className="context-box-animation p-10">
      {item?.title && (
        <div className="text-2xl font-semibold text-gray-300">{item.title}</div>
      )}
      <div
        className={`${
          item.title
            ? "mt-1 text-lg text-gray-400"
            : "text-2xl font-semibold text-gray-300"
        }`}
      >
        {item.location}
      </div>
      {item?.description && item.description.length > 0 && (
        <ul className="ml-6 list-disc">
          {item.description.map((item: any, index: number) => (
            <li key={index} className="mt-2 text-sm text-gray-400">
              {item.text}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 text-sm text-gray-400">
        {item.duration_start} - {item.duration_end || "Current"}
      </div>
      {item?.grade && (
        <div className="mt-1 text-sm text-gray-400">{item.grade}</div>
      )}
    </ContextBox>
  </div>
);

export default ResumeListItem;
