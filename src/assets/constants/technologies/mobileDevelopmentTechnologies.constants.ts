import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const ReactNativeIcon = lazy(() => import("@/assets/vectors/technology/ReactNative.svg?react"));
const ReactExpoIcon = lazy(() => import("@/assets/vectors/technology/ReactExpo.svg?react"));
const KotlinIcon = lazy(() => import("@/assets/vectors/technology/Kotlin.svg?react"));
const SwiftIcon = lazy(() => import("@/assets/vectors/technology/Swift.svg?react"));
const ObjectiveCIcon = lazy(() => import("@/assets/vectors/technology/ObjectiveC.svg?react"));
const JavaIcon = lazy(() => import("@/assets/vectors/technology/Java.svg?react"));

export const mobileDevelopmentTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Native App Development",
    description:
      "Our team thus specializes in developing native applications with high performance for iOS and Android environments. Native app development helps in making the most of each operating system by offering a fast, efficient and a fluid user experience.",
    subDescription: [
      {
        id: 1,
        title: "iOS Development",
        description:
          "We prefer developing native apps in <strong>Swift</strong> and  <strong>Objective-C</strong> for creating applications that are in harmony with other Apple products and services, providing flawless performance and aesthetically pleasing designs.",
      },
      {
        id: 2,
        title: "Android Development",
        description:
          "For Android, we develop robust and secure applications using <strong>Kotlin</strong>  and <strong>Java</strong> which is compatible with a myriad of devices and high performing.",
      },
    ],
  },
  {
    id: 2,
    title: "Cross-Platform and Hybrid Development",
    description:
      "For companies interested in reaching both iOS and Android audiences with the same code, we have <strong>cross-platform development</strong>  in the frameworks such as <strong>React Native</strong> and <strong>Flutter</strong>. It also guarantees that the application is developed quicker than using other tools while at the same time providing the same experience irrespective of the platform.",
    subDescription: [
      {
        id: 1,
        title: "React Native",
        description:
          "This is possible with React Native as it enables us to create apps with similar code but possess performance that is almost native and user interfaces that are seamless.",
      },
      {
        id: 2,
        title: "Flutter",
        description:
          "Flutter enables us to develop complex and attractively designed apps with engaging interfaces and smooth performance based on a single code base, which allows cutting development time and costs.",
      },
    ],
  },
];

export const mobileDevelopmentTechnologiesConstants = {
  1: [
    { id: 1, title: "Swift", Icon: SwiftIcon },
    { id: 2, title: "Objective-C", Icon: ObjectiveCIcon },
    { id: 3, title: "Kotlin", Icon: KotlinIcon },
    { id: 4, title: "Java", Icon: JavaIcon },
  ],
  2: [
    { id: 1, title: "React Native", Icon: ReactNativeIcon },
    { id: 2, title: "React Expo", Icon: ReactExpoIcon },
  ],
};
