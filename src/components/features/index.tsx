import ContextBox from "components/common/context-box";
import Icon, { IconPropsType } from "components/common/icons";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC } from "react";
import features from "../../../content/features";

export type FeatureType = {
  iconInfo: IconPropsType;
  title: string;
  description: string;
};

const Features: FC = () => {
  return (
    <div
      id="features"
      className="mx-auto h-auto w-full border-b-2 border-gray-900 px-5 py-10 lg:h-screen lg:w-5/6 lg:py-28 lg:px-0"
    >
      <SectionTitle className="text-pink-700">Features</SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        What I Do
      </SectionTitleHighlighted>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {features.map((feature, index) => (
          <ContextBox
            key={index}
            className="context-box-animation cursor-pointer p-10"
          >
            <Icon
              icon={feature.iconInfo.icon}
              w={feature.iconInfo.w}
              h={feature.iconInfo.h}
              color={feature.iconInfo.color}
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
};

export default Features;
