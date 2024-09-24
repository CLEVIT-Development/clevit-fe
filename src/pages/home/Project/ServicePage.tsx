import { servicePageData } from "@/assets/constants/servicePageData.constants";
import "@/assets/constants/services.constants";
import BackgroundGradient from "@/assets/images/services/BackgroundGradient.png";
import BackgroundGradientReverse from "@/assets/images/services/BackgroundGradientReverse.png";
import ServiceHeading from "@/common/layout/Heading/ServiceHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/shared/gradient/Gradient";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

import CalendlySection from "../CalendlySection";

const ServicePage = () => {
  return (
    <>
      <Layout
        heading={
          <Gradient>
            <ServiceHeading />
          </Gradient>
        }
      >
        <section className="w-full flex flex-col  items-center justify-start p-0	 ">
          {servicePageData.map((element, index) => {
            console.log(index);
            console.log(element.title.includes("Mobile"));

            return (
              <div
                key={index}
                style={{
                  backgroundImage:
                    index % 2 === 0
                      ? `url(${BackgroundGradientReverse})`
                      : `url(${BackgroundGradient})`,
                }}
                className={`w-full desktop:max-w-screen-2xl bg-no-repeat bg-[length:285px_302px]  flex  justify-between items-center desktop:py-16 py-10 ${index % 2 === 0 ? "flex-row bg-right " : "flex-row-reverse bg-left"}`}
              >
                <div className="desktop:w-1/2 w-full desktop:px-[72px] desktop:py-[60px] desktop:justify-start desktop:items-start flex flex-col justify-center items-center">
                  {" "}
                  <h2 className="text-[#314252] text-lg font-bold desktop:text-2xl">
                    {element.title}
                  </h2>{" "}
                  <p className="desktop:w-[516px] desktop:text-lg  my-3 text-center desktop:text-start leading-5	 text-xs w-[266px]">
                    {element.description}
                  </p>
                  <div className="w-full flex desktop:justify-start justify-center  gap-x-4 pt-8">
                    <Button>
                      {" "}
                      <p className="text-sm"> {element.buttonTitle}</p>
                    </Button>
                    <Button
                      className="!text-black !border-black !decoration-black "
                      variant={ButtonVariant.Outlined}
                    >
                      <p className="!text-black text-sm "> learn more</p>
                    </Button>
                  </div>
                </div>
                <div className=" desktop:flex hidden w-1/2  items-center justify-center  desktop:block ">
                  <img
                    src={element.Icon}
                    alt={element.title}
                    className={element.title.includes("Mobile") ? "transform scale-x-[-1] " : "	"}
                  />
                </div>
              </div>
            );
          })}
          <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
        </section>
      </Layout>
    </>
  );
};

export default ServicePage;
