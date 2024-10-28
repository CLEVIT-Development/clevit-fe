interface SeoConfigPage {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  ogImage?: string;
  h1?: string;
}

interface SeoConfigType {
  [key: string]: SeoConfigPage;
}

export const seoConfig: SeoConfigType = {
  home: {
    title: "Web and Mobile App Development Company | Clevit",
    description:
      "Partner with Clevit to develop custom web and mobile app development that fit your business needs. Let us bring your ideas to life with cutting-edge technology.",
    canonical: "https://www.clevit.io/",
    keywords:
      "web development, mobile app development, custom software, dedicated teams, AI solutions, cloud solutions",
    ogImage: "/images/og/home.jpg",
    h1: "Web and Mobile App Development Company",
  },
  contact: {
    title: "Contact us | Clevit",
    description:
      "Got a project in mind? Contact Clevit and let's work together to bring your ideas to life. We are here to support your business growth with expert solutions.",
    canonical: "https://www.clevit.io/contact-us",
    keywords: "contact clevit, software development contact, tech consultation",
    h1: "Your Idea, Our Expertise. Let's Collaborate!",
  },
  about: {
    title: "About us | Clevit",
    description:
      "Discover Clevit's mission to transforming ideas into innovative software solutions. Learn more about our values, expertise, and passion for digital success.",
    canonical: "https://www.clevit.io/about-us",
    keywords: "about clevit, software company, tech expertise, digital transformation",
    h1: "Transforming Ideas into Intelligent Software",
  },
  services: {
    title: "Web and Mobile Application Development Services | Clevit",
    description:
      "Explore Clevit's range of services from web and mobile app development to AI integration and digital marketing. Let's create a solution that fits your business.",
    canonical: "https://www.clevit.io/services",
    keywords: "web development services, mobile development, AI solutions, digital marketing",
    h1: "What we can do for you",
  },
  portfolio: {
    title: "Our works | Clevit",
    description:
      "Explore Clevit's portfolio of successful projects across web, mobile, and custom software development. See how we've helped businesses grow with technology.",
    canonical: "https://www.clevit.io/portfolio",
    keywords: "project portfolio, case studies, success stories, development projects",
    h1: "Our Works",
  },
  requestDemo: {
    title: "Request a demo | Clevit",
    description:
      "Request a demo with Clevit and explore how our tailored solutions can help your business grow with innovative web, mobile, and software development services.",
    canonical: "https://www.clevit.io/request-demo",
    keywords: "request demo, software demo, development consultation",
    h1: "Let's find the perfect solution",
  },
  faq: {
    title: "Frequently Asked Questions | Clevit",
    description:
      "Explore Clevit's FAQ page for answers to common questions about our development services, and how we help businesses grow with innovative digital solutions.",
    canonical: "https://www.clevit.io/faq",
    keywords: "FAQ, frequently asked questions, development services FAQ",
    h1: "Frequently Asked Questions",
  },
  privacy: {
    title: "Privacy Policy | Clevit",
    description:
      "Learn how Clevit protects your privacy and handles your personal data. Read our Privacy Policy to understand our commitment to safeguarding your information.",
    canonical: "https://www.clevit.io/privacy-policy",
    keywords: "privacy policy, data protection, information security",
    h1: "Privacy Policy",
  },
  terms: {
    title: "Terms And Conditions | Clevit",
    description:
      "Review Clevit's Terms and Conditions to understand the guidelines for using our services, your rights as a user, and how we ensure a transparent partnership.",
    canonical: "https://www.clevit.io/terms-and-conditions",
    keywords: "terms and conditions, service terms, user guidelines",
    h1: "Terms And Conditions",
  },
  blogs: {
    title: "Blog | Clevit",
    description:
      "Explore Clevit's blog for insights, tips, and news on the latest trends in web and mobile app development, AI, and digital marketing.",
    canonical: "https://www.clevit.io/blogs",
    keywords: "blog, web development, mobile app development, AI, digital marketing",
    h1: "Blog",
  },
};
