import React from "react";

interface I_MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout = ({ children }: I_MainLayoutProps) => {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  );
};

export default MainLayout;