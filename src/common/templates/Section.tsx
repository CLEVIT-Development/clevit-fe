import React from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
}

const Section = ({ title, children, className }: Props) => {
  return (
    <section className={twMerge("flex flex-col items-center space-y-8", className)}>
      <h3 className="font-bold desktop:text-2xl xs:text-[28px] xs:leading-[42px] text-gray-200 text-center md:max-w-fit xs:max-w-[300px]">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;
