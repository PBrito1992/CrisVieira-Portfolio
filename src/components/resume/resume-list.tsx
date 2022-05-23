import { ReactNode } from "react";

type ResumeListType = {
  children: ReactNode;
};

const ResumeList = ({ children }: ResumeListType) => (
  <div className="relative flex justify-start lg:justify-end">
    <div className="mt-10 w-full border-l-4 border-experience-color pl-8 lg:w-1/2">
      {children}
    </div>
  </div>
);

export default ResumeList;
