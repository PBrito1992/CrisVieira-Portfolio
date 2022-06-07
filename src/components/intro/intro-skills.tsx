import ContextBox from "components/common/context-box";

const IntroSkills = () => (
  <>
    <div className="flex  flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      Best skill on
    </div>
    <div className="mt-3 flex gap-3">
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <img
          className="w-6"
          src="/images/AdobeI.png"
          alt=""
        />
      </ContextBox>
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <img
          className="w-6"
          src="/images/AdobeP.png"
          alt=""
        />
      </ContextBox>
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <img
          src="/images/Canva.png"
          alt=""
          className="w-6"
        />
      </ContextBox>
    </div>
  </>
);

export default IntroSkills;
