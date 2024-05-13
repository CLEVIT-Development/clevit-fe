import React from "react";

import IconWrapper from "@/common/templates/IconWrapper";

interface Props {
  content: string;
  icon: React.ReactNode;
}

const ContactItem = ({ icon, content }: Props) => {
  return (
    <div className="desktop:min-w-full min-w-[300px] flex items-center rounded-lg-l desktop:space-x-5 space-x-2 border border-purple-700 desktop:py-[30px] desktop:pl-[30px] desktop:pr-[40px] py-4 pl-4 pr-9">
      <IconWrapper
        icon={icon}
        className="bg-purple-700 desktop:h-[50px] desktop:w-[50px] h-[36px] w-[36px]"
      />
      <span className="desktop:text-md-l text-base font-medium text-white max-w-[60%]">
        {content}
      </span>
    </div>
  );
};

export default ContactItem;
