import { useCallback, useMemo, useState } from "react";

import classNames from "classnames";

import { swipeAnimationConstants } from "@/common/constants/swipeAnimation.constants.ts";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/common/constants/technologies.constants";
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

  const technologyItems = useMemo(
    () => technologiesConstants[currTabId as keyof typeof technologiesConstants],
    [currTabId]
  );

  return (
    <Section
      title="Technologies We Use"
      className="bg-gray-300 desktop:py-12 lg:px-[100px] desktop:px-[46px] md:px-[30px] md:mx-0 xs:-mx-5 xs:py-5 xs:px-[24px] rounded-[10px] space-y-9 overflow-hidden"
    >
      <div className="w-full flex flex-col items-center space-y-[58px]">
        <Navigation items={technologyTabsConstants} onItemClick={onTabItemClickHandler} />
        <div
          key={currTabId}
          className={classNames(
            `w-full relative desktop:flex-wrap desktop:flex desktop:gap-[55px] desktop:items-stretch xs:grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:gap-8 ${swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants]}`,
            { ["justify-center"]: technologyItems.length < 7 }
          )}
        >
          {technologyItems.map(({ id, title, Icon }) => (
            <div
              key={id}
              className={
                "flex flex-col desktop:space-y-5 xs:space-y-2 items-center justify-between min-w-[103px]"
              }
            >
              <div className="desktop:h-auto xs:h-[64px] svg-wrapper">
                <Icon />
              </div>
              <p className="text-base font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechnologySection;
