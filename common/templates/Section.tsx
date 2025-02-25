import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import React, { forwardRef } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { SectionVariant } from "@/types/variant.types";

interface Props extends ComponentPropsWithoutRef<"section"> {
  title?: string;
  className?: string;
  titleClassName?: string;
  variant?: SectionVariant;
  headingLevel?: keyof JSX.IntrinsicElements;
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
      headingLevel: HeadingLevel = "h2", // Default to h2 if not specified
      ...props
    }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const HeadingComponent = HeadingLevel as keyof JSX.IntrinsicElements;

    return (
      <section
        ref={ref}
        className={twMerge(
          classNames(
            "w-full flex flex-col items-center space-y-7 desktop:space-y-10 max-w-[1280px]",
            {
              ["items-start desktop:space-y-2 space-y-4"]: variant === SectionVariant.Secondary,
            },
            className
          )
        )}
        {...props}
      >
        {title && (
          <HeadingComponent
            className={twMerge(
              classNames(
                "text-gray-200 desktop:text-2xl text-lg font-semibold text-center w-full max-w-[900px] my-5",
                {
                  ["desktop:text-xl text-md-l font-semibold text-left"]:
                    variant === SectionVariant.Secondary,
                },
                titleClassName
              )
            )}
          >
            {title}
          </HeadingComponent>
        )}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
