import Link from "next/link";

export type HeaderItemType = {
  id: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

const HeaderItem = ({ id, text, isActive, onClick }: HeaderItemType) => (
  <Link href={`#${id}`}>
    <a
      className="font-brand-secondary text-sm font-normal uppercase text-gray-300 no-underline hover:text-pink-700"
      onClick={() => onClick?.()}
    >
      {text}
    </a>
  </Link>
);

export default HeaderItem;
