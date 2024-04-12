import Footer from "@/layout/Footer.tsx";
import Heading from "@/layout/Heading.tsx";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen">
      <Heading />
      <main className="relative px-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
