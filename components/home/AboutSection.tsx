import React, { useMemo } from "react";
import AliceCarousel from "react-alice-carousel";

import classNames from "classnames";

import styles from "@/pages/home/Feedback/Feedback.module.css";

import AvoPhoto from "../../assets/images/team/Avo.webp";
import EdoPhoto from "../../assets/images/team/Edo.webp";
import GorPhoto from "../../assets/images/team/Gor.webp";
import LinkedinIcon from "../../assets/vectors/Linkedin.svg";
import useResponsive from "../../common/hooks/useResponsive";
import Section from "../../common/templates/Section";
import PersonCard from "./PersonCard";

interface Person {
  image: string;
  name: string;
  surname: string;
  position: string;
  iconUrl: string;
  icon: React.ReactNode;
}

const persons: Person[] = [
  {
    image: GorPhoto.src,
    name: "Gor",
    surname: "Khachatryan",
    position: "Founder",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
    iconUrl: "https://www.linkedin.com/in/gor-khachatryan/",
  },
  {
    image: EdoPhoto.src,
    name: "Edgar",
    surname: "Hambaryan",
    position: "Commercial Director",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
    iconUrl: "https://www.linkedin.com/in/edgar-hambaryan/",
  },
  {
    image: AvoPhoto.src,
    name: "Avetis",
    surname: "Fishenkjian",
    position: "Chief Technology Officer",
    iconUrl: "https://www.linkedin.com/in/avo-fishenkjian/",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
  },
];

const AboutSection: React.FC = () => {
  const { isTablet } = useResponsive();

  const aboutData = useMemo(
    () =>
      persons.map((person, index) => {
        return <PersonCard key={index} {...person} />;
      }),
    []
  );

  return (
    <Section title="Who We Are">
      <div className="flex lg:max-w-full space-x-4 desktop:max-w-[800px] max-w-[350px]">
        <div className="w-full">
          {aboutData.length > 3 || isTablet ? (
            <AliceCarousel
              mouseTracking
              infinite
              responsive={{ 0: { items: 1 }, 1256: { items: 3 } }}
              disableButtonsControls
              items={aboutData}
            />
          ) : (
            <div
              className={classNames(
                "w-full flex space-x-4 justify-center",
                styles["feedback-non-carousel-wrapper"]
              )}
            >
              {aboutData}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
