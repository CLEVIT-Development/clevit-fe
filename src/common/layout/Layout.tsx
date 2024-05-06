import React from "react";

import Footer from "@/common/layout/Footer.tsx";

import HeadBar from "./HeadBar";

interface Props {
  children: React.ReactNode;
  heading: React.ReactNode;
}

const Layout = ({ children, heading }: Props) => {
  return (
    <div className="w-screen h-full">
      <HeadBar heading={heading} />
      <main className="relative flex flex-col xl:px-20 lg:px-16 px-5 pt-12 desktop:pt-[100px] calendlyDesktop:mb-[-200px] sm:mb-[-30px] -mb-[160px]">
        <div className="flex flex-col lg:space-y-[100px] space-y-12 max-w-[1280px] self-center">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
