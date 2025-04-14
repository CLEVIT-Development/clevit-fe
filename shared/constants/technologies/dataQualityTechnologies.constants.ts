import { lazy } from "react";

import type { ITabsConstant } from "./technologies.constants";

const Selenium = lazy(() => import("../../../assets/vectors/technology/Selenium.svg"));
const TestLink = lazy(() => import("../../../assets/vectors/technology/TestLink.svg"));
const Apiary = lazy(() => import("../../../assets/vectors/technology/Apiary.svg"));
const Cypress = lazy(() => import("../../../assets/vectors/technology/Cypress.svg"));
const Playwright = lazy(() => import("../../../assets/vectors/technology/Playwright.svg"));
const Jmeter = lazy(() => import("../../../assets/vectors/technology/Jmeter.svg"));
const TricentisTosca = lazy(() => import("../../../assets/vectors/technology/TricentisTosca.svg"));
const SoapUI = lazy(() => import("../../../assets/vectors/technology/SoapUI.svg"));

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
    title: "Performance & Load Testing",
    description:
      "Using tools such as <strong>Jmeter</strong> and <strong>Tricentis Tosca</strong>, we can emulate high loads and performance stress to guarantee the stability of your data-handling systems.",
  },

  {
    id: 4,
    title: "End-to-End Data Integrity Testing",
    description:
      "For such purposes, some of the effective tools for the end-to-end testing are <strong>Playwright</strong>  and <strong>Tricentis Tosca</strong>  to check the data integrity, security, and accuracy from the life cycle of the system.",
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
};
