import axios from "axios";
import { ServicesIdConstants } from "../src/assets/constants/services-id.constants";

// Adjust the path as per your setup

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function generateSitemap(res: any) {
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

    // Set the appropriate headers to return XML
    res.setHeader("Content-Type", "application/xml");
    // Send the generated sitemap as the response
    res.status(200).send(sitemapXml);
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    res.status(500).json({ error: "Failed to generate sitemap" });
  }
}
