import PuzzleIcon from "@/assets/vectors/values/Puzzle.svg?react";
import type { INavigationData } from "@/shared/ui/Navigation.tsx";

export const valueTabsConstants: INavigationData[] = [
  { id: 1, title: "Integrity" },
  { id: 2, title: "Commitment" },
  { id: 3, title: "Responsibility" },
  { id: 4, title: "Passion" },
];

export const valuesConstants = {
  1: [
    {
      id: 1,
      description:
        "At Clevit honesty is our guiding principle. We believe in open communication and ethical actions with everyone we interact with. This builds trust - the foundation of strong relationships.",
      Icon: PuzzleIcon,
    },
  ],
  2: [
    {
      id: 1,
      description: "Text 2",
      Icon: PuzzleIcon,
    },
  ],
  3: [
    {
      id: 1,
      description: "Text 3",
      Icon: PuzzleIcon,
    },
  ],
  4: [
    {
      id: 1,
      description: "Text 4",
      Icon: PuzzleIcon,
    },
  ],
};
