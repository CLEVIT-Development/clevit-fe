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

export const singlePageUIUXProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Initial User Research",
    description: "",
  },
  {
    id: 2,
    Icon: InfrostructureSetupIcon,
    title: "Wireframing & Prototyping",
    description: "",
  },
  {
    id: 3,
    Icon: ContinousIntegrationIcon,
    title: "Visual Design",
    description: "",
  },
  {
    id: 4,
    Icon: OutomationOrchestrationIcon,
    title: "Usability Testing",
    description: "",
  },
  {
    id: 5,
    Icon: MonitoringPerformanceIcon,
    title: "Design Iteration",
    description: "",
  },
  {
    id: 6,
    Icon: SecurityCompilanceIcon,
    title: "Final Implementation",
    description: "",
  },
];
