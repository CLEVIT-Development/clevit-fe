import AboutHeading from "@/common/layout/Heading/AboutHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/Feedback/FeedbackSection";
import MissionVisionSection from "./MissionVisionSection";
import ReasonSection from "./ReasonSection";
import TeamSection from "./TeamSection";
import TotalSection from "./TotalSection";
import ValuesSection from "./ValuesSection";

const AboutPage = () => {
  return (
    <>
      <PageSEO
        title="About Clevit Software Development Team | Clevit"
        description="Clevit software development team builds best-in-class web and mobile applications at the forefront of technology. Get to know us and see how we can help."
        canonicalUrl="https://www.clevit.io/about-us"
      />
      <Layout
        className="!pt-[40px]"
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
        <TotalSection projectsValue={`35+`} stuffValue={`20+`} servedValue={`45+`} />
        <FeedbackSection />
        <CalendlySection title="Ready to take the first step towards achieving your goals? Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
      </Layout>
    </>
  );
};

export default AboutPage;
