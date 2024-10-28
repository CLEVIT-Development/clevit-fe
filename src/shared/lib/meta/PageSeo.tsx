import React from "react";
import { Helmet } from "react-helmet";

import TwitterCardImage from "@/assets/images/social/twitter_card.webp";

import { getAppTitle } from "./meta";

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
  const metaDescription =
    description ||
    "Clevit specializes in creating custom web and mobile applications that drive business growth. Our expert team delivers innovative solutions for startups and enterprises, focusing on scalable, user-friendly technology. Contact us today for a FREE consultation and transform your digital presence.";
  const metaTitle =
    title || "Professional Web & Mobile App Development Services | Custom Solutions by Clevit";

  return (
    <Helmet>
      <title>{getAppTitle(title)}</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://clevit.io/" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:image" content={TwitterCardImage} />
      <meta
        name="twitter:image:alt"
        content="A description of the image for visually impaired users"
      />
      <meta name="twitter:description" content={metaDescription} />

      <meta property="og:site_name" content="Clevit" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content="https://clevit.io/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={TwitterCardImage} />
      <meta property="og:image:alt" content="Clevit - Web and Mobile Development Services" />

      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large "
      />

      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={metaDescription} />

      {alternativeDescription && (
        <meta name="alternative-description" content={alternativeDescription} />
      )}

      <meta
        name="keywords"
        content="web development, mobile app development, custom software solutions, react development, nodejs, typescript, software consulting, web design, app design, digital transformation"
      />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default PageSEO;
