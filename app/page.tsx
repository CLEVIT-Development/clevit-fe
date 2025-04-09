import type { Metadata } from "next";

import HomeHeading from "../common/layout/Heading/HomeHeading";
import Layout from "../common/layout/Layout";
import TotalSection from "../components/about-us/TotalSection";
import { Gradient } from "../components/gradient/Gradient";
import {
  CalendlySection,
  FeedbackSection,
  IndustriesSection,
  ProcessSection,
  ProjectSection,
  RequestQuoteSection,
  ServiceSection,
  TechnologySection,
} from "../components/home";
import { homeProcessesConstants } from "../shared/constants/processes/homeProcesses.constants";
import {
  technologiesConstants,
  technologyTabsConstants,
} from "../shared/constants/technologies/technologies.constants";
import { generatePageMetadata } from "../utils/metadata.utils";

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <Layout
      layoutClassName="pt-0 desktop:pt-0"
      className="pt-0 desktop:pt-0"
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
      <CalendlySection title="Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
    </Layout>
  );
}
