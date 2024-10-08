import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const AWS = lazy(() => import("@/assets/vectors/technology/AWS.svg?react"));
const GoogleCloud = lazy(() => import("@/assets/vectors/technology/GoogleCloud.svg?react"));
const AzureCloud = lazy(() => import("@/assets/vectors/technology/AzureCloud.svg?react"));
const DigitalOchean = lazy(() => import("@/assets/vectors/technology/DigitalOcean.svg?react"));

export const devopsTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Cloud Infrastructure Management",
    description:
      "This classification is about the administration and operation of cloud structures. Whatever cloud solution a business organization is using, be it AWS, Google Cloud, Azure, or Digital Ocean, we assist in configuring, monitoring, and optimizing their cloud infrastructure. This makes certain that your systems are robust, efficient, and safe.",
  },
  {
    id: 2,
    title: "Containerization & Orchestration",
    description:
      "Application environment management became easier and scalable due to the implementation of Docker and containerization. We use containers for consistency in both development and in production, making your team more efficient and your apps more reliable.",
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description:
      "Our CI/CD services help optimize your software development process saving your time and efforts for the same. Through the use of Jenkins, AWS CodePipeline, Azure DevOps we are able to ensure that the code you write gets tested, deployed and released to the cloud platforms as soon as possible. This helps minimize the chances of human mistakes, enhance the software release cycle, and ensure that you are always deploying and delivering the latest software.",
  },
  {
    id: 4,
    title: "Cloud Security & Compliance",
    description:
      "Security and compliance are of paramount importance within the context of DevOps. We offer security services across the cloud stack, guaranteeing that your <strong>AWS</strong>, <strong>Azure</strong>, or <strong>Google Cloud</strong> environment is optimized with proper configurations and complies with regulations such as <strong>GDPR</strong>, <strong>HIPAA</strong>, and <strong>SOC 2.</strong>",
  },
];

export const devopsTechnologiesConstants = {
  1: [
    { id: 1, title: "AWS", Icon: AWS },
    { id: 2, title: "Google Cloud", Icon: GoogleCloud },
    { id: 3, title: "Azure", Icon: AzureCloud },
    { id: 4, title: "Digital Ocean", Icon: DigitalOchean },
    { id: 1, title: "AWS", Icon: AWS },
    { id: 1, title: "Google Cloud", Icon: GoogleCloud },
    { id: 1, title: "Azure", Icon: AzureCloud },
    { id: 1, title: "Digital Ocean", Icon: DigitalOchean },
  ],
  2: [
    { id: 1, title: "AWS", Icon: AWS },
    { id: 2, title: "Google Cloud", Icon: GoogleCloud },
    { id: 3, title: "Azure", Icon: AzureCloud },
    { id: 4, title: "Digital Ocean", Icon: DigitalOchean },
    { id: 1, title: "AWS", Icon: AWS },
    { id: 1, title: "Google Cloud", Icon: GoogleCloud },
    { id: 1, title: "Azure", Icon: AzureCloud },
    { id: 1, title: "Digital Ocean", Icon: DigitalOchean },
  ],
  3: [
    { id: 1, title: "AWS", Icon: AWS },
    { id: 2, title: "Google Cloud", Icon: GoogleCloud },
    { id: 3, title: "Azure", Icon: AzureCloud },
    { id: 4, title: "Digital Ocean", Icon: DigitalOchean },
  ],
  4: [
    { id: 1, title: "AWS", Icon: AWS },
    { id: 2, title: "Google Cloud", Icon: GoogleCloud },
    { id: 3, title: "Azure", Icon: AzureCloud },
    { id: 4, title: "Digital Ocean", Icon: DigitalOchean },
    { id: 1, title: "AWS", Icon: AWS },
    { id: 1, title: "Google Cloud", Icon: GoogleCloud },
    { id: 1, title: "Azure", Icon: AzureCloud },
    { id: 1, title: "Digital Ocean", Icon: DigitalOchean },
  ],
  5: [
    { id: 1, title: "AWS", Icon: AWS },
    { id: 1, title: "Google Cloud", Icon: GoogleCloud },
    { id: 1, title: "Azure", Icon: AzureCloud },
    { id: 1, title: "Digital Ocean", Icon: DigitalOchean },
  ],
};
