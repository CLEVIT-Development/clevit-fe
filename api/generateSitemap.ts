import { waitUntil } from "@vercel/functions";

const ServicesIdConstants = {
  Web: "web-development",
  Mobile: "mobile-app-development",
  DevOps: "devops",
  AiIntegration: "ai-integration",
  MachineLearning: "machine-learning",
  QualityAssurance: "quality-assurance",
  TechnicalAssessment: "technical-assessment",
  MaintenanceSupport: "maintenance-support",
  OutStaffing: "outstaffing",
  ProjectManagement: "project-management",
  Design: "ui-ux-design",
  DigitalMarketing: "digital-marketing",
};

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

const serviceRoutes = Object.values(ServicesIdConstants).map((id) => `/services/${id}`);

async function getBlog() {
  const backendUrl = "https://clevit-be.vercel.app/users/v1/";

  try {
    const res = await fetch(`${backendUrl}blogs?page=1&sort=Desc`);
    console.log(`Response status: ${res.status}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    console.log(res, "res");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { data: { blogsList: [] } };
  }
}

export function GET(_request: Request) {
  let response: any;
  waitUntil(
    getBlog().then((json) => {
      response = json;
    })
  );

  console.log(response, "res");

  // const blogRoutes = response.data.blogsList.map(
  //   (blog: { titlePath: string }) => `/blogs/${blog.titlePath}`
  // );

  const allRoutes = [...staticRoutes, ...serviceRoutes];

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
