import { lazy } from "react";

const CommencementIcon = lazy(() => import("@/assets/vectors/processes/Commencement.svg?react"));
const PCIcon = lazy(() => import("@/assets/vectors/processes/PC.svg?react"));
const RocketIcon = lazy(() => import("@/assets/vectors/processes/Rocket.svg?react"));
const SecurityIcon = lazy(() => import("@/assets/vectors/processes/Security.svg?react"));

export const webDevelopmentProcessesConstants = [
  {
    id: 1,
    Icon: CommencementIcon,
    title: "Commencement",
  },
  {
    id: 2,
    Icon: PCIcon,
    title: "Development Phase",
  },
  {
    id: 3,
    Icon: SecurityIcon,
    title: "QA Testing",
  },
  {
    id: 4,
    Icon: RocketIcon,
    title: "Wrap-up Phase",
  },
];
