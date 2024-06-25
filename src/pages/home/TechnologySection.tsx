import { useCallback, useRef, useState } from "react";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { swipeAnimationConstants } from "@/assets/constants/swipeAnimation.constants.ts";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/assets/constants/technologies.constants";
import useInteractiveObserver from "@/common/hooks/useInteractiveObserver.ts";
import useScrollView from "@/common/hooks/useScrollView.ts";
import Section from "@/common/templates/Section.tsx";
import Navigation from "@/shared/ui/Navigation.tsx";

const TechnologySection = () => {
  const [{ currTabId, direction }, setActiveTab] = useState({
    currTabId: 1,
    direction: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollView(sectionRef, RoutePaths.Technologies);

  useInteractiveObserver({ sectionRef, checkRoute: RoutePaths.Technologies });

  const onTabItemClickHandler = useCallback((clickTabId: number, direction: string) => {
    setActiveTab({ direction, currTabId: clickTabId });
  }, []);

  return (
    <Section
      ref={sectionRef}
      title="Technologies We Use"
      headingLevel="h2"
      className="scroll-mt-[150px] md:w-full w-auto bg-gray-300 desktop:py-12 lg:px-[100px] desktop:px-[46px] md:px-[30px] md:mx-0 xs:-mx-5 xs:py-5 xs:px-[24px] rounded-lg-l space-y-9 overflow-clip"
    >
      <div className="w-full flex flex-col items-center space-y-[58px]">
        <Navigation items={technologyTabsConstants} onItemClick={onTabItemClickHandler} />
        <div
          key={currTabId}
          className={`w-full relative justify-center desktop:max-w-[90%] desktop:flex-wrap desktop:flex desktop:gap-[55px] desktop:items-stretch xs:grid xs:grid-cols-2 xs:gap-8 ${swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants]}`}
        >
          {technologiesConstants[currTabId as keyof typeof technologiesConstants].map(
            ({ id, title, Icon }) => (
              <div
                key={id}
                className="flex flex-col desktop:space-y-5 xs:space-y-2 items-center justify-between min-w-[103px]"
              >
                <div className="desktop:h-auto xs:h-[64px] svg-wrapper">
                  <Icon />
                </div>
                <p className="text-base font-medium text-center">{title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default TechnologySection;
