import React from "react";

import IconWrapper from "../../common/templates/IconWrapper";

interface Props {
  content: string | React.ReactNode;
  icon: React.ReactNode;
}

const ContactItem = ({ icon, content }: Props) => {
  return (
    <div className="flex xs:space-x-2 md:space-x-4 items-center">
      <IconWrapper
        icon={icon}
        className="bg-purple-700 desktop:h-[50px] desktop:min-w-[50px] h-[30px] min-w-[30px]"
      />
      <span className="desktop:text-base  text-sm font-medium text-white ">{content}</span>
    </div>
  );
};

export default ContactItem;
