import React from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import styles from "./service.module.css";

interface Props {
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
      <div className="flex sm:flex-col justify-between sm:space-x-0 xs:space-x-[15px] sm:items-start xs:items-center sm:space-y-4">
        <div className="sm:w-full xs:w-fit flex items-center justify-between">
          <div
            className={classNames(
              "bg-purple-200 rounded-full sm:w-[100px] sm:h-[100px] xs:w-[80px] xs:h-[80px] flex items-center justify-center",
              styles["svg-mobile"]
            )}
          >
            {icon}
          </div>
          <p className="text-purple-200 text-[80px] leading-[120px] font-bold sm:block xs:hidden">
            {order}
          </p>
        </div>
        <p className="text-gray-200 text-md font-bold sm:text-left xs:text-right">{title}</p>
      </div>
      <p className="text-gray-200 text-base break-words">{description}</p>
    </div>
  );
};

export default ServiceCard;
