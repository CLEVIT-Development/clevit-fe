import { lazy } from "react";

const InitialConsultationIcon = lazy(
  () => import("@/assets/vectors/processes/InitialConsultation.svg")
);
const InfrastructureCodeIcon = lazy(
  () => import("@/assets/vectors/processes/InfrastructureCode.svg")
);
const ReportingRecommendationsIcon = lazy(
  () => import("@/assets/vectors/processes/ReportingRecommendations.svg")
);
const PerformanceTestingIcon = lazy(
  () => import("@/assets/vectors/processes/PerformanceTesting.svg")
);
const SecurityCompilanceAuditIcon = lazy(
  () => import("@/assets/vectors/processes/SecurityCompilanceAudit.svg")
);

export const singlePageTechnicalAssesmentProcessesConstants = [
  {
    id: 1,
    Icon: InitialConsultationIcon,
    title: "Initial Consultation & Discovery",
    description: "",
  },
  {
    id: 2,
    Icon: InfrastructureCodeIcon,
    title: "Infrastructure & Code Review",
    description: "",
  },
  {
    id: 3,
    Icon: SecurityCompilanceAuditIcon,
    title: "Security & Compliance Audit",
    description: "",
  },
  {
    id: 4,
    Icon: PerformanceTestingIcon,
    title: "Performance Testing",
    description: "",
  },
  {
    id: 5,
    Icon: ReportingRecommendationsIcon,
    title: "Reporting & Recommendations",
    description: "",
  },
];
