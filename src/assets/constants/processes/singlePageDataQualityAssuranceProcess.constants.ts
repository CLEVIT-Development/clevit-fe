import { lazy } from "react";

const InitialDataIcon = lazy(() => import("@/assets/vectors/processes/InitialData.svg?react"));
const DataCleansingIcon = lazy(() => import("@/assets/vectors/processes/DataCleansing.svg?react"));

const DataMonitoringIcon = lazy(
  () => import("@/assets/vectors/processes/DataMonitoring.svg?react")
);
const ValidationVerificationIcon = lazy(
  () => import("@/assets/vectors/processes/ValidationVerification.svg?react")
);

const ReportingDocumentationIcon = lazy(
  () => import("@/assets/vectors/processes/ReportingDocumentation.svg?react")
);

export const singlePageDataQualityAssuranceProcessesConstants = [
  {
    id: 1,
    Icon: InitialDataIcon,
    title: "Initial Data Assessment",
    description: "",
  },
  {
    id: 2,
    Icon: DataCleansingIcon,
    title: "Data Cleansing & Standardization",
    description: "",
  },
  {
    id: 3,
    Icon: ValidationVerificationIcon,
    title: "Validation & Verification",
    description: "",
  },
  {
    id: 4,
    Icon: DataMonitoringIcon,
    title: "Data Monitoring & Maintenance",
    description: "",
  },
  {
    id: 5,
    Icon: ReportingDocumentationIcon,
    title: "Reporting & Documentation",
    description: "",
  },
];
