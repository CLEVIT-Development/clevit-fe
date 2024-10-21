import { useNavigate } from "react-router-dom";

import TeamPhoto from "@/assets/images/team/teamPhoto.webp";
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
        As a full-cycle development partner, Clevit provides tailored solutions to help businesses
        regardless of their size to innovate and expand in a consistently changing digital arena.
        Building new projects and modernizing current systems is our focus, ensuring optimal results
        with a client-focused methodology and a team of specialists committed to your victory.
      </p>
      <img
        loading="lazy"
        src={TeamPhoto}
        alt="Team Picture"
        className="xl:max-w-[1024px] desktop:max-w-[768px] h-[395px] object-cover"
      />
      <Button onClick={redirectToCalendly} prefix={<Messages />}>
        Let's Talk
      </Button>
    </Section>
  );
};

export default TeamSection;
