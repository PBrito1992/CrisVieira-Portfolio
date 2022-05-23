import ContextBox from "components/common/context-box";
import Icon from "components/common/icons";
import Link from "next/link";

const IntroFindMe = () => (
  <>
    <div className="flex flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      Find with me
    </div>
    <div className="mt-3 flex gap-3">
      <Link href="" target="_blank">
        <a>
          <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
            <Icon icon="facebook" w={18} h={18} color="currentColor" />
          </ContextBox>
        </a>
      </Link>
      <Link
        href="https://www.linkedin.com/in/cristianavieira2403/"
        target="_blank"
      >
        <a>
          <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
            <Icon icon="instagram" w={18} h={18} color="currentColor" />
          </ContextBox>
        </a>
      </Link>
      <Link href="" target="_blank">
        <a>
          <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
            <Icon icon="linkedin" w={18} h={18} color="currentColor" />
          </ContextBox>
        </a>
      </Link>
    </div>
  </>
);

export default IntroFindMe;
