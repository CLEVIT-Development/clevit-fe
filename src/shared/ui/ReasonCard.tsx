import IconWrapper from "@/common/templates/IconWrapper";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ReasonCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col space-y-2 items-start max-w-[504px]">
      <div className="flex flex-col space-y-1">
        <IconWrapper icon={icon} className="w-[86px] h-[86px]" />
        <p className="text-md-l text-purple-100">{title}</p>
      </div>
      <p className="text-base text-gray-200">{description}</p>
    </div>
  );
};

export default ReasonCard;
