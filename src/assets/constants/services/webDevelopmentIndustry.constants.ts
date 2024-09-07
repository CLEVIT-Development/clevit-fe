import { lazy } from "react";

import type { IProcess } from "@/types/constant.types.ts";

const DashboardIcon = lazy(() => import("@/assets/vectors/industryServe/Dashboard.svg?react"));
const MedicalIcon = lazy(() => import("@/assets/vectors/industryServe/Medical.svg?react"));
const MusicProductionIcon = lazy(
  () => import("@/assets/vectors/industryServe/MusicProduction.svg?react")
);
const VirtualMeetingsIcon = lazy(
  () => import("@/assets/vectors/industryServe/VirtualMeetings.svg?react")
);
const CargoIcon = lazy(() => import("@/assets/vectors/industryServe/Cargo.svg?react"));
const OnlineBookingIcon = lazy(
  () => import("@/assets/vectors/industryServe/OnlineBooking.svg?react")
);

export const webDevelopmentIndustryServeConstants: IProcess[] = [
  {
    id: 1,
    title: "Dashboard Development",
    Icon: DashboardIcon,
  },
  {
    id: 2,
    title: "Medical Software Development",
    Icon: MedicalIcon,
  },
  {
    id: 3,
    title: "Music Production & Sound Design",
    Icon: MusicProductionIcon,
  },
  {
    id: 4,
    title: "Virtual Meetings & Conferencing",
    Icon: VirtualMeetingsIcon,
  },
  {
    id: 5,
    title: "Freight & Cargo Services",
    Icon: CargoIcon,
  },
  {
    id: 6,
    title: "Online Booking Platforms",
    Icon: OnlineBookingIcon,
  },
];
