export enum RoutePaths {
  Home = "/",
  About = "/about-us",
  Services = "/services",
  Service = "services/:id",
  Technologies = "/#technologies",
  Industries = "/#industries",
  Portfolio = "/portfolio",
  FAQ = "/faq",
  Blogs = "/blogs",
  Blog = "/blogs/:titlePath",
  ContactUs = "/contact-us",
  PrivacyPolicy = "/privacy-policy",
  TermsAndConditions = "/terms-and-conditions",
  Calendly = "/request-demo",
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

export const BASE_URL = "https://www.clevit.io";
