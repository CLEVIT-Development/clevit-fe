import { lazy } from "react";

const InitialConsultationIcon = lazy(
  () => import("../../../assets/vectors/processes/InitialConsultation.svg")
);
const ResourceAllocationIcon = lazy(
  () => import("../../../assets/vectors/processes/ResourceAllocation.svg")
);

const RiskIdentificationIcon = lazy(
  () => import("../../../assets/vectors/processes/RiskIdentification.svg")
);
const MonitoringProgressIcon = lazy(
  () => import("../../../assets/vectors/processes/MonitoringProgress.svg")
);

const FinaleDelivery = lazy(() => import("../../../assets/vectors/processes/FinaleDelivery.svg"));

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
