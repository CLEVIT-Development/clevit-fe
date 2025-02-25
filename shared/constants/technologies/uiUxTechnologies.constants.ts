import { lazy } from "react";

import type { ITabsConstant } from "./technologies.constants";

const Figma = lazy(() => import("@/assets/vectors/technology/Figma.svg"));
const AdobeXD = lazy(() => import("@/assets/vectors/technology/AdobeXD.svg"));
const AdobeIllustrator = lazy(() => import("@/assets/vectors/technology/AdobeIllustrator.svg"));
const AdobePhotoshop = lazy(() => import("@/assets/vectors/technology/AdobePhotoshop.svg"));

export const uIuXTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Prototyping & Wireframing",
    description:
      "We make wireframes and prototypes using <strong>Figma</strong> and <strong>Adobe XD</strong> that represent the app flow, navigation, and interface in order to get to the final design.",
  },
  {
    id: 2,
    title: "Graphic & Visual Design",
    description:
      "Our specialists employ all the available techniques in <strong>Adobe Illustrator</strong> and <strong>Adobe Photoshop</strong> to develop unique visuals, icons, and graphics to enhance your product.",
  },
  {
    id: 3,
    title: "User Research & Testing",
    description:
      "Through <strong>Figma</strong> and <strong>Adobe XD</strong>, we employ research and testing to enhance the design to be shaping with users’ expectations and business needs.",
  },
  {
    id: 4,
    title: "Responsive Design & Consistency",
    description:
      "Utilizing <strong>Figma</strong> and <strong>Adobe XD</strong>, we make it our effort to maintain the responsive design on any devices and platforms for consistent and delightful interactions.",
  },
];

export const uiUxTechnologiesConstants = {
  1: [
    { id: 1, title: "Figma", Icon: Figma },
    { id: 2, title: "Adobe XD", Icon: AdobeXD },
    { id: 3, title: "Adobe Illustrator", Icon: AdobeIllustrator },
    { id: 4, title: "Adobe Photoshop", Icon: AdobePhotoshop },
  ],
  2: [
    { id: 1, title: "Figma", Icon: Figma },
    { id: 2, title: "Adobe XD", Icon: AdobeXD },
    { id: 3, title: "Adobe Illustrator", Icon: AdobeIllustrator },
    { id: 4, title: "Adobe Photoshop", Icon: AdobePhotoshop },
  ],
  3: [
    { id: 1, title: "Figma", Icon: Figma },
    { id: 2, title: "Adobe XD", Icon: AdobeXD },
    { id: 3, title: "Adobe Illustrator", Icon: AdobeIllustrator },
    { id: 4, title: "Adobe Photoshop", Icon: AdobePhotoshop },
  ],
  4: [
    { id: 1, title: "Figma", Icon: Figma },
    { id: 2, title: "Adobe XD", Icon: AdobeXD },
    { id: 3, title: "Adobe Illustrator", Icon: AdobeIllustrator },
    { id: 4, title: "Adobe Photoshop", Icon: AdobePhotoshop },
  ],
};
