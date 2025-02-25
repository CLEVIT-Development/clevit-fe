import { lazy } from "react";

const InitialMarketingIcon = lazy(() => import("@/assets/vectors/processes/InitialMarketing.svg"));
const ContentCreationMarketingIcon = lazy(
  () => import("@/assets/vectors/processes/ContentCreationMarketing.svg")
);
const WebsiteAuditsIcon = lazy(() => import("@/assets/vectors/processes/WebsiteAudits.svg"));
const PPCCompaignIcon = lazy(() => import("@/assets/vectors/processes/PPCCompaign.svg"));
const TogglePageOptimizationIcon = lazy(
  () => import("@/assets/vectors/processes/TogglePageOptimization.svg")
);
const AnalyticsReportingIcon = lazy(
  () => import("@/assets/vectors/processes/AnalyticsReporting.svg")
);

export const singlePageDigitalMarketingProcessesConstants = [
  {
    id: 1,
    Icon: InitialMarketingIcon,
    title: "Initial Market Research & Strategy Development",
    description: "",
  },
  {
    id: 2,
    Icon: TogglePageOptimizationIcon,
    title: "On-Page and Off-Page SEO Optimization",
    description: "",
  },
  {
    id: 3,
    Icon: PPCCompaignIcon,
    title: "PPC Campaign Setup and Monitoring",
    description: "",
  },
  {
    id: 4,
    Icon: ContentCreationMarketingIcon,
    title: "Content Creation and Marketing",
    description: "",
  },
  {
    id: 5,
    Icon: WebsiteAuditsIcon,
    title: "Website Audits and Technical SEO",
    description: "",
  },
  {
    id: 6,
    Icon: AnalyticsReportingIcon,
    title: "Analytics, Reporting & Continuous Optimization",
    description: "",
  },
];
