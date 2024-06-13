import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import React, { forwardRef } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { SectionVariant } from "@/types/variant.types.ts";

interface Props extends ComponentPropsWithoutRef<"section"> {
  title?: string;
  className?: string;
  titleClassName?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
}

const Section = forwardRef(
  (
    {
      title,
      children,
      className,
      titleClassName,
      variant = SectionVariant.Primary,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <section
        ref={ref}
        className={twMerge(
          classNames(
            "w-full flex flex-col items-center space-y-8 max-w-[1280px] px-5",
            {
              ["items-start desktop:space-y-2 space-y-4"]: variant === SectionVariant.Secondary,
            },
            className
          )
        )}
        {...props}
      >
        {title && (
          <h3
            className={twMerge(
              classNames(
                "text-gray-200 desktop:text-2xl text-lg font-semibold text-center md:max-w-fit max-w-[300px]",
                {
                  ["desktop:text-xl text-md-l font-semibold text-left"]:
                    variant === SectionVariant.Secondary,
                },
                titleClassName
              )
            )}
          >
            {title}
          </h3>
        )}
        {children}
      </section>
    );
  }
);

export default Section;
