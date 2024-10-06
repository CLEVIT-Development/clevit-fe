import { type FunctionComponent, type LazyExoticComponent, type SVGProps, lazy } from "react";

import type { INavigationData } from "@/shared/ui/Navigation.tsx";

export interface ITabsConstant extends INavigationData {
  description?: string;
}

export interface ITechnologyConstant {
  id: number;
  title: string;
  Icon: LazyExoticComponent<FunctionComponent<SVGProps<SVGSVGElement>>>;
}

export const technicalAssesmentTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Infrastructure Audit",
    description:
      "We assess your hardware, software, and the network to identify if it can handle future growth, it is optimized, and for any bottlenecks that are present.",
  },
  {
    id: 2,
    title: "Security Analysis",
    description:
      "Our team will analyze the current security procedures and regulations, evaluate possible risks, and give recommendations for a stronger cybersecurity at your company.",
  },
  {
    id: 3,
    title: "Performance Evaluation",
    description:
      "Using various tools, we are able to assess and determine your applications, system and network performance that would be running with an expected load.",
  },
  {
    id: 4,
    title: "Code Quality Review",
    description:
      "Our specialists analyze your code to find defects, code sorting issues, or poorly written code that can slow down the program or prevent further extension.",
  },
  {
    id: 5,
    title: "Compliance Check",
    description:
      "Make sure your systems and processes meet the requirements of the industry and do not violate any laws to prevent issues from arising and keep operations efficient.",
  },
];

export const technicalAssesmentTechnologiesConstants = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};
