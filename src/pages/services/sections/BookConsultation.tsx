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
    <div className="w-full desktop:min-h-[450px] rounded-xl bg-violet-500 bg-gradient-to-br from-[#0A0240] to-[rgba(10,2,64,0.8)] flex justify-between px-5 py-5 desktop:pr-24 desktop:pl-12">
      <div className="flex flex-col items-start desktop:max-w-[700px]  desktop:gap-6 gap-7 desktop:pt-[120px]">
        <h1 className="text-white text-lg font-bold text-center desktop:text-start">{title}</h1>
        <p className="text-white text-md font-normal desktop:max-w-[550px]  ">{description}</p>
        <div className="desktop:w-fit w-full flex justify-center  mt-[48px]">
          <Button
            className="w-full justify-center  text-[20px] "
            variant={ButtonVariant.Primary}
            children="Contact us today"
          />
        </div>
      </div>
      <img className="hidden desktop:block  " src={image} loading="lazy" alt={imageAlt} />
    </div>
  );
};

export default BookConsultation;
