import AboutPage from "@/pages/about-us/AboutPage";
import AddEditBlogPage from "@/pages/admin/add-edit-blog/AddEditBlog";
import SignInPage from "@/pages/admin/sign-in/SignInPage";
import BlogsPage from "@/pages/blog/BlogsPage.tsx";
import SingleBlogPage from "@/pages/blog/SingleBlogPage";
import ContactUsPage from "@/pages/contact-us/ContactUsPage.tsx";
import Faq from "@/pages/faq/FaqPage";
import HomePage from "@/pages/home/HomePage.tsx";
import PortfolioPage from "@/pages/portfolio/PortfolioPage";
import PrivacyPolicy from "@/pages/privacy-policy/PrivacyPolicy.tsx";
import CalendlyPage from "@/pages/request-demo/CalendlyPage";
import ServicePage from "@/pages/services/ServicePage";
import WebDevelopmentPage from "@/pages/services/WebDevelopmentPage.tsx";
import SingleServicePage from "@/pages/services/sections/SingleServicePage";
import TermsAndConditions from "@/pages/terms-and-conditions/TermsAndConditions.tsx";

export enum RoutePaths {
  Home = "/",
  About = "/about-us",
  Services = "/services",
  Service = "services/:id",
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
  CreateBlog = "/admin/add-blog",
  EditBlog = "/admin/edit-blog/:id",
  AdminSignIn = "/admin/signin",
}

export const headerMenuLinks = [
  { id: 1, label: "Services", link: RoutePaths.Services, needAuthentication: false },
  { id: 2, label: "Portfolio", link: RoutePaths.Portfolio, needAuthentication: false },
  { id: 3, label: "About Us", link: RoutePaths.About, needAuthentication: false },
  { id: 4, label: "Technologies", link: RoutePaths.Technologies, needAuthentication: false },
  { id: 5, label: "Industries", link: RoutePaths.Industries, needAuthentication: false },
  { id: 6, label: "FAQ", link: RoutePaths.FAQ, needAuthentication: false },
  { id: 7, label: "Blog", link: RoutePaths.Blogs, needAuthentication: false },
  { id: 8, label: "Contact Us", link: RoutePaths.ContactUs, needAuthentication: false },
];

export const routerElements = [
  { path: RoutePaths.Home, Element: HomePage, isPrivate: false },
  { path: RoutePaths.Services, Element: ServicePage, isPrivate: false },
  { path: RoutePaths.About, Element: AboutPage, isPrivate: false },
  { path: RoutePaths.ContactUs, Element: ContactUsPage, isPrivate: false },
  { path: RoutePaths.PrivacyPolicy, Element: PrivacyPolicy, isPrivate: false },
  { path: RoutePaths.TermsAndConditions, Element: TermsAndConditions, isPrivate: false },
  { path: RoutePaths.Calendly, Element: CalendlyPage, isPrivate: false },
  { path: RoutePaths.Blogs, Element: BlogsPage, isPrivate: false },
  { path: RoutePaths.Blog, Element: SingleBlogPage, isPrivate: false },
  { path: RoutePaths.Service, Element: SingleServicePage },
  { path: RoutePaths.Portfolio, Element: PortfolioPage, isPrivate: false },
  { path: RoutePaths.WebDevelopment, Element: WebDevelopmentPage, isPrivate: false },
  { path: RoutePaths.FAQ, Element: Faq, isPrivate: false },
  { path: RoutePaths.AdminSignIn, Element: SignInPage, isPrivate: false },
  { path: RoutePaths.CreateBlog, Element: AddEditBlogPage, isPrivate: true },
  { path: RoutePaths.EditBlog, Element: AddEditBlogPage, isPrivate: true },
];
