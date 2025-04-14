import { lazy } from "react";

const DiscoveryAndPlanningIcon = lazy(
  () => import("../../../assets/vectors/processes/DiscoveryAndPlanning.svg")
);
const OutomationOrchestrationIcon = lazy(
  () => import("../../../assets/vectors/processes/OutomationOrchestration.svg")
);
const MonitoringPerformanceIcon = lazy(
  () => import("../../../assets/vectors/processes/MonitoringPerformance.svg")
);
const ContinousIntegrationIcon = lazy(
  () => import("../../../assets/vectors/processes/ContinousIntegration.svg")
);
const InfrostructureSetupIcon = lazy(
  () => import("../../../assets/vectors/processes/InfrostructureSetup.svg")
);
const SecurityCompilanceIcon = lazy(
  () => import("../../../assets/vectors/processes/SecurityCompilance.svg")
);
const OngoingSupportIcon = lazy(
  () => import("../../../assets/vectors/processes/OngoingSupport.svg")
);

export const singlePageDevopsProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Discovery & Planning",
    description: "",
  },
  {
    id: 2,
    Icon: InfrostructureSetupIcon,
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
    Icon: OutomationOrchestrationIcon,
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
