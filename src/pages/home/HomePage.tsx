import { Suspense } from "react";

import { homeProcessesConstants } from "@/assets/constants/processes/homeProcesses.constants";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "@/assets/constants/technologies/technologies.constants";
import HomeHeading from "@/common/layout/Heading/HomeHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";

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
    <Suspense>
      <PageSEO
        title="Web and Mobile App Development Company | Clevit"
        description="Clevit is a web and mobile app development company building reliable solutions for businesses and startups.Find out how we can help with your project. Book a FREE consultation!"
        canonicalUrl="https://www.clevit.io/"
        alternativeDescription="We provide project-based and dedicated teams for custom software, web, mobile, AI, and cloud solutions. Get smarter, cost-effective solutions for your business."
      />
      <Layout
        heading={
          <Gradient>
            <HomeHeading />
          </Gradient>
        }
      >
        <TotalSection
          projectsValue={`35+`}
          stuffValue={`20+`}
          servedValue={`45+`}
          deliveredPercent={`99%`}
        />
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
    </Suspense>
  );
};

export default HomePage;
