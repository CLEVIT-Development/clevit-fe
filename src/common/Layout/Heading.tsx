import Waves from "@/assets/vectors/Waves.svg?react";
import Header from "@/layout/Header.tsx";

const Heading = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(250.07deg, #9B3B94 14.33%, #000000 43.64%)",
      }}
      className="overflow-hidden px-20 py-12"
    >
      <Header />
      <div className="flex flex-col items-center text-center mt-32">
        <h1 className="text-white font-semibold mb-8 text-5xl">
          Web and Mobile App Development Company
        </h1>
        <p className="text-white text-center max-w-[80%] mb-9 text-2xl">
          Clevit provides a comprehensive suite of web, mobile, and AI solutions
          to help your business evolve and fuel innovation. <br />
          Focus on your core business, while Clevit handles the tech.
        </p>
        <button className="bg-blue100 text-white px-6 py-3 rounded-lg z-40">
          Request a Quote
        </button>
      </div>
      <Waves className="absolute left-[6%] top-[-15%] h-full" />
    </div>
  );
};

export default Heading;
