import Link from "next/link";

export type HeaderItemType = {
  linkRef: string;
  text: string;
  isActive?: boolean;
};

const HeaderItem = ({ linkRef, text, isActive }: HeaderItemType) => (
  <Link href={linkRef}>
    <a className="font-brand-secondary text-sm font-normal uppercase text-gray-300 no-underline hover:text-pink-700">
      {text}
    </a>
  </Link>
);

export default HeaderItem;
