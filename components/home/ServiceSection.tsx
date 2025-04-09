"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import useInteractiveObserver from "../../common/hooks/useInteractiveObserver";
import useScrollView from "../../common/hooks/useScrollView";
import Section from "../../common/templates/Section";
import { RoutePaths } from "../../shared/constants/route.constants";
import { ServicesIdConstants } from "../../shared/constants/services-id.constants";
import { servicesConstants } from "../../shared/constants/services.constants";
import ServiceCard from "../../shared/ui/ServiceCard/ServiceCard";

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollView(sectionRef, RoutePaths.Services);

  const router = useRouter();

  useInteractiveObserver({
    sectionRef,
    checkRoute: RoutePaths.Services,
    callback: (entry, checkPath) => {
      const isServiceIdCheck = Object.values(ServicesIdConstants).includes(checkPath);

      if (entry.isIntersecting && isServiceIdCheck) {
        router.push(RoutePaths.Home);
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
      <div className="h-full w-full rounded-lg bg-white xs:shadow-base-100 sm:shadow-none grid sm:gap-5 xs:grid-cols-1 desktop:grid-cols-3 xs:gap-0 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center">
        {servicesConstants.map(({ id, Icon, title, descriptionOffer }) => (
          <ServiceCard
            key={id}
            id={id}
            title={title}
            icon={<Icon />}
            descriptionOffer={descriptionOffer}
            route={`services/${id}`}
            className="shadow-none"
          />
        ))}
      </div>
    </Section>
  );
};

export default ServiceSection;
