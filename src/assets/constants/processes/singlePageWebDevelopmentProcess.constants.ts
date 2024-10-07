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
    description:
      "We begin by identifying your objectives, your audience and the characteristics of your business to create the right approach.",
  },
  {
    id: 2,
    Icon: DesignAndPrototypingIcon,
    title: "Design & Prototyping",
    description:
      "Our UI/UX designers build a wireframe and a prototype to give you a better understanding of the website appearance.",
  },
  {
    id: 3,
    Icon: PCIcon,
    title: "Development:",
    description:
      "We design and develop the site front-end and the back-end which makes the site fully responsive, secure, and scalable.",
  },
  {
    id: 4,
    Icon: TestingAndQAIcon,
    title: "Testing & QA:",
    description:
      "A strong quality assurance process is carried out across devices and browsers to ensure high levels of usability and the absence of bugs.",
  },
  {
    id: 5,
    Icon: RocketIcon,
    title: "Launch & Maintenance",
    description:
      "Having successfully developed your website, we continuously monitor and maintain it to ensure optimal functionality.",
  },
];
