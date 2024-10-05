import { lazy } from "react";

const DiscoveryAndPlanningIcon = lazy(
  () => import("@/assets/vectors/processes/DiscoveryAndPlanning.svg?react")
);
const AutomationOrchestrationIcon = lazy(
  () => import("@/assets/vectors/processes/OutomationOrchestration.svg?react")
);
const MonitoringPerformanceIcon = lazy(
  () => import("@/assets/vectors/processes/MonitoringPerformance.svg?react")
);
const ContinousIntegrationIcon = lazy(
  () => import("@/assets/vectors/processes/ContinousIntegration.svg?react")
);
const InfrastructureSetupIcon = lazy(
  () => import("@/assets/vectors/processes/InfrostructureSetup.svg?react")
);

export const singlePageDataQualityAssuranceProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Initial Data Assessment",
    description: "",
  },
  {
    id: 2,
    Icon: InfrastructureSetupIcon,
    title: "Data Cleansing & Standardization",
    description: "",
  },
  {
    id: 3,
    Icon: ContinousIntegrationIcon,
    title: "Validation & Verification",
    description: "",
  },
  {
    id: 4,
    Icon: AutomationOrchestrationIcon,
    title: "Data Monitoring & Maintenance",
    description: "",
  },
  {
    id: 5,
    Icon: MonitoringPerformanceIcon,
    title: "Reporting & Documentation",
    description: "",
  },
];
