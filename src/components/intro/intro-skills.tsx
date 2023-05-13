import ContextBox from "components/common/context-box";
import Image from "next/image";
import { FC } from "react";

type TIntroSkills = {
  title: string;
  skills: any[];
};

const IntroSkills: FC<TIntroSkills> = ({ title, skills }) => (
  <>
    <div className="flex  flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      {title}
    </div>
    <div className="mt-3 flex gap-3">
      {skills?.map((skill) => (
        <ContextBox
          key={skill._uid}
          className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16"
        >
          <Image src={skill.logo.filename} width={24} height={24} alt="" />
        </ContextBox>
      ))}
    </div>
  </>
);

export default IntroSkills;
