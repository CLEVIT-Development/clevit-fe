interface SeoConfigPage {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  h1?: string;
}

interface BlogData {
  title: string;
  metaDescription: string;
  titlePath: string;
}

// Move seoConfig inside the file
const seoConfig: { [key: string]: SeoConfigPage } = {
  home: {
    title: "Web and Mobile App Development Company | Clevit",
    description:
      "Partner with Clevit to develop custom web and mobile app development that fit your business needs. Let us bring your ideas to life with cutting-edge technology.",
    canonical: "https://www.clevit.io/",
    h1: "Web and Mobile App Development Company",
  },
  contact: {
    title: "Contact us | Clevit",
    description:
      "Got a project in mind? Contact Clevit and let's work together to bring your ideas to life. We are here to support your business growth with expert solutions.",
    canonical: "https://www.clevit.io/contact-us",
    h1: "Your Idea, Our Expertise. Let's Collaborate!",
  },
  about: {
    title: "About us | Clevit",
    description:
      "Discover Clevit's mission to transforming ideas into innovative software solutions. Learn more about our values, expertise, and passion for digital success.",
    canonical: "https://www.clevit.io/about-us",
    h1: "Transforming Ideas into Intelligent Software",
  },
  services: {
    title: "Web and Mobile Application Development Services | Clevit",
    description:
      "Explore Clevit's range of services from web and mobile app development to AI integration and digital marketing. Let's create a solution that fits your business.",
    canonical: "https://www.clevit.io/services",
    h1: "What we can do for you",
  },
  portfolio: {
    title: "Our works | Clevit",
    description:
      "Explore Clevit's portfolio of successful projects across web, mobile, and custom software development. See how we've helped businesses grow with technology.",
    canonical: "https://www.clevit.io/portfolio",
    h1: "Our Works",
  },
  requestDemo: {
    title: "Request a demo | Clevit",
    description:
      "Request a demo with Clevit and explore how our tailored solutions can help your business grow with innovative web, mobile, and software development services.",
    canonical: "https://www.clevit.io/request-demo",
    h1: "Let's find the perfect solution",
  },
  faq: {
    title: "Frequently Asked Questions | Clevit",
    description:
      "Explore Clevit's FAQ page for answers to common questions about our development services, and how we help businesses grow with innovative digital solutions.",
    canonical: "https://www.clevit.io/faq",
    h1: "Frequently Asked Questions",
  },
  privacy: {
    title: "Privacy Policy | Clevit",
    description:
      "Learn how Clevit protects your privacy and handles your personal data. Read our Privacy Policy to understand our commitment to safeguarding your information.",
    canonical: "https://www.clevit.io/privacy-policy",
    h1: "Privacy Policy",
  },
  terms: {
    title: "Terms And Conditions | Clevit",
    description:
      "Review Clevit's Terms and Conditions to understand the guidelines for using our services, your rights as a user, and how we ensure a transparent partnership.",
    canonical: "https://www.clevit.io/terms-and-conditions",
    h1: "Terms And Conditions",
  },
  blogs: {
    title: "Blog | Clevit",
    description:
      "Explore Clevit's blog for insights, tips, and news on the latest trends in web and mobile app development, AI, and digital marketing.",
    canonical: "https://www.clevit.io/blogs",
    h1: "Blog",
  },
};

const pathToKey: { [key: string]: string } = {
  "/": "home",
  "/contact-us": "contact",
  "/about-us": "about",
  "/services": "services",
  "/portfolio": "portfolio",
  "/request-demo": "requestDemo",
  "/faq": "faq",
  "/privacy-policy": "privacy",
  "/terms-and-conditions": "terms",
  "/blogs": "blogs",
};

const backendUrl = "https://clevit-be.vercel.app/users/v1/";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = decodeURIComponent(url.pathname).replace(/[^\w\-\/]/g, "");

  // Check if this is a blog post route
  if (path.startsWith("/blog/")) {
    try {
      const blogSlug = path.replace("/blog/", "");
      const response = await fetch(`${backendUrl}/blogs/${blogSlug}`);
      const blogData: BlogData = await response.json();

      return generateHtml({
        title: blogData.title,
        description: blogData.metaDescription,
        canonical: `https://www.clevit.io/blog/${blogData.titlePath}`,
        h1: blogData.title,
      });
    } catch (error) {
      return generateHtml(seoConfig.blogs);
    }
  }

  const configKey = pathToKey[path] || "home";
  return generateHtml(seoConfig[configKey]);
}

function generateHtml(metaTags: SeoConfigPage) {
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" async sizes="16x16" />
    <title>${escapeHtml(metaTags.title)}</title>
    <meta name="description" content="${escapeHtml(metaTags.description)}" />
    <link rel="canonical" href="${escapeHtml(metaTags.canonical)}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(metaTags.title)}" />
    <meta property="og:description" content="${escapeHtml(metaTags.description)}" />
    <meta property="og:url" content="${escapeHtml(metaTags.canonical)}" />
    ${metaTags.ogImage ? `<meta property="og:image" content="${escapeHtml(metaTags.ogImage)}" />` : ""}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${escapeHtml(metaTags.title)}" />
    <meta property="twitter:description" content="${escapeHtml(metaTags.description)}" />
    ${metaTags.ogImage ? `<meta property="twitter:image" content="${escapeHtml(metaTags.ogImage)}" />` : ""}
  </head>
  <body>
    ${metaTags.h1 ? `<h1 style="display:none">${metaTags.h1}</h1>` : ""}
    <div id="root"></div>
    <script type="module" crossorigin src="/assets/main.js"></script>
    <link rel="stylesheet" href="/assets/main.css">
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
