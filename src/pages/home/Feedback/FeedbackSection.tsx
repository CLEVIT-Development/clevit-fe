import { useMemo } from "react";
import AliceCarousel from "react-alice-carousel";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { feedbacksConstants } from "@/assets/constants/feedbacks.constants";
import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section";

import styles from "./Feedback.module.css";

interface FeedbackSectionProps {
  className?: string;
}

const FeedbackSection = ({ className }: FeedbackSectionProps) => {
  const { isTablet } = useResponsive();

  const feedbacksData = useMemo(() => {
    return feedbacksConstants.map(({ id, companyLogo, description, author, position }) => (
      <div
        key={id}
        className={twMerge(
          classNames(
            "transition-all flex-1 duration-500 bg-white rounded-lg-l shadow-lg md:min-h-[600px] min-h-[550px] lg:hover:scale-105 flex flex-col justify-between items-start px-4 desktop:pt-8 xs:pt-5 pb-6",
            styles["feedback-item"]
          ),
          className
        )}
      >
        <div className="flex flex-col md:space-y-8 xs:space-y-6">
          <div className="flex items-center max-w-[200px] h-[122px]">
            <img src={companyLogo} alt="Feedback Company Logo" loading="lazy" />
          </div>
          <p className="md:text-base xs:text-sm text-gray-200 text-left">{description}</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-200 text-base font-semibold">{author}</p>
          <p className="text-gray-200 opacity-60 md:text-base xs:text-sm">{position}</p>
        </div>
      </div>
    ));
  }, []);

  return (
    <Section
      title="What People Say"
      headingLevel="h3"
      className=" bg-gray-500 py-12 xl:-mx-20 lg:-mx-16 xs:-mx-5 max-w-full"
    >
      <div
        className={classNames(
          "w-full lg:px-20 desktop:px-15 xs:px-5 pt-4 pb-12 max-w-[calc(100vw-20px)]",
          styles.container
        )}
      >
        {feedbacksConstants.length > 3 || isTablet ? (
          <AliceCarousel
            mouseTracking
            touchTracking
            infinite
            responsive={{ 0: { items: 1 }, 840: { items: 2 } }}
            disableButtonsControls
            items={feedbacksData}
          />
        ) : (
          <div
            className={classNames(
              "w-full flex space-x-4 justify-center",
              styles["feedback-non-carousel-wrapper"]
            )}
          >
            {feedbacksData}
          </div>
        )}
      </div>
    </Section>
  );
};

export default FeedbackSection;
