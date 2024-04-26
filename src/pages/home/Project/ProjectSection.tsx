import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";

import Arrow from "@/assets/vectors/Arrow.svg?react";
import { projectsConstants } from "@/common/constants/projects.constants";
import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section.tsx";
import Button from "@/shared/ui/Button";

import "./Project.css";

const ProjectSection = () => {
  const { isTablet } = useResponsive();

  return (
    <Section
      title="Web Apps We Developed"
      className="w-full max-w-[calc(100vw-40px)] md:py-12 xs:py-5"
    >
      <div className="w-full flex flex-col items-center space-y-5 md:mx-0 xs:-mx-[20px] md:min-w-full xs:min-w-[100vw]">
        <div className="w-full">
          <AliceCarousel
            autoPlay
            autoPlayInterval={2500}
            animationDuration={1000}
            responsive={{ 0: { items: 1 } }}
            disableButtonsControls={isTablet}
            renderPrevButton={({ isDisabled }) => !isDisabled && <Arrow />}
            renderNextButton={({ isDisabled }) => !isDisabled && <Arrow className="rotate-180" />}
            items={projectsConstants.map(
              ({
                id,
                title,
                sphera,
                desktopBackground,
                mobileBackground,
                subTitle,
                description,
                type,
                duration,
                link,
              }) => (
                <div
                  key={id}
                  className="h-full bg-projectGradient flex md:flex-row xs:flex-col md:px-[50px] xs:space-y-[40px] xs:pb-[80px] xs:pt-[36px] xs:px-[20px]"
                >
                  <div className="flex flex-col justify-start md:space-y-[65px] xs:space-y-[30px]">
                    <div className="flex flex-col space-y-6">
                      <p className="text-purple-400 text-md text-left">{sphera}</p>
                      <div className="flex flex-col space-y-1 items-start">
                        <p className="desktop:text-2xl xs:text-[28px] font-bold text-white">
                          {title}
                        </p>
                        <p className="text-md-l text-white max-w-[520px] text-left break-all">
                          {subTitle}
                        </p>
                      </div>
                      <span className="desktop:text-base xs:text-sm text-white text-left max-w-[532px] break-all">
                        {description}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 items-start w-fit">
                      <p className="text-white desktop:text-md xs:text-sm !font-semibold">
                        Type:
                        <span className="font-normal desktop:text-md xs:text-base ml-2">
                          {type}
                        </span>
                      </p>
                      <p className="text-white desktop:text-md xs:text-sm !font-semibold">
                        Duration:
                        <span className="font-normal desktop:text-md xs:text-base ml-2">
                          {duration}
                        </span>
                      </p>
                      <p className="text-white desktop:text-md xs:text-sm !font-semibold">
                        Website:
                        <NavLink
                          to={link}
                          target="_blank"
                          className="font-normal desktop:text-md xs:text-base text-purple-400 ml-2"
                        >
                          {link}
                        </NavLink>
                      </p>
                    </div>
                  </div>
                  <div className="relative self-center mr-4">
                    <img
                      src={desktopBackground}
                      alt="Desktop Background"
                      className="desktop:max-w-[616px] desktop:max-h-[387px] xs:max-w-[316px] xs:max-h-[200px]"
                    />
                    <img
                      src={mobileBackground}
                      alt="Mobile Background"
                      className="desktop:max-w-[142px] desktop:max-h-[286px] xs:max-w-[88px] xs:max-h-[178px] absolute right-0 -bottom-[50px]"
                    />
                  </div>
                </div>
              )
            )}
          />
        </div>
        <Button>See More Projects</Button>
      </div>
    </Section>
  );
};

export default ProjectSection;
