import type { MetadataRoute } from "next";

import BlogService from "@/common/services/blog/blog.service";

// Static routes for the sitemap
const staticRoutes = [
  "/",
  "/about-us",
  "/services",
  "/portfolio",
  "/faq",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/request-demo",
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/devops",
  "/services/ai-integration",
  "/services/machine-learning",
  "/services/quality-assurance",
  "/services/technical-assessment",
  "/services/maintenance-support",
  "/services/outstaffing",
  "/services/project-management",
  "/services/ui-ux-design",
  "/services/digital-marketing",
  "/blogs",
];

class SitemapService {
  static generateStaticSitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.clevit.io";

    return staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "daily",
      lastModified: new Date().toISOString(),
      priority: 0.7,
    }));
  }

  static async generateDynamicSitemap(): Promise<MetadataRoute.Sitemap> {
    try {
      const baseUrl = "https://www.clevit.io";
      const blogs = await BlogService.getTitlePath();

      return blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.titlePath}`,
        changeFrequency: "daily",
        lastModified: new Date().toISOString(),
        priority: 0.7,
      }));
    } catch (error) {
      console.error("Failed to generate dynamic sitemap:", error);
      return [];
    }
  }

  static async generateSitemap(): Promise<MetadataRoute.Sitemap> {
    const staticSitemap = this.generateStaticSitemap();
    const dynamicSitemap = await this.generateDynamicSitemap();

    return [...staticSitemap, ...dynamicSitemap];
  }
}

export default SitemapService;
