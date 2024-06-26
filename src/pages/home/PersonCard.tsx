import React from "react";

interface PersonCardProps {
  image: string;
  name: string;
  surname: string;
  position: string;
  icon: React.ReactNode;
  iconUrl: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  image,
  position,
  name,
  surname,
  icon,
  iconUrl,
}) => (
  <div className="flex flex-col items-center min-w-[300px] text-center borderp-4 rounded-lg">
    {image ? (
      <img
        src={image}
        alt={`${name} ${surname}`}
        className="desktop:w-[410px] w-[305px] h-[452px] object-cover rounded-[10px]"
      />
    ) : (
      <div className="desktop:w-[410px] w-[305px] h-[452px] bg-[#D9D9D9] rounded-[10px]"></div>
    )}
    <div className="mt-4 flex flex-col desktop:items-start items-center">
      <h3 className="desktop:text-lg font-semibold text-gray-200 text-[15px]">
        {name} {surname}
      </h3>
      <div className="desktop:text-md mt-2 text-[#314252] text-sm">{position}</div>
      <a target="_blank" href={iconUrl} className="text-2xl mt-2">
        {icon}
      </a>
    </div>
  </div>
);

export default PersonCard;
