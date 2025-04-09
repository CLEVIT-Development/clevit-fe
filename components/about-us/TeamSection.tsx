import TeamPhoto from "../../assets/images/team/teamPhoto.webp";
import Messages from "../../assets/vectors/Messages.svg";
import Section from "../../common/templates/Section";
import StyledLink from "../../shared/ui/StyledLink";

const TeamSection = () => {
  return (
    <Section className="self-center desktop:max-w-[80%] lg:max-w-[1024px]">
      <p className="break-words desktop:text-center text-md font-normal">
        As a full-cycle development partner, Clevit provides tailored solutions to help businesses
        regardless of their size to innovate and expand in a consistently changing digital arena.
        Building new projects and modernizing current systems is our focus, ensuring optimal results
        with a client-focused methodology and a team of specialists committed to your victory.
      </p>
      <img
        loading="lazy"
        src={TeamPhoto.src}
        alt="Team Picture"
        className="lg:max-w-[1024px] desktop:max-w-[768px]"
      />
      <StyledLink href={"/request-demo"} prefix={<Messages />}>
        Let&apos;s Talk
      </StyledLink>
    </Section>
  );
};

export default TeamSection;
