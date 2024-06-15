import { useState } from "react";

import { portfolioConstants } from "@/assets/constants/portfolio.constants";
import PortfolioHeading from "@/common/layout/Heading/PortfolioHeading";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import { Gradient } from "@/shared/gradient/Gradient";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/Feedback/FeedbackSection";

const PortfolioPage = () => {
  const [showMoreStates, setShowMoreStates] = useState(portfolioConstants.map(() => false));

  const toggleShowMore = (index: number) => {
    const newShowMoreStates = [...showMoreStates];

    newShowMoreStates[index] = !newShowMoreStates[index];
    setShowMoreStates(newShowMoreStates);
  };

  return (
    <Layout
      headerVariant={HeaderVariant.Primary}
      heading={
        <Gradient>
          <PortfolioHeading />
        </Gradient>
      }
    >
      <h1 className="text-2xl font-bold text-gray-200">Portfolios</h1>
      {portfolioConstants.map((project, index) => (
        <Section
          key={index}
          title={project.title}
          className={`${index % 2 === 0 ? "desktop:items-start" : "desktop:items-end"} ${index !== portfolioConstants.length - 1 ? "!mb-[56px]" : ""} items-start`}
          titleClassName="text-purple-100"
        >
          <div className="flex flex-col desktop:flex-row gap-9">
            {/* Mobile layout */}
            <div className="flex flex-col desktop:hidden">
              <div>
                <p className="text-base desktop:text-[20px] font-semibold text-gray-200 mb-6">
                  {project.description}
                </p>
              </div>
              <div>
                <img alt={`${project.title} picture`} src={project.imageUrl} />
              </div>
              <div>
                <p className="mt-6 desktop:text-base text-sm font-normal">{project.details}</p>
              </div>
              <div>
                <ul className="mt-10">
                  {project.info.map((item, idx) => (
                    <li key={idx} className="text-[14x] font-medium flex">
                      <span className="text-gray-100 font-medium mr-2">{item.label}: </span>
                      {item.isLink ? (
                        <a
                          href={`https://www.${item.value}/`}
                          className="text-blue-200 font-semibold"
                          target="_blank"
                        >
                          {item.value}
                        </a>
                      ) : !Array.isArray(item.value) ? (
                        <span className="text-gray-200 font-semibold">{item.value}</span>
                      ) : (
                        <div className="flex flex-wrap">
                          {item.value
                            .slice(0, showMoreStates[index] ? item.value.length : 4)
                            .map((elem, i) => (
                              <span
                                key={i}
                                className=" rounded-full bg-gray-300 h-6 w-6 flex items-center justify-center mr-2 font-semibold"
                              >
                                <elem.icon width={18} />
                              </span>
                            ))}
                          {item.value.length > 4 && (
                            <span
                              onClick={() => toggleShowMore(index)}
                              className="text-[18px] font-medium text-blue-200 cursor-pointer"
                            >
                              {showMoreStates[index] ? "" : ` ... ${item.value.length - 4} more`}
                            </span>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden desktop:flex desktop:flex-row gap-9">
              <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <p className="text-[20px] font-semibold text-gray-200">{project.description}</p>
                <p className="mt-6 text-base font-normal">{project.details}</p>
                <ul className="mt-10">
                  {project.info.map((item, idx) => (
                    <li key={idx} className="text-[18px] font-medium flex">
                      <span className="text-gray-100 font-medium mr-2">{item.label}: </span>
                      {item.isLink ? (
                        <a
                          href={`https://www.${item.value}/`}
                          className="text-blue-200 font-semibold"
                          target="_blank"
                        >
                          {item.value}
                        </a>
                      ) : !Array.isArray(item.value) ? (
                        <span className="text-gray-200">{item.value}</span>
                      ) : (
                        <div className="flex">
                          {item.value
                            .slice(0, showMoreStates[index] ? item.value.length : 4)
                            .map((elem, i) => (
                              <span
                                key={i}
                                className="rounded-full bg-gray-300 h-6 w-6 flex items-center justify-center mr-2"
                              >
                                <elem.icon width={18} />
                              </span>
                            ))}
                          {item.value.length > 4 && (
                            <span
                              onClick={() => toggleShowMore(index)}
                              className="text-[18px] font-medium text-blue-200 cursor-pointer"
                            >
                              {showMoreStates[index] ? "" : ` ... ${item.value.length - 4} more`}
                            </span>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 !== 0 ? "order-1" : "order-2"}`}>
                <img alt={`${project.title} picture`} src={project.imageUrl} />
              </div>
            </div>
          </div>
        </Section>
      ))}
      <FeedbackSection />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </Layout>
  );
};

export default PortfolioPage;
