import {
  CypressIcon,
  FirebaseIcon,
  GoogleCloudIcon,
  JestIcon,
  MongoIcon,
  MySQLIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  TailwindCSSIcon,
  Typescript,
} from "@/assets/icons/technology-icons";
import OblivioniDesktop from "@/assets/images/projects/OblivioniDesktop.webp";
import OblivioniMobile from "@/assets/images/projects/OblivioniMobile.webp";
import PollinMobile from "@/assets/images/projects/PollinMobile.webp";
import PollinWeb from "@/assets/images/projects/PollinWeb.webp";
import RenegadeDesktop from "@/assets/images/projects/RenegadeDesktop.webp";
import RenegadeMobile from "@/assets/images/projects/RenegadeMobile.webp";

export const projectsConstants = [
  // {
  //   id: 1,
  //   sphera: "Events & Entertainment",
  //   title: "TheFlowOps",
  //   subTitle: "The booking platform that saves you time",
  //   description:
  //     "TheFlowOps is a booking platform for seat reservations and event planning. With our expertise in app, website, and admin dashboard development, it features automated systems and intuitive tools for managing both in-person and online events.",
  //   type: "Web and Mobile Development, Admin Dashboard",
  //   duration: "2 Years 1 Month (Ongoing)",
  //   country: "Singapore",
  //   link: "https://www.theflowops.com/",
  //   appStoreLink: "https://apps.apple.com/us/app/flowops/id6477181736",
  //   googlePlayLink: "https://apps.apple.com/us/app/flowops/id6477181736",
  //   icons: [
  //     { id: 1, Icon: ReactIcon, text: "React.js" },
  //     { id: 2, Icon: TailwindCSSIcon, text: "Tailwind CSS" },
  //     { id: 3, Icon: ViteIcon, text: "Vite.js" },
  //     { id: 4, Icon: NodeIcon, text: "Node.js" },
  //     { id: 5, Icon: ExpressIcon, text: "Express.js" },
  //     { id: 6, Icon: MySQLIcon, text: "MySQL" },
  //     { id: 7, Icon: GoogleCloudIcon, text: "Google Cloud" },
  //     { id: 8, Icon: FirebaseIcon, text: "Google Firebase" },
  //   ],
  //   desktopBackground: FlowopsDesktop,
  //   mobileBackground: FlowOpsMobile,
  // },
  {
    id: 1,
    sphera: "Healthcare",
    title: "Pollin Healthcare\n",
    subTitle: "Healthcare appointment scheduling and treatment management",
    description:
      "Pollin Regenerative Health Clinic Management System simplifies patient appointment scheduling. We've developed an admin dashboard to facilitate clinic network actions and optimize connections between patients and doctors.",
    type: "Web Development, Admin Dashboard",
    duration: "3 Years 2 Month (Ongoing)",
    country: "Canada",
    link: "https://www.pollinfertility.com/",
    icons: [
      { id: 1, Icon: ReactIcon, text: "React.js" },
      { id: 2, Icon: NextIcon, text: "Next.js" },
      { id: 3, Icon: TailwindCSSIcon, text: "Tailwind CSS" },
      { id: 4, Icon: CypressIcon, text: "Cypress" },
      { id: 5, Icon: Typescript, text: "Typescript" },
      { id: 6, Icon: NodeIcon, text: "Node.js" },
      { id: 7, Icon: NestIcon, text: "Nest.js" },
      { id: 8, Icon: JestIcon, text: "Jest" },
      { id: 9, Icon: GoogleCloudIcon, text: "Google Cloud" },
      { id: 10, Icon: FirebaseIcon, text: "Firebase" },
      { id: 11, Icon: MySQLIcon, text: "MySQL" },
      { id: 12, Icon: MongoIcon, text: "MongoDB" },
    ],
    desktopBackground: PollinWeb,
    mobileBackground: PollinMobile,
  },
  {
    id: 2,
    sphera: "Musician",
    title: "Oblivioni",
    subTitle: "The creative powerhouse for elevating visuals with custom sync music.",
    description:
      "Specializing in high-end motion pictures and commercial advertising, Oblivioni connects composers with clients for custom music. We've built an automated system and comprehensive admin sections for efficient order management.",
    type: "Web Development",
    duration: "1 Year 2 Months",
    country: "USA",
    link: "https://oblivioni.com/",
    icons: [
      { id: 1, Icon: ReactIcon, text: "React.js" },
      { id: 2, Icon: TailwindCSSIcon, text: "Tailwind CSS" },
      { id: 3, Icon: NextIcon, text: "Next.js" },
      { id: 4, Icon: NodeIcon, text: "Node.js" },
      { id: 5, Icon: NestIcon, text: "Nest.js" },
      { id: 6, Icon: MySQLIcon, text: "MySQL" },
      { id: 7, Icon: FirebaseIcon, text: "Google Firebase" },
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
    duration: "10 Months",
    country: "USA",
    link: "https://renegadetechnology.com/",
    icons: [
      { id: 1, Icon: ReactIcon, text: "React.js" },
      { id: 2, Icon: TailwindCSSIcon, text: "Tailwind CSS" },
      { id: 3, Icon: NextIcon, text: "Next.js" },
    ],
    desktopBackground: RenegadeDesktop,
    mobileBackground: RenegadeMobile,
  },
];
