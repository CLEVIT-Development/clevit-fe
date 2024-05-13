import React from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import Footer from "@/common/layout/Footer.tsx";
import { HeaderVariant } from "@/types/variant.types";

import HeadBar from "./HeadBar";

interface Props {
  children: React.ReactNode;
  heading?: React.ReactNode;
  headerVariant?: HeaderVariant;
  className?: string;
}

const Layout = ({ children, heading, headerVariant = HeaderVariant.Primary, className }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <HeadBar heading={heading} headerVariant={headerVariant} />
      <main className="relative flex flex-col flex-grow xl:px-20 lg:px-16 px-5 pt-12 desktop:pt-[100px]">
        <div
          className={twMerge(
            classNames(
              "flex flex-col lg:space-y-[100px] space-y-12 max-w-[1280px] self-center",
              {
                ["pt-[50px] pb-[100px]"]: headerVariant === HeaderVariant.Tertiary,
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
