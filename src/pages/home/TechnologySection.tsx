import {
  type FunctionComponent,
  type LazyExoticComponent,
  type SVGProps,
  Suspense,
  startTransition,
  useEffect,
  useRef,
  useState,
} from "react";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { type ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";
import useScrollView from "@/common/hooks/useScrollView.ts";
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
  technologiesConstant: {
    [key: number]: ITechnologyConstant[];
  };
}

const TechnologySection = ({ title, subTitle, tabsConstant, technologiesConstant }: Props) => {
  const [activeTab, setActiveTab] = useState(tabsConstant[0].id);
  const [direction, setDirection] = useState(0);
  const currentIcons = technologiesConstant[activeTab];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const prevIconsRef = useRef<ITechnologyConstant[]>([]);

  const handleTabChange = (tabId: number) => {
    startTransition(() => {
      const currentIndex = tabsConstant.findIndex((tab) => tab.id === activeTab);
      const newIndex = tabsConstant.findIndex((tab) => tab.id === tabId);

      setDirection(newIndex > currentIndex ? -1 : 1);
      setActiveTab(tabId);
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useScrollView(sectionRef, RoutePaths.Technologies);

  useEffect(() => {
    if (contentRef.current) {
      if (JSON.stringify(currentIcons) !== JSON.stringify(prevIconsRef.current)) {
        console.log("Icons have changed");
        contentRef.current.style.transition = "none";
        contentRef.current.style.transform = isMobile
          ? `translateY(${direction * 100}%)`
          : `translateX(${direction * 100}%)`;
        contentRef.current.style.opacity = "0";
        prevIconsRef.current = currentIcons;
      } else {
        console.log("Icons is equal");
      }

      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transition = "all 0.3s ease-in-out";
          contentRef.current.style.transform = "translate(0, 0)";
          contentRef.current.style.opacity = "1";
        }
      }, 50);
    }
  }, [activeTab, direction, isMobile, currentIcons]);

  return (
    <Section className="w-full bg-gray-300 px-5 md:px-20 lg:px-20 rounded-lg desktop:max-w-[1024px] lg:max-w-[1280px]">
      <div className="w-full h-full" ref={sectionRef}>
        <h2 className="desktop:text-2xl text-center text-lg text-[#314252] pt-5 pb-6 desktop:pt-12">
          {title}
        </h2>
        {subTitle && (
          <div className="w-full desktop:mt-6 desktop:text-center text-start">
            <span className="leading-6 text-[#314252] text-center">{subTitle}</span>
          </div>
        )}
        <div className="w-full flex flex-col desktop:flex-row desktop:overflow-x-scroll no-scrollbar desktop:pt-9 desktop:justify-center lg:justify-start">
          <div className="w-full flex flex-col desktop:flex-row text-center desktop:w-max desktop:inline-flex desktop:mt-0 mt-5">
            {tabsConstant.map((tab) => (
              <span
                role="tab"
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  cursor-pointer mb-2 desktop:mb-0 desktop:mr-10 relative duration-500 whitespace-nowrap 
                  outline-none focus:outline-none lg:text-md desktop:text-base !font-bold
                  after:transition-all after:absolute after:left-0 after:h-[2px]
                  pb-3 desktop:pb-3 after:bottom-[5px]
                  ${activeTab === tab.id ? "after:w-full text-purple-100 after:bg-purple-500 desktop:after:w-[100%]" : "text-gray-200 after:w-full after:bg-[#314252]/50 desktop:after:w-0"}
                `}
              >
                {tab.title}
              </span>
            ))}
          </div>
        </div>
        {tabsConstant.find((tab) => tab.id === activeTab)?.description && (
          <span
            className="block text-gray-200 text-base desktop:animate-textSlide desktop:pt-4 desktop:!pb-8"
            dangerouslySetInnerHTML={{
              __html: tabsConstant.find((tab) => tab.id === activeTab)?.description || "",
            }}
          />
        )}
        <div className={`py-5 desktop:pb-12 desktop:mt-4 overflow-hidden`}>
          {tabsConstant.find((tab) => tab.id === activeTab)?.subDescription && (
            <div className="w-full flex flex-col desktop:flex-row desktop:justify-evenly gap-6 mb-8">
              {tabsConstant
                .find((tab) => tab.id === activeTab)
                ?.subDescription?.map(({ description, title, id }) => (
                  <div key={id} className="desktop:w-1/3 w-full text-start">
                    <h3 className="mb-4 text-md font-semibold">{title}</h3>
                    <span dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                ))}
            </div>
          )}
          <div ref={contentRef} className="w-full h-full">
            <div
              className={`w-full flex-wrap flex items-center justify-center overflow-y-auto ${getGridClass(technologiesConstant[activeTab].length)}`}
            >
              {technologiesConstant[activeTab].map((tech, index) => (
                <div
                  key={index}
                  className="w-1/2 md:w-[24%] desktop:w-[15%] lg:w-[20%] mb-4 flex flex-col items-center animate-swipeTop"
                >
                  <div className="w-[90px] h-[120px] flex flex-col items-center justify-center mr-2">
                    <Suspense fallback={<div>Loading...</div>}>
                      <div className="w-full h-[75px] flex justify-center items-end">
                        <tech.Icon />
                      </div>
                    </Suspense>
                    <span className="whitespace-nowrap  mt-2">{tech.title}</span>
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

const getGridClass = (length: number) => {
  switch (length) {
    case 2:
      return "desktop:flex desktop:gap-16";
    case 4:
      return "desktop:grid desktop:grid-cols-4 desktop:justify-items-center desktop:";
    case 5:
      return "desktop:justify-center md:grid md:grid-cols-5 md:justify-items-center";
    case 6:
      return "desktop:justify-center md:grid md:grid-cols-3 md:justify-items-center lg:grid lg:grid-cols-6";
    case 7:
      return "desktop:justify-center md:grid md:grid-cols-4 md:justify-items-center lg:grid lg:grid-cols-7";
    case 8:
      return "desktop:justify-center md:grid md:grid-cols-4 md:justify-items-center lg:grid lg:grid-cols-8";
    case 10:
      return "md:justify-items-center md:grid md:grid-cols-5 lg:grid lg:grid-cols-5";
    case 12:
      return "md:justify-items-center lg:grid lg:grid-cols-6";
    default:
      return "";
  }
};

export default TechnologySection;
