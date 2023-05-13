import {
  getStoryblokApi,
  ISbStoriesParams,
  useStoryblokState,
} from "@storyblok/react";
import Contact from "components/contact";
import Features from "components/features";
import Header from "components/header";
import Intro from "components/intro";
import Portfolio from "components/portfolio";
import Resume from "components/resume";
import type { NextPage } from "next";

type THome = {
  story: any;
};

const Home: NextPage<THome> = ({ story }) => {
  story = useStoryblokState(story);
  const headerData = story.content.blocks?.[0];
  const introData = story.content.blocks?.[1];
  const featuresData = story.content.blocks?.[2];
  const portfolioData = story.content.blocks?.[3];
  const resumeData = story.content.blocks?.[4];
  const contactData = story.content.blocks?.[5];

  return (
    <>
      <Header
        blok={headerData}
        findMeTitle={introData?.home_contact_title}
        findMeContacts={introData?.home_contacts}
      />
      <Intro blok={introData} />
      <Features blok={featuresData} />
      <Portfolio blok={portfolioData} />
      <Resume blok={resumeData} />
      <Contact
        blok={contactData}
        contactsTitle={introData?.home_contact_title}
        contacts={introData?.home_contacts}
      />
    </>
  );
};

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams: ISbStoriesParams = {
    version: "published", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}

export default Home;
