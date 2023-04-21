import ContextBox from "components/common/context-box";
import Image from "next/image";
import AdobeI from "images/AdobeI.png";
import AdobeP from "images/AdobeP.png";
import Canva from "images/Canva.png";

const IntroSkills = () => (
  <>
    <div className="flex  flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      Best skill on
    </div>
    <div className="mt-3 flex gap-3">
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <Image src={AdobeI} width={24} height={24} alt="" />
      </ContextBox>
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <Image src={AdobeP} width={24} height={24} alt="" />
      </ContextBox>
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <Image src={Canva} alt="" width={24} height={24} />
      </ContextBox>
    </div>
  </>
);

export default IntroSkills;
