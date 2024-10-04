import { lazy } from "react";

const DiscoveryAndPlanningIcon = lazy(
  () => import("@/assets/vectors/processes/DiscoveryAndPlanning.svg?react")
);
const PCIcon = lazy(() => import("@/assets/vectors/processes/PC.svg?react"));
const DesignAndPrototypingIcon = lazy(
  () => import("@/assets/vectors/processes/DesignAndPrototyping.svg?react")
);
const TestingAndQAIcon = lazy(() => import("@/assets/vectors/processes/TestingAndQA.svg?react"));
const RocketIcon = lazy(() => import("@/assets/vectors/processes/Rocket.svg?react"));

export const singlePageWebDevelopmentProcessesConstants = [
  {
    id: 1,
    Icon: DiscoveryAndPlanningIcon,
    title: "Discovery & Planning",
    description: "",
  },
  {
    id: 2,
    Icon: DesignAndPrototypingIcon,
    title: "Infrastructure Setup & Configuration",
    description: "",
  },
  {
    id: 3,
    Icon: PCIcon,
    title: "Continuous Integration & Continuous Deployment (CI/CD)",
    description: "",
  },
  {
    id: 4,
    Icon: TestingAndQAIcon,
    title: "Automation & Orchestration",
    description: "",
  },
  {
    id: 5,
    Icon: RocketIcon,
    title: "Monitoring & Performance Optimization",
    description: "",
  },
  {
    id: 6,
    Icon: RocketIcon,
    title: "Security & Compliance",
    description: "",
  },
  {
    id: 7,
    Icon: RocketIcon,
    title: "Ongoing Support & Maintenance",
    description: "",
  },
];
