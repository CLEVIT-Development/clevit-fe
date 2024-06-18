import React from "react";
import { Helmet } from "react-helmet";

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

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />

      {/* Main description */}
      <meta name="description" content={metaDescription} />

      {/* Alternative description */}
      {alternativeDescription && (
        <meta name="alternative-description" content={alternativeDescription} />
      )}

      <meta name="keywords" content="nextplate, react" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default PageSEO;
