"use client";

import { useCallback, useState } from "react";

import Section from "../../common/templates/Section";
import { swipeAnimationSecondaryConstants } from "../../shared/constants/swipeAnimation.constants";
import { valueTabsConstants, valuesConstants } from "../../shared/constants/values.constants";
import Navigation from "../../shared/ui/Navigation";

const ValuesSection = () => {
  const [{ currTabId, direction }, setActiveTab] = useState({
    currTabId: 1,
    direction: "",
  });

  const onTabItemClickHandler = useCallback((clickTabId: number, direction: string) => {
    setActiveTab({ direction, currTabId: clickTabId });
  }, []);

  return (
    <Section title="Values" className="px-0 desktop:max-w-[80%] desktop:mx-auto" headingLevel="h2">
      <div className="w-full flex md:flex-row flex-col md:space-x-[138px] md:space-y-0 space-y-6 items-center">
        <Navigation
          items={valueTabsConstants}
          onItemClick={onTabItemClickHandler}
          className="md:!flex-col md:items-start md:w-[190px] md:!space-x-0 md:!gap-y-10"
        />
        <div
          key={currTabId}
          className={`w-full relative ${swipeAnimationSecondaryConstants[direction as keyof typeof swipeAnimationSecondaryConstants]}`}
        >
          {valuesConstants[currTabId as keyof typeof valuesConstants].map(
            ({ id, description, Icon }) => {
              return (
                <div
                  key={id}
                  className="w-full bg-gray-300 rounded-lg-l min-h-[237px] p-5 flex flex-col md:items-start items-center md:space-y-[33px] space-y-4"
                >
                  <div className="svg-wrapper">
                    <Icon width={58} height={56} />
                  </div>
                  <p className="text-md font-normal">{description}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
};

export default ValuesSection;
