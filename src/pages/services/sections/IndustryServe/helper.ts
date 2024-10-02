import { type ServicesIdConstants } from "@/assets/constants/services-id.constants";
import { servicesIndustriesConstants } from "@/assets/constants/services.industries.constants";

export const getIndustryByService = (serviceId: keyof typeof ServicesIdConstants) => {
  return servicesIndustriesConstants[serviceId];
};
