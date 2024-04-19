import { serviceCardsConstants } from "@/common/constants/serviceCards.constants.ts";
import Section from "@/common/templates/Section.tsx";
import ServiceCard from "@/shared/ui/ServiceCard.tsx";

const ServiceSection = () => (
  <Section title="Services We Offer">
    <div className="h-full w-full bg-white xs:shadow-base sm:shadow-none grid sm:gap-5 xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {serviceCardsConstants.map(({ id, Icon, title, description }, index) => (
        <ServiceCard
          key={id}
          title={title}
          icon={<Icon />}
          description={description}
          className="shadow-none"
          order={String(index + 1).padStart(2, "0")}
        />
      ))}
    </div>
  </Section>
);

export default ServiceSection;
