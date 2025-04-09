import type { ServicesIdConstants } from "../shared/constants/services-id.constants";
import { servicesIndustriesConstants } from "../shared/constants/services.industries.constants";

export const getIndustryByService = (serviceId: keyof typeof ServicesIdConstants) => {
  return servicesIndustriesConstants[serviceId];
};
