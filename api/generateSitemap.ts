import axios from "axios";
import fs from "fs";
import path from "path";
import { ServicesIdConstants } from "../src/assets/constants/services-id.constants";

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
  "/blogs",
];

// Generate service routes dynamically
const serviceRoutes = Object.values(ServicesIdConstants).map((id) => `/services/${id}`);

export async function generateSitemap() {
  try {
    const backendUrl = "https://clevit-be.vercel.app/users/v1/";

    if (!backendUrl) {
      throw new Error("VITE_BACKEND_URL is not defined in the environment variables");
    }

    const response = await axios.get(`${backendUrl}blogs?page=1&sort=Desc`);

    if (!response.data?.data?.blogsList) {
      throw new Error("Unexpected response structure from the backend");
    }

    const blogRoutes = response.data.data.blogsList.map(
      (blog: { titlePath: string }) => `/blogs/${blog.titlePath}`
    );

    const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>https://www.clevit.io${route}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

    fs.writeFileSync(path.join("dist", "sitemap.xml"), sitemapXml);
    console.log("Sitemap generated successfully");
  } catch (error) {
    console.error("Failed to generate sitemap:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
  }
}
