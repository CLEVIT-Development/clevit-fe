import GetConsultationBackground from "@/assets/images/GetConsultationBackground.png";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

interface GetConsultationProps {
  title: string;
  description: string;
}

const GetConsultation = ({ title, description }: GetConsultationProps) => {
  return (
    <div
      className="flex w-full h-[220px] px-32 py-11 items-center justify-between rounded-md overflow-hidden background: linear-gradient(88.98deg, #9B3B94 0.87%, #210F2B 79.26%);
"
      style={{
        backgroundImage: `linear-gradient(88.98deg, #9B3B94 0.87%, #210F2B 79.26%), url(${GetConsultationBackground})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col gap-2.5 max-w-xl">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-base text-white">{description}</p>
      </div>
      <Button
        children="Get a free consultation"
        variant={ButtonVariant.Primary}
        className="text-white"
      />
    </div>
  );
};

export default GetConsultation;
