import CommitmentIcon from "@/assets/vectors/values/Commitment.svg";
import HandshakeIcon from "@/assets/vectors/values/Handshake.svg";
import PassioneIcon from "@/assets/vectors/values/Passion.svg";
import PuzzleIcon from "@/assets/vectors/values/Puzzle.svg";
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
      id: 2,
      description:
        "Our dedication to excellence is unwavering. Fulfilling our commitments is fundamental to us, as it reinforces our reliability and cultivates trust with our esteemed clients.",
      Icon: HandshakeIcon,
    },
  ],
  3: [
    {
      id: 3,
      description:
        "We understand the world we operate in. We take full ownership of our impact, aiming to be sustainable and ethical in everything we do.",
      Icon: CommitmentIcon,
    },
  ],
  4: [
    {
      id: 4,
      description:
        "We're passionate about our mission. This fuels innovation and exceptional service. Our team's dedication creates a dynamic work environment where everyone excels.",
      Icon: PassioneIcon,
    },
  ],
};
