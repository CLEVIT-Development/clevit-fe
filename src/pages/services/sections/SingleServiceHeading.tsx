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
    <div className="h-[580px] flex  items-start justify-between pt-40 pl-[120px] pr-[132px] pb-5 gap-20">
      <div className="flex flex-col gap-4 justify-start">
        <h1 className="text-white text-2xl font-semibold">{title}</h1>
        <p className="text-white text-lg font-normal max-w-[530px]">{description}</p>
        <Button variant={ButtonVariant.Primary} className="w-fit mt-12">
          Request a Quote
        </Button>
      </div>
      <img src={image} className="w-[400px]" loading="lazy" alt={imageAlt} />
    </div>
  );
};

export default SingleServiceHeading;
