import Layout from "@/common/layout/Layout";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/FeedbackSection";
import MissionVisionSection from "./MissionVisionSection";
import ReasonSection from "./ReasonSection";
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <Layout>
      <TeamSection />
      <MissionVisionSection />
      <ReasonSection />
      <FeedbackSection />
      <CalendlySection />
    </Layout>
  );
};

export default About;
