import { Suspense, useCallback, useMemo, useRef, useState } from "react";

import classNames from "classnames";

import { RoutePaths } from "@/app/routing/routing.constants";
import { swipeAnimationConstants } from "@/assets/constants/swipeAnimation.constants";
import type {
  ITabsConstant,
  ITechnologyConstant,
} from "@/assets/constants/technologies/technologies.constants";
import useInteractiveObserver from "@/common/hooks/useInteractiveObserver";
import useScrollView from "@/common/hooks/useScrollView";
import Section from "@/common/templates/Section";
import Navigation from "@/shared/ui/Navigation";

interface Props {
  title: string;
  subTitle?: string;
  tabsConstant: ITabsConstant[];
  technologiesConstant: Record<number, ITechnologyConstant[]>;
}

const TechnologySection = ({ title, tabsConstant, technologiesConstant, subTitle }: Props) => {
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
    return tabsConstant[currTabId - 1]?.description || "";
  }, [currTabId, tabsConstant]);

  const swipeAnimationClass = useMemo(() => {
    return getSwipeAnimationClass(direction);
  }, [direction]);

  const technologyItems = useMemo(() => {
    return (
      <div
        key={currTabId}
        className={classNames(
          "desktop:w-full w-[99%] relative justify-center desktop:mt-16 lg:max-w-[90%] desktop:flex-wrap desktop:flex desktop:gap-[50px] desktop:items-stretch xs:grid xs:grid-cols-2 xs:gap-8 desktop:pl-5 pl-0",
          swipeAnimationClass
        )}
      >
        {technologiesConstant[currTabId]?.map(({ id, title, Icon }) => (
          <div
            key={id}
            className="flex flex-col desktop:space-y-5 xs:space-y-2 items-center justify-between min-w-[103px] xs:mt-6 dekstop:mt-24"
          >
            <div className="desktop:h-auto xs:h-[64px] svg-wrapper">
              <Icon />
            </div>
            <p className="text-base font-medium text-center">{title}</p>
          </div>
        ))}
      </div>
    );
  }, [currTabId, swipeAnimationClass, technologiesConstant]);

  return (
    <Suspense>
      <Section
        ref={sectionRef}
        titleClassName="max-w-full"
        title={title}
        headingLevel="h2"
        className="scroll-mt-[150px] w-full lg:max-w-[1230px] md:w-full flex items-start justify-center desktop:py-12 lg:px-[100px] desktop:px-[46px] md:px-[30px] md:mx-0 x xs:py-5 rounded-lg overflow-clip"
      >
        <div className="w-full desktop:mt-6 desktop:text-center px-5 text-start">
          <span className="leading-6 text-[#314252] text-center">{subTitle}</span>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-6 desktop:pt-0 !mt-0">
          <Navigation
            items={tabsConstant}
            className="desktop:mt-10 !justify-start"
            onItemClick={onTabItemClickHandler}
          />
          {technologyDescription && (
            <div className="px-5 mt-6">
              <span
                className="text-gray-200 text-base animate-textSlide"
                dangerouslySetInnerHTML={{ __html: technologyDescription }}
              />
            </div>
          )}
          {technologyItems}
        </div>
      </Section>
    </Suspense>
  );
};

const getSwipeAnimationClass = (direction: string) =>
  swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants] || "";

export default TechnologySection;
