import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  );
};

export default MainLayout;