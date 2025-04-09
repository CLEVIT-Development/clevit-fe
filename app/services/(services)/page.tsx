import type { Metadata } from "next";

import { CalendlySection } from "../../../components/home";
import { servicesConstants } from "../../../shared/constants/services.constants";
import ServiceBox from "../../../shared/ui/ServiceCard/ServiceBox";
import { generatePageMetadata } from "../../../utils/metadata.utils";

export const metadata: Metadata = generatePageMetadata("services");

const ServicesPage = () => {
  return (
    <section className="w-full flex flex-col  items-center justify-start !p-0">
      {servicesConstants.map(({ image, imageAlt, description, title, buttonTitle, id }, index) => {
        return (
          <ServiceBox
            key={id}
            route={id}
            imageAlt={imageAlt}
            image={image.src}
            description={description}
            title={title}
            buttonTitle={buttonTitle}
            index={index}
          />
        );
      })}
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </section>
  );
};

export default ServicesPage;
