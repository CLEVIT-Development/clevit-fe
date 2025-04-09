import { lazy } from "react";

const SupportPerformanceIcon = lazy(
  () => import("../../../assets/vectors/processes/SupportPerformance.svg")
);

const TestingAndQAIcon = lazy(() => import("../../../assets/vectors/processes/TestingAndQA.svg"));
const ConsultationIcon = lazy(() => import("../../../assets/vectors/processes/Consultation.svg"));

const RocketIcon = lazy(() => import("../../../assets/vectors/processes/Rocket.svg"));
const PreparatinIcon = lazy(() => import("../../../assets/vectors/processes/Preparation.svg"));
const UIUXIcon = lazy(() => import("../../../assets/vectors/processes/UIUX.svg"));
const ApplicationDevelopmentIcon = lazy(
  () => import("../../../assets/vectors/processes/ApplicationDevelopment.svg")
);

export const singlePageMobileDevelopmentProcessesConstants = [
  {
    id: 1,
    Icon: ConsultationIcon,
    title: "Consultation",
  },
  {
    id: 2,
    Icon: PreparatinIcon,
    title: "Preparation",
  },
  {
    id: 3,
    Icon: UIUXIcon,
    title: "UI/UX Design",
  },
  {
    id: 4,
    Icon: ApplicationDevelopmentIcon,
    title: "Application Development",
  },
  {
    id: 5,
    Icon: TestingAndQAIcon,
    title: "QA Testing",
  },
  {
    id: 6,
    Icon: RocketIcon,
    title: "Launch",
  },
  {
    id: 7,
    Icon: SupportPerformanceIcon,
    title: "Support & Performance Tracking",
  },
];
