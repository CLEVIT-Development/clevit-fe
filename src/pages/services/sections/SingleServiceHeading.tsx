import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

interface SingleServiceHeadingProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const SingleServiceHeading = ({
  title,
  description,
  image,
  imageAlt,
}: SingleServiceHeadingProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex  items-start justify-center pt-44 pb-14 px-7 gap-20  desktop:justify-between desktop:px-12  lg:pl-[120px] lg:pr-[132px] lg:pb-5  lg:min-h-[580px] ">
      <div className="flex flex-col desktop:items-start gap-4 justify-start items-center text-center desktop:text-start ">
        <h1 className="text-white desktop:text-2xl  text-lg font-semibold">{title}</h1>
        <p className="text-white desktop:text-lg desktop:text-start text-base font-normal max-w-[530px]">
          {description}
        </p>
        <Button
          variant={ButtonVariant.Primary}
          onClick={() => navigate("/request-demo")}
          className="w-fit mt-12"
        >
          Request a Quote
        </Button>
      </div>
      <img src={image} className="w-[400px] desktop:block hidden " loading="lazy" alt={imageAlt} />
    </div>
  );
};

export default SingleServiceHeading;
