import Header from "@/common/layout/Header.tsx";
import Button from "@/shared/ui/Button.tsx";

const Heading = () => {
  return (
    <div className="px-20 py-12 bg-headingGradient">
      <Header />
      <div className="flex flex-col items-center text-center mt-32">
        <h1 className="text-white font-semibold mb-8 text-5xl">
          Web and Mobile App Development Company
        </h1>
        <p className="text-white text-center max-w-[80%] mb-9 text-2xl">
          Clevit provides a comprehensive suite of web, mobile, and AI solutions to help your
          business evolve and fuel innovation. <br />
          Focus on your core business, while Clevit handles the tech.
        </p>
        <Button>Request a Quote</Button>
      </div>
    </div>
  );
};

export default Heading;
