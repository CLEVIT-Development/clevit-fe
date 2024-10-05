import { lazy } from "react";

const NeedsAssessmentIcon = lazy(
  () => import("@/assets/vectors/processes/NeedsAssessment.svg?react")
);
const TestingAndQAIcon = lazy(() => import("@/assets/vectors/processes/TestingAndQA.svg?react"));
const DeploymentMonitoringIcon = lazy(
  () => import("@/assets/vectors/processes/DeploymentMonitoring.svg?react")
);
const IntegrationAndImplementationIcon = lazy(
  () => import("@/assets/vectors/processes/IntegrationImplementation.svg?react")
);
const SolutionDesignIcon = lazy(
  () => import("@/assets/vectors/processes/SolutionDesigne.svg?react")
);
const OngoingSupportAndOptimizationICon = lazy(
  () => import("@/assets/vectors/processes/OngoingSupportAndOptimization.svg?react")
);

export const singlePageAIProcessesConstants = [
  {
    id: 1,
    Icon: NeedsAssessmentIcon,
    title: "Needs Assessment & Planning",
    description: "",
  },
  {
    id: 2,
    Icon: SolutionDesignIcon,
    title: "Solution Design & Development",
    description: "",
  },
  {
    id: 3,
    Icon: IntegrationAndImplementationIcon,
    title: "Integration & Implementation",
    description: "",
  },
  {
    id: 4,
    Icon: TestingAndQAIcon,
    title: "Deployment & Monitoring",
    description: "",
  },
  {
    id: 5,
    Icon: DeploymentMonitoringIcon,
    title: "Deployment & Monitoring",
    description: "",
  },
  {
    id: 6,
    Icon: OngoingSupportAndOptimizationICon,
    title: "Ongoing Support & Optimization",
    description: "",
  },
];
