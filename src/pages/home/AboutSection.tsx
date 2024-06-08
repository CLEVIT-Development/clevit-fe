import React from "react";

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
    image: "",
    name: "Name",
    surname: "Surname",
    position: "Position",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
    iconUrl: "https://www.linkedin.com/in/name-surname/",
  },
  {
    image: "",
    name: "Name",
    surname: "Surname",
    position: "Position",
    icon: <LinkedinIcon className="fill-[#007EBB] desktop:w-4 w-3" />,
    iconUrl: "https://www.linkedin.com/in/name-surname/",
  },
  {
    image: "",
    name: "Name",
    surname: "Surname",
    position: "Position",
    iconUrl: "https://www.linkedin.com/in/name-surname/",
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
