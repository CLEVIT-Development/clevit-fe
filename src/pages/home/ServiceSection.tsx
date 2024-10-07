import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { ServicesIdConstants } from "@/assets/constants/services-id.constants.ts";
import { servicesConstants } from "@/assets/constants/services.constants.ts";
import useInteractiveObserver from "@/common/hooks/useInteractiveObserver.ts";
import useScrollView from "@/common/hooks/useScrollView.ts";
import Section from "@/common/templates/Section.tsx";
import ServiceCard from "@/shared/ui/ServiceCard/ServiceCard";

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollView(sectionRef, RoutePaths.Services);

  const navigate = useNavigate();

  useInteractiveObserver({
    sectionRef,
    checkRoute: RoutePaths.Services,
    callback: (entry, checkPath) => {
      const isServiceIdCheck = Object.values(ServicesIdConstants).includes(checkPath);

      if (entry.isIntersecting && isServiceIdCheck) {
        navigate(RoutePaths.Home);
      }
    },
  });

  return (
    <Section
      ref={sectionRef}
      title="Services We Offer"
      className="scroll-mt-[150px] md:px-0 "
      headingLevel="h2"
    >
      <div className="h-full w-full rounded-lg bg-white xs:shadow-base-100 sm:shadow-none grid sm:gap-5 xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-4 justify-items-center items-center">
        {servicesConstants.map(({ id, Icon, title, descriptionOffer }) => (
          <ServiceCard
            key={id}
            id={id}
            title={title}
            icon={<Icon />}
            descriptionOffer={descriptionOffer}
            route={`services${id}`}
            className="shadow-none"
          />
        ))}
      </div>
    </Section>
  );
};

export default ServiceSection;
