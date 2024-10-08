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
      "Our team thus specializes in developing native applications with high performance for iOS and Android environments. Native app development helps in making the most of each operating system by offering a fast, efficient and a fluid user experience.",
  },
  {
    id: 2,
    title: "Cross-Platform and Hybrid Development",
    description:
      "For companies interested in reaching both iOS and Android audiences with the same code, we have cross-platform development in the frameworks such as React Native and Flutter. It also guarantees that the application is developed quicker than using other tools while at the same time providing the same experience irrespective of the platform.",
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
