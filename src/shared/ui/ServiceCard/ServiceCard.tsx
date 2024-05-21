import type { ComponentPropsWithoutRef } from "react";
import React from "react";

import { twMerge } from "tailwind-merge";

import IconWrapper from "@/common/templates/IconWrapper";

interface Props extends ComponentPropsWithoutRef<"div"> {
  icon: React.ReactNode;
  order: string;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, order, title, description, className }: Props) => {
  return (
    <div
      className={twMerge(
        "p-6 rounded-lg sm:shadow-base-100 transition-all duration-500 sm:hover:scale-105 desktop:max-w-[410px] space-y-4",
        className
      )}
    >
      <div className="flex sm:flex-col sm:space-x-0 xs:space-x-[24px] sm:items-start xs:items-center sm:space-y-4">
        <div className="sm:w-full xs:w-fit flex items-center justify-between">
          <IconWrapper icon={icon} className="sm:w-[100px] sm:h-[100px] xs:w-[80px] xs:h-[80px]" />
          <p className="text-purple-200 text-[80px] leading-[120px] font-bold sm:block xs:hidden">
            {order}
          </p>
        </div>
        <span className="w-full text-gray-200 text-md font-bold">{title}</span>
      </div>
      <p className="text-gray-200 text-base break-words">{description}</p>
    </div>
  );
};

export default ServiceCard;
