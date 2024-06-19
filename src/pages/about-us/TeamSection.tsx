import { useNavigate } from "react-router-dom";

import TeamPhoto from "@/assets/images/team/teamPhoto.png";
import Messages from "@/assets/vectors/Messages.svg?react";
import Section from "@/common/templates/Section";
import Button from "@/shared/ui/Button";

const TeamSection = () => {
  const navigate = useNavigate();
  const redirectToCalendly = () => {
    navigate("/request-demo");
  };

  return (
    <Section className="self-center desktop:max-w-[80%]">
      <p className="break-words desktop:text-center text-md font-normal">
        Clevit, your full-cycle development partner assists businesses of all sizes to build new
        applications, modernize existing systems, and achieve optimal functionality in the
        ever-evolving digital landscape. We stand as a leading partner in web and app development,
        fueled by a team of experts who craft next-generation solutions tailored to your specific
        needs. Focus on your core business, while Clevit handles the tech․
      </p>
      <img src={TeamPhoto} alt="Team Picture" className="max-w-[1024px]" />
      <Button onClick={redirectToCalendly} prefix={<Messages />}>
        Let's Talk
      </Button>
    </Section>
  );
};

export default TeamSection;
