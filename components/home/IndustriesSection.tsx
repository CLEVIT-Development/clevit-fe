"use client";

import React, { useRef } from "react";

import useInteractiveObserver from "@/common/hooks/useInteractiveObserver";
import useScrollView from "@/common/hooks/useScrollView";
import Section from "@/common/templates/Section";
import { type Industry, industriesConstants } from "@/shared/constants/industries.constants";
import { RoutePaths } from "@/shared/constants/route.constants";

const splitArrayIntoThree = (array: Industry[]) => {
  const partSize = Math.ceil(array.length / 3);
  const firstPart = array.slice(0, partSize);
  const secondPart = array.slice(partSize, partSize * 2);
  const thirdPart = array.slice(partSize * 2);

  return [firstPart, secondPart, thirdPart];
};

const IndustriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollView(sectionRef, RoutePaths.Industries);
  useInteractiveObserver({ sectionRef, checkRoute: RoutePaths.Industries });

  const industryLists = React.useMemo(() => splitArrayIntoThree(industriesConstants), []);

  return (
    <Section
      id="industries"
      ref={sectionRef}
      title="Industries"
      className="bg-gray-500 desktop:px-28 px-11 py-5 desktop:py-12 scroll-mt-[100px] desktop:scroll-mt-[150px] relative min-w-full self-center"
    >
      <div className="desktop:flex desktop:space-x-[45px] text-center desktop:text-start">
        {industryLists.map((industryList, index) => (
          <div
            key={index}
            className={index === 0 ? "border-0" : "desktop:border-l desktop:pl-24 border-[#703391]"}
          >
            <IndustryList industries={industryList} isLast={index === industryLists.length - 1} />
          </div>
        ))}
      </div>
    </Section>
  );
};

const IndustryList: React.FC<{ industries: Industry[]; isLast: boolean }> = React.memo(
  ({ industries }) => (
    <div className="flex flex-col items-center">
      <ul className="space-y-3 text-gray-200 text-base font-semibold desktop:pb-0 pb-4">
        {industries.map((industry) => (
          <li key={industry.id}>
            <h4 className="font-medium  desktop:font-semibold leading-5">{industry.name}</h4>
          </li>
        ))}
      </ul>
      <div className="h-full w-[1px] bg-purple-100"></div>
    </div>
  )
);

IndustryList.displayName = "IndustryList";

export default IndustriesSection;
