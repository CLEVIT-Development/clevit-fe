import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";

import { projectsConstants } from "@/assets/constants/projects.constants";
import ProjectCube from "@/assets/images/projects/ProjectCube.png";
import Arrow from "@/assets/vectors/Arrow.svg?react";
import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section.tsx";
import Button from "@/shared/ui/Button";
import { urlShortener } from "@/utils/link.utils";

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
            mouseTracking
            disableButtonsControls={isMobile}
            renderPrevButton={({ isDisabled }) =>
              !isDisabled && <Arrow className="w-full h-full" />
            }
            renderNextButton={({ isDisabled }) =>
              !isDisabled && <Arrow className="rotate-180 w-full h-full" />
            }
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
                country,
                link,
                icons,
                appStoreLink,
                googlePlayLink,
              }) => (
                <div
                  key={id}
                  className="h-full justify-between rounded-lg-l flex md:flex-row xs:flex-col desktop:pl-[90px] desktop:pr-[50px] md:pl-[60px] md:pr-[40px] xs:space-y-[40px] xs:pb-[80px] xs:pt-[36px] xs:pl-[20px] xs:pr-[10px] bg-no-repeat md:bg-projectCubeDesktopPosition bg-projectCubeMobilePosition"
                  style={{
                    backgroundImage: `url(${ProjectCube}),linear-gradient(108.79deg, #0A0240 28.15%, rgba(10, 2, 64, 0.8) 93.01%)`,
                  }}
                >
                  <div className="flex flex-col justify-start md:space-y-[65px] xs:space-y-[30px]">
                    <div className="flex flex-col space-y-6">
                      <p className="text-purple-400 text-md text-left">{sphera}</p>
                      <div className="flex flex-col space-y-1 items-start">
                        <p className="desktop:text-2xl xs:text-[28px] font-bold text-white">
                          {title}
                        </p>
                        <p className="text-md-l text-white max-w-[520px] text-left break-words">
                          {subTitle}
                        </p>
                      </div>
                      <span className="desktop:text-base xs:text-sm text-white text-left max-w-[532px] break-words">
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
                        Country:
                        <span className="font-normal desktop:text-md xs:text-base ml-2">
                          {country}
                        </span>
                      </p>
                      {(appStoreLink || googlePlayLink) && (
                        <p className="text-white desktop:text-md xs:text-sm !font-semibold">
                          App Links:
                          <NavLink
                            to={appStoreLink}
                            target="_blank"
                            className="font-normal desktop:text-md xs:text-base text-purple-400 ml-2"
                          >
                            App Store
                          </NavLink>
                          <NavLink
                            to={googlePlayLink}
                            target="_blank"
                            className="font-normal desktop:text-md xs:text-base text-purple-400 ml-2"
                          >
                            Play Market
                          </NavLink>
                        </p>
                      )}
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
                      <div className="flex space-x-2 items-start">
                        <p className="text-white desktop:text-md xs:text-sm !font-semibold">
                          Technologies:
                        </p>
                        <ul className="flex flex-wrap gap-3 space-x-2 max-w-[50%]">
                          {icons?.map(({ id, Icon }) => (
                            <li key={id}>{<Icon width={30} height={"100%"} />}</li>
                          ))}
                        </ul>
                      </div>
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
