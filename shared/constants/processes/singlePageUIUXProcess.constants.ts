import { lazy } from "react";

const DesignIterationIcon = lazy(
  () => import("../../../assets/vectors/processes/DesignIteration.svg")
);
const VisualDesigneIcon = lazy(() => import("../../../assets/vectors/processes/VisualDesigne.svg"));
const InfrostructureSetupIcon = lazy(
  () => import("../../../assets/vectors/processes/InfrostructureSetup.svg")
);
const WireframingPrototypingIcon = lazy(
  () => import("../../../assets/vectors/processes/WireframingPrototyping.svg")
);
const FinaleImplementationIcon = lazy(
  () => import("../../../assets/vectors/processes/FinaleImplementation.svg")
);

export const singlePageUIUXProcessesConstants = [
  {
    id: 1,
    Icon: InfrostructureSetupIcon,
    title: "Initial User Research",
    description: "",
  },
  {
    id: 2,
    Icon: WireframingPrototypingIcon,
    title: "Wireframing & Prototyping",
    description: "",
  },
  {
    id: 3,
    Icon: VisualDesigneIcon,
    title: "Visual Design",
    description: "",
  },
  {
    id: 4,
    Icon: VisualDesigneIcon,
    title: "Usability Testing",
    description: "",
  },
  {
    id: 5,
    Icon: DesignIterationIcon,
    title: "Design Iteration",
    description: "",
  },
  {
    id: 6,
    Icon: FinaleImplementationIcon,
    title: "Final Implementation",
    description: "",
  },
];
