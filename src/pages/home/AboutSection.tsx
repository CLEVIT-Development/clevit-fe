import React from "react";

import AvoPhoto from "@/assets/images/team/Avo.png";
import EdoPhoto from "@/assets/images/team/Edo.png";
import GorPhoto from "@/assets/images/team/Gor.png";
import LinkedinIcon from "@/assets/vectors/Linkedin.svg?react";
import Section from "@/common/templates/Section";

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
    image: GorPhoto,
    name: "Gor",
    surname: "Khachatryan",
    position: "Founder",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
    iconUrl: "https://www.linkedin.com/in/gor-khachatryan/",
  },
  {
    image: EdoPhoto,
    name: "Edgar",
    surname: "Hambaryan",
    position: "Commercial Director",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
    iconUrl: "https://www.linkedin.com/in/edgar-hambaryan/",
  },
  {
    image: AvoPhoto,
    name: "Avetis",
    surname: "Fishenkjian",
    position: "Chief Technology Officer",
    iconUrl: "https://www.linkedin.com/in/avo-fishenkjian/",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
  },
];

const AboutSection: React.FC = () => (
  <Section title="Who We Are">
    <div className=" flex desktop:max-w-full overflow-scroll space-x-4 max-w-[350px] ">
      {persons.map((person, index) => (
        <PersonCard key={index} {...person} />
      ))}
    </div>
  </Section>
);

export default AboutSection;
