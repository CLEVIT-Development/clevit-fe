import { processesConstants } from "@/common/constants/processes.constants.ts";
import Section from "@/common/templates/Section.tsx";
import ProcessCard from "@/shared/ui/Process/ProcessCard";
import ProcessConnector from "@/shared/ui/Process/ProcessConnector";
import { orderUtils } from "@/utils/order.utils";

const ProcessSection = () => {
  return (
    <Section title="Processes We Follow" className="space-y-16">
      <div className="w-full flex justify-evenly desktop:space-y-0 md:space-y-[250px] xs:space-y-14 desktop:flex-row xs:flex-col">
        {processesConstants.map(({ id, title, Icon }, index) => (
          <div key={id} className="relative flex items-center even:self-end w-fit">
            <ProcessCard icon={<Icon />} order={orderUtils(index + 1)} title={title} />
            <ProcessConnector order={index + 1} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProcessSection;
