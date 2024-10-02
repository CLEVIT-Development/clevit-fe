import { type ServicesIdConstants } from "@/assets/constants/services-id.constants";
import { servicesConstants } from "@/assets/constants/services.constants";
import Section from "@/common/templates/Section";

import { getIndustryByService } from "./IndustryServe/helper";
import ServiceKeyAspectsSection from "./ServiceKeyAspectsSection";

interface SingleServiceSectionProps {
  serviceId: string;
}

const SingleServiceSection = ({ serviceId }: SingleServiceSectionProps) => {
  const replaceString = (str: string) => {
    return str.replace("/#", "");
  };

  const service = servicesConstants.find((service) => replaceString(service.id) === serviceId);

  if (!service) {
    return <h1>service not found</h1>;
  }

  const industries = getIndustryByService(service.id as keyof typeof ServicesIdConstants);

  return (
    <Section>
      <div className="text-center flex flex-col  items-center jutsify-between pt-[100px]">
        <span className="text-md leading-8">{service.singlePageDescription} </span>
        <h2 className="desktop:text-2xl desktop:mt-16">What Is Important for Us</h2>
        <div className="max-w-[900px] desktop:mt-6 mb-16">
          <span className=" leading-8	">{service.serviceDetails}</span>
        </div>
      </div>
      <div className="w-full flex  flex-wrap gap-16">
        {service.offers.map(({ Icon, description, title }) => {
          return (
            <div className="w-[350px] flex flex-col gap-4">
              <Icon />
              <div className="flex flex-col gap-4">
                <h3 className="text-purple-100 text-md-l font-medium">{title}</h3>
                <span className=" ">{description}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-blacktext-md-l text-2xl text-[#314252]">Key Aspects</h3>
        <ServiceKeyAspectsSection />
      </div>
      <div className="flex gap-6">
        {industries.map(({ title, Icon }, index) => {
          return (
            <div
              key={index}
              className="w-48 h-44 flex flex-col items-center justify-center gap-5 rounded-lg text-center transition-all duration-300   hover:shadow-[0px_8px_21px_0px_rgba(112,51,145,0.2)]"
            >
              <Icon />
              <h1>{title}</h1>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default SingleServiceSection;
