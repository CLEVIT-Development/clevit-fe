import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const Selenium = lazy(() => import("@/assets/vectors/technology/Selenium.svg?react"));
const TestLink = lazy(() => import("@/assets/vectors/technology/TestLink.svg?react"));
const Apiary = lazy(() => import("@/assets/vectors/technology/Apiary.svg?react"));
const Cypress = lazy(() => import("@/assets/vectors/technology/Cypress.svg?react"));
const Playwright = lazy(() => import("@/assets/vectors/technology/Playwright.svg?react"));
const Jmeter = lazy(() => import("@/assets/vectors/technology/Jmeter.svg?react"));
const TricentisTosca = lazy(() => import("@/assets/vectors/technology/TricentisTosca.svg?react"));
const SoapUI = lazy(() => import("@/assets/vectors/technology/SoapUI.svg?react"));

export const dataQualityTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Automated Data Testing",
    description:
      "With <strong>Selenium, Cypress </strong> and <strong>TestLink</strong>, we ensure that your data processes are effectively tested, while we look for any errors and optimize the processes.",
  },
  {
    id: 2,
    title: "API Testing & Validation",
    description:
      "Using solutions like <strong>Apiary, SoapUI,</strong> and <strong>Postman,</strong> we guarantee that all your APIs are compatible and perform precise data exchange with data validation among systems.",
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description:
      "Our CI/CD services help optimize your software development process saving your time and efforts for the same. Through the use of Jenkins, AWS CodePipeline, Azure DevOps we are able to ensure that the code you write gets tested, deployed and released to the cloud platforms as soon as possible. This helps minimize the chances of human mistakes, enhance the software release cycle, and ensure that you are always deploying and delivering the latest software.",
  },
  {
    id: 4,
    title: "Performance & Load Testing",
    description:
      "Using tools such as <strong>Jmeter</strong> and <strong>Tricentis Tosca</strong>, we can emulate high loads and performance stress to guarantee the stability of your data-handling systems.",
  },
  {
    id: 5,
    title: "End-to-End Data Integrity Testing",
    description:
      "For such purposes, some of the effective tools for the end-to-end testing are Playwright and Tricentis Tosca to check the data integrity, security, and accuracy from the life cycle of the system.",
  },
];

export const dataQualityTechnologiesConstants = {
  1: [
    { id: 1, title: "Selenium", Icon: Selenium },
    { id: 2, title: "Testlink", Icon: TestLink },
    { id: 3, title: "Apiary", Icon: Apiary },
    { id: 4, title: "Cypress ", Icon: Cypress },
    { id: 4, title: "Playwright", Icon: Playwright },
    { id: 4, title: "Jmeter", Icon: Jmeter },
    { id: 4, title: "Tricentis Tosca", Icon: TricentisTosca },
    { id: 4, title: "SoapUI", Icon: SoapUI },
  ],
  2: [
    { id: 1, title: "Selenium", Icon: Selenium },
    { id: 2, title: "Testlink", Icon: TestLink },
    { id: 3, title: "Apiary", Icon: Apiary },
    { id: 4, title: "Cypress ", Icon: Cypress },
    { id: 4, title: "Playwright", Icon: Playwright },
    { id: 4, title: "Jmeter", Icon: Jmeter },
    { id: 4, title: "Tricentis Tosca", Icon: TricentisTosca },
    { id: 4, title: "SoapUI", Icon: SoapUI },
  ],
  3: [
    { id: 1, title: "Selenium", Icon: Selenium },
    { id: 2, title: "Testlink", Icon: TestLink },
    { id: 3, title: "Apiary", Icon: Apiary },
    { id: 4, title: "Cypress ", Icon: Cypress },
    { id: 4, title: "Playwright", Icon: Playwright },
    { id: 4, title: "Jmeter", Icon: Jmeter },
    { id: 4, title: "Tricentis Tosca", Icon: TricentisTosca },
    { id: 4, title: "SoapUI", Icon: SoapUI },
  ],
  4: [
    { id: 1, title: "Selenium", Icon: Selenium },
    { id: 2, title: "Testlink", Icon: TestLink },
    { id: 3, title: "Apiary", Icon: Apiary },
    { id: 4, title: "Cypress ", Icon: Cypress },
    { id: 4, title: "Playwright", Icon: Playwright },
    { id: 4, title: "Jmeter", Icon: Jmeter },
    { id: 4, title: "Tricentis Tosca", Icon: TricentisTosca },
    { id: 4, title: "SoapUI", Icon: SoapUI },
  ],
  5: [
    { id: 1, title: "Selenium", Icon: Selenium },
    { id: 2, title: "Testlink", Icon: TestLink },
    { id: 3, title: "Apiary", Icon: Apiary },
    { id: 4, title: "Cypress ", Icon: Cypress },
    { id: 4, title: "Playwright", Icon: Playwright },
    { id: 4, title: "Jmeter", Icon: Jmeter },
    { id: 4, title: "Tricentis Tosca", Icon: TricentisTosca },
    { id: 4, title: "SoapUI", Icon: SoapUI },
  ],
};
