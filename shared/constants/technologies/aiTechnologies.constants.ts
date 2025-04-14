import { lazy } from "react";

import type { ITabsConstant } from "./technicalAssesmentTechnologies.constants";

const ChatGPT = lazy(() => import("../../../assets/vectors/technology/ChatGPT.svg"));
const Tableau = lazy(() => import("../../../assets/vectors/technology/Tableau.svg"));
const FrieFlies = lazy(() => import("../../../assets/vectors/technology/FrieFlies.svg"));
const H2OAI = lazy(() => import("../../../assets/vectors/technology/H2OAI.svg"));
const Grammarly = lazy(() => import("../../../assets/vectors/technology/Grammarly.svg"));
const IBM = lazy(() => import("../../../assets/vectors/technology/IBM.svg"));
const AzureCloudSmall = lazy(
  () => import("../../../assets/vectors/technology/AzureCloudSmall.svg")
);
const LookaInc = lazy(() => import("../../../assets/vectors/technology/LookaInc.svg"));
const MidJorney = lazy(() => import("../../../assets/vectors/technology/MidJorney.svg"));
const Oracle = lazy(() => import("../../../assets/vectors/technology/Oracle.svg"));
const SalesForce = lazy(() => import("../../../assets/vectors/technology/SalesForce.svg"));

export const aITechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "AI-Powered Communication & Chatbots",
    description:
      "Organizational AI-enabled communication applications enable self-service and efficiency and they offer quick and smart responses. Thus, by connecting tools such as <strong>ChatGPT</strong>,<strong>Grammarly</strong> , and <strong>Fireflies</strong>, we develop opportunities to manage customer inquiries, support content generation, and transcribe documents, enhancing overall productivity and minimizing errors.",
  },
  {
    id: 2,
    title: "Creative AI & Content Generation",
    description:
      "We assist and advise organizations on how to best use tools such as <strong>DALL-E</strong> ,<strong>CopyAI</strong>  and <strong>Midjourney</strong> for content generation and design. These technologies make visual and textual content generation possible, which means brands can instantly design and produce marketing content and creative work with the help of AI.",
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence",
    description:
      "We create intelligent data analysis tools that turn your data into actionable insights. With such tools as <strong>Tableau</strong>, <strong>H2O.ai</strong> , it is now easy to build accurate predictive models and present data visually. By integrating with ai, <strong>IBM</strong>, and <strong>Azure Cloud</strong>, we can produce extensive data visualization, prediction, and machine learning to serve as a foundation for your business success.",
  },
  {
    id: 4,
    title: "AI-Enhanced Cloud & Enterprise Solutions",
    description:
      "We deploy AI into cloud and enterprise applications used by your business, enabling end-to-end enhancement of operations. With platforms like <strong>Oracle</strong>, <strong>Salesforce</strong>, <strong>Looka Inc.</strong>, and <strong>Gemini</strong>, we focus on providing you with tailored enterprise solutions to optimize your business processes, from customer service to data management, helping your organization become smarter and more efficient.",
  },
];

export const aiTechnologiesConstants = {
  1: [
    { id: 1, title: "ChatGPT", Icon: ChatGPT },
    { id: 2, title: "DALL-E", Icon: ChatGPT },
    { id: 3, title: "Tableau", Icon: Tableau },
    { id: 4, title: "Fireflies", Icon: FrieFlies },
    { id: 5, title: "H2O.ai", Icon: H2OAI },
    { id: 6, title: "Grammarly", Icon: Grammarly },
    { id: 7, title: "IBM", Icon: IBM },
    { id: 8, title: "Azure Cloud", Icon: AzureCloudSmall },
    { id: 9, title: "Looka Inc", Icon: LookaInc },
    { id: 10, title: "Midjourney", Icon: MidJorney },
    { id: 11, title: "Oracle", Icon: Oracle },
    { id: 12, title: "Salesforce", Icon: SalesForce },
  ],
  2: [
    { id: 1, title: "ChatGPT", Icon: ChatGPT },
    { id: 2, title: "DALL-E", Icon: ChatGPT },
    { id: 3, title: "Tableau", Icon: Tableau },
    { id: 4, title: "Fireflies", Icon: FrieFlies },
    { id: 5, title: "H2O.ai", Icon: H2OAI },
    { id: 6, title: "Grammarly", Icon: Grammarly },
    { id: 7, title: "IBM", Icon: IBM },
    { id: 8, title: "Azure Cloud", Icon: AzureCloudSmall },
    { id: 9, title: "Looka Inc", Icon: LookaInc },
    { id: 10, title: "Midjourney", Icon: MidJorney },
    { id: 11, title: "Oracle", Icon: Oracle },
    { id: 12, title: "Salesforce", Icon: SalesForce },
  ],
  3: [
    { id: 1, title: "ChatGPT", Icon: ChatGPT },
    { id: 2, title: "DALL-E", Icon: ChatGPT },
    { id: 3, title: "Tableau", Icon: Tableau },
    { id: 4, title: "Fireflies", Icon: FrieFlies },
    { id: 5, title: "H2O.ai", Icon: H2OAI },
    { id: 6, title: "Grammarly", Icon: Grammarly },
    { id: 7, title: "IBM", Icon: IBM },
    { id: 8, title: "Azure Cloud", Icon: AzureCloudSmall },
    { id: 9, title: "Looka Inc", Icon: LookaInc },
    { id: 10, title: "Midjourney", Icon: MidJorney },
    { id: 11, title: "Oracle", Icon: Oracle },
    { id: 12, title: "Salesforce", Icon: SalesForce },
  ],
  4: [
    { id: 1, title: "ChatGPT", Icon: ChatGPT },
    { id: 2, title: "DALL-E", Icon: ChatGPT },
    { id: 3, title: "Tableau", Icon: Tableau },
    { id: 4, title: "Fireflies", Icon: FrieFlies },
    { id: 5, title: "H2O.ai", Icon: H2OAI },
    { id: 6, title: "Grammarly", Icon: Grammarly },
    { id: 7, title: "IBM", Icon: IBM },
    { id: 8, title: "Azure Cloud", Icon: AzureCloudSmall },
    { id: 9, title: "Looka Inc", Icon: LookaInc },
    { id: 10, title: "Midjourney", Icon: MidJorney },
    { id: 11, title: "Oracle", Icon: Oracle },
    { id: 12, title: "Salesforce", Icon: SalesForce },
  ],
};
