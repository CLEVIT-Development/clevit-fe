"use client";

import Script from "next/script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GtagProvider = () => {
  const handleGtagLoad = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", "G-3N6NCX16LH");
  };

  return (
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-3N6NCX16LH"
      onLoad={handleGtagLoad}
    ></Script>
  );
};

export default GtagProvider;
