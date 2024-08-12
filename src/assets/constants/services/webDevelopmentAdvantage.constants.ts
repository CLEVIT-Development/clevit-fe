import { type FunctionComponent, type SVGProps } from "react";

import ExquisiteIcon from "@/assets/vectors/services/Exquisite.svg?react";
import FlexibilityIcon from "@/assets/vectors/services/Flexibility.svg?react";
import MedalOriginalityIcon from "@/assets/vectors/services/MedalOriginality.svg?react";
import MicroscopeQualityIcon from "@/assets/vectors/services/MicroscopeQuality.svg?react";
import SupportIcon from "@/assets/vectors/services/Support.svg?react";
import HandshakeIcon from "@/assets/vectors/values/Handshake.svg?react";

export interface IAdvantageConstant {
  id: number;
  title: string;
  description: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const webDevelopmentAdvantageConstants: IAdvantageConstant[] = [
  {
    id: 1,
    title: "Exquisite & Sophisticated",
    description:
      "At Clevit, we prioritize the exquisite setup and sophisticated, precise functionality of any website application development project. These two components create a work that pleases both our clients and us.",
    Icon: ExquisiteIcon,
  },
  {
    id: 2,
    title: "Flexibility",
    description:
      "At Clevit, each customer gets a unique approach to their specific needs. We believe that our skills and craftsmanship are flexible enough to serve each customer’s requirements in an exceptional manner.\n",
    Icon: FlexibilityIcon,
  },
  {
    id: 3,
    title: "Trust & Ownership",
    description:
      "At Clevit, each customer is treated as a partner. Each cooperation with the team of professionals at Clevit is a step toward a trust-based relationship. This trust ensures a sense of ownership of the customer’s project and becomes the main drive to our mutual success.\n",
    Icon: HandshakeIcon,
  },
  {
    id: 4,
    title: "Originality",
    description:
      "At Clevit, we believe in staying up-to-date with the technologies we use to build our projects. The cutting-edge technologies set the bar of our projects high enough for our customers to be satisfied with our work.\n",
    Icon: MedalOriginalityIcon,
  },
  {
    id: 5,
    title: "Quality & Consistency",
    description:
      "At Clevit, we use practical Quality Assurance processes to test our projects. These processes ensure that our customers get projects that are consistent and impeccable in their quality.",
    Icon: MicroscopeQualityIcon,
  },
  {
    id: 6,
    title: "Customer Support",
    description:
      "At Clevit, we prioritize our customers’ satisfaction. We stand by our customers to ensure that no questions remain unanswered. We are always ready to help with the flawless functionality of the website and are always available to assist the customers.",
    Icon: SupportIcon,
  },
];
