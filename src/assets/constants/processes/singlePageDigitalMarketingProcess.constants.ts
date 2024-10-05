import { lazy } from "react";

const DiscoveryAndPlanningIcon = lazy(
  () => import("@/assets/vectors/processes/DiscoveryAndPlanning.svg?react")
);
const OutomationOrchestrationIcon = lazy(
  () => import("@/assets/vectors/processes/OutomationOrchestration.svg?react")
);
const MonitoringPerformanceIcon = lazy(
  () => import("@/assets/vectors/processes/MonitoringPerformance.svg?react")
);
const ContinousIntegrationIcon = lazy(
  () => import("@/assets/vectors/processes/ContinousIntegration.svg?react")
);
const InfrostructureSetupIcon = lazy(
  () => import("@/assets/vectors/processes/InfrostructureSetup.svg?react")
);
const SecurityCompilanceIcon = lazy(
  () => import("@/assets/vectors/processes/SecurityCompilance.svg?react")
);

export const singlePageDigitalMarketingProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Initial Market Research & Strategy Development",
    description: "",
  },
  {
    id: 2,
    Icon: InfrostructureSetupIcon,
    title: "On-Page and Off-Page SEO Optimization",
    description: "",
  },
  {
    id: 3,
    Icon: ContinousIntegrationIcon,
    title: "PPC Campaign Setup and Monitoring",
    description: "",
  },
  {
    id: 4,
    Icon: OutomationOrchestrationIcon,
    title: "Content Creation and Marketing",
    description: "",
  },
  {
    id: 5,
    Icon: MonitoringPerformanceIcon,
    title: "Website Audits and Technical SEO",
    description: "",
  },
  {
    id: 6,
    Icon: SecurityCompilanceIcon,
    title: "Analytics, Reporting & Continuous Optimization",
    description: "",
  },
];
