import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { ServicesIdConstants } from "@/assets/constants/services-id.constants.ts";
import { servicesConstants } from "@/assets/constants/services.constants.ts";
import useScrollView from "@/common/hooks/useScrollView.ts";
import Section from "@/common/templates/Section.tsx";
import ServiceCard from "@/shared/ui/ServiceCard/ServiceCard";
import { orderUtils } from "@/utils/order.utils.ts";

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  useScrollView(sectionRef, RoutePaths.Services);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const checkPath = `${pathname}${hash}`;
        const isActive = checkPath === RoutePaths.Services;

        // If the scrollIntoView comes from footer remove the hash
        if (entry.isIntersecting && Object.values(ServicesIdConstants).includes(checkPath)) {
          navigate(RoutePaths.Home);
        }

        // check if the user is not on the top of the page
        if (entry.intersectionRect.height !== 0 && isActive) {
          navigate(entry.isIntersecting ? RoutePaths.Services : RoutePaths.Home);
        }
      },
      {
        root: null,
        rootMargin: "1px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [pathname, hash]);

  return (
    <Section ref={sectionRef} title="Services We Offer" className="scroll-mt-[150px] md:px-0">
      <div className="h-full w-full rounded-lg bg-white xs:shadow-base-100 sm:shadow-none grid sm:gap-5 xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-3">
        {servicesConstants.map(({ id, Icon, title, description }, index) => (
          <ServiceCard
            key={id}
            id={id}
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
};

export default ServiceSection;
