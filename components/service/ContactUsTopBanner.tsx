import StyledLink from "../../shared/ui/StyledLink";
import { ButtonVariant } from "../../types/variant.types";

interface IBookConsultationProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

const ContactUsTopBanner = ({ image, title, description, imageAlt }: IBookConsultationProps) => {
  return (
    <div className="w-full desktop:h-[450px] rounded-xl bg-violet-500 bg-gradient-to-br from-[#0A0240] to-[rgba(10,2,64,0.8)] flex desktop:justify-between px-5 py-5 desktop:pr-[164px]  desktop:pl-12 md:justify-center md:py-10">
      <div className="flex flex-col items-start desktop:max-w-[700px] justify-center gap-5 desktop:pr-5 ">
        <h1 className="text-white text-lg font-bold text-center desktop:text-start">{title}</h1>
        <p className="text-white text-md font-normal desktop:max-w-[550px]  ">{description}</p>
        <div className="desktop:w-fit w-full flex desktop:mt-10 justify-center ">
          <StyledLink
            href="/request-demo"
            className="w-full justify-center text-[20px]"
            variant={ButtonVariant.Primary}
          >
            Book a Free Consultation
          </StyledLink>
        </div>
      </div>
      <img className="hidden desktop:block scale-[1.1]" src={image} loading="lazy" alt={imageAlt} />
    </div>
  );
};

export default ContactUsTopBanner;
