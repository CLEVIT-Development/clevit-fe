import Wave from "@/assets/images/Wave.png";
import Section from "@/common/templates/Section";

interface Props {
  projectsCount: number;
  stuffCount: number;
  servedCount: number;
}

const TotalSection = ({ projectsCount, stuffCount, servedCount }: Props) => {
  return (
    <Section>
      <div
        style={{ backgroundImage: `url(${Wave})` }}
        className="flex justify-evenly items-center bg-purple-600 py-[90px] w-full rounded-[10px]"
      >
        <div className="flex flex-col">
          <p className="text-4xl text-white">{projectsCount}+</p>
          <p className="text-lg-l text-white">Successful Projects</p>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl text-white">{stuffCount}+</p>
          <p className="text-lg-l text-white">Engineers & Designers</p>
        </div>
        <div className="flex flex-col">
          <p className="text-4xl text-white">{servedCount}+</p>
          <p className="text-lg-l text-white">Industries Served</p>
        </div>
      </div>
    </Section>
  );
};

export default TotalSection;
