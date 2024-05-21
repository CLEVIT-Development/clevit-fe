import { servicesConstants } from "@/assets/constants/services.constants.ts";
import Section from "@/common/templates/Section.tsx";
import ServiceCard from "@/shared/ui/ServiceCard/ServiceCard";
import { orderUtils } from "@/utils/order.utils.ts";

const ServiceSection = () => (
  <Section title="Services We Offer" id="services">
    <div className="h-full w-full rounded-lg bg-white xs:shadow-base-100 sm:shadow-none grid sm:gap-5 xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-3">
      {servicesConstants.map(({ id, Icon, title, description }, index) => (
        <ServiceCard
          key={id}
          title={title}
          icon={<Icon />}
          description={description}
          className="shadow-none"
          order={orderUtils(index + 1)}
        />
      ))}
    </div>
  </Section>
);

export default ServiceSection;
