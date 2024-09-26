import Section from "@/common/templates/Section";

interface Props {
  projectsValue: string;
  stuffValue: string;
  servedValue: string;
}

interface TotalItemProps {
  value: string;
  title: string;
}

const TotalItem = ({ value, title }: TotalItemProps) => (
  <div className="desktop:max-w-auto desktop:w-[323px] max-w-[323px] w-[95%] h-[178px] px-4  py-6 flex flex-col  md:items-center rounded-[28px] bg-white	 items-center shadow-[0px_35.63px_95.02px_0px_rgba(44,22,84,0.07)]">
    <span className="md:text-4xl font-semibold	 text-4xl text-purple-300">{value}</span>
    <span className="md:text-lg-l text-base text-purple-300">{title}</span>
  </div>
);

const TotalSection = ({ projectsValue, stuffValue, servedValue }: Props) => {
  return (
    <Section className="self-center desktop:max-w-[80%] ">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: "rgba(226, 211, 235, 1)",
        }}
        className="w-full flex-1 flex md:justify-evenly gap-[16px] md:space-y-0 space-y-1 md:flex-row flex-col items-center md:py-[60px] md:px-[30px] py-5 rounded-lg-l bg-no-repeat md:bg-totalDesktopPosition bg-totalMobilePosition"
      >
        <TotalItem title="Successful Projects" value={projectsValue} />
        <TotalItem title="Engineers & Designers" value={stuffValue} />
        <TotalItem title="Industries Served" value={servedValue} />
      </div>
    </Section>
  );
};

export default TotalSection;
