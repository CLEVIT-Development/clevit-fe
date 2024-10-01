import { servicesConstants } from "@/assets/constants/services.constants";

interface SingleServiceSectionProps {
  serviceId: string;
}

const SingleServiceSection = ({ serviceId }: SingleServiceSectionProps) => {
  const service = servicesConstants.find((service) => service.id === serviceId);

  if (!service) {
    return <h1>service not found</h1>;
  }

  return <div>singleServiceSection with id {serviceId}</div>;
};

export default SingleServiceSection;
