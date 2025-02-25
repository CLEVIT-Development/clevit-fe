"use client";

import { useRouter } from "next/navigation";

import Messages from "@/assets/vectors/Messages.svg";
import { advertiserSlidersConstants } from "@/shared/constants/advertiser-sliders.constants";
import { RoutePaths } from "@/shared/constants/route.constants";
import { seoConfig } from "@/shared/constants/seo.constants";
import Button from "@/shared/ui/Button";
import InfiniteLogoScroll from "@/shared/ui/InfinitiScrollingLogo";

const HomeHeading = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="w-full flex flex-col items-center text-center desktop:pt-[160px]  desktop:pb-7 xs:pb-6 xs:pt-[100px] xs:px-[30px]">
        <h1 className="text-white desktop:text-3xl xs:text-lg font-[900]">{seoConfig.home.h1}</h1>
        <p className="  text-white text-center lg:w-[50%]  desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
          Clevit provides meaninful service that includes advanced web and mobile apps as well as
          the latest AI solutions, designed to accelerate growth and boost your business.
        </p>
        <Button
          className="flex desktop:hidden"
          prefix={<Messages />}
          onClick={() => router.push(RoutePaths.Calendly)}
        >
          Let&apos;s Talk
        </Button>
        <Button className="hidden desktop:flex" onClick={() => router.push(RoutePaths.Calendly)}>
          Request a Quote
        </Button>
        <InfiniteLogoScroll logos={advertiserSlidersConstants} />
      </div>
    </div>
  );
};

export default HomeHeading;
