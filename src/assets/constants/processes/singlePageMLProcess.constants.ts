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

export const singlePageMLProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Requirement Analysis & Planning",
    description: "",
  },
  {
    id: 2,
    Icon: InfrostructureSetupIcon,
    title: "Data Collection & Preparation",
    description: "",
  },
  {
    id: 3,
    Icon: ContinousIntegrationIcon,
    title: "Model Development & Training",
    description: "",
  },
  {
    id: 4,
    Icon: OutomationOrchestrationIcon,
    title: "Model Testing & Validation",
    description: "",
  },
  {
    id: 5,
    Icon: MonitoringPerformanceIcon,
    title: "Model Deployment",
    description: "",
  },
  {
    id: 6,
    Icon: SecurityCompilanceIcon,
    title: "Continuous Monitoring & Optimization",
    description: "",
  },
];
