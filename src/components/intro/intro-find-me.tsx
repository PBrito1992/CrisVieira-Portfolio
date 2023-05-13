import ContextBox from "components/common/context-box";
import Icon from "components/common/icons";
import Link from "next/link";
import { FC } from "react";

type TIntroFindMe = {
  title: string;
  contacts: any[];
};

const IntroFindMe: FC<TIntroFindMe> = ({ title, contacts }) => (
  <>
    <div className="flex flex-col text-sm uppercase tracking-wide text-gray-400 lg:text-base">
      {title}
    </div>
    <div className="mt-3 flex gap-3">
      {contacts.map((contact) => (
        <Link key={contact._uid} href={contact.link.url}>
          <a target="_blank" title={`${contact.logo} link`}>
            <ContextBox className="context-box-animation flex h-12 w-12 cursor-pointer items-center justify-center lg:h-16 lg:w-16">
              <Icon icon={contact.logo} w={24} h={24} color="currentColor" />
            </ContextBox>
          </a>
        </Link>
      ))}
    </div>
  </>
);

export default IntroFindMe;
