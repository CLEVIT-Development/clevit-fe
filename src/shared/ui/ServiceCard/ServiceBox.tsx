import { type FC } from "react";

import BackgroundGradient from "@/assets/images/services/BackgroundGradient.png";
import BackgroundGradientReverse from "@/assets/images/services/BackgroundGradientReverse.png";
import { ButtonVariant } from "@/types/variant.types";

import Button from "../Button";

interface ServiceBoxProps {
  title: string;
  index: number;
  description: string;
  buttonTitle: string;
  image: string;
  imageAlt: string;
}

const ServiceBox: FC<ServiceBoxProps> = ({
  title,
  index,
  description,
  buttonTitle,
  imageAlt,
  image,
}) => {
  return (
    <div
      key={index}
      style={{
        backgroundImage:
          index % 2 === 0 ? `url(${BackgroundGradientReverse})` : `url(${BackgroundGradient})`,
      }}
      className={`xs:mb-12 w-full desktop:max-w-screen-3xl bg-no-repeat desktop:bg-[length:600px_400px] bg-[length:300px_300px] flex justify-between items-center desktop:px-20 ${index % 2 === 0 ? "flex-row bg-right " : "flex-row-reverse bg-left"}`}
    >
      <div className="desktop:w-1/2 w-full desktop:px-[72px] desktop:py-[60px] desktop:justify-start desktop:items-start flex flex-col justify-start items-center">
        <div className=" desktop:text-start desktop:px-0 px-8 text-center">
          <h2 className="text-[#314252] text-lg font-bold desktop:landing-10 desktop:text-2xl">
            {title}
          </h2>
          <p className="desktop:text-md desktop:w-[500px] text-xs my-3 text-center desktop:text-start leading-5 desktop:leading-8 ">
            {description}
          </p>
        </div>
        <div className="w-full flex desktop:justify-start justify-center gap-x-4 desktop:pt-8">
          <Button
            className="text-black border-black hover:text-white desktop:text-[20px] text-sm"
            variant={ButtonVariant.Outlined}
          >
            Learn More
          </Button>
          <Button className="desktop:text-[20px] text-white text-sm"> {buttonTitle}</Button>
        </div>
      </div>
      <div className="desktop:flex hidden w-1/2 items-center justify-center">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default ServiceBox;
