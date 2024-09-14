import type { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";

import ImagePlaceholder from "assets/images/ImagePlaceholder.jpg";
import ClockIcon from "assets/vectors/clock.svg?react";
import { twMerge } from "tailwind-merge";

import IconWrapper from "@/common/templates/IconWrapper";
import { formatDate } from "@/utils/date.utils";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
  className?: string;
  description: string;
  image: string;
  imageAlt?: string;
  readingTime: string;
  date: Date;
}

const BlogCard = ({ id, date, imageAlt, description, readingTime, className }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      onClick={() => navigate(`/blog/${id}`)}
      className={twMerge(
        "p-6 rounded-lg  transition-all duration-500  desktop:max-w-[420px] space-y-[24px]",
        className
      )}
    >
      <img
        loading="lazy"
        className="w-[420px] h-[260px]  lg:flex rounded-3xl bg-[#D9D9D9]"
        alt={imageAlt}
        src={ImagePlaceholder}
      />
      <div className="space-y-4">
        <span className="text-[#858D9D] text-base">{formatDate(date)}</span>
        <h3 className="w-full text-gray-200 text-sm font-semibold">{description}</h3>
        <div className="flex space-x-2">
          <IconWrapper icon={<ClockIcon />} className="bg-white" />
          <p className="text-[#858D9D] text-base font-medium">Reading time about {readingTime}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
