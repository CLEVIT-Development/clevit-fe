import HomeHeading from "@/common/layout/Heading/HomeHeading";
import Layout from "@/common/layout/Layout.tsx";
import AboutSection from "@/pages/home/AboutSection.tsx";
import RequestQuoteSection from "@/pages/home/RequestQuoteSection.tsx";
import ServiceSection from "@/pages/home/ServiceSection.tsx";
import TechnologySection from "@/pages/home/TechnologySection.tsx";
import { Gradient } from "@/shared/gradient/Gradient.tsx";

import CalendlySection from "./CalendlySection";
import FeedbackSection from "./Feedback/FeedbackSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./Project/ProjectSection";

const HomePage = () => {
  return (
    <Layout
      heading={
        <Gradient>
          <HomeHeading />
        </Gradient>
      }
    >
      <AboutSection />
      <ServiceSection />
      <RequestQuoteSection />
      <TechnologySection />
      <ProcessSection />
      <ProjectSection />
      <FeedbackSection />
      <CalendlySection title="Ready to take the first step towards achieving your goals? Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
    </Layout>
  );
};

export default HomePage;
