import OblivioniDesktop from "@/assets/images/projects/OblivioniDesktop.png";
import Messages from "@/assets/vectors/Messages.svg?react";
import Section from "@/common/templates/Section";
import Button from "@/shared/ui/Button";

const TeamSection = () => {
  return (
    <Section className="mx-[167px]">
      <p className="break-words text-md font-normal">
        Clevit, your full-cycle development partner assists businesses of all sizes to build new
        applications, modernize existing systems, and achieve optimal functionality in the
        ever-evolving digital landscape. We stand as a leading partner in web and app development,
        fueled by a team of experts who craft next-generation solutions tailored to your specific
        needs. Focus on your core business, while Clevit handles the tech․
      </p>
      <img src={OblivioniDesktop} alt="Team Picture" className="max-h-[486px]" />
      <Button prefix={<Messages />}>Let's Talk</Button>
    </Section>
  );
};

export default TeamSection;
