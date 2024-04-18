import AboutSection from "@/atom/AboutSection.tsx";
import RequestQuoteSection from "@/molecules/RequestQuoteSection.tsx";
import ServiceSection from "@/molecules/ServiceSection.tsx";
import TechnologySection from "@/molecules/TechnologySection.tsx";
import Layout from "@/templates/Layout.tsx";
import Section from "@/templates/Section.tsx";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-24">
        <AboutSection />
        <ServiceSection />
        <RequestQuoteSection />
        <TechnologySection />
        <Section title={"Processes We Follow"}>ASD</Section>
      </div>
    </Layout>
  );
};

export default HomePage;
