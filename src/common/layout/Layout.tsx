import React from "react";

import Footer from "@/common/layout/Footer.tsx";
import Heading from "@/common/layout/Heading.tsx";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen relative">
      <Heading />
      <main className="relative flex flex-col xl:px-20 lg:px-16 xs:px-5 desktop:py-24 xs:py-12 max-desktop">
        <div className="max-w-[1280px] self-center">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
