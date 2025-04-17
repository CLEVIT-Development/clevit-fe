import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import type { feedbacksConstants } from "../../../shared/constants/feedbacks.constants";

interface IProps {
  data: (typeof feedbacksConstants)[number];
  className?: string;
}

const FeedbackItem: React.FC<IProps> = ({
  data: { companyLogo, description, author, position },
  className,
}) => {
  return (
    <div
      className={twMerge(
        classNames(
          "transition-all flex-1 duration-500 bg-white rounded-lg-l shadow-lg lg:min-h-[600px] desktop:min-h-[620px] min-h-[450px] lg:hover:scale-105 flex flex-col justify-between items-start px-4 desktop:pt-8 xs:pt-5 pb-6",
          "shadow-[0_8px_10px_#0000001a]"
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
  );
};

export default FeedbackItem;
