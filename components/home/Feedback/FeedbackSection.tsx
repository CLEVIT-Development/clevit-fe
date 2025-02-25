"use client";

import AliceCarousel from "react-alice-carousel";

import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section";
import { feedbacksConstants } from "@/shared/constants/feedbacks.constants";

import FeedbackItem from "./FeedBackItem";

interface FeedbackSectionProps {
  className?: string;
}

const FeedbackSection = ({ className }: FeedbackSectionProps) => {
  const { isTablet } = useResponsive();

  return (
    <Section
      title="What People Say"
      headingLevel="h3"
      className=" bg-gray-500 py-12 xl:-mx-20 lg:-mx-16 xs:-mx-5 max-w-full"
    >
      <div className="w-full lg:px-20 desktop:px-15 xs:px-5 pt-4 pb-12 max-w-[calc(100vw-20px)] shadow-[0_8px_10px_#0000001a]">
        {feedbacksConstants.length > 3 || isTablet ? (
          <AliceCarousel
            mouseTracking
            touchTracking
            infinite
            responsive={{ 0: { items: 1 }, 840: { items: 2 } }}
            disableButtonsControls
            items={feedbacksConstants.map((feedback) => (
              <FeedbackItem className={className} key={feedback.id} data={feedback} />
            ))}
          />
        ) : (
          <div className={"w-full flex space-x-4 justify-center"}>
            {feedbacksConstants.map((feedback) => (
              <FeedbackItem className={className} key={feedback.id} data={feedback} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default FeedbackSection;
