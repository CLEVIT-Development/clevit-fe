"use client";

import dynamic from "next/dynamic";

import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectSection from "@/components/home/Project/ProjectSection";
import RequestQuoteSection from "@/components/home/RequestQuoteSection";
import ServiceSection from "@/components/home/ServiceSection";
import TechnologySection from "@/components/home/TechnologySection";

const FeedbackSection = dynamic(() => import("@/components/home/Feedback/FeedbackSection"), {
  ssr: false,
});
const CalendlySection = dynamic(() => import("@/components/home/CalendlySection"), {
  ssr: false,
});

export {
  IndustriesSection,
  ProcessSection,
  ProjectSection,
  RequestQuoteSection,
  ServiceSection,
  TechnologySection,
  FeedbackSection,
  CalendlySection,
};
