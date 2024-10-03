import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

interface IBookConsultationProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

const BookConsultation = ({ image, title, description, imageAlt }: IBookConsultationProps) => {
  return (
    <div className="w-full h-[450px] bg-violet-500 bg-gradient-to-br from-[#0A0240] to-[rgba(10,2,64,0.8)] flex justify-between  pr-24 pl-12">
      <div className="flex flex-col items-start  gap-6 pt-[120px]">
        <h1 className="text-white text-lg font-bold">{title}</h1>
        <p className="text-white text-md font-normal">{description}</p>
        <Button
          className="w-fit"
          variant={ButtonVariant.Primary}
          children="Book a free Consultation"
        />
      </div>

      <img className="hidden desktop:block  " src={image} loading="lazy" alt={imageAlt} />
    </div>
  );
};

export default BookConsultation;
