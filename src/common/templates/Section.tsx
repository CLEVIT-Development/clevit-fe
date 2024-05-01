import React from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Section = ({ title, children, className }: Props) => {
  return (
    <section className={twMerge("flex flex-col items-center space-y-8", className)}>
      {title && (
        <h3 className="text-gray-200 desktop:text-2xl text-lg font-semibold text-center md:max-w-fit max-w-[300px]">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};

export default Section;
