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

async function getBlogs() {
  const backendUrl = "https://clevit-be.vercel.app/users/v1/";

  try {
    const response = await fetch(`${backendUrl}blogs/title-paths`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { data: { blogs: [] } };
  }
}

export async function GET(_request: Request) {
  const response = await getBlogs();
  const blogRoutes = response.data.map((blog: { titlePath: string }) => `/blog/${blog.titlePath}`);

  const allRoutes = [...staticRoutes, ...blogRoutes];

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

  return new Response(sitemapXml, {
    headers: { "Content-Type": "application/xml" },
  });
}
