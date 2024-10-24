import { lazy } from "react";

const InitialConsultationIcon = lazy(
  () => import("@/assets/vectors/processes/InitialConsultation.svg?react")
);
const ResourceAllocationIcon = lazy(
  () => import("@/assets/vectors/processes/ResourceAllocation.svg?react")
);

const RiskIdentificationIcon = lazy(
  () => import("@/assets/vectors/processes/RiskIdentification.svg?react")
);
const MonitoringProgressIcon = lazy(
  () => import("@/assets/vectors/processes/MonitoringProgress.svg?react")
);

const FinaleDelivery = lazy(() => import("@/assets/vectors/processes/FinaleDelivery.svg?react"));

export const singlePageItProjectManagmentProcessesConstants = [
  {
    id: 1,
    Icon: InitialConsultationIcon,
    title: "Initial Consultation & Project Scoping",
    description: "",
  },
  {
    id: 2,
    Icon: ResourceAllocationIcon,
    title: "Resource Allocation & Task Scheduling",
    description: "",
  },
  {
    id: 3,
    Icon: RiskIdentificationIcon,
    title: "Risk Identification & Mitigation Planning",
    description: "",
  },
  {
    id: 4,
    Icon: MonitoringProgressIcon,
    title: "Monitoring & Progress Reporting",
    description: "",
  },
  {
    id: 5,
    Icon: FinaleDelivery,
    title: "Final Delivery & Post-Project Review",
    description: "",
  },
];
