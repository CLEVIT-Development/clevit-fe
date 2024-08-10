import CargoIcon from "@/assets/vectors/industryServe/Cargo.svg?react";
import DashboardIcon from "@/assets/vectors/industryServe/Dashboard.svg?react";
import MedicalIcon from "@/assets/vectors/industryServe/Medical.svg?react";
import MusicProductionIcon from "@/assets/vectors/industryServe/MusicProduction.svg?react";
import OnlineBookingIcon from "@/assets/vectors/industryServe/OnlineBooking.svg?react";
import VirtualMeetingsIcon from "@/assets/vectors/industryServe/VirtualMeetings.svg?react";
import type { IProcess } from "@/types/constant.types.ts";

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
