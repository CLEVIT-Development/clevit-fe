import { lazy } from "react";

const ResearchIcon = lazy(() => import("@/assets/vectors/processes/Research.svg?react"));
const UIUXSmallIcon = lazy(() => import("@/assets/vectors/processes/UIUXSmall.svg?react"));
const PCSmallIcon = lazy(() => import("@/assets/vectors/PCSmall.svg?react"));
const SupportSmallIcon = lazy(() => import("@/assets/vectors/processes/SupportSmall.svg?react"));

export const homeProcessesConstants = [
  {
    id: 1,
    Icon: ResearchIcon,
    title: "Research & Business analysis",
  },
  {
    id: 2,
    Icon: UIUXSmallIcon,
    title: "UI/UX Design & Prototype",
  },
  {
    id: 3,
    Icon: PCSmallIcon,
    title: "Development & Integration",
  },
  {
    id: 4,
    Icon: SupportSmallIcon,
    title: "Support & Evolution",
  },
];
