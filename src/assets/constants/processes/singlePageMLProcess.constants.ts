import { lazy } from "react";

const RequirementAnalysisIcon = lazy(
  () => import("@/assets/vectors/processes/RequiremAnalysis.svg?react")
);
const DataCollectionIcon = lazy(
  () => import("@/assets/vectors/processes/DataCollection.svg?react")
);
const ContiniousMonitoringIcon = lazy(
  () => import("@/assets/vectors/processes/ContiniousMonitoring.svg?react")
);
const ModelDevelopmentIcon = lazy(
  () => import("@/assets/vectors/processes/ModelDevelopment.svg?react")
);

const ModelTestingIcon = lazy(() => import("@/assets/vectors/processes/ModelTesting.svg?react"));
const ModelDeploymentIcon = lazy(
  () => import("@/assets/vectors/processes/ModelDeployment.svg?react")
);

export const singlePageMLProcessesConstants = [
  {
    id: 1,
    Icon: RequirementAnalysisIcon,
    title: "Requirement Analysis & Planning",
    description: "",
  },
  {
    id: 2,
    Icon: DataCollectionIcon,
    title: "Data Collection & Preparation",
    description: "",
  },
  {
    id: 3,
    Icon: ModelDevelopmentIcon,
    title: "Model Development & Training",
    description: "",
  },
  {
    id: 4,
    Icon: ModelTestingIcon,
    title: "Model Testing & Validation",
    description: "",
  },
  {
    id: 5,
    Icon: ModelDeploymentIcon,
    title: "Model Deployment",
    description: "",
  },
  {
    id: 6,
    Icon: ContiniousMonitoringIcon,
    title: "Continuous Monitoring & Optimization",
    description: "",
  },
];
