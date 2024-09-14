import AboutPage from "@/pages/about-us/AboutPage";
import BlogsPage from "@/pages/blog/BlogsPage.tsx";
import SingleBlogPage from "@/pages/blog/SingleBlogPage";
import ContactUsPage from "@/pages/contact-us/ContactUsPage.tsx";
import HomePage from "@/pages/home/HomePage.tsx";
import PortfolioPage from "@/pages/portfolio/PortfolioPage";
import PrivacyPolicy from "@/pages/privacy-policy/PrivacyPolicy.tsx";
import CalendlyPage from "@/pages/request-demo/CalendlyPage";
import WebDevelopmentPage from "@/pages/services/WebDevelopmentPage.tsx";
import TermsAndConditions from "@/pages/terms-and-conditions/TermsAndConditions.tsx";

export enum RoutePaths {
  Home = "/",
  About = "/about-us",
  Services = "/#services",
  Technologies = "/#technologies",
  Industries = "/#industries",
  Portfolio = "/portfolio",
  FAQ = "/FAQ",
  Blogs = "/blogs",
  Blog = "/blog/:id",
  ContactUs = "/contact-us",
  PrivacyPolicy = "/privacy-policy",
  TermsAndConditions = "/terms-and-conditions",
  Calendly = "/request-demo",
  WebDevelopment = "/web-development",
}

export const headerMenuLinks = [
  { id: 1, label: "Services", link: RoutePaths.Services },
  { id: 2, label: "Portfolio", link: RoutePaths.Portfolio },
  { id: 3, label: "About Us", link: RoutePaths.About },
  { id: 4, label: "Technologies", link: RoutePaths.Technologies },
  { id: 5, label: "Industries", link: RoutePaths.Industries },
  // { id: 6, label: "FAQ", link: RoutePaths.FAQ },
  { id: 7, label: "Blog", link: RoutePaths.Blogs },
  { id: 8, label: "Contact Us", link: RoutePaths.ContactUs },
];

export const routerElements = [
  { path: RoutePaths.Home, Element: HomePage },
  { path: RoutePaths.About, Element: AboutPage },
  { path: RoutePaths.ContactUs, Element: ContactUsPage },
  { path: RoutePaths.PrivacyPolicy, Element: PrivacyPolicy },
  { path: RoutePaths.TermsAndConditions, Element: TermsAndConditions },
  { path: RoutePaths.Calendly, Element: CalendlyPage },
  { path: RoutePaths.Blogs, Element: BlogsPage },
  { path: RoutePaths.Blog, Element: SingleBlogPage },
  { path: RoutePaths.Portfolio, Element: PortfolioPage },
  { path: RoutePaths.WebDevelopment, Element: WebDevelopmentPage },
];
