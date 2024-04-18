import React from "react";

import { twMerge } from "tailwind-merge";

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
        "p-6 rounded-lg sm:shadow-base transition-all duration-500 sm:hover:scale-105 max-w-[430px]",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="bg-purple200 rounded-full w-[100px] h-[100px] flex items-center justify-center">
          {icon}
        </div>
        <p className="text-purple200 text-7xl font-bold mt-2 font-poppins sm:visible xs:invisible">
          {order}
        </p>
      </div>
      <p className="text-gray200 text-md mt-6 mb-5">{title}</p>
      <p className="text-gray200 text-base break-words">{description}</p>
    </div>
  );
};

export default ServiceCard;
