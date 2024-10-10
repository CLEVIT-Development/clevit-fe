import { Suspense } from "react";

import Section from "@/common/templates/Section.tsx";
import ProcessCard from "@/shared/ui/Process/ProcessCard";
import ProcessConnector from "@/shared/ui/Process/ProcessConnector";
import type { IProcess } from "@/types/constant.types.ts";
import { orderUtils } from "@/utils/order.utils";

interface Props {
  processes?: IProcess[];
  processTitle?: string;
  className?: string;
}

const ProcessSection = ({ processes, processTitle, className }: Props) => (
  <Suspense>
    <Section
      title={processTitle ?? "Processes We Follow"}
      headingLevel="h2"
      className={className ?? ""}
    >
      <div
        className={`w-full flex flex-col flex-wrap justify-evenly pb-12 px-0 space-y-14 md:space-y-[250px] desktop:pb-24 desktop:space-y-0 desktop:flex-row`}
      >
        {processes?.map(({ id, title, Icon, description }, index) => {
          const lengthOfProcess = processes?.length;
          const isSecondRow = lengthOfProcess > 5 && index >= 4;

          return (
            <div
              key={id}
              className={`relative flex items-center even:self-end
                ${
                  window.innerWidth >= 1024
                    ? lengthOfProcess === 6
                      ? "w-[30%]"
                      : lengthOfProcess === 7
                        ? "w-[22%]"
                        : lengthOfProcess >= 8
                          ? "w-[18%]"
                          : "w-[200px]"
                    : "w-[200px]"
                }
                ${isSecondRow && window.innerWidth >= 1024 && lengthOfProcess > 6 ? "!mt-[50px] mx-[-30px]" : isSecondRow && window.innerWidth >= 1024 && lengthOfProcess === 6 ? "!mt-[50px]" : null}
            `}
            >
              <ProcessCard
                icon={<Icon className="size-10" />}
                order={orderUtils(index + 1)}
                title={title}
                description={description}
              />

              {window.innerWidth >= 1024 &&
              ((lengthOfProcess === 6 && index === 3) ||
                (lengthOfProcess === 7 && index === 4)) ? null : (
                <ProcessConnector
                  description={description}
                  order={index + 1}
                  processes={processes}
                />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  </Suspense>
);

export default ProcessSection;
// processMainTitle
