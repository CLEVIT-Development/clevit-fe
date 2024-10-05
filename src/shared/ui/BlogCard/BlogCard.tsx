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
  title: string;
  image: string;
  imageAlt?: string;
  readingTime?: string;
  date: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  isAdminMode?: boolean;
}

const BlogCard = ({
  id,
  date,
  imageAlt,
  title,
  readingTime,
  className,
  image,
  onDelete,
  onEdit,
  isAdminMode,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      onClick={() => navigate(`/blog/${id}`)}
      className={twMerge(
        "rounded-lg transition-all duration-500 space-y-[24px] bg-white p-4 shadow-md",
        className
      )}
    >
      <img
        loading="lazy"
        className="w-[420px]  lg:flex rounded-3xl bg-[#D9D9D9] object-cover"
        alt={imageAlt}
        src={image || ImagePlaceholder}
      />
      <div className="space-y-4">
        <span className="text-[#858D9D] text-base">{formatDate(new Date(date))}</span>
        <h3 className="w-full text-gray-800 text-sm font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <IconWrapper icon={<ClockIcon />} className="bg-white" />
          <p className="text-[#858D9D] text-base font-medium">Reading time about {readingTime}</p>
        </div>
        {isAdminMode && (
          <div className="flex justify-between items-center mt-4 text-xsdesktop:text-md">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(id);
              }}
              className="text-blue-400 hover:text-blue-800 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(id);
              }}
              className="text-red-400 hover:text-red-800 focus:outline-none"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
