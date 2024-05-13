import About from "@/pages/about/About";
import ContactUs from "@/pages/contact-us/ContactUs.tsx";
import Home from "@/pages/home/Home.tsx";
import PrivacyPolicy from "@/pages/privacy-policy/PrivacyPolicy.tsx";
import TermsAndConditions from "@/pages/terms-and-conditions/TermsAndConditions.tsx";

export enum RoutePaths {
  Home = "/",
  About = "/about",
  Services = "/services",
  Portfolio = "/portfolio",
  Blog = "/blog",
  ContactUs = "/contact-us",
  PrivacyPolicy = "/privacy-policy",
  TermsAndConditions = "/terms-and-conditions",
}

export const headerMenuLinks = [
  { id: 1, label: "Home", link: RoutePaths.Home },
  { id: 2, label: "About", link: RoutePaths.About },
  { id: 3, label: "Services", link: RoutePaths.Services },
  { id: 4, label: "Portfolio", link: RoutePaths.Portfolio },
  { id: 5, label: "Blog", link: RoutePaths.Blog },
  { id: 6, label: "Contact Us", link: RoutePaths.ContactUs },
];

export const routerElements = [
  { path: RoutePaths.Home, Element: Home },
  { path: RoutePaths.About, Element: About },
  { path: RoutePaths.ContactUs, Element: ContactUs },
  { path: RoutePaths.PrivacyPolicy, Element: PrivacyPolicy },
  { path: RoutePaths.TermsAndConditions, Element: TermsAndConditions },
];
