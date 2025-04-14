import { useRouter } from "next/navigation";

import { RoutePaths } from "../../../shared/constants/route.constants";
import Button from "../../../shared/ui/Button";

interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServicesHeading = ({ title, description, image, imageAlt }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center lg:pb-[30px] lg:pt-[140px] lg:pr-[120px] lg:pl-[155px] pb-6 px-6 pt-[124px]">
      <div className="w-full flex flex-col items-center lg:items-start">
        <h1 className="lg:max-w-full desktop:text-left text-center animate-textSlide text-white text-lg lg:text-3xl font-semibold">
          {title}
        </h1>
        <p className="lg:max-w-full lg:text-left text-center text-white text-base lg:text-lg mt-6 lg:mt-4 mb-10 lg:mb-8">
          {description}
        </p>
        <Button onClick={() => router.push(RoutePaths.Calendly)}>Request a Quote</Button>
      </div>
      <img
        loading="lazy"
        className="ml-20 w-[470px] h-[350px] hidden lg:flex"
        alt={imageAlt}
        src={image}
      />
    </div>
  );
};

export default ServicesHeading;
