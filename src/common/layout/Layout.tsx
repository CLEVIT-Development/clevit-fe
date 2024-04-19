import Footer from "@/common/layout/Footer.tsx";
import Heading from "@/common/layout/Heading.tsx";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen">
      <Heading />
      <main className="relative xl:px-20 lg:px-16 xs:px-5 md:py-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
