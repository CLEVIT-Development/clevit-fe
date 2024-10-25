import { generateSitemap } from "./generateSitemap";

export default async function handler(req, res) {
  const sitemap = await generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
