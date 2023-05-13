import { FC, useEffect, useState } from "react";

type TJob = {
  job: string;
};

const JobDescriptionWidth = 300;

const Job: FC<TJob> = ({ job }) => {
  const [jobDescriptionWidth, setJobDescriptionWidth] =
    useState(JobDescriptionWidth);

  useEffect(() => {
    let decrement = true;
    const timeoutRef = setInterval(() => {
      setJobDescriptionWidth((width) => {
        if (width > 0 && decrement) {
          return width - 2;
        } else if (width <= JobDescriptionWidth && !decrement) {
          return width + 2;
        } else {
          decrement = !decrement;
          return width;
        }
      });
    }, 15);
    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <span
      style={{ width: jobDescriptionWidth }}
      className="overflow-hidden whitespace-nowrap"
    >
      {job}
    </span>
  );
};

export default Job;
