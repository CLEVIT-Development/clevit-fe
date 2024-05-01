import Layout from "@/common/layout/Layout";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/Feedback/FeedbackSection";
import MissionVisionSection from "./MissionVisionSection";
import ReasonSection from "./ReasonSection";
import TeamSection from "./TeamSection";
import TotalSection from "./TotalSection";

const About = () => {
  return (
    <Layout>
      <TeamSection />
      <MissionVisionSection />
      <ReasonSection />
      <TotalSection projectsCount={35} stuffCount={10} servedCount={20} />
      <FeedbackSection />
      <CalendlySection />
    </Layout>
  );
};

export default About;
