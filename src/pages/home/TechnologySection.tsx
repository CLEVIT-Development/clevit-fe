import { useCallback, useState } from "react";

import { swipeAnimationConstants } from "@/common/constants/swipeAnimation.constants.ts";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/common/constants/technologiesConstants.ts";
import Section from "@/common/templates/Section.tsx";
import Navigation from "@/shared/ui/Navigation.tsx";

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
      title="Technologies We Use"
      className="bg-gray-300 desktop:py-12 lg:px-[46px] desktop:px-[26px] md:mx-0 xs:-mx-5 xs:py-5 xs:px-[24px] rounded-[10px] space-y-9 overflow-hidden"
    >
      <div className="flex flex-col items-center space-y-[58px] w-full">
        <Navigation items={technologyTabsConstants} onItemClick={onTabItemClickHandler} />
        <div
          key={currTabId}
          className={`w-full relative desktop:flex-wrap desktop:flex desktop:gap-[48px] desktop:items-stretch xs:grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:gap-8 ${swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants]}`}
        >
          {technologiesConstants[currTabId as keyof typeof technologiesConstants].map(
            ({ id, title, Icon }) => (
              <div
                key={id}
                className={"flex flex-col space-y-5 items-center justify-between min-w-[103px]"}
              >
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
