import serviceCards from "@/constants/serviceCards.ts";
import Layout from "@/layout/Layout.tsx";

import ServiceCard from "../components/ui/ServiceCard.tsx";

const HomePage = () => {
  return (
    <Layout>
      <div className="-ml-20 h-full bg-white grid grid-cols-3 gap-10 px-20 py-10">
        {serviceCards.map(({ id, Icon, title, description }, index) => (
          <ServiceCard
            key={id}
            title={title}
            icon={<Icon />}
            order={index - 9 < 0 ? `0${index + 1}` : `${index + 1}`}
            description={description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
