import type { Metadata } from "next";

import { BASE_URL } from "../shared/constants/route.constants";
import { seoConfig } from "../shared/constants/seo.constants";

export const generatePageMetadata = (pageKey: keyof typeof seoConfig): Metadata => {
  const config = seoConfig[pageKey];

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.split(", "),
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonical,
      images: `${BASE_URL}${config.ogImage}`,
    },
    alternates: {
      canonical: config.canonical,
    },
  };
};
