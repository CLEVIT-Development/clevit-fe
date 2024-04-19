import HomePage from "@/pages/home/HomePage.tsx";

export enum RoutePaths {
  Home = "/",
  About = "/about",
  Services = "/services",
  Portfolio = "/portfolio",
  Blog = "/blog",
  ContactUs = "/contact-us",
}

export const headerMenuLinks = [
  { id: 1, label: "Home", link: RoutePaths.Home },
  { id: 2, label: "About", link: RoutePaths.About },
  { id: 3, label: "Services", link: RoutePaths.Services },
  { id: 4, label: "Portfolio", link: RoutePaths.Portfolio },
  { id: 5, label: "Blog", link: RoutePaths.Blog },
  { id: 6, label: "Contact Us", link: RoutePaths.ContactUs },
];

export const routerElements = [{ path: RoutePaths.Home, Element: HomePage }];
