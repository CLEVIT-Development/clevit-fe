import { processesConstants } from "@/common/constants/processes.constants.ts";
import Section from "@/common/templates/Section.tsx";
import Connector from "@/shared/ui/Connector.tsx";
import ProcessCard from "@/shared/ui/ProcessCard.tsx";
import { PositionVariant } from "@/types/position.types.ts";
import { orderUtils } from "@/utils/order.utils.ts";

const ProcessSection = () => {
  return (
    <Section title="Processes We Follow" className="space-y-16">
      <div className="w-full flex desktop:space-y-0 xs:space-x-0 desktop:space-x-[75px] xs:space-y-14 desktop:flex-row xs:flex-col justify-center">
        {processesConstants.map(({ id, title, Icon }, index) => (
          <div key={id} className="relative flex items-center even:self-end">
            <ProcessCard icon={<Icon />} order={orderUtils(index)} title={title} />
            {index + 1 !== processesConstants.length && (
              <Connector
                className="absolute right-0 translate-x-[100%] w-[75px]"
                position={PositionVariant.Horizontal}
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProcessSection;
