import { Suspense } from "react";

import Section from "@/common/templates/Section.tsx";
import ProcessCard from "@/shared/ui/Process/ProcessCard";
import ProcessConnector from "@/shared/ui/Process/ProcessConnector";
import type { IProcess } from "@/types/constant.types.ts";
import { orderUtils } from "@/utils/order.utils";

interface Props {
  processes?: IProcess[];
  processTitle?: string;
}

const ProcessSection = ({ processes, processTitle }: Props) => (
  <Suspense>
    <Section title={processTitle ?? "Processes We Follow"} className="space-y-16" headingLevel="h2">
      <div className="w-full flex justify-evenly desktop:space-y-0 md:space-y-[250px] xs:space-y-14 desktop:flex-row flex-wrap xs:flex-col">
        {processes?.map(({ id, title, Icon, description }, index) => (
          <div key={id} className="relative flex items-center even:self-end w-fit">
            <ProcessCard
              icon={<Icon className="size-10" />}
              order={orderUtils(index + 1)}
              title={title}
              description={description}
            />
            <ProcessConnector order={index + 1} processes={processes} />
          </div>
        ))}
      </div>
    </Section>
  </Suspense>
);

export default ProcessSection;
// processMainTitle
