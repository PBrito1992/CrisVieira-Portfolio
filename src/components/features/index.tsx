import { storyblokEditable } from "@storyblok/react";
import ContextBox from "components/common/context-box";
import Icon from "components/common/icons";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC } from "react";

type TFeatures = {
  blok: any;
};

const Features: FC<TFeatures> = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    id="features"
    className="mx-auto h-auto w-full border-b-2 border-gray-900 px-5 py-10 lg:min-h-screen lg:w-5/6 lg:px-0 lg:py-28"
  >
    <SectionTitle className="text-pink-700">{blok?.small_title}</SectionTitle>
    <SectionTitleHighlighted className="mt-3 text-gray-300">
      {blok?.title}
    </SectionTitleHighlighted>
    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
      {blok?.features?.map((feature: any) => (
        <ContextBox
          key={feature._uid}
          className="context-box-animation cursor-pointer p-10"
        >
          <Icon
            icon={feature.icon}
            w={feature.icon_width}
            h={feature.icon_height}
            color={feature.icon_color}
          />
          <div className="mt-4 text-2xl font-bold text-gray-300">
            {feature.title}
          </div>
          <div className="mt-3 text-gray-400">{feature.description}</div>
        </ContextBox>
      ))}
    </div>
  </div>
);

export default Features;
