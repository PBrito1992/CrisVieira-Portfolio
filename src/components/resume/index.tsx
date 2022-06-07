import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC, useState } from "react";
import ResumeInfo from "../../../content/resume";
import ResumeFilter, { ResumeFiltersType } from "./resume-filter";
import ResumeList from "./resume-list";
import ResumeListItem, { ResumeListItemType } from "./resume-list-item";

export type ResumeInfoType = {
  [filter: string]: ResumeListItemType[];
};

const Resume: FC = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<ResumeFiltersType>("education");

  const resumeInfo = ResumeInfo[selectedFilter];

  return (
    <div
      id="resume"
      className="mx-auto h-auto min-h-screen w-full border-b-2 border-gray-900 py-10 px-5 lg:w-5/6 lg:px-0 lg:py-28"
    >
      <SectionTitle className="text-pink-700">
        Education & Experience
      </SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        My Resume
      </SectionTitleHighlighted>
      <div className="mt-10">
        <ResumeFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {resumeInfo && resumeInfo.length > 0 && (
          <ResumeList>
            {resumeInfo?.map((item, index) => (
              <ResumeListItem key={`${item.title}${index}`} {...item} />
            ))}
          </ResumeList>
        )}
      </div>
    </div>
  );
};

export default Resume;
