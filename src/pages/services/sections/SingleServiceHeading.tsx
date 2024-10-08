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
  return (
    <div className="desktop:min-h-[580px] flex items-start desktop:justify-between justify-center pt-44 desktop:pl-[120px] desktop:pr-[132px] desktop:pb-5 pb-14 px-7 gap-20">
      <div className="flex flex-col desktop:items-start gap-4 justify-start items-center text-center ">
        <h1 className="text-white desktop:text-2xl text-lg font-semibold">{title}</h1>
        <p className="text-white desktop:text-lg desktop:text-start text-base font-normal max-w-[530px]">
          {description}
        </p>
        <Button variant={ButtonVariant.Primary} className="w-fit mt-12">
          Request a Quote
        </Button>
      </div>
      <img src={image} className="w-[400px] desktop:block hidden" loading="lazy" alt={imageAlt} />
    </div>
  );
};

export default SingleServiceHeading;
