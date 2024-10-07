import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const ReactNativeIcon = lazy(() => import("@/assets/vectors/technology/ReactNative.svg?react"));
const ReactExpoIcon = lazy(() => import("@/assets/vectors/technology/ReactExpo.svg?react"));
const KotlinIcon = lazy(() => import("@/assets/vectors/technology/Kotlin.svg?react"));
const SwiftIcon = lazy(() => import("@/assets/vectors/technology/Swift.svg?react"));
const ObjectiveCIcon = lazy(() => import("@/assets/vectors/technology/ObjectiveC.svg?react"));

export const mobileDevelopmentTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Native App Development",
    description:
      "Front-End developers at our company create intuitive, dynamic, and aesthetically-pleasing and user interfaces. Using technologies like React.js, Vue.js, Next.js, TypeScript, and many others we develop websites that are adaptable to various screen sizes.The goal is to bring an additional focus on the user experience that will allow not to lose a visitor.",
  },
  {
    id: 2,
    title: "Cross-Platform and Hybrid Development",
    description:
      "Every website has its back-end, which serves as a foundation for web development. With Node, we make certain that every aspect of your website’s server, databases, and applications are well-coordinated. Node.js, Nest.js, Express.js, and other modern frameworks which we are going to build in this project. We integrate back-end services with the keen sense of security and performance as our basis for the reliable solutions.",
  },
];

export const mobileDevelopmentTechnologiesConstants = {
  1: [
    { id: 1, title: "Swift", Icon: SwiftIcon },
    { id: 2, title: "Kotlin", Icon: KotlinIcon },
    { id: 3, title: "Objective-C", Icon: ObjectiveCIcon },
  ],
  2: [
    { id: 1, title: "React Native", Icon: ReactNativeIcon },
    { id: 2, title: "React Expo", Icon: ReactExpoIcon },
  ],
};
