import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const IndustryServeCard = ({ title, icon }: Props) => (
  <div className="transition-all duration-300 cursor-pointer flex flex-col items-center space-y-6 rounded-lg p-6 shadow-base-100 min-w-[193px] hover:border-purple-300 border-white border-[1px]">
    {icon}
    <p className="text-gray-200 text-base font-semibold text-center">{title}</p>
  </div>
);

export default IndustryServeCard;
