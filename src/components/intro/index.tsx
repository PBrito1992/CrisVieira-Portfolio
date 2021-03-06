import SectionTitle from "components/common/section-title";
import { FC, useEffect, useState } from "react";
import IntroFindMe from "./intro-find-me";
import IntroSkills from "./intro-skills";
import profilePicture from "../../../public/images/me.webp";
import Image from "next/image";

const JobDescriptionWidth = 175;

const Intro: FC = () => {
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
    <div
      id="home"
      className="mx-auto flex h-auto w-full flex-col items-center gap-5 border-b-2 border-gray-900 px-5 lg:h-intro-minus-header lg:w-5/6 lg:flex-row lg:gap-36 lg:px-0"
    >
      <div className="order-2 flex h-2/3 w-full flex-col justify-between lg:order-1 lg:w-1/2">
        <div>
          <SectionTitle className="text-gray-400">
            Welcome to my world
          </SectionTitle>
          <h1 className="mt-4 text-3xl font-bold text-white lg:text-5xl">
            {"Hi, I'm"} <span className="text-pink-700">Cristiana Vieira</span>
          </h1>
          <div className="mt-2 flex items-center gap-2 text-2xl font-bold text-white lg:text-4xl">
            a{" "}
            <span
              style={{ width: jobDescriptionWidth }}
              className="overflow-hidden"
            >
              Marketeer
            </span>
            <span className="inline-block h-9 w-1 bg-gray-500"></span>
          </div>
          <div className="mt-4 text-base text-gray-400 lg:text-xl">
            {`I\'m 22 years old and I consider myself an organized, committed,
            empathetic and communicative person. I\'m always looking for
            continuous improvement and personal development with focus on my
            goals and aiming to achieve good results. I\'m motivated to continue
            self developing on either my personal and professional perspectives.`}
          </div>
        </div>
        <div className="my-10 flex flex-col justify-between gap-5 lg:my-0 lg:flex-row lg:gap-0">
          <div>
            <IntroFindMe />
          </div>
          <div>
            <IntroSkills />
          </div>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2 lg:w-1/2">
        <Image src={profilePicture} alt="" priority={true} />
      </div>
    </div>
  );
};

export default Intro;
