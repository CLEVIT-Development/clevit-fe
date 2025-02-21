import type { MetadataRoute } from "next";

import { BASE_URL } from "@/shared/constants/route.constants";

const disallowRules = ["/admin", "/admin/blog/", "/admin/signin", "/admin/addBlog"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: disallowRules,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
