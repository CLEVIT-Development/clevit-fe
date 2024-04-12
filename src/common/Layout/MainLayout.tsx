import React from "react";
import Heading from "@/layout/Heading.tsx";
import Footer from "@/layout/Footer.tsx";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='w-full h-screen'>
      <Heading />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;