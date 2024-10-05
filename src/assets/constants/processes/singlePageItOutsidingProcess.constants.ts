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

export const singlePageItOutsidingProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Initial Consultation & Requirement Gathering",
    description: "",
  },
  {
    id: 2,
    Icon: InfrostructureSetupIcon,
    title: "Talent Sourcing & Pre-screening",
    description: "",
  },
  {
    id: 3,
    Icon: ContinousIntegrationIcon,
    title: "Candidate Interview & Selection",
    description: "",
  },
  {
    id: 4,
    Icon: OutomationOrchestrationIcon,
    title: "Onboarding & Team Integration",
    description: "",
  },
  {
    id: 5,
    Icon: MonitoringPerformanceIcon,
    title: "Performance Tracking & Continuous Support",
    description: "",
  },
];
