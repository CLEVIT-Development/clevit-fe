import type { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

const BlogCardSkeleton = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "animate-pulse rounded-lg transition-all duration-500  space-y-[24px] ",
        className
      )}
    >
      <div className="h-[300px] rounded-3xl bg-gray-600 opacity-30" />
      <div className="space-y-4 p-4">
        <div className="h-4 bg-gray-600 rounded w-1/3 opacity-30" />
        <div className="h-6 bg-gray-600 rounded opacity-30" />
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-gray-600 rounded-full opacity-30" />
          <div className="h-4 bg-gray-600 rounded w-1/2 opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
