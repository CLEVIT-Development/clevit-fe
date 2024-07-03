import { useRef, useState } from "react";

import { portfolioConstants } from "@/assets/constants/portfolio.constants";
import useResponsive from "@/common/hooks/useResponsive.ts";
import PortfolioHeading from "@/common/layout/Heading/PortfolioHeading";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import FeedbackSection from "../home/Feedback/FeedbackSection";

const PortfolioPage = () => {
  const [showMoreStates, setShowMoreStates] = useState(portfolioConstants.map(() => false));
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useResponsive();
  const toggleShowMore = (index: number) => {
    const newShowMoreStates = [...showMoreStates];

    newShowMoreStates[index] = !newShowMoreStates[index];
    setShowMoreStates(newShowMoreStates);
  };

  return (
    <>
      <PageSEO
        title="Web and Mobile Apps Development Portfolios | Clevit"
        description="Find our software and different IT services design & development case studies across various industries for current & past clients. Feel free to contact us today!"
        canonicalUrl="https://clevit.io/portfolio"
      />

      <Layout
        className="space-y-9"
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient>
            <PortfolioHeading />
          </Gradient>
        }
      >
        <h1 className="text-2xl font-bold text-gray-200 mb-10">Portfolios</h1>
        {portfolioConstants.map((project, index) => (
          <Section
            key={index}
            className={` ${index % 2 === 0 ? "desktop:items-start" : "desktop:items-end"} ${index !== portfolioConstants.length - 1 ? "desktop:!mb-[56px]" : ""} items-start`}
            titleClassName="text-purple-100"
          >
            <div className="flex flex-col desktop:flex-row gap-9">
              {/* Mobile layout */}
              <div className="flex flex-col lg:hidden">
                <div>
                  <h3 className="text-purple-100  font-bold text-[22px] mb-2">{project.title}</h3>
                  <p className="text-base desktop:text-[16px] font-semibold text-gray-200 mb-6">
                    {project.description}
                  </p>
                </div>
                <div>
                  <img
                    alt={`${project.title} picture`}
                    src={project.mobileImageUrl}
                    height={395}
                    width={"100%"}
                  />
                </div>
                <div>
                  <p className="mt-6 text-sm font-normal">{project.details}</p>
                </div>
                <div>
                  <ul className="mt-4">
                    {project.info.map((item, idx) => (
                      <li key={idx} className="text-[14x] font-medium flex">
                        <span className="text-gray-100 font-medium mr-2">{item.label}: </span>
                        {item.isLink ? (
                          <a
                            href={`https://www.${item.value}/`}
                            className="text-blue-200 font-semibold"
                            target="_blank"
                          >
                            {item.value as string}
                          </a>
                        ) : !Array.isArray(item.value) ? (
                          <span className="text-gray-200 font-semibold">{item.value}</span>
                        ) : (
                          <div className="flex flex-wrap relative items-end ">
                            {item.value
                              .slice(0, isMobile ? 5 : item.value.length - 1)
                              .map((elem, i) => (
                                <span
                                  key={i}
                                  className="rounded-full bg-gray-300 h-6 w-6 flex items-center justify-center mr-2 font-semibold"
                                >
                                  <elem.Icon height={18} />
                                </span>
                              ))}
                            {item.value.length > 5 && isMobile && (
                              <span
                                onClick={() => toggleShowMore(index)}
                                className="text-[18px] desktop:font-medium text-blue-200 cursor-pointer text-sm"
                              >
                                {showMoreStates[index]
                                  ? "Show less"
                                  : `... ${item.value.length - 5} more`}
                              </span>
                            )}
                            {showMoreStates[index] && (
                              <div
                                id={String(index)}
                                ref={tooltipRef}
                                role="tooltip"
                                className="absolute space-y-3 -translate-y-[20%] translate-x-[50%] z-10 inline-block px-3 py-3 text-sm font-medium text-gray-200 bg-white border border-gray-300 rounded-lg shadow-lg whitespace-nowrap"
                              >
                                {item.value.slice(5, item.value.length).map((elem, i) => (
                                  <div key={i} className="flex items-center justify-left  ">
                                    <elem.Icon height={18} width={18} className="mr-3 " />
                                    <span>{elem.name}</span>
                                  </div>
                                ))}
                                <div className="absolute top-full  z-9 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-white h-2 w-2 rotate-45 border-l border-b border-gray-300"></div>
                              </div>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:flex lg:flex-row gap-9 ">
                <div
                  className={`${index % 2 === 0 ? "order-1" : "order-2"} justify-between flex flex-col`}
                >
                  <h3 className="text-purple-100  md:max-w-fit max-w-[300px] desktop:text-xl text-md-l font-semibold text-left">
                    {project.title}
                  </h3>
                  <p className="text-[20px] font-semibold text-gray-200">{project.description}</p>
                  <p className="text-base font-normal">{project.details}</p>
                  <ul>
                    {project.info.map((item, idx) => (
                      <li key={idx} className="text-[18px] font-medium flex">
                        <span className="text-gray-100 font-medium mr-2">{item.label}: </span>
                        {item.isLink ? (
                          <a
                            href={`https://www.${item.value}/`}
                            className="text-blue-200 font-semibold"
                            target="_blank"
                          >
                            {item.value as string}
                          </a>
                        ) : !Array.isArray(item.value) ? (
                          <span className="text-gray-200">{item.value}</span>
                        ) : (
                          <div className="flex">
                            {item.value.map((elem, i) => (
                              <button
                                type="button"
                                onMouseEnter={() => setHoveredIcon(`${project.title}-${i}`)}
                                onMouseLeave={() => setHoveredIcon(null)}
                                key={i}
                                className=" swg-wrapper cursor-auto rounded-full bg-gray-300 h-6 w-6 flex items-center justify-center mr-2 relative"
                              >
                                <elem.Icon height={18} />
                                {hoveredIcon === `${project.title}-${i}` && (
                                  <div
                                    role="tooltip"
                                    className="absolute  -translate-y-[120%] z-10 inline-block px-3 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-lg shadow-sm whitespace-nowrap"
                                  >
                                    {elem.name}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 bg-white h-2 w-2 rotate-45 border-l border-b border-gray-300"></div>
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 !== 0 ? "order-1" : "order-2"}`}>
                  <img
                    alt={`${project.title} picture`}
                    src={project.desktopImageUrl}
                    width={678}
                    className="min-w-[678px] max-w-unset"
                  />
                </div>
              </div>
            </div>
            {/* Divider for mobile */}
            {index !== portfolioConstants.length - 1 && (
              <div className="desktop:hidden  border-b border-gray-100 w-full opacity-25"></div>
            )}
          </Section>
        ))}
        <FeedbackSection />
        <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
      </Layout>
    </>
  );
};

export default PortfolioPage;
