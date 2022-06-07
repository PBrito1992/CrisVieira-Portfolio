import ContextBox from "components/common/context-box";
import Icon from "components/common/icons";
import Link from "next/link";

const IntroFindMe = () => (
  <>
    <div className="flex flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      Find with me
    </div>
    <div className="mt-3 flex gap-3">
      <Link href="https://www.pinterest.pt/ascrisfnvieira">
        <a target="_blank">
          <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
            <Icon icon="pinterest" w={24} h={24} color="currentColor" />
          </ContextBox>
        </a>
      </Link>
      <Link href="https://www.instagram.com/crisfnvieira/">
        <a target="_blank">
          <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
            <Icon icon="instagram" w={24} h={24} color="currentColor" />
          </ContextBox>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/cristianavieira2403/">
        <a target="_blank">
          <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
            <Icon icon="linkedin" w={24} h={24} color="currentColor" />
          </ContextBox>
        </a>
      </Link>
    </div>
  </>
);

export default IntroFindMe;
