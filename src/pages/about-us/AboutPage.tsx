import AboutHeading from "@/common/layout/Heading/AboutHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/Feedback/FeedbackSection";
import AboutTotalSection from "./AboutTotalSection";
import MissionVisionSection from "./MissionVisionSection";
import ReasonSection from "./ReasonSection";
import TeamSection from "./TeamSection";
import ValuesSection from "./ValuesSection";

const AboutPage = () => {
  return (
    <>
      <PageSEO
        title="About us | Clevit"
        description="Discover Clevit's mission to transforming ideas into innovative software solutions. Learn more about our values, expertise, and passion for digital success."
        canonicalUrl="https://www.clevit.io/about-us"
      />
      <Layout
        className="!pt-[40px] px-5 desktop:px-0 lg:px-0"
        heading={
          <Gradient>
            <AboutHeading />
          </Gradient>
        }
      >
        <TeamSection />
        <MissionVisionSection />
        <ValuesSection />
        <ReasonSection />
        <AboutTotalSection projectsValue={`35+`} stuffValue={`20+`} servedValue={`45+`} />
        <FeedbackSection />
        <CalendlySection title="Ready to take the first step towards achieving your goals? Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
      </Layout>
    </>
  );
};

export default AboutPage;
