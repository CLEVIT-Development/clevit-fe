import React from "react";

import IconWrapper from "@/common/templates/IconWrapper";

interface Props {
  content: string | React.ReactNode;
  icon: React.ReactNode;
}

const ContactItem = ({ icon, content }: Props) => {
  return (
    <div className="flex space-x-6 items-center ">
      <IconWrapper
        icon={icon}
        className="bg-purple-700 desktop:h-[50px] desktop:w-[50px] h-[36px] w-[36px]"
      />
      <span className="desktop:text-md-l text-base font-medium text-white max-w-[70%]">
        {content}
      </span>
    </div>
  );
};

export default ContactItem;
