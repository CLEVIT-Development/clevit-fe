import Section from "../../common/templates/Section";
import { faqConstants } from "../../shared/constants/faq.constants";
import Accordion from "../../shared/ui/Accordion";

const FaqSection = () => (
  <Section className="flex flex-col items-center space-y-12 pb-20 px-5">
    {faqConstants.map(({ id, question, answer }) => (
      <Accordion key={id} title={question} content={answer} />
    ))}
  </Section>
);

export default FaqSection;
