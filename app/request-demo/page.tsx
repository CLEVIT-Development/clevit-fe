import { CalendlySection } from "../../components/home";
import { generatePageMetadata } from "../../utils/metadata.utils";

export const metadata = generatePageMetadata("requestDemo");

const CalendlyPage = () => {
  return <CalendlySection title="Let’s find the perfect solution" />;
};

export default CalendlyPage;
