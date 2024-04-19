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
      <h3 className="font-bold desktop:text-4xl xs:text-2xl text-gray-200">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
