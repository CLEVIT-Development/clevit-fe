import { useCallback, useMemo, useRef, useState } from "react";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { swipeAnimationConstants } from "@/assets/constants/swipeAnimation.constants.ts";
import type {
  ITabsConstant,
  ITechnologyConstant,
} from "@/assets/constants/technologies/technologies.constants.ts";
import useInteractiveObserver from "@/common/hooks/useInteractiveObserver.ts";
import useScrollView from "@/common/hooks/useScrollView.ts";
import Section from "@/common/templates/Section.tsx";
import Navigation from "@/shared/ui/Navigation.tsx";

interface Props {
  title: string;
  tabsConstant: ITabsConstant[];
  technologiesConstant: Record<number, ITechnologyConstant[]>;
}

const TechnologySection = ({ title, tabsConstant, technologiesConstant }: Props) => {
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

  const technologyDescription = useMemo(() => {
    return tabsConstant[currTabId - 1].description;
  }, [currTabId]);

  return (
    <Section
      ref={sectionRef}
      titleClassName="max-w-full"
      title={title}
      headingLevel="h2"
      className="scroll-mt-[150px] max-w-[90%] lg:max-w-[1280px] md:w-full w-auto bg-gray-300 desktop:py-12 lg:px-[100px] desktop:px-[46px] md:px-[30px] md:mx-0 xs:-mx-5 xs:py-5 xs:px-[24px] rounded-lg-l space-y-9 overflow-clip"
    >
      <div className="w-full flex flex-col items-center space-y-[58px]">
        <Navigation items={tabsConstant} onItemClick={onTabItemClickHandler} />
        {technologyDescription && (
          <span className="text-gray-200 text-base animate-textSlide">{technologyDescription}</span>
        )}
        <div
          key={currTabId}
          className={`w-full relative justify-center lg:max-w-[90%] desktop:flex-wrap desktop:flex desktop:gap-[50px] desktop:items-stretch xs:grid xs:grid-cols-2 xs:gap-8 ${swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants]}`}
        >
          {technologiesConstant[currTabId as keyof typeof technologiesConstant].map(
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
