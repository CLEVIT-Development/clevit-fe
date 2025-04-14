import React from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface Props {
  icon: React.ReactNode;
  className?: string;
}

const IconWrapper = ({ icon, className = "" }: Props) => (
  <div
    className={twMerge(
      classNames("bg-purple-200 rounded-full flex items-center justify-center", className)
    )}
  >
    <div className="h-[40px] w-[40px] [&_svg]:h-full [&_svg]:w-full transform-gpu">{icon}</div>
  </div>
);

export default IconWrapper;
