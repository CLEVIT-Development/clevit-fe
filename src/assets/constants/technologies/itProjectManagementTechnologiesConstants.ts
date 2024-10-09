import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const Jira = lazy(() => import("@/assets/vectors/technology/Jira.svg?react"));
const Trelo = lazy(() => import("@/assets/vectors/technology/Trello.svg?react"));
const Asana = lazy(() => import("@/assets/vectors/technology/Asana.svg?react"));
const Redmine = lazy(() => import("@/assets/vectors/technology/Redmine.svg?react"));
const Airtable = lazy(() => import("@/assets/vectors/technology/Airtable.svg?react"));
const Notion = lazy(() => import("@/assets/vectors/technology/Notion.svg?react"));

const MicrosoftProject = lazy(
  () => import("@/assets/vectors/technology/MicrosoftProject.svg?react")
);

export const itProjectManagmentTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Agile Project Management",
    description:
      "With tools like <strong>Jira</strong>, <strong>Trello</strong>, <strong>Asana</strong>, we incorporate Agile strategies where large tasks are divided into sprints. This allows for flexibility and responsiveness, making it easier for us to respond to shifts in needs and expectations and provide iterative enhancements upon the various phases of the venture.",
  },
  {
    id: 2,
    title: "Waterfall Project Management",
    description:
      "Instead, we have more of a phase-oriented project management system using tools like <strong>Microsoft Project</strong> and <strong>Redmine</strong>. Waterfall is suitable for projects with clear requirements and time estimates, where all stages have to be accomplished before proceeding to the next.",
  },
  {
    id: 3,
    title: "Hybrid Project Management",
    description:
      "Interacting with the advantages of Agile and Waterfall and discarding their vices, we employ Notion and Airtable to achieve efficiency in project management. This enables the use of thorough cyclical scheduling and strategic long-term planning since there is often a need for both in complex projects.\n",
  },
  {
    id: 4,
    title: "Cloud Security & Compliance",
    description:
      "Security and compliance are of paramount importance within the context of DevOps. We offer security services across the cloud stack, guaranteeing that your <strong>AWS</strong>, <strong>Azure</strong>, or <strong>Google Cloud</strong> environment is optimized with proper configurations and complies with regulations such as <strong>GDPR</strong>, <strong>HIPAA</strong>, and <strong>SOC 2.</strong>",
  },
];

export const itProjectManagementTechnologiesConstants = {
  1: [
    { id: 1, title: "Jira", Icon: Jira },
    { id: 2, title: "Trelo", Icon: Trelo },
    { id: 3, title: "Microsoft Project", Icon: MicrosoftProject },
    { id: 4, title: "Asana", Icon: Asana },
    { id: 5, title: "Redmine", Icon: Redmine },
    { id: 6, title: "Airtable", Icon: Airtable },
    { id: 7, title: "Notion", Icon: Notion },
  ],
  2: [
    { id: 1, title: "Jira", Icon: Jira },
    { id: 2, title: "Trelo", Icon: Trelo },
    { id: 3, title: "Microsoft Project", Icon: MicrosoftProject },
    { id: 4, title: "Asana", Icon: Asana },
    { id: 5, title: "Redmine", Icon: Redmine },
    { id: 6, title: "Airtable", Icon: Airtable },
    { id: 7, title: "Notion", Icon: Notion },
  ],
  3: [
    { id: 1, title: "Jira", Icon: Jira },
    { id: 2, title: "Trelo", Icon: Trelo },
    { id: 3, title: "Microsoft Project", Icon: MicrosoftProject },
    { id: 4, title: "Asana", Icon: Asana },
    { id: 5, title: "Redmine", Icon: Redmine },
    { id: 6, title: "Airtable", Icon: Airtable },
    { id: 7, title: "Notion", Icon: Notion },
  ],
  4: [
    { id: 1, title: "Jira", Icon: Jira },
    { id: 2, title: "Trelo", Icon: Trelo },
    { id: 3, title: "Microsoft Project", Icon: MicrosoftProject },
    { id: 4, title: "Asana", Icon: Asana },
    { id: 5, title: "Redmine", Icon: Redmine },
    { id: 6, title: "Airtable", Icon: Airtable },
    { id: 7, title: "Notion", Icon: Notion },
  ],
};
