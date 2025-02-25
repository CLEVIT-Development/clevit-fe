import type { ComponentPropsWithoutRef } from "react";

import CrossIcon from "@/assets/vectors/Cross.svg";
import IconWrapper from "@/common/templates/IconWrapper";

interface Props extends ComponentPropsWithoutRef<"div"> {
  icon: React.ReactNode;
  name: string;
  onCancelClick: () => void;
}

const FilePreview = ({ icon, name, onCancelClick }: Props) => {
  return (
    <div className="flex items-center">
      {icon}
      <p className="ml-1 mr-2 text-gray-100 text-sm truncate max-w-[80%]">{name}</p>
      <IconWrapper icon={<CrossIcon onClick={onCancelClick} />} className="size-4 cursor-pointer" />
    </div>
  );
};

export default FilePreview;
