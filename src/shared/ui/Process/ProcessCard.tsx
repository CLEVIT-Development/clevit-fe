import React, { memo } from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  icon: React.ReactNode;
  order: string;
  title: string;
  className?: string;
  description?: string;
}

const ProcessCard = ({ order, title, icon, className, description }: Props) => (
  <div
    className={twMerge(
      `flex flex-col items-center justify-center transition-all duration-500 group hover:scale-105 relative bg-white z-[1] shadow-base-200 border border-purple-100 rounded-lg-l w-full
       ${description ? "h-[270px] pt-[40px]" : "h-[200px] desktop:min-h-[210px] lg:h-auto pt-8"}`,
      className
    )}
  >
    <div className={`px-4 flex flex-col items-center space-y-2.5`}>
      {icon}
      <p className={`text-gray-200 text-sm md:text-[16px] desktop:text-md text-center`}>{title}</p>
    </div>
    <div className="transition-all duration-500 absolute top-0 -translate-y-1/2 shadow-thick-100 group-hover:shadow-thick-200 size-[52px] bg-purple-100 rounded-full flex items-center justify-center">
      <span className="text-white text-[26px] leading-[39px] font-semibold">{order}</span>
    </div>
    <p className="text-gray-200 text-xs  leading-5 text-start px-3">{description}</p>
  </div>
);

export default memo(ProcessCard);
