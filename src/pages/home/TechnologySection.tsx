import { swipeAnimationConstants } from "@/common/constants/swipeAnimation.constants.ts";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/common/constants/technologiesConstants.ts";
import Section from "@/common/templates/Section.tsx";
import Navigation from "@/shared/ui/Navigation.tsx";

import { useCallback, useState } from "react";

const TechnologySection = () => {
  const [{ currTabId, direction }, setActiveTab] = useState({
    currTabId: 1,
    direction: "",
  });

  const onTabItemClickHandler = useCallback((clickTabId: number, direction: string) => {
    setActiveTab({ direction, currTabId: clickTabId });
  }, []);

  return (
    <Section
      title={"Technologies We Use"}
      className="bg-gray300 desktop:py-12 desktop:px-[46px] md:mx-0 xs:-mx-5 xs:py-5 xs:px-[24px] rounded-[10px] space-y-9"
    >
      <div className="flex flex-col items-center space-y-[58px] w-full">
        <Navigation items={technologyTabsConstants} onItemClick={onTabItemClickHandler} />
        <div
          key={currTabId}
          className={`w-full relative desktop:flex desktop:flex-wrap desktop:gap-28 desktop:items-stretch 2xl:justify-center xs:grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xs:gap-8 ${swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants]}`}
        >
          {technologiesConstants[currTabId as keyof typeof technologiesConstants].map(
            ({ id, title, Icon }) => (
              <div key={id} className={"flex flex-col space-y-5 items-center justify-between"}>
                <Icon />
                <p className="text-base font-medium">{title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default TechnologySection;
