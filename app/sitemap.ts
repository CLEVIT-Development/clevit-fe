import type { MetadataRoute } from "next";

import SitemapService from "@/common/services/sitemap/sitemap.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return await SitemapService.generateSitemap();
}
