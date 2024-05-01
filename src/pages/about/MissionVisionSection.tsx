interface MissionSingleItemProps {
  title: string;
  description: string;
}

const MissionSingleItem = ({ title, description }: MissionSingleItemProps) => (
  <div className="flex flex-col md:space-y-6 space-y-4 items-center">
    <h2 className="md:text-2xl text-lg font-semibold text-gray-200">{title}</h2>
    <p className="text-md font-normal md:text-center">{description}</p>
  </div>
);

const MissionVisionSection = () => {
  return (
    <section className="bg-gray-500 rounded-[10px] md:space-y-12 space-y-6 py-12 md:pl-[100px] md:pr-[53px] pl-[20px] pr-[20px] bg-no-repeat md:bg-missionDesktopPosition bg-missionMobilePosition md:bg-missionDesktopImage bg-missionMobileImage">
      <MissionSingleItem
        title="Mission"
        description="Clevit's mission is to empower businesses across all sectors with tailored digital solutions, enabling them to focus on core operations while we handle technology. We strive to be the go-to partner for building and modernizing applications, driving optimal functionality and innovation across industries."
      />
      <div className="bg-gray-200 h-0.5 w-full opacity-20" />
      <MissionSingleItem
        title="Vision"
        description="We become the premier web and mobile app development company, setting industry standards for excellence. We aim to be the trusted ally of businesses, providing tailored solutions that enable success in the evolving digital landscape."
      />
    </section>
  );
};

export default MissionVisionSection;
