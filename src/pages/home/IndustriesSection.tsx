import React, { useRef } from "react";

import { RoutePaths } from "@/app/routing/routing.constants";
import { industriesConstants } from "@/assets/constants/industries.constants";
import useInteractiveObserver from "@/common/hooks/useInteractiveObserver.ts";
import useScrollView from "@/common/hooks/useScrollView";
import Section from "@/common/templates/Section";

const IndustriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollView(sectionRef, RoutePaths.Industries);

  useInteractiveObserver({ sectionRef, checkRoute: RoutePaths.Industries });

  return (
    <Section
      ref={sectionRef}
      title="Industries"
      className="bg-gray-500 desktop:px-28 px-11 py-5 desktop:py-12 scroll-mt-[100px] desktop:scroll-mt-[150px] relative min-w-full self-center"
    >
      <div className="desktop:flex desktop:space-x-[45px] text-center desktop:text-start">
        {industriesConstants.map((industryList, index) => (
          <div
            key={index}
            className="desktop:flex desktop:space-x-[45px] text-center desktop:text-start"
          >
            <ul className="desktop:space-y-4 space-y-3 text-gray-200 desktop:text-base desktop:font-semibold text-sm font-normal">
              {industryList.map((industry, idx) => (
                <li key={idx}>{industry}</li>
              ))}
            </ul>
            {index < industriesConstants.length - 1 && (
              <div className="desktop:h-full w-[1px] bg-purple-100"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default IndustriesSection;
