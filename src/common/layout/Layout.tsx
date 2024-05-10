import React from "react";

import Footer from "@/common/layout/Footer.tsx";
import { HeaderVariant } from "@/types/variant.types";

import HeadBar from "./HeadBar";

interface Props {
  children: React.ReactNode;
  heading?: React.ReactNode;
  headerVariant?: HeaderVariant;
}

const Layout = ({ children, heading, headerVariant = HeaderVariant.Primary }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <HeadBar heading={heading} headerVariant={headerVariant} />
      <main className="relative flex flex-col flex-grow xl:px-20 lg:px-16 px-5 pt-12 desktop:pt-[100px]">
        <div className="flex flex-col lg:space-y-[100px] space-y-12 max-w-[1280px] self-center">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
