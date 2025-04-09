import {
  AboutTotalSection,
  MissionVisionSection,
  ReasonSection,
  TeamSection,
  ValuesSection,
} from "../../components/about-us";
import { CalendlySection, FeedbackSection } from "../../components/home";
import { generatePageMetadata } from "../../utils/metadata.utils";

export const metadata = generatePageMetadata("about");

const AboutUsPage = () => {
  return (
    <>
      <TeamSection />
      <MissionVisionSection />
      <ValuesSection />
      <ReasonSection />
      <AboutTotalSection projectsValue={`35+`} stuffValue={`20+`} servedValue={`45+`} />
      <FeedbackSection />
      <CalendlySection title="Ready to take the first step towards achieving your goals? Schedule a free call with a member of our team who will be happy to discuss the services we offer and how they can benefit you." />
    </>
  );
};

export default AboutUsPage;
