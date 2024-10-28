import { seoConfig } from "@/app/seo.config";
import "@/assets/constants/services.constants";
import { servicesConstants } from "@/assets/constants/services.constants";
import ServiceHeading from "@/common/layout/Heading/ServiceHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/shared/gradient/Gradient";
import Seo from "@/shared/seo/SEO";
import ServiceBox from "@/shared/ui/ServiceCard/ServiceBox.tsx";

import CalendlySection from "../home/CalendlySection";

const ServicePage = () => {
  return (
    <>
      <Seo {...seoConfig.services} />
      <Layout
        layoutClassName="!px-0"
        heading={
          <Gradient>
            <ServiceHeading />
          </Gradient>
        }
      >
        <section className="w-full flex flex-col  items-center justify-start !p-0">
          {servicesConstants.map(
            ({ image, imageAlt, description, title, buttonTitle, id }, index) => {
              return (
                <ServiceBox
                  route={id}
                  imageAlt={imageAlt}
                  image={image}
                  description={description}
                  title={title}
                  buttonTitle={buttonTitle}
                  index={index}
                />
              );
            }
          )}
          <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
        </section>
      </Layout>
    </>
  );
};

export default ServicePage;
