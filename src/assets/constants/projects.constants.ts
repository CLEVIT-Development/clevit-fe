import FlowOpsMobile from "@/assets/images/projects/FlowOpsMobile.png";
import FlowopsDesktop from "@/assets/images/projects/FlowopsDesktop.png";
import OblivioniDesktop from "@/assets/images/projects/OblivioniDesktop.png";
import OblivioniMobile from "@/assets/images/projects/OblivioniMobile.png";
import RenegadeDesktop from "@/assets/images/projects/RenegadeDesktop.png";
import RenegadeMobile from "@/assets/images/projects/RenegadeMobile.png";
import Express from "@/assets/vectors/technology/Express.svg?react";
import Firebase from "@/assets/vectors/technology/Firebase.svg?react";
import GoogleCloud from "@/assets/vectors/technology/GoogleCloud.svg?react";
import MySQL from "@/assets/vectors/technology/MySQL.svg?react";
import Next from "@/assets/vectors/technology/Next.svg?react";
import Node from "@/assets/vectors/technology/Node.svg?react";
import React from "@/assets/vectors/technology/React.svg?react";
import Tailwind from "@/assets/vectors/technology/Tailwind.svg?react";
import Vite from "@/assets/vectors/technology/Vite.svg?react";

export const projectsConstants = [
  {
    id: 1,
    sphera: "Events & Entertainment",
    title: "TheFlowOps",
    subTitle: "The booking platform that saves you time",
    description:
      "TheFlowOps is a booking platform for seat reservations and event planning. With our expertise in app, website, and admin dashboard development, it features automated systems and intuitive tools for managing both in-person and online events.",
    type: "Web and Mobile Development, Admin Dashboard",
    duration: "2 Years 1 Month (Ongoing)",
    country: "Singapore",
    link: "https://www.theflowops.com/",
    appStoreLink: "https://apps.apple.com/us/app/flowops/id6477181736",
    googlePlayLink: "https://apps.apple.com/us/app/flowops/id6477181736",
    icons: [
      { id: 1, Icon: React },
      { id: 2, Icon: Tailwind },
      { id: 3, Icon: Vite },
      { id: 4, Icon: Node },
      { id: 5, Icon: Express },
      { id: 6, Icon: MySQL },
      { id: 7, Icon: GoogleCloud },
      { id: 8, Icon: Firebase },
    ],
    desktopBackground: FlowopsDesktop,
    mobileBackground: FlowOpsMobile,
  },
  {
    id: 2,
    sphera: "Musician",
    title: "Oblivioni",
    subTitle: "The creative powerhouse for elevating visuals with custom sync music.",
    description:
      "Specializing in high-end motion pictures and commercial advertising, Oblivioni connects composers with clients for custom music. We've built an automated system and comprehensive admin section for efficient order management.",
    type: "Web Development",
    duration: "1 Year 2 Months",
    country: "USA",
    link: "https://oblivioni.com/",
    icons: [
      { id: 1, Icon: React },
      { id: 2, Icon: Tailwind },
      { id: 3, Icon: Next },
      { id: 4, Icon: Node },
      { id: 5, Icon: MySQL },
      { id: 6, Icon: Firebase },
    ],
    desktopBackground: OblivioniDesktop,
    mobileBackground: OblivioniMobile,
  },
  {
    id: 3,
    sphera: "IT Services and IT Consulting",
    title: "Renegade Technology",
    subTitle: "Redefining IT Solutions for Business Success",
    description:
      "As a full-service IT Managed Service Provider, Renegade Technology breaks conventions, delivering cutting-edge tech solutions to give your business a competitive edge. We developed their website emphasizing the importance of educating clients about evolving digital landscapes.",
    type: "Web Development",
    duration: "10 months",
    country: "USA",
    link: "https://renegadetechnology.com/",
    icons: [
      { id: 1, Icon: React },
      { id: 2, Icon: Tailwind },
      { id: 3, Icon: Next },
    ],
    desktopBackground: RenegadeDesktop,
    mobileBackground: RenegadeMobile,
  },
];
