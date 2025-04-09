import React, { useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import useScrollView from "../../../common/hooks/useScrollView";
import IconWrapper from "../../../common/templates/IconWrapper";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
  title: string;
  className?: string;
  descriptionOffer: string;
  icon: React.ReactNode;
  route: string;
}

const ServiceCard = ({ id, icon, title, route, className }: Props) => {
  const sectionCardRef = useRef<HTMLAnchorElement>(null);

  useScrollView(sectionCardRef, id);

  return (
    <Link
      href={route}
      ref={sectionCardRef}
      className={twMerge(
        "desktop:py-16 py-8 rounded-2xl  transition-all duration-500 hover:shadow-[0px_35.63px_95.02px_0px_rgba(44,22,84,0.07)] hover:scale-y-[1.02] w-full text-center space-y-4 flex flex-col justify-center items-center",
        className
      )}
    >
      <div className="flex flex-col gap-6 sm:space-x-0 xs:space-x-[24px] sm:items-start xs:items-center sm:space-y-4 py-2 ">
        <div className="sm:w-full xs:w-fit flex items-center justify-center">
          <IconWrapper icon={icon} className="w-[80px] h-[80px]" />
        </div>
        <h3 className="w-full text-gray-200 text-md font-bold !ml-0">{title}</h3>
      </div>
    </Link>
  );
};

export default ServiceCard;
