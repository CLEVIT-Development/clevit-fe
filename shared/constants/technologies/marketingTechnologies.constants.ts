import { lazy } from "react";

import type { ITabsConstant } from "./technologies.constants";

const Ahrefs = lazy(() => import("../../../assets/vectors/technology/Ahrefs.svg"));
const Semrush = lazy(() => import("../../../assets/vectors/technology/Semrush.svg"));
const GoogleAnalitycs = lazy(
  () => import("../../../assets/vectors/technology/GoogleAnalitycs.svg")
);
const ScreamingFrog = lazy(() => import("../../../assets/vectors/technology/ScreamingFrog.svg"));
const SEOmoz = lazy(() => import("../../../assets/vectors/technology/SeoMoz.svg"));
const GoogleSearch = lazy(() => import("../../../assets/vectors/technology/GoogleSearch.svg"));
const GoogleAds = lazy(() => import("../../../assets/vectors/technology/GoogleAds.svg"));

export const digitalMarketingTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Search Engine Optimization",
    description:
      "Our SEO services include keyword selection, onsite and offsite optimization, link building techniques using such software as <strong>AHrefs</strong>, <strong>SEMrush</strong> and <strong>SEO Moz</strong> to enhance your website ranking and visibility.",
  },
  {
    id: 2,
    title: "Pay-Per-Click (PPC)",
    description:
      "Targeted professional PPC campaigns are our forte handled under <strong>Google Ads</strong> to ensure that your brand is seen by the right market, always aiming for successful coverage.",
  },
  {
    id: 3,
    title: "Content Marketing",
    description:
      "We create and define content that connects with your audience. Through mainly the use of <strong>Google Analytics</strong> and <strong>Ahrefs</strong>, we guarantee that your content is properly optimized for optimal performance and customer interaction.",
  },
  {
    id: 4,
    title: "Website Audits & Technical SEO",
    description:
      "Through <strong>Screaming Frog</strong>, we perform a detailed analysis on the technical SEO of your website so as to correct any errors like crawl errors, broken links among others.",
  },
  {
    id: 5,
    title: "Analytics & Reporting",
    description:
      "We offer further explanations, and analysis with data from <strong>Google Analytics</strong> for evaluating the results of your ad campaigns with statistical indicators and constant optimization of processes",
  },
];

export const digitalMarketingTechnologiesIconsConstants = {
  1: [
    { id: 1, title: "Ahrefs", Icon: Ahrefs },
    { id: 2, title: "Semrush", Icon: Semrush },
    { id: 3, title: "Screaming Frog", Icon: ScreamingFrog },
    { id: 4, title: "Google Analytics", Icon: GoogleAnalitycs },
    { id: 5, title: "Google Search", Icon: GoogleSearch },
    { id: 6, title: "SEO Moz", Icon: SEOmoz },
    { id: 7, title: "Google Ads", Icon: GoogleAds },
  ],
  2: [
    { id: 1, title: "Ahrefs", Icon: Ahrefs },
    { id: 2, title: "Semrush", Icon: Semrush },
    { id: 3, title: "Screaming Frog", Icon: ScreamingFrog },
    { id: 4, title: "Google Analytics", Icon: GoogleAnalitycs },
    { id: 5, title: "Google Search", Icon: GoogleSearch },
    { id: 6, title: "SEO Moz", Icon: SEOmoz },
    { id: 7, title: "Google Ads", Icon: GoogleAds },
  ],
  3: [
    { id: 1, title: "Ahrefs", Icon: Ahrefs },
    { id: 2, title: "Semrush", Icon: Semrush },
    { id: 3, title: "Screaming Frog", Icon: ScreamingFrog },
    { id: 4, title: "Google Analytics", Icon: GoogleAnalitycs },
    { id: 5, title: "Google Search", Icon: GoogleSearch },
    { id: 6, title: "SEO Moz", Icon: SEOmoz },
    { id: 7, title: "Google Ads", Icon: GoogleAds },
  ],
  4: [
    { id: 1, title: "Ahrefs", Icon: Ahrefs },
    { id: 2, title: "Semrush", Icon: Semrush },
    { id: 3, title: "Screaming Frog", Icon: ScreamingFrog },
    { id: 4, title: "Google Analytics", Icon: GoogleAnalitycs },
    { id: 5, title: "Google Search", Icon: GoogleSearch },
    { id: 6, title: "SEO Moz", Icon: SEOmoz },
    { id: 7, title: "Google Ads", Icon: GoogleAds },
  ],
  5: [
    { id: 1, title: "Ahrefs", Icon: Ahrefs },
    { id: 2, title: "Semrush", Icon: Semrush },
    { id: 3, title: "Screaming Frog", Icon: ScreamingFrog },
    { id: 4, title: "Google Analytics", Icon: GoogleAnalitycs },
    { id: 5, title: "Google Search", Icon: GoogleSearch },
    { id: 6, title: "SEO Moz", Icon: SEOmoz },
    { id: 7, title: "Google Ads", Icon: GoogleAds },
  ],
};
