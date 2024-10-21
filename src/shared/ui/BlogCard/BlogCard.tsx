import type { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";

import ImagePlaceholder from "assets/images/ImagePlaceholder.jpg";
import ClockIcon from "assets/vectors/clock.svg?react";
import { twMerge } from "tailwind-merge";

import IconWrapper from "@/common/templates/IconWrapper";
import type { IBlog } from "@/shared/forms/BlogAddEditForm/types";
import { formatDate } from "@/utils/date.utils";

interface Props extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  isAdminMode?: boolean;
  data: IBlog;
}

const BlogCard = ({ onDelete, onEdit, isAdminMode, className, data }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      onClick={() => navigate(`/blog/${data.titlePath}`)}
      className={twMerge(
        "w-full h-full rounded-lg transition-all duration-500 space-y-[24px] min-h-[340px] flex flex-col items-start justify-between shadow-md relative",
        className
      )}
    >
      {isAdminMode && data.status === "Draft" ? (
        <div className="absolute rounded-l-lg bg-green-400 top-11 right-0 px-4 py-1">
          <p className="text-white">{data.status}</p>
        </div>
      ) : null}
      <img
        loading="lazy"
        className="w-full h-[221px] lg:flex rounded-3xl bg-[#D9D9D9] object-cover"
        alt={data.title}
        src={data.image || ImagePlaceholder}
      />
      <div className="space-y-4">
        {data.created_at && (
          <span className="text-[#858D9D] text-base">{formatDate(new Date(data.created_at))}</span>
        )}
        <h3 className="w-full text-gray-800 text-sm font-semibold">{data.title}</h3>
        <div className="flex space-x-2">
          <IconWrapper icon={<ClockIcon />} className="bg-white" />
          <span className="text-[#858D9D] text-base font-medium">
            Reading time about {data.readingTime}
          </span>
        </div>
      </div>
      {isAdminMode && (
        <div className="flex w-full justify-between items-center mt-4 text-xs desktop:text-md">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(data.id ?? "");
            }}
            className="text-blue-400 hover:text-blue-800 focus:outline-none"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(data.id || "");
            }}
            className="text-red-400 hover:text-red-800 focus:outline-none"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
