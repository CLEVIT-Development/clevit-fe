"use client";

import dynamic from "next/dynamic";

import IndustriesSection from "./IndustriesSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./Project/ProjectSection";
import RequestQuoteSection from "./RequestQuoteSection";
import ServiceSection from "./ServiceSection";
import TechnologySection from "./TechnologySection";

const FeedbackSection = dynamic(() => import("./Feedback/FeedbackSection"), {
  ssr: false,
});
const CalendlySection = dynamic(() => import("./CalendlySection"), {
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
