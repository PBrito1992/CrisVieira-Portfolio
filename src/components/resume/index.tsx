import { storyblokEditable } from "@storyblok/react";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC, useState } from "react";
import ResumeFilter from "./resume-filter";
import ResumeList from "./resume-list";
import ResumeListItem from "./resume-list-item";

type TResume = {
  blok: any;
};

const Resume: FC<TResume> = ({ blok }) => {
  const [selectedFilter, setSelectedFilter] = useState(
    blok?.filters?.[0].id || ""
  );

  const resumeInfo = blok[selectedFilter];

  return (
    <div
      {...storyblokEditable(blok)}
      id="resume"
      className="mx-auto h-auto min-h-screen w-full border-b-2 border-gray-900 px-5 py-10 lg:w-5/6 lg:px-0 lg:py-28"
    >
      <SectionTitle className="text-pink-700">{blok?.intro_title}</SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        {blok?.title}
      </SectionTitleHighlighted>
      <div className="mt-10">
        <ResumeFilter
          filters={blok?.filters}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {resumeInfo && resumeInfo.length > 0 && (
          <ResumeList>
            {resumeInfo?.map((item: any) => (
              <ResumeListItem key={item._uid} {...item} />
            ))}
          </ResumeList>
        )}
      </div>
    </div>
  );
};

export default Resume;
