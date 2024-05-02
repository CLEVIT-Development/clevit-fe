import Section from "@/common/templates/Section";

interface Props {
  projectsCount: number;
  stuffCount: number;
  servedCount: number;
}

interface TotalItemProps {
  count: number;
  title: string;
}

const TotalItem = ({ count, title }: TotalItemProps) => (
  <div className="flex flex-col md:items-start items-center">
    <p className="md:text-4xl text-2xl-3xl text-white">{count}+</p>
    <p className="md:text-lg-l text-md text-white">{title}</p>
  </div>
);

const TotalSection = ({ projectsCount, stuffCount, servedCount }: Props) => {
  return (
    <Section>
      <div className="w-full flex md:justify-evenly md:space-y-0 space-y-8 md:flex-row flex-col items-center bg-purple-600 md:py-[90px] py-5 rounded-[10px] bg-no-repeat md:bg-totalDesktopImage bg-totalMobileImage md:bg-totalDesktopPosition bg-totalMobilePosition">
        <TotalItem title="Successful Projects" count={projectsCount} />
        <TotalItem title="Engineers & Designers" count={stuffCount} />
        <TotalItem title="Industries Served" count={servedCount} />
      </div>
    </Section>
  );
};

export default TotalSection;
