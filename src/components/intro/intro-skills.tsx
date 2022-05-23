import ContextBox from "components/common/context-box";

const IntroSkills = () => (
  <>
    <div className="flex  flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      Best skill on
    </div>
    <div className="mt-3 flex gap-3">
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <img
          className="w-5"
          src="https://rainbowit.net/html/inbio/assets/images/icons/icons-01.png"
          alt=""
        />
      </ContextBox>
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <img
          className="w-5"
          src="https://rainbowit.net/html/inbio/assets/images/icons/icons-02.png"
          alt=""
        />
      </ContextBox>
      <ContextBox className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
        <img
          src="https://rainbowit.net/html/inbio/assets/images/icons/icons-03.png"
          alt=""
          className="w-5"
        />
      </ContextBox>
    </div>
  </>
);

export default IntroSkills;
