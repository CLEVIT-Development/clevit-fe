import React from "react";
import { Helmet } from "react-helmet";

import TwitterCardImage from "@/assets/images/social/twitter_card.webp";

import { APP_TITLE, getAppTitle } from "./meta";

interface PageSEOProps {
  title?: string;
  description?: string;
  alternativeDescription?: string;
  canonicalUrl?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  alternativeDescription,
  canonicalUrl,
}) => {
  const metaDescription = description || APP_TITLE;

  return (
    <Helmet>
      <title>{getAppTitle(title)}</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://clevit.io/" />
      <meta name="twitter:title" content="Web and Mobile App Development Company | Clevit" />
      <meta name="twitter:image" content={TwitterCardImage} />
      <meta
        name="twitter:image:alt"
        content="A description of the image for visually impaired users"
      />
      <meta
        name="twitter:description"
        content="Clevit is a web and mobile app development company building reliable solutions for businesses and startups. Find out how we can help with your project. Book a FREE consultation!"
      />

      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Web and Mobile App Development Company | Clevit" />
      <meta
        property="og:description"
        content="Clevit is a web and mobile app development company building reliable solutions for businesses and startups. Find out how we can help with your project. Book a FREE consultation!"
      />
      <meta property="og:url" content="https://clevit.io/" />
      <meta property="og:type" content="article" />

      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large "
      />

      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={metaDescription} />

      {alternativeDescription && (
        <meta name="alternative-description" content={alternativeDescription} />
      )}

      <meta name="keywords" content="nextplate, react" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default PageSEO;
