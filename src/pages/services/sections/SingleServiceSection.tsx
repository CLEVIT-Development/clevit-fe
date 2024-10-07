import { useEffect } from "react";

import { type ServicesIdConstants } from "@/assets/constants/services-id.constants";
import { servicesConstants } from "@/assets/constants/services.constants";
import Section from "@/common/templates/Section";
import FeedbackSection from "@/pages/home/Feedback/FeedbackSection";
import ProcessSection from "@/pages/home/ProcessSection";
import TechnologySection from "@/pages/home/TechnologySection";

import BookConsultation from "./BookConsultation";
import GetConsultation from "./GetConsultation";
import { getIndustryByService } from "./IndustryServe/helper";
import { type SingleServiceHeaderItems } from "./SingleServicePage";
import WhyChooseClevitSection from "./WhyChooseClevitSection";

interface SingleServiceSectionProps {
  serviceId: string;
  setHeaderItems: (items: SingleServiceHeaderItems) => void;
}

const SingleServiceSection = ({ serviceId, setHeaderItems }: SingleServiceSectionProps) => {
  const replaceString = (str: string) => {
    return str.replace("/", "");
  };

  const service = servicesConstants.find((service) => replaceString(service.id) === serviceId);

  useEffect(() => {
    if (!service) return;
    setHeaderItems({
      title: service.singleServiceHeaderTitle,
      description: service.singleServiceHeaderDescription,
      image: service.headerImage,
      imageAlt: service.imageAlt,
    });
  }, [service, setHeaderItems]);

  if (!service) {
    return <h1>service not found</h1>;
  }

  const industries = getIndustryByService(service.id as keyof typeof ServicesIdConstants);

  return (
    <Section className="p-5">
      <div className="text-center flex flex-col  items-center jutsify-between">
        <span className="desktoptext-md  text-base leading-8">{service.singlePageDescription}</span>
        <h2 className="desktop:text-2xl desktop:mt-16">What Is Important for Us</h2>
        <div className="max-w-[900px] desktop:mt-6 mb-16 ">
          <span className="leading-8">{service.serviceDetails}</span>
        </div>
      </div>
      <div className="w-full flex  flex-wrap gap-16">
        {service?.offers?.map(({ Icon, description, title }) => {
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
      <div className="bg-[#F8F7FD]">
        <TechnologySection
          title={service?.serviceTechnologiesTitle}
          subTitle={service?.serviceTechnologiesSubtitle}
          tabsConstant={service?.serviceTabTechnologies}
          technologiesConstant={service?.serviceTechnologies}
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
      <div className="flex flex-col justify-center gap-6 text-center !mt-0">
        <div className="flex flex-col items-center gap-6 pt-24">
          <h3 className="desktop:text-2xl text-lg text-[#314252]">Industries We Serve</h3>
          <p className="desktop:text-md text-base leading-8 text-center  desktop:w-[980px] w-full">
            {service.serviceIndustriesDescription}
          </p>
        </div>
        <div className="flex w-screen max-w-full desktop:w-full overflow-x-auto flex-nowrap justify-around desktop:py-5 gap-2">
          {industries.map(({ title, Icon }, index) => {
            return (
              <div
                key={index}
                className="w-48 h-44 shrink-0 flex flex-col items-center justify-center gap-5 rounded-lg text-center transition-all duration-300 border shadow-[0px_8px_10px_0px_rgba(0,0,0,0.07)] hover:border-[#4F1D85] hover:border-solid hover:shadow-[0px_8px_21px_0px_#70339133]"
              >
                <Icon />
                <h1>{title}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" !mt-0 pt-24 w-full">
        <ProcessSection
          processes={service.servicesProcesses}
          processTitle={service.processMainTitle}
        />
      </div>
      <FeedbackSection className="w-full" />
      <div className="flex flex-col gap-20 items-center pt-24">
        <h3 className="text-2xl text-[#314252]">{service.ChooseClevitTitle}</h3>
        <div className="flex flex-wrap gap-20 justify-center">
          {service.ChooseClevitRecomendation.map(({ title, description }, index) => {
            return <WhyChooseClevitSection key={index} title={title} description={description} />;
          })}
        </div>
      </div>
      <div className="w-full pb-24">
        <GetConsultation
          title={service.GetConsultation.title}
          description={service.GetConsultation.description}
        />
      </div>
    </Section>
  );
};

export default SingleServiceSection;
