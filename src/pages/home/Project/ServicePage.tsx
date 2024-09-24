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
        <section className="w-full flex flex-col  items-center justify-start ">
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
                className={`w-full max-w-screen-2xl bg-no-repeat  flex  justify-between items-center py-16 ${index % 2 === 0 ? "flex-row bg-right " : "flex-row-reverse bg-left"}`}
              >
                <div className="w-1/2  desktop:px-[72px] desktop:py-[60px]">
                  {" "}
                  <h2 className="text-[#314252] text-lg font-bold desktop:text-2xl">
                    {element.title}
                  </h2>{" "}
                  <p className="w-[516px] text-lg">{element.description}</p>
                  <div className="w-full flex justify-start gap-x-4 pt-8">
                    <Button>{element.buttonTitle}</Button>
                    <Button
                      className="!text-black !border-black !decoration-black"
                      variant={ButtonVariant.Outlined}
                    >
                      <p className="!text-black "> learn more</p>
                    </Button>
                  </div>
                </div>
                <div className="w-1/2 flex items-center justify-center ">
                  <img
                    src={element.Icon}
                    alt={element.title}
                    className={element.title.includes("Mobile") ? "transform scale-x-[-1]" : ""}
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
