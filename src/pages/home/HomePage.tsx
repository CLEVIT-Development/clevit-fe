import { seoConfig } from "@/app/seo.config";
import { homeProcessesConstants } from "@/assets/constants/processes/homeProcesses.constants";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/assets/constants/technologies/technologies.constants";
import HomeHeading from "@/common/layout/Heading/HomeHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import Seo from "@/shared/seo/SEO";

import TotalSection from "../about-us/TotalSection";
import AboutSection from "./AboutSection";
import CalendlySection from "./CalendlySection";
import FeedbackSection from "./Feedback/FeedbackSection";
import IndustriesSection from "./IndustriesSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./Project/ProjectSection";
import RequestQuoteSection from "./RequestQuoteSection";
import ServiceSection from "./ServiceSection";
import TechnologySection from "./TechnologySection";

const HomePage = () => {
  return (
    <>
      <Seo {...seoConfig.home} />
      <Layout
        layoutClassName="!pt-0 xs:!w-screen"
        className="!pt-0 xs:!w-screen"
        heading={
          <Gradient>
            <HomeHeading />
          </Gradient>
        }
      >
        <TotalSection projectsValue={`35+`} stuffValue={`20+`} servedValue={`25+`} />
        <ServiceSection />
        <RequestQuoteSection />
        <TechnologySection
          title="Technologies We Use"
          tabsConstant={technologyTabsConstants}
          technologiesConstant={technologiesConstants}
        />
        <ProcessSection processes={homeProcessesConstants} />
        <IndustriesSection />
        <ProjectSection />
        <FeedbackSection />
        <AboutSection />
        <CalendlySection title="Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
      </Layout>
    </>
  );
};

export default HomePage;
