import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContactWrapper = ({ children }: Props) => {
  return (
    <div className="desktop:min-w-full min-w-[300px] flex  space-y-4 flex-col rounded-lg-l  border border-purple-700 desktop:py-[30px] desktop:pl-[30px] desktop:pr-[40px] py-4 pl-4 pr-4">
      {children}
    </div>
  );
};

export default ContactWrapper;
