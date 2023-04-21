import SectionTitle from "components/common/section-title";
import { FC, useMemo } from "react";
import IntroFindMe from "./intro-find-me";
import IntroSkills from "./intro-skills";
import profilePicture from "images/me.jpg";
import Image from "next/image";
import dayjs from "dayjs";
import Job from "./job";

const Intro: FC = () => {
  const age = useMemo(
    () => dayjs(new Date()).diff(new Date(2000, 2, 24), "years"),
    []
  );

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
            a <Job />
            <span className="inline-block h-9 w-1 bg-gray-500"></span>
          </div>
          <div className="mt-4 text-base text-gray-400 lg:text-xl">
            {`I\'m ${age} years old and I consider myself an organized, committed,
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
      <div className="relative order-1 flex h-[560px] w-full items-start justify-start lg:order-2 lg:w-1/2">
        <Image
          src={profilePicture}
          width={725}
          height={560}
          alt=""
          priority={true}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Intro;
