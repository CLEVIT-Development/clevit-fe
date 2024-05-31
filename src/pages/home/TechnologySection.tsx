import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { swipeAnimationConstants } from "@/assets/constants/swipeAnimation.constants.ts";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/assets/constants/technologies.constants";
import useScrollView from "@/common/hooks/useScrollView.ts";
import Section from "@/common/templates/Section.tsx";
import Navigation from "@/shared/ui/Navigation.tsx";

const TechnologySection = () => {
  const [{ currTabId, direction }, setActiveTab] = useState({
    currTabId: 1,
    direction: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useScrollView(sectionRef, RoutePaths.Technologies);

  useLayoutEffect(() => {
    const isActive = `${location.pathname}${location.hash}` === RoutePaths.Technologies;

    if (isActive) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // check if the user is not on the top of the page
          if (entry.intersectionRect.height !== 0) {
            navigate(entry.isIntersecting ? RoutePaths.Technologies : RoutePaths.Home);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  const onTabItemClickHandler = useCallback((clickTabId: number, direction: string) => {
    setActiveTab({ direction, currTabId: clickTabId });
  }, []);

  return (
    <Section
      ref={sectionRef}
      title="Technologies We Use"
      className="scroll-mt-[150px] w-auto bg-gray-300 desktop:py-12 lg:px-[100px] desktop:px-[46px] md:px-[30px] md:mx-0 xs:-mx-5 xs:py-5 xs:px-[24px] rounded-lg-l space-y-9 overflow-clip"
    >
      <div className="w-full flex flex-col items-center space-y-[58px]">
        <Navigation items={technologyTabsConstants} onItemClick={onTabItemClickHandler} />
        <div
          key={currTabId}
          className={`w-full relative justify-center desktop:max-w-[90%] desktop:flex-wrap desktop:flex desktop:gap-[55px] desktop:items-stretch xs:grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:gap-8 ${swipeAnimationConstants[direction as keyof typeof swipeAnimationConstants]}`}
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
