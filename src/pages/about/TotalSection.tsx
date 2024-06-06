import TotalWaveDesktop from "@/assets/images/totalWave/TotalWaveDesktop.png";
import TotalWaveMobile from "@/assets/images/totalWave/TotalWaveMobile.png";
import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section";

interface Props {
  projectsValue: string;
  stuffValue: string;
  servedValue: string;
  deliveredPercent: string;
}

interface TotalItemProps {
  value: string;
  title: string;
}

const TotalItem = ({ value, title }: TotalItemProps) => (
  <div className="flex flex-col md:items-start items-center">
    <p className="md:text-4xl text-2xl text-white">{value}</p>
    <p className="md:text-md-l text-base text-white">{title}</p>
  </div>
);

const TotalSection = ({ projectsValue, stuffValue, servedValue, deliveredPercent }: Props) => {
  const { isMobile } = useResponsive();

  return (
    <Section>
      <div
        style={{
          backgroundImage: isMobile ? `url(${TotalWaveMobile})` : `url(${TotalWaveDesktop})`,
        }}
        className="w-full flex md:justify-evenly md:space-y-0 space-y-1 md:flex-row flex-col items-center bg-purple-600 md:py-[60px] py-5 rounded-lg-l bg-no-repeat md:bg-totalDesktopPosition bg-totalMobilePosition"
      >
        <TotalItem title="Successful Projects" value={projectsValue} />
        <TotalItem title="Engineers & Designers" value={stuffValue} />
        <TotalItem title="Industries Served" value={servedValue} />
        <TotalItem title="Delivered Projects" value={deliveredPercent} />
      </div>
    </Section>
  );
};

export default TotalSection;
