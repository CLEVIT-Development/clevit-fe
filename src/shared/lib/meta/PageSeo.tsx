import React from "react";
import { Helmet } from "react-helmet";

import { APP_TITLE, getAppTitle } from "./meta";

// Importing constants or helper functions for meta tags

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
      {/* Page title, using a helper function if a specific title is provided */}
      <title>{getAppTitle(title)}</title>

      {/* Viewport meta tag for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Twitter Card tags for sharing on Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://clevit.io/" />
      <meta name="twitter:title" content="Web and Mobile App Development Company | Clevit" />
      <meta
        name="twitter:description"
        content="Clevit is a web and mobile app development company building reliable solutions for businesses and startups.Find out how we can help with your project. Book a FREE consultation!"
      />

      {/* Open Graph tags for sharing on other platforms */}
      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Web and Mobile App Development Company | Clevit" />
      <meta
        property="og:description"
        content="Clevit is a web and mobile app development company building reliable solutions for businesses and startups.Find out how we can help with your project. Book a FREE consultation!"
      />
      <meta property="og:url" content="https://clevit.io/" />
      <meta property="og:type" content="article" />

      {/* Robots meta tag for search engine crawler instructions */}
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Main description meta tag */}
      <meta name="description" content={metaDescription} />

      {/* Alternative description meta tag if provided */}
      {alternativeDescription && (
        <meta name="alternative-description" content={alternativeDescription} />
      )}

      {/* Keywords meta tag (replace with actual keywords if applicable) */}
      <meta name="keywords" content="nextplate, react" />

      {/* Canonical URL tag to specify the preferred page URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default PageSEO;
