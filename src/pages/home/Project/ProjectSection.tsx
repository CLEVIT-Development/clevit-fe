import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";

import ProjectCube from "@/assets/images/projects/ProjectCube.png";
import Arrow from "@/assets/vectors/Arrow.svg?react";
import { projectsConstants } from "@/common/constants/projects.constants";
import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section.tsx";
import Button from "@/shared/ui/Button";
import { urlShortener } from "@/utils/link.utils";

import "./Project.css";

const ProjectSection = () => {
  const { isMobile } = useResponsive();

  return (
    <Section
      title="Web Apps We Developed"
      className="w-full lg:max-w-[calc(100vw-128px)] xs:max-w-[calc(100vw-40px)] md:py-12 xs:py-5 self-center"
    >
      <div className="w-full flex flex-col items-center space-y-5">
        <div className="w-full">
          <AliceCarousel
            infinite={true}
            autoPlay
            responsive={{ 0: { items: 1 } }}
            disableButtonsControls={isMobile}
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
                  style={{
                    backgroundImage: `url(${ProjectCube}),linear-gradient(108.79deg, #0A0240 28.15%, rgba(10, 2, 64, 0.8) 93.01%)`,
                  }}
                  key={id}
                  className="h-full justify-between rounded-[10px] flex md:flex-row xs:flex-col desktop:pl-[90px] desktop:pr-[50px] md:pl-[60px] md:pr-[40px] xs:space-y-[40px] xs:pb-[80px] xs:pt-[36px] xs:pl-[20px] xs:pr-[10px] bg-no-repeat md:bg-projectCubeDesktopPosition bg-projectCubeMobilePosition"
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
                          {urlShortener(link)}
                        </NavLink>
                      </p>
                    </div>
                  </div>
                  <div className="relative self-center mr-4">
                    <img
                      src={desktopBackground}
                      alt="Desktop Background"
                      className="lg:max-w-[550px] lg:max-h-[400px] desktop:max-w-[520px] desktop:max-h-[380px] xs:max-w-[300px] xs:max-h-[190px]"
                    />
                    <img
                      src={mobileBackground}
                      alt="Mobile Background"
                      className="lg:max-w-[160px] lg:max-h-[300px] desktop:max-w-[142px] desktop:max-h-[286px] xs:max-w-[88px] xs:max-h-[178px] absolute right-0 -bottom-[50px]"
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
