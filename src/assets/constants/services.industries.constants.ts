import EventPlanningManagment from "@/assets/vectors/EventPlanningManagment.svg?react";
import FreightCargoServices from "@/assets/vectors/FreightCargoServices.svg?react";
import MedicalSoftwareDevelopment from "@/assets/vectors/MedicalSoftwareDevelopment.svg?react";
import MusickProduction from "@/assets/vectors/MusickProduction.svg?react";
import OnlineBookingPlatforms from "@/assets/vectors/OnlineBookingPlatforms.svg?react";
import VirtualMeeting from "@/assets/vectors/VirtualMeeting.svg?react";

import { ServicesIdConstants } from "./services-id.constants";

export const servicesIndustriesConstants = {
  [ServicesIdConstants.Web]: [
    {
      Icon: EventPlanningManagment,
      title: "Dashboard Development",
    },
    {
      Icon: MedicalSoftwareDevelopment,
      title: "Medical Software Development",
    },
    {
      Icon: MusickProduction,
      title: "Music Production & Sound Design",
    },
    {
      Icon: VirtualMeeting,
      title: "Virtual Meetings & Conferencing",
    },
    {
      Icon: FreightCargoServices,
      title: "Freight & Cargo Services",
    },
    {
      Icon: OnlineBookingPlatforms,
      title: "Online Booking Platforms",
    },
  ],
};
