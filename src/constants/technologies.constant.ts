import AntIcon from "@/assets/vectors/Ant.svg?react";
import MUIIcon from "@/assets/vectors/MUI.svg?react";
import NextIcon from "@/assets/vectors/Next.svg?react";
import ReactIcon from "@/assets/vectors/React.svg?react";
import TailwindCSSIcon from "@/assets/vectors/Tailwind.svg?react";
import ViteIcon from "@/assets/vectors/Vite.svg?react";
import VueIcon from "@/assets/vectors/Vue.svg?react";
import type { INavigationData } from "@/atom/Navigation.tsx";

export const technologyTabsConstant: INavigationData[] = [
  { id: 1, title: "Front-End Development" },
  { id: 2, title: "Mobile App Development" },
  { id: 3, title: "Back-End Development" },
  { id: 4, title: "Database Management" },
];

export const technologiesConstant = {
  1: [
    { id: 1, title: "React.js", Icon: ReactIcon },
    { id: 2, title: "Vue.js", Icon: VueIcon },
    { id: 3, title: "Vite.js", Icon: ViteIcon },
    { id: 4, title: "Next.js", Icon: NextIcon },
    { id: 5, title: "Material UI", Icon: MUIIcon },
    { id: 6, title: "Tailwind CSS", Icon: TailwindCSSIcon },
    { id: 7, title: "Ant Design", Icon: AntIcon },
  ],
  2: [
    { id: 1, title: "React.js", Icon: ReactIcon },
    { id: 2, title: "Vue.js", Icon: VueIcon },
    { id: 3, title: "Vite.js", Icon: ViteIcon },
  ],
  3: [
    { id: 1, title: "Material UI", Icon: MUIIcon },
    { id: 2, title: "Tailwind CSS", Icon: TailwindCSSIcon },
    { id: 3, title: "Ant Design", Icon: AntIcon },
  ],
  4: [
    { id: 1, title: "Vite.js", Icon: ViteIcon },
    { id: 2, title: "Next.js", Icon: NextIcon },
    { id: 3, title: "Material UI", Icon: MUIIcon },
  ],
};
