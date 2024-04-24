import Layout from "@/common/layout/Layout.tsx";
import AboutSection from "@/pages/home/AboutSection.tsx";
import RequestQuoteSection from "@/pages/home/RequestQuoteSection.tsx";
import ServiceSection from "@/pages/home/ServiceSection.tsx";
import TechnologySection from "@/pages/home/TechnologySection.tsx";

import FeedbackSection from "./FeedbackSection";
import ProjectSection from "./Project/ProjectSection";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:space-y-24 xs:space-y-12">
        <AboutSection />
        <ServiceSection />
        <RequestQuoteSection />
        <TechnologySection />
        {/*<ProcessSection />*/}
        <ProjectSection />
        <FeedbackSection />
      </div>
    </Layout>
  );
};

export default Home;
