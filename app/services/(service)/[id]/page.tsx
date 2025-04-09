import type { Metadata } from "next";

import SingleService from "../../../../components/service/SingleService";
import { servicesMeta } from "../../../../shared/constants/service-meta.constant";

type Params = { id: string };

type Props = {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const service = servicesMeta[id as keyof typeof servicesMeta];

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: service.url,
    },
  };
}

const SingleServicePage = () => {
  return <SingleService />;
};

export default SingleServicePage;
