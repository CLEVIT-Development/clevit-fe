import {
  AWSIcon,
  AzureCloudIcon,
  DigitalOcheanIcon,
  DockerIcon,
  GoogleCloudIcon,
} from "@/assets/icons/technology-icons";

import type { ITabsConstant } from "./technicalAssesmentTechnologies.constants";

export const devopsTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Cloud Infrastructure Management",
    description:
      "This classification is about the administration and operation of cloud structures. Whatever cloud solution a business organization is using, be it<strong> AWS, Google Cloud, Azure, or Digital Ocean</strong>, we assist in configuring, monitoring, and optimizing their cloud infrastructure. This makes certain that your systems are robust, efficient, and safe.",
  },
  {
    id: 2,
    title: "Containerization & Orchestration",
    description:
      "Application environment management became easier and scalable due to the implementation of <strong> Docker </strong>  and containerization. We use containers for consistency in both development and in production, making your team more efficient and your apps more reliable.",
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description:
      "Our CI/CD services help optimize your software development process saving your time and efforts for the same. Through the use of <strong>Jenkins, AWS CodePipeline, Azure DevOps</strong>  we are able to ensure that the code you write gets tested, deployed and released to the cloud platforms as soon as possible. This helps minimize the chances of human mistakes, enhance the software release cycle, and ensure that you are always deploying and delivering the latest software.",
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
    { id: 1, title: "AWS", Icon: AWSIcon },
    { id: 2, title: "Google Cloud", Icon: GoogleCloudIcon },
    { id: 3, title: "Digital Ocean", Icon: DigitalOcheanIcon },
    { id: 4, title: "Docker", Icon: DockerIcon },
    { id: 5, title: "Azure Cloud", Icon: AzureCloudIcon },
  ],
  2: [
    { id: 1, title: "AWS", Icon: AWSIcon },
    { id: 2, title: "Google Cloud", Icon: GoogleCloudIcon },
    { id: 3, title: "Digital Ocean", Icon: DigitalOcheanIcon },
    { id: 4, title: "Docker", Icon: DockerIcon },
    { id: 5, title: "Azure Cloud", Icon: AzureCloudIcon },
  ],
  3: [
    { id: 1, title: "AWS", Icon: AWSIcon },
    { id: 2, title: "Google Cloud", Icon: GoogleCloudIcon },
    { id: 3, title: "Digital Ocean", Icon: DigitalOcheanIcon },
    { id: 4, title: "Docker", Icon: DockerIcon },
    { id: 5, title: "Azure Cloud", Icon: AzureCloudIcon },
  ],
  4: [
    { id: 1, title: "AWS", Icon: AWSIcon },
    { id: 2, title: "Google Cloud", Icon: GoogleCloudIcon },
    { id: 3, title: "Digital Ocean", Icon: DigitalOcheanIcon },
    { id: 4, title: "Docker", Icon: DockerIcon },
    { id: 5, title: "Azure Cloud", Icon: AzureCloudIcon },
  ],
};
