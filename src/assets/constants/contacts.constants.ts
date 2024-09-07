import { lazy } from "react";

const Envelope = lazy(() => import("@/assets/vectors/Envelope.svg?react"));
const Telephone = lazy(() => import("@/assets/vectors/Telephone.svg?react"));

export const contactsConstants = [
  {
    id: 1,
    text: "info@clevit.io",
    link: "mailto:info@clevit.io",
    Element: Envelope,
  },
  {
    id: 2,
    text: "+374 99 18 09 23",
    link: "tel:+374 99 18 09 23",
    Element: Telephone,
  },
];
