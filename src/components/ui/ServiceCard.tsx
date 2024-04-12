import React from "react";

interface Props {
  Icon: React.ReactNode;
  order: string;
  title: string;
  description: string;
}

const ServiceCard = ({ Icon, order, title, description }: Props) => {
  return (
    <div className="p-6 rounded-lg shadow-[0px_8px_10px_0px_#00000012] transition-all duration-500 hover:scale-105">
      <div className="flex justify-between">
        <div className="bg-purple200 rounded-full w-[100px] h-[100px] flex items-center justify-center">
          {Icon}
        </div>
        <p className="text-purple200 text-7xl font-bold">{order}</p>
      </div>
      <p className="text-gray200 text-md mt-6 mb-5">{title}</p>
      <p className="text-gray200 text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
