import React, { memo } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import Footer from "@/common/layout/Footer.tsx";
import HeadBar from "@/common/layout/HeadBar.tsx";
import { HeaderVariant, LayoutVariant } from "@/types/variant.types";

interface Props {
  className?: string;
  children: React.ReactNode;
  heading?: React.ReactNode;
  headerVariant?: HeaderVariant;
  layoutVariant?: LayoutVariant;
}

const Layout = ({
  children,
  heading,
  className = "",
  layoutVariant = LayoutVariant.Primary,
  headerVariant = HeaderVariant.Primary,
}: Props) => {
  const mainClasses = twMerge(
    classNames("relative flex flex-col flex-grow md:px-8", {
      "pt-0 !px-0": layoutVariant === LayoutVariant.Secondary,
    })
  );

  const contentClasses = twMerge(
    classNames(
      "flex flex-col lg:space-y-[50px] space-y-12 items-center pt-[40px] desktop:pt-[100px]",
      {
        "pb-[100px] pt-[100px] md:pt-[110px]": headerVariant === HeaderVariant.Tertiary,
        "w-full h-full max-w-full pb-0": layoutVariant === LayoutVariant.Secondary,
      },
      className
    )
  );

  return (
    <div className="w-screen h-screen flex flex-col">
      <HeadBar heading={heading} headerVariant={headerVariant} />
      <main className={mainClasses}>
        <div className={contentClasses}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout);
