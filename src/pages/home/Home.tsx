import Layout from "@/common/layout/Layout.tsx";
import AboutSection from "@/pages/home/AboutSection.tsx";
import ProcessSection from "@/pages/home/ProcessSection.tsx";
import RequestQuoteSection from "@/pages/home/RequestQuoteSection.tsx";
import ServiceSection from "@/pages/home/ServiceSection.tsx";
import TechnologySection from "@/pages/home/TechnologySection.tsx";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-24">
        <AboutSection />
        <ServiceSection />
        <RequestQuoteSection />
        <TechnologySection />
        <ProcessSection />
      </div>
    </Layout>
  );
};

export default Home;
