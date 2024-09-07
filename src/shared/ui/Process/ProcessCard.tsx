import React, { memo } from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  icon: React.ReactNode;
  order: string;
  title: string;
  className?: string;
}

const ProcessCard = ({ order, title, icon, className }: Props) => (
  <div
    className={twMerge(
      "transition-all duration-500 group hover:scale-105 relative bg-white z-[1] shadow-base-200 border-[1px] border-purple-100 rounded-lg-l w-[200px] min-h-[200px] flex flex-col items-center justify-center",
      className
    )}
  >
    <div className="px-4 mt-8 flex flex-col items-center space-y-2.5">
      {icon}
      <p className="text-gray-200 text-md text-center">{title}</p>
    </div>
    <div className="transition-all duration-500 absolute top-0 -translate-y-1/2 shadow-thick-100 group-hover:shadow-thick-200 size-[52px] bg-purple-100 rounded-full flex items-center justify-center">
      <span className="text-white text-[26px] leading-[39px] font-semibold">{order}</span>
    </div>
  </div>
);

export default memo(ProcessCard);
