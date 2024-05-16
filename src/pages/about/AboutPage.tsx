import AboutHeading from "@/common/layout/Heading/AboutHeading";
import Layout from "@/common/layout/Layout";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/Feedback/FeedbackSection";
import MissionVisionSection from "./MissionVisionSection";
import ReasonSection from "./ReasonSection";
import TeamSection from "./TeamSection";
import TotalSection from "./TotalSection";
import ValuesSection from "./ValuesSection";

const AboutPage = () => {
  return (
    <Layout heading={<AboutHeading />}>
      <TeamSection />
      <MissionVisionSection />
      <ValuesSection />
      <ReasonSection />
      <TotalSection projectsCount={35} stuffCount={10} servedCount={20} />
      <FeedbackSection />
      <CalendlySection title="Ready to take the first step towards achieving your goals? Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
    </Layout>
  );
};

export default AboutPage;
