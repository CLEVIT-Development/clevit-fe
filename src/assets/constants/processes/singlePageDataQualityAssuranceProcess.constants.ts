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
const SecurityCompilanceIcon = lazy(
  () => import("@/assets/vectors/processes/SecurityCompilance.svg?react")
);
const OngoingSupportIcon = lazy(
  () => import("@/assets/vectors/processes/OngoingSupport.svg?react")
);

export const singlePageDataQualityAssuranceProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Discovery & Planning",
    description: "",
  },
  {
    id: 2,
    Icon: InfrastructureSetupIcon,
    title: "Infrastructure Setup & Configuration",
    description: "",
  },
  {
    id: 3,
    Icon: ContinousIntegrationIcon,
    title: "Continuous Integration & Continuous Deployment (CI/CD)",
    description: "",
  },
  {
    id: 4,
    Icon: AutomationOrchestrationIcon,
    title: "Automation & Orchestration",
    description: "",
  },
  {
    id: 5,
    Icon: MonitoringPerformanceIcon,
    title: "Monitoring & Performance Optimization",
    description: "",
  },
  {
    id: 6,
    Icon: SecurityCompilanceIcon,
    title: "Security & Compliance",
    description: "",
  },
  {
    id: 7,
    Icon: OngoingSupportIcon,
    title: "Ongoing Support & Maintenance",
    description: "",
  },
];
