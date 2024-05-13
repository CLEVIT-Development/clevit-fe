import HomeHeading from "@/common/layout/Heading/HomeHeading";
import Layout from "@/common/layout/Layout.tsx";
import AboutSection from "@/pages/home/AboutSection.tsx";
import RequestQuoteSection from "@/pages/home/RequestQuoteSection.tsx";
import ServiceSection from "@/pages/home/ServiceSection.tsx";
import TechnologySection from "@/pages/home/TechnologySection.tsx";

import CalendlySection from "./CalendlySection";
import FeedbackSection from "./Feedback/FeedbackSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./Project/ProjectSection";

const HomePage = () => {
  return (
    <Layout heading={<HomeHeading />}>
      <AboutSection />
      <ServiceSection />
      <RequestQuoteSection />
      <TechnologySection />
      <ProcessSection />
      <ProjectSection />
      <FeedbackSection />
      <CalendlySection />
    </Layout>
  );
};

export default HomePage;
