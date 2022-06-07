import ContextBox from "components/common/context-box";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import IntroFindMe from "components/intro/intro-find-me";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <div
      id="contact"
      className="mx-auto h-auto w-full py-10 px-5 lg:w-5/6 lg:px-0 lg:py-28"
    >
      <SectionTitle className="text-pink-700">Contact</SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        Contact with me
      </SectionTitleHighlighted>
      <ContextBox className="mt-10 flex flex-col gap-8 p-5 lg:flex-row lg:p-10">
        <img
          src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
          alt=""
          className="rounded-lg"
        />
        <div className="text-xl font-semibold text-gray-300">
          <div className="text-2xl lg:text-4xl">Cristiana Vieira</div>
          <div className="mt-3 text-xl text-gray-400 lg:text-2xl">
            Marketeer
          </div>
          <div className="mt-3 text-base text-gray-400">
            I am available to help you making your business explode in the
            digital or offline world, through all my knowledge, professionalism
            and relationship with the most diverse marketing tools.
            <br />
            <br />
            Connect with me through my social networks or just give me a call.
          </div>
          <div className="mt-6 text-base">
            <span className="text-gray-400">Email:</span>{" "}
            cristiana.marketeer@gmail.com
          </div>
          <a
            href="/files/cv.pdf"
            title="Cristiana Vieira Resume"
            className="mt-6 block"
            download
          >
            <img src="/images/pdf.png" alt="" width={30} />
          </a>
          <div className="mt-6 text-base">
            <IntroFindMe />
          </div>
        </div>
      </ContextBox>
    </div>
  );
};

export default Contact;
