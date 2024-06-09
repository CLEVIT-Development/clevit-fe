import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import { industriesConstants } from "@/assets/constants/industries.constants";
import useScrollView from "@/common/hooks/useScrollView";
import Section from "@/common/templates/Section";

const IndustriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useScrollView(sectionRef, RoutePaths.Industries);

  useLayoutEffect(() => {
    const isActive = `${location.pathname}${location.hash}` === RoutePaths.Industries;

    if (isActive) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // check if the user is not on the top of the page
          if (entry.intersectionRect.height !== 0) {
            navigate(entry.isIntersecting ? RoutePaths.Industries : RoutePaths.Home);
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

  return (
    <Section
      title="Industries"
      className="bg-gray-500 desktop:px-28 px-11 py-5  desktop:py-12 scroll-mt-[150px] relative   w-full"
      ref={sectionRef}
    >
      <div className="desktop:flex desktop:space-x-[90px] text-center desktop:text-start">
        {industriesConstants.map((industryList, index) => (
          <div key={index} className="desktop:flex  text-center desktop:text-start">
            <ul className="desktop:space-y-4 space-y-3 text-gray-200 text-base">
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
