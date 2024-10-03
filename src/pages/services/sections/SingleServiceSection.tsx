import { useEffect } from "react";

import { homeProcessesConstants } from "@/assets/constants/processes/homeProcesses.constants";
import { type ServicesIdConstants } from "@/assets/constants/services-id.constants";
import { servicesConstants } from "@/assets/constants/services.constants";
import Section from "@/common/templates/Section";
import FeedbackSection from "@/pages/home/Feedback/FeedbackSection";
import ProcessSection from "@/pages/home/ProcessSection";
import TechnologySection from "@/pages/home/TechnologySection";

import BookConsultation from "./BookConsultation";
import GetConsultation from "./GetConsultation";
import { getIndustryByService } from "./IndustryServe/helper";
import { SingleServiceHeaderItems } from "./SingleServicePage";
import WhyChooseClevitSection from "./WhyChooseClevitSection";

interface SingleServiceSectionProps {
  serviceId: string;
  setHeaderItems: (items: SingleServiceHeaderItems) => void;
}

const SingleServiceSection = ({ serviceId, setHeaderItems }: SingleServiceSectionProps) => {
  const replaceString = (str: string) => {
    return str.replace("/#", "");
  };

  const service = servicesConstants.find((service) => replaceString(service.id) === serviceId);

  if (!service) {
    return <h1>service not found</h1>;
  }

  const industries = getIndustryByService(service.id as keyof typeof ServicesIdConstants);

  useEffect(() => {
    if (!service) return;
    setHeaderItems({
      title: service.singleServiceHeaderTitle,
      description: service.singleServiceHeaderDescription,
      image: service.image,
      imageAlt: service.imageAlt,
    });
  }, [service, setHeaderItems]);

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
      <div className="">
        <TechnologySection
          title="Technologies We Use"
          tabsConstant={service.serviceTabTechnologies}
          technologiesConstant={service.serviceTechnologies}
        />
      </div>
      <div className="w-full">
        <BookConsultation
          image={service.image}
          imageAlt={service.imageAlt}
          description={service.serviceBookConsultation.description}
          title={service.serviceBookConsultation.title}
        />
      </div>
      <div className="flex flex-col justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-6 pt-24">
          <h3 className="text-blacktext-md-l text-2xl text-[#314252]">Industries We Serve</h3>
          <p className="text-md leading-8 text-center  w-[980px]">
            {service.serviceIndustriesDescription}
          </p>
        </div>
        <div className="flex gap-6">
          {industries.map(({ title, Icon }, index) => {
            return (
              <div
                key={index}
                className="w-48 h-44 flex flex-col items-center justify-center gap-5 rounded-lg text-center transition-all duration-300 border shadow-[0px_8px_10px_0px_rgba(0,0,0,0.07)] hover:border-[#4F1D85] hover:border-solid"
              >
                <Icon />
                <h1>{title}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-24 pb-24 w-full">
        {/* <ProcessConnector order={2} processes={homeProcessesConstants} /> */}
        <ProcessSection processes={homeProcessesConstants} />
      </div>
      <FeedbackSection className="w-full" />
      <div className="flex flex-col gap-20 items-center pt-24 ">
        <h3 className="text-2xl text-[#314252]">{service.ChooseClevitTitle}</h3>
        <div className="flex  flex-wrap gap-20 justify-center">
          {service.ChooseClevitRecomendation.map(({ title, description }, index) => {
            return <WhyChooseClevitSection key={index} title={title} description={description} />;
          })}
        </div>
      </div>
      <div className="w-full">
        <GetConsultation
          title={service.GetConsultation.title}
          description={service.GetConsultation.description}
        />
      </div>
    </Section>
  );
};

export default SingleServiceSection;
