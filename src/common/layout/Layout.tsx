import React from "react";

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
  className,
  layoutVariant = LayoutVariant.Primary,
  headerVariant = HeaderVariant.Primary,
}: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <HeadBar heading={heading} headerVariant={headerVariant} />
      <main
        className={twMerge(
          classNames("relative flex flex-col flex-grow pt-12 desktop:pt-[100px] ", {
            ["pt-0 !px-0"]: layoutVariant === LayoutVariant.Secondary,
          })
        )}
      >
        <div
          className={twMerge(
            classNames(
              "flex flex-col lg:space-y-[70px] space-y-12 items-center",
              {
                ["pt-[50px] pb-[100px]"]: headerVariant === HeaderVariant.Tertiary,
                ["w-full h-full max-w-full pt-3.5 pb-0"]: layoutVariant === LayoutVariant.Secondary,
              },
              className
            )
          )}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
