import React from "react";

import Footer from "@/common/layout/Footer.tsx";

import HeadBar from "./HeadBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-full">
      <HeadBar />
      <main className="relative flex flex-col xl:px-20 lg:px-16 xs:px-5 desktop:py-[100px] xs:py-12 max-desktop">
        <div className="flex flex-col lg:space-y-[100px] xs:space-y-12 max-w-[1280px] self-center">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
