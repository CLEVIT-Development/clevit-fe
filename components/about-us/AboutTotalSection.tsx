import AboutTotalItemBackgroundImage from "../../assets/images/AbutTotalItemBackgroundImage.png";

interface Props {
  projectsValue: string;
  stuffValue: string;
  servedValue: string;
}

interface TotalItemProps {
  value: string;
  title: string;
}

const AboutTotalItem = ({ value, title }: TotalItemProps) => (
  <div className="desktop:max-w-auto  desktop:h-[178px] desktop:px-4  desktop:py-6 flex flex-col  md:items-center rounded-[28px]">
    <span className="md:text-4xl font-semibold	 text-2xl-3xl text-white">{value}</span>
    <span className="md:text-lg-l text-base text-white">{title}</span>
  </div>
);

const AboutTotalSection = ({ projectsValue, stuffValue, servedValue }: Props) => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#19124C",
        backgroundImage: `url(${AboutTotalItemBackgroundImage.src})`,
      }}
      className="desktop:w-[80%] w-[90%] flex-1 flex text-center md:justify-evenly gap-[36px] md:space-y-0 space-y-1 md:flex-row flex-col  md:py-[60px] py-5 rounded-lg-l bg-no-repeat md:bg-totalDesktopPosition bg-totalMobilePosition"
    >
      <AboutTotalItem title="Successful Projects" value={projectsValue} />
      <AboutTotalItem title="Engineers & Designers" value={stuffValue} />
      <AboutTotalItem title="Industries Served" value={servedValue} />
    </div>
  );
};

export default AboutTotalSection;
