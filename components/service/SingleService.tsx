"use client";

import { useParams } from "next/navigation";

import Section from "../../common/templates/Section";
import type { ServicesIdConstants } from "../../shared/constants/services-id.constants";
import { servicesConstants } from "../../shared/constants/services.constants";
import { getIndustryByService } from "../../utils/service.utils";
import { FeedbackSection, ProcessSection, TechnologySection } from "../home";
import ContactUsBottomBanner from "./ContactUsBottomBanner";
import ContactUsTopBanner from "./ContactUsTopBanner";
import WhyChooseClevitSectionItem from "./WhyChooseClevitSectionItem";

const SingleService = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesConstants.find((service) => service.id === id)!;

  if (!service) {
    return <h1>service not found</h1>;
  }

  const industries = getIndustryByService(service.id as keyof typeof ServicesIdConstants);

  return (
    <div className="w-full flex flex-col items-center max-w-screen-2xl">
      <Section>
        <div className="text-center flex flex-col gap-8 desktop:gap-0 items-center jutsify-between px-5">
          <span className="desktoptext-md text-start desktop:text-center text-base leading-8">
            {service.singlePageDescription}
          </span>
          <h2 className="desktop:text-2xl text-lg font-bold	desktop:mt-16">
            What Is Important for Us
          </h2>
          <div className="max-w-[900px] desktop:mt-6 desktop:mb-5 text-start desktop:text-center">
            <span className="leading-8 ">{service.serviceDetails}</span>
          </div>
        </div>
        <div>
          <div className="w-full flex justyfy-center">
            <div className="max-w-[1230px] flex flex-wrap justify-start items-start desktop:gap-10 desktop:justify-start lg:items-start lg:gap-20 gap-6 px-5 lg:px-0 ">
              {service?.offers?.map(({ Icon, description, title }) => {
                return (
                  <div
                    key={title}
                    className="w-[90%] flex flex-col gap-4 desktop:w-[300px] lg:w-[350px]"
                  >
                    <Icon className="size-[86px]" />
                    <div className="flex flex-col gap-4">
                      <h3 className="text-purple-100 text-md-l font-medium">{title}</h3>
                      <span>{description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#F8F7FD] flex justify-center desktop:w-full">
          <TechnologySection
            title={service.serviceTechnologiesTitle}
            subTitle={service.serviceTechnologiesSubtitle}
            tabsConstant={service.serviceTabTechnologies}
            technologiesConstant={service.serviceTechnologies}
          />
        </div>
        <div className="w-full desktop:px-0 px-5">
          <ContactUsTopBanner
            image={service?.bannerImage?.src || service?.image.src}
            imageAlt={service.imageAlt}
            description={service.serviceBookConsultation.description}
            title={service.serviceBookConsultation.title}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 text-center desktop:w-full !mt-0">
          <div className="flex flex-col items-center gap-6 px-5 pt-10 desktop:pt-20">
            <h3 className="desktop:text-2xl text-lg text-[#314252]">Industries We Serve</h3>
            <p className="desktop:text-md text-base leading-8 text-center  desktop:w-[980px] w-full">
              {service.serviceIndustriesDescription}
            </p>
          </div>
          <div className="flex w-screen max-w-full lg:w-full desktop:pl-0 pl-5 overflow-x-auto flex-nowrap justify-around desktop:py-5 gap-2">
            {industries.map(({ title, Icon }, index) => {
              return (
                <div
                  key={index}
                  className="w-48 h-44 shrink-0 flex flex-col items-center justify-center gap-5 rounded-lg text-center transition-all duration-300 border shadow-[0px_8px_10px_0px_rgba(0,0,0,0.07)] hover:border-[#4F1D85] hover:border-solid hover:shadow-[0px_8px_21px_0px_#70339133]"
                >
                  <Icon className="size-10" />
                  <h1>{title}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="!mt-0 pt-12 desktop:pt-16 w-full">
          <ProcessSection
            className="!px-0"
            processes={service.servicesProcesses}
            processTitle={service.processMainTitle}
          />
        </div>
      </Section>
      <FeedbackSection className="w-full" />
      <div className="w-full flex flex-col justify-center items-center desktop:px-0 px-5">
        <h3 className="text-[#314252] desktop:text-2xl xs:font-bold mt-4 text-lg">
          {service.ChooseClevitTitle}
        </h3>
        <div
          className={`grid grid-cols-1 mt-10 desktop:gap-20 desktop:px-10 gap-10 justify-center w-fit ${service.ChooseClevitRecomendation.length === 4 ? "desktop:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} ${service.ChooseClevitRecomendation.length === 6 ? "lg:grid-cols-3" : ""}`}
        >
          {service.ChooseClevitRecomendation.map(({ title, description }, index) => (
            <WhyChooseClevitSectionItem key={index} title={title} description={description} />
          ))}
        </div>
      </div>

      <div className="w-full desktop:px-20 xs:px-5 pb-24 flex justify-center">
        <ContactUsBottomBanner
          title={service.GetConsultation.title}
          description={service.GetConsultation.description}
        />
      </div>
    </div>
  );
};

export default SingleService;
