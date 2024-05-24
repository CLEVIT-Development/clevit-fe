import AboutPage from "@/pages/about/AboutPage.tsx";
import BlogPage from "@/pages/blog/BlogPage.tsx";
import CalendlyPage from "@/pages/calendly/CalendlyPage.tsx";
import ContactUsPage from "@/pages/contact-us/ContactUsPage.tsx";
import HomePage from "@/pages/home/HomePage.tsx";
import PrivacyPolicy from "@/pages/privacy-policy/PrivacyPolicy.tsx";
import TermsAndConditions from "@/pages/terms-and-conditions/TermsAndConditions.tsx";

export enum RoutePaths {
  Home = "/",
  About = "/about",
  Services = "/#services",
  Portfolio = "/portfolio",
  Blog = "/blog",
  ContactUs = "/contact-us",
  PrivacyPolicy = "/privacy-policy",
  TermsAndConditions = "/terms-and-conditions",
  Calendly = "/calendly",
}

export const headerMenuLinks = [
  { id: 1, label: "About Us", link: RoutePaths.About },
  { id: 2, label: "Services", link: RoutePaths.Services },
  { id: 3, label: "Portfolio", link: RoutePaths.Portfolio },
  { id: 4, label: "Blog", link: RoutePaths.Blog },
  { id: 5, label: "Contact Us", link: RoutePaths.ContactUs },
];

export const routerElements = [
  { path: RoutePaths.Home, Element: HomePage },
  { path: RoutePaths.About, Element: AboutPage },
  { path: RoutePaths.ContactUs, Element: ContactUsPage },
  { path: RoutePaths.PrivacyPolicy, Element: PrivacyPolicy },
  { path: RoutePaths.TermsAndConditions, Element: TermsAndConditions },
  { path: RoutePaths.Calendly, Element: CalendlyPage },
  { path: RoutePaths.Blog, Element: BlogPage },
];
