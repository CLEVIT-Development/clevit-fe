import { useNavigate } from "react-router-dom";

import GetConsultationBackground from "@/assets/images/GetConsultationBackground.png";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

interface GetConsultationProps {
  title: string;
  description: string;
}

const ContactUsBottomBanner = ({ title, description }: GetConsultationProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex px-5 flex-col gap-16 desktop:flex-row py-4 w-full desktop:min-h-[220px] min-h-[290px] desktop:px-32 desktop:py-11 text-center items-center justify-between rounded-xl overflow-hidden background: linear-gradient(88.98deg, #9B3B94 0.87%, #210F2B 79.26%) mt-12"
      style={{
        backgroundImage: `linear-gradient(88.98deg, #9B3B94 0.87%, #210F2B 79.26%), url(${GetConsultationBackground})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col desktop:text-start desktop:gap-2.5 gap-6 max-w-xl ">
        <h3 className="desktop:text-xl  text-lg text-white">{title}</h3>
        <p className="text-start  text-base text-white">{description}</p>
      </div>
      <Button
        children="Schedule a consultation today!"
        variant={ButtonVariant.Outlined}
        className="text-white"
        onClick={() => navigate("/request-demo")}
      />
    </div>
  );
};

export default ContactUsBottomBanner;
