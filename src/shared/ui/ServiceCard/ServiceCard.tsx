import React, { useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";

import { twMerge } from "tailwind-merge";

import useScrollView from "@/common/hooks/useScrollView.ts";
import IconWrapper from "@/common/templates/IconWrapper";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
  title: string;
  className?: string;
  descriptionOffer: string;
  icon: React.ReactNode;
  route: string;
}

const ServiceCard = ({ id, icon, order, title, route, descriptionOffer, className }: Props) => {
  const sectionCardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useScrollView(sectionCardRef, id);

  return (
    <div
      role="button"
      onClick={() => navigate(route)}
      ref={sectionCardRef}
      className={twMerge(
        "desktop:py-16 py-8 rounded-2xl  transition-all duration-500 hover:shadow-[0px_35.63px_95.02px_0px_rgba(44,22,84,0.07)] hover:scale-125  desktop:w-[314px] w-[235px] text-center space-y-4 flex flex-col justify-center items-center",
        className
      )}
    >
      <div className="flex flex-col gap-6 sm:space-x-0 xs:space-x-[24px] sm:items-start xs:items-center sm:space-y-4 py-2 ">
        <div className="sm:w-full xs:w-fit flex items-center justify-center">
          <IconWrapper
            icon={icon}
            className="sm:w-[100px] sm:h-[100px] xs:w-[100px] xs:h-[100px]"
          />
        </div>
        <h3 className="w-full text-gray-200 text-md  font-bold !ml-0">{title}</h3>
      </div>
      <p className="text-gray-200 text-base break-words">{descriptionOffer}</p>
    </div>
  );
};

export default ServiceCard;
