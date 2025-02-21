import type { ReactNode } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import IconWrapper from "@/common/templates/IconWrapper";

interface Props {
  title: string;
  description: string;
  className?: string;
  icon: ReactNode;
}

const ReasonCard = ({ title, description, icon, className }: Props) => {
  return (
    <div
      className={twMerge(
        classNames(
          "flex flex-col space-y-2 items-start lg:max-w-[504px] desktop:max-w-[400px]",
          className
        )
      )}
    >
      <div className="flex flex-col space-y-4">
        <IconWrapper icon={icon} className="md:h-[86px] md:w-[86px] size-16" />
        <h4 className="md:text-md-l text-md font-medium text-purple-100">{title}</h4>
      </div>
      <p className="md:text-base text-sm text-gray-200">{description}</p>
    </div>
  );
};

export default ReasonCard;
