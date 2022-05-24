import Link from "next/link";

export type HeaderItemType = {
  linkRef: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

const HeaderItem = ({ linkRef, text, isActive, onClick }: HeaderItemType) => (
  <Link href={linkRef}>
    <a
      className="font-brand-secondary text-sm font-normal uppercase text-gray-300 no-underline hover:text-pink-700"
      onClick={() => onClick?.()}
    >
      {text}
    </a>
  </Link>
);

export default HeaderItem;
