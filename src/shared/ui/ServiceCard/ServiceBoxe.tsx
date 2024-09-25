import { FC } from "react";

import BackgroundGradient from "@/assets/images/services/BackgroundGradient.png";
import BackgroundGradientReverse from "@/assets/images/services/BackgroundGradientReverse.png";
import { ButtonVariant } from "@/types/variant.types";

import Button from "../Button";

interface ServiceBoxProps {
  title: string;
  index: number;
  description: string;
  buttonTitle: string;
  Icon: string;
}

const ServiceBox: FC<ServiceBoxProps> = ({ title, index, description, buttonTitle, Icon }) => {
  return (
    <div
      key={index}
      style={{
        backgroundImage:
          index % 2 === 0 ? `url(${BackgroundGradientReverse})` : `url(${BackgroundGradient})`,
      }}
      className={`w-full desktop:max-w-screen-3xl  bg-no-repeat bg-[length:285px_302px]  flex  justify-between items-center desktop:py-16 py-10 desktop:px-20 ${index % 2 === 0 ? "flex-row bg-right " : "flex-row-reverse bg-left"}`}
    >
      <div className="desktop:w-1/2 w-full desktop:px-[72px] desktop:py-[60px] desktop:justify-start desktop:items-start flex flex-col justify-start items-center">
        {" "}
        <div className=" desktop:text-start desktop:px-0 px-10 text-center">
          {" "}
          <h2 className="text-[#314252] text-lg font-bold desktop:text-2xl">{title}</h2>{" "}
          <p className="desktop:text-lg  my-3 text-center desktop:text-start leading-6	 desktop:leading-8 ">
            {description}
          </p>
        </div>
        <div className="w-full flex desktop:justify-start justify-center  gap-x-4 pt-8">
          <Button
            className="text-black border-black hover:text-white desktop:text-[20px]"
            variant={ButtonVariant.Outlined}
          >
            learn more
          </Button>
          <Button className="desktop:text-[20px] text-white"> {buttonTitle}</Button>
        </div>
      </div>
      <div className=" desktop:flex hidden w-1/2  items-center justify-center  desktop:block ">
        <img
          src={Icon}
          alt={title}
          className={title.includes("Mobile") ? "transform scale-x-[-1] " : "	"}
        />
      </div>
    </div>
  );
};

export default ServiceBox;
