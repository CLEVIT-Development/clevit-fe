import {
  type FunctionComponent,
  type LazyExoticComponent,
  type SVGProps,
  useEffect,
  useRef,
  useState,
} from "react";

import { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";
import Section from "@/common/templates/Section.tsx";

export interface ITechnologyConstant {
  id: number;
  title: string;
  description?: string;
  Icon: LazyExoticComponent<FunctionComponent<SVGProps<SVGSVGElement>>>;
}

interface Props {
  title: string;
  subTitle?: string;
  tabsConstant: ITabsConstant[];
  technologiesConstant:
    | {
        [key: number]: ITechnologyConstant[];
      }
    | never;
}

const TechnologySection = ({ title, subTitle, tabsConstant, technologiesConstant }: Props) => {
  const [activeTab, setActiveTab] = useState(tabsConstant[0].id);
  const [direction, setDirection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleTabChange = (tabId: number) => {
    const currentIndex = tabsConstant.findIndex((tab: ITabsConstant) => tab.id === activeTab);
    const newIndex = tabsConstant.findIndex((tab: ITabsConstant) => tab.id === tabId);

    setDirection(newIndex > currentIndex ? 1 : -1);

    setActiveTab(tabId);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transition = "none";
      contentRef.current.style.transform = `translateX(${direction * 100}%)`;
      contentRef.current.style.opacity = "0";

      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transition = "all 0.3s ease-in-out";
          contentRef.current.style.transform = "translateX(0)";
          contentRef.current.style.opacity = "1";
        }
      }, 50);
    }
  }, [activeTab, direction]);

  return (
    <Section className="w-full bg-gray-300 px-5 md:px-20 desktop:px-28">
      <div className="w-full h-full">
        <h2 className="desktop:text-2xl text-center text-lg text-[#314252] pt-5 pb-6 desktop:pt-12">
          {title}
        </h2>
        {subTitle ? (
          <div className="w-full desktop:mt-6 desktop:text-center text-start">
            <span className="leading-6 text-[#314252] text-center">{subTitle}</span>
          </div>
        ) : null}
        <div className="w-full flex flex-col desktop:flex-row desktop:overflow-x-scroll no-scrollbar py-6 desktop:pt-12">
          <div className="w-full flex flex-col desktop:flex-row text-center desktop:w-max desktop:inline-flex">
            {tabsConstant.map((tab: ITabsConstant) => (
              <span
                role="tab"
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`mb-2 desktop:mb-0 desktop:mr-10 relative duration-500 whitespace-nowrap outline-none focus:outline-none lg:text-md desktop:text-base !font-bold after:transition-all after:bg-purple-500 pb-3 desktop:pb-6
                  ${
                    activeTab === tab.id
                      ? "after:w-full text-purple-100 after:-bottom-5 decoration-2 underline decoration-purple-500 desktop:h-2 underline-offset-[5px] desktop:underline-offset-[15px]"
                      : "after:w-0 after:bg-transparent text-gray-200"
                  }
                `}
              >
                {tab.title}
              </span>
            ))}
          </div>
        </div>
        <span
          className="block text-gray-200 text-base animate-textSlide desktop:!pb-8"
          dangerouslySetInnerHTML={{
            __html: tabsConstant.find((tab) => tab.id === activeTab)?.description || "",
          }}
        />
        <div className={`py-5  desktop:pb-12 desktop:mt-4 overflow-hidden`}>
          <div ref={contentRef} className="w-full h-full">
            <div
              className={`w-full flex-wrap flex items-center justify-center ${technologiesConstant[activeTab].length < 6 ? "desktop:justify-center" : "desktop:justify-between"}  overflow-y-auto`}
            >
              {technologiesConstant[activeTab].map((tech: ITechnologyConstant, index: number) => (
                <div
                  key={index}
                  className="w-1/2 md:w-[24%] desktop:w-[15%] mb-4 flex flex-col items-center"
                >
                  <div className="w-[90px] h-[120px] flex flex-col items-center justify-center mr-2 ">
                    <tech.Icon />
                    <span>{tech.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechnologySection;
