import { type FC } from "react";
import { useNavigate } from "react-router-dom";

import BackgroundGradient from "@/assets/images/services/BackgroundGradient.png";
import RightBackgroundGradient from "@/assets/images/services/RightBackgroundGradient.png";
import { ButtonVariant } from "@/types/variant.types";

import Button from "../Button";

interface ServiceBoxProps {
  title: string;
  index: number;
  description: string;
  buttonTitle: string;
  image: string;
  imageAlt: string;
  route: string;
}

const ServiceBox: FC<ServiceBoxProps> = ({
  title,
  index,
  description,
  buttonTitle,
  imageAlt,
  image,
  route,
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      style={{
        backgroundImage:
          index % 2 === 0 ? `url(${RightBackgroundGradient})` : `url(${BackgroundGradient})`,
        backgroundPosition: index % 2 === 0 ? "right 10px" : "",
      }}
      className={`desktop:mb-0 xs:mb-12 w-full  desktop:max-w-screen-3xl bg-no-repeat desktop:bg-[length:600px_400px] bg-[length:300px_300px] flex justify-between items-center desktop:px-5 lg:px-20 ${index % 2 === 0 ? "flex-row bg-right md:bg-auto" : "flex-row-reverse bg-left"}`}
    >
      <div className="desktop:w-1/2 w-full lg:px-[72px] desktop:py-[60px] md:py-5 md:gap-3 desktop:justify-start desktop:items-start flex flex-col justify-start items-center">
        <div className="desktop:text-start desktop:px-0  px-8 text-center">
          <h2 className="text-[#314252] text-lg font-bold desktop:landing-10 desktop:text-2xl  ">
            {title}
          </h2>
          <p className="desktop:text-md desktop:w-[500px] desktop:text-justify desktop:pr-20 lg:pr-0 text-xs my-3 text-center lg:text-start leading-5 desktop:leading-8 md:max-w-[600px] ">
            {description}
          </p>
        </div>
        <div className="w-full flex desktop:justify-start justify-center desktop:gap-x-2  desktop:pt-8 lg:gap-x-4 desktop:pr-7 md:gap-10 gap-5">
          <Button
            className="text-black border-black hover:text-white desktop:text-[20px] text-sm"
            variant={ButtonVariant.Outlined}
            onClick={() => navigate(`/services/${route}`)}
          >
            Learn More
          </Button>
          <Button
            className="desktop:text-[20px] text-white text-sm "
            onClick={() => navigate("/request-demo")}
          >
            {" "}
            {buttonTitle}
          </Button>
        </div>
      </div>
      <div className=" desktop:flex hidden w-1/2  items-center justify-center  ">
        <img loading="lazy" src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default ServiceBox;
