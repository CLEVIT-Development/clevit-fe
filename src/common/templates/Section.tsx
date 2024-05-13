import React from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { SectionVariant } from "@/types/variant.types.ts";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  variant?: SectionVariant;
}

const Section = ({ title, children, className, variant = SectionVariant.Primary }: Props) => {
  return (
    <section
      className={twMerge(
        classNames(
          "w-full flex flex-col items-center space-y-8",
          {
            ["items-start desktop:space-y-2 space-y-4"]: variant === SectionVariant.Secondary,
          },
          className
        )
      )}
    >
      {title && (
        <h3
          className={twMerge(
            classNames(
              "text-gray-200 desktop:text-2xl text-lg font-semibold text-center md:max-w-fit max-w-[300px]",
              {
                ["desktop:text-xl text-md-l font-semibold text-left"]:
                  variant === SectionVariant.Secondary,
              }
            )
          )}
        >
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};

export default Section;
