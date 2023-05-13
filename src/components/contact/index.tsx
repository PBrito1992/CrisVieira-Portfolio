import ContextBox from "components/common/context-box";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import IntroFindMe from "components/intro/intro-find-me";
import Image from "next/image";
import { FC } from "react";
import PdfImg from "images/pdf.png";
import { renderRichText, storyblokEditable } from "@storyblok/react";

type TContact = {
  blok: any;
  contactsTitle: any;
  contacts: any;
};

const Contact: FC<TContact> = ({ blok, contactsTitle, contacts }) => (
  <div
    {...storyblokEditable(blok)}
    id="contact"
    className="mx-auto h-auto w-full px-5 py-10 lg:w-5/6 lg:px-0 lg:py-28"
  >
    <SectionTitle className="text-pink-700">{blok.intro_title}</SectionTitle>
    <SectionTitleHighlighted className="mt-3 text-gray-300">
      {blok.title}
    </SectionTitleHighlighted>
    <ContextBox className="mt-10 flex flex-col gap-8 p-5 lg:flex-row lg:p-10">
      <figure className="relative h-[236px] w-[380px] flex-shrink-0">
        <Image
          src={blok.image.filename}
          alt=""
          className="rounded-lg"
          layout="fill"
        />
      </figure>
      <div className="text-xl font-semibold text-gray-300">
        <div className="text-2xl lg:text-4xl">Cristiana Vieira</div>
        <div className="mt-3 text-xl text-gray-400 lg:text-2xl">{blok.job}</div>
        <div
          className="mt-3 text-base text-gray-400"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.description),
          }}
        />
        <div className="mt-6 text-base">
          <span className="text-gray-400">Email:</span> {blok.email}
        </div>
        <a
          href={blok.cv.filename}
          title="Cristiana Vieira Resume"
          className="mt-6 block"
          download
        >
          <Image src={PdfImg} width={30} height={30} alt="" />
        </a>
        <div className="mt-6 text-base">
          <IntroFindMe title={contactsTitle} contacts={contacts} />
        </div>
      </div>
    </ContextBox>
  </div>
);

export default Contact;
