import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile" | "book" | "music.song" | "video.movie";
}

const Seo = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = "/default-og-image.jpg",
  ogType = "website",
}: SeoProps) => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Seo;
