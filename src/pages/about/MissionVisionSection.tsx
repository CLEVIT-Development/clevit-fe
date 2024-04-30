import MissionVision from "@/assets/images/MissionVision.png";

const MissionVisionSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${MissionVision})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className={`relative bg-gray-500 rounded-[10px] space-y-6 py-12 pl-[100px] pr-[53px]`}
    >
      <div className="flex flex-col space-y-6 items-center">
        <h2 className="text-2xl text-gray-200">Mission</h2>
        <p className="text-md font-normal text-center">
          Clevit's mission is to empower businesses across all sectors with tailored digital
          solutions, enabling them to focus on core operations while we handle technology. We strive
          to be the go-to partner for building and modernizing applications, driving optimal
          functionality and innovation across industries.
        </p>
      </div>
      <div className="bg-gray-200 h-0.5 w-full opacity-20" />
      <div className="flex flex-col space-y-6 items-center">
        <h2 className="text-2xl text-gray-200">Vision</h2>
        <p className="text-md font-normal text-center">
          We become the premier web and mobile app development company, setting industry standards
          for excellence. We aim to be the trusted ally of businesses, providing tailored solutions
          that enable success in the evolving digital landscape.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionSection;
