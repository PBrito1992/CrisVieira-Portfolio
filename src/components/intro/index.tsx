import SectionTitle from "components/common/section-title";
import { FC } from "react";
import IntroFindMe from "./intro-find-me";
import IntroSkills from "./intro-skills";
import Image from "next/image";
import Job from "./job";
import { renderRichText, storyblokEditable } from "@storyblok/react";

type TIntro = {
  blok: any;
};

const Intro: FC<TIntro> = ({ blok }) => (
  <div
    id="home"
    {...storyblokEditable(blok)}
    className="mx-auto flex h-auto w-full flex-col items-center gap-5 border-b-2 border-gray-900 px-5 lg:h-intro-minus-header lg:w-5/6 lg:flex-row lg:gap-36 lg:px-0"
  >
    <div className="order-2 flex h-2/3 w-full flex-col justify-between lg:order-1 lg:w-1/2">
      <div>
        <SectionTitle className="text-gray-400">
          {blok?.home_title_1}
        </SectionTitle>
        <h1
          className="mt-4 text-3xl font-bold text-white lg:text-5xl [&>p>i]:not-italic [&>p>i]:text-pink-700"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok?.home_presentation),
          }}
        />
        <div className="mt-2 flex items-center gap-2 text-2xl font-bold text-white lg:text-4xl">
          {blok?.home_job_previous} <Job job={blok?.home_job} />
          <span className="inline-block h-9 w-1 bg-gray-500"></span>
        </div>
        <div className="mt-4 text-base text-gray-400 lg:text-xl">
          {blok?.home_description}
        </div>
      </div>
      <div className="my-10 flex flex-col justify-between gap-5 lg:my-0 lg:flex-row lg:gap-0">
        <div>
          <IntroFindMe
            title={blok?.home_contact_title}
            contacts={blok?.home_contacts}
          />
        </div>
        <div>
          <IntroSkills
            title={blok?.home_skills_title}
            skills={blok?.home_skills}
          />
        </div>
      </div>
    </div>
    <div className="relative order-1 flex h-[560px] w-full items-start justify-start lg:order-2 lg:w-1/2">
      <Image
        src={blok?.home_picture?.filename}
        width={725}
        height={560}
        alt=""
        priority={true}
        objectFit="cover"
      />
    </div>
  </div>
);

export default Intro;
