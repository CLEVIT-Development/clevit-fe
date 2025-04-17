"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import classNames from "classnames";

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
      className="bg-gray-500 py-12 max-w-full shadow-[0_8px_10px_#0000001a]"
    >
      <div className="w-full max-w-[1280px] px-4 md:px-8 lg:px-0">
        {feedbacksConstants.length > 3 || isTablet ? (
          <AliceCarousel
            mouseTracking
            touchTracking
            infinite
            responsive={{ 0: { items: 1 }, 840: { items: 2 } }}
            disableButtonsControls
            items={feedbacksConstants.map((feedback) => (
              <FeedbackItem
                className={classNames(className, "mx-2")}
                key={feedback.id}
                data={feedback}
              />
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
