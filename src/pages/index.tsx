import Contact from "components/contact";
import Features from "components/features";
import Header from "components/header";
import Intro from "components/intro";
import Portfolio from "components/portfolio";
import Resume from "components/resume";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
