import type { FunctionComponent, SVGProps } from "react";

import {
  AntIcon,
  BerryIcon,
  CypressIcon,
  DigitalOcheanIcon,
  ExpressIcon,
  FirebaseIcon,
  GoogleCloudIcon,
  JestIcon,
  MUIIcon,
  MongoIcon,
  MySQLIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  NotionIcon,
  PostMarkIcon,
  PostgresIcon,
  PrismaIcon,
  ReactExpoIcon,
  ReactIcon,
  ReactNativeIcon,
  TailwindCSSIcon,
  Typescript,
  VercelIcon,
  ViteIcon,
  VueIcon,
  VuetifyIcon,
} from "@/assets/icons/technology-icons";
import BepDesktop from "@/assets/images/portfolio/BepDesktop.webp";
import BepMobileImage from "@/assets/images/portfolio/BepMobile.webp";
import EvaluationDesktop from "@/assets/images/portfolio/EvaluationDesktop.webp";
import EvaluationMobileImage from "@/assets/images/portfolio/EvaluationMobile.webp";
import FhHealthDesktop from "@/assets/images/portfolio/FhHealthDesktop.webp";
import FhHealthMobileImage from "@/assets/images/portfolio/FhHealthMobile.webp";
import FlowOpsAppDesktop from "@/assets/images/portfolio/FlowOpsAppDesktop.webp";
import FlowOpsAppMobileImage from "@/assets/images/portfolio/FlowOpsAppMobile.webp";
import FlowOpsDashboardDesktop from "@/assets/images/portfolio/FlowOpsDashboardDesktop.webp";
import FlowOpsDashboardMobileImage from "@/assets/images/portfolio/FlowOpsDashboardMobile.webp";
import FlowOpsWebDesktop from "@/assets/images/portfolio/FlowOpsWebDesktop.webp";
import FlowOpsWebMobileImage from "@/assets/images/portfolio/FlowOpsWebMobile.webp";
import OblivioniDesktopImage from "@/assets/images/portfolio/OblivioniDesktop.webp";
import OblivioniMobileImage from "@/assets/images/portfolio/OblivioniMobile.webp";
import PlatAiDesktop from "@/assets/images/portfolio/PlatAiDesktop.webp";
import PlatAiMobileImage from "@/assets/images/portfolio/PlatAiMobile.webp";
import PolinHealthcareDesktop from "@/assets/images/portfolio/PolinHealthcareDesktop.webp";
import PolinHealthcareMobileImage from "@/assets/images/portfolio/PolinHealthcareMobile.webp";
import RenegadeTechnologiesMobileImage from "@/assets/images/portfolio/RenegadeTechnologiesMobile.webp";
import RenegageTechnologiesDesktop from "@/assets/images/portfolio/RenegadeTechnologiesWebDesktop.webp";
import SqorBetaDesktop from "@/assets/images/portfolio/SqorBetaDesktop.webp";
import SqotrBetaMobileImage from "@/assets/images/portfolio/SqotrBetaMobile.webp";
import StorylineDesktop from "@/assets/images/portfolio/StorylineDesktop.webp";
import StorylineMobileImage from "@/assets/images/portfolio/StorylineMobile.webp";
import TagLogisticsDesktoo from "@/assets/images/portfolio/TagLogisticsDesktop.webp";
import TagLogisticsMobileImage from "@/assets/images/portfolio/TagLogisticsMobile.webp";

interface Project {
  title: string;
  description: string;
  mobileImageUrl: string;
  desktopImageUrl: string;
  details: string;
  info: Array<{
    label: string;
    isLink?: boolean;
    value:
      | string
      | { Icon: FunctionComponent<SVGProps<SVGSVGElement>>; name: string }[]
      | React.ReactNode;
    applink?: string;
  }>;
}

export const portfolioConstants: Project[] = [
  {
    title: "Oblivioni",
    desktopImageUrl: OblivioniDesktopImage.src,
    mobileImageUrl: OblivioniMobileImage.src,
    description: "The creative powerhouse that propels your visuals to new heights.",
    details:
      "Oblivioni caters to the high-end needs of filmmakers and advertisers by connecting them with talented composers for custom music. Oblivioni has a network of industry-leading composers who can create bespoke music to perfectly match your vision. An automated system and comprehensive admin sections make the ordering process smooth and efficient, saving you valuable time.",
    info: [
      { label: "Industry", value: "Musicians" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "1 Year 2 Months" },
      { label: "Website", value: "oblivioni.com", isLink: true },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Tailwind CSS", Icon: TailwindCSSIcon },
          { name: "Cypress", Icon: CypressIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Jest", Icon: JestIcon },
          { name: "MySQL", Icon: MySQLIcon },
          { name: "Digital Ocean", Icon: DigitalOcheanIcon },
          { name: "Firebase", Icon: FirebaseIcon },
        ],
      },
    ],
  },

  // {
  //   title: "TheFlowOps",
  //   desktopImageUrl: FlowOpsAppDesktop.src,
  //   mobileImageUrl: FlowOpsAppMobileImage.src,
  //   description: "Efficient event planning made easy with TheFlowOps app.",
  //   details:
  //     "TheFlowOps app simplifies event planning with automated reservation functionalities and integrated video conferencing tools. Users can generate Zoom and Google Meet links directly within the app, eliminating the need for manual setup. The app also simplifies booking management and attendance tracking, ensuring a smooth and efficient experience.",
  //   info: [
  //     { label: "Industry", value: "Events & Entertainment" },
  //     { label: "Type", value: "App Development" },
  //     { label: "Duration", value: "2 Year 1 Month" },
  //     {
  //       label: "Application",
  //       value: "App Store",
  //       isLink: true,
  //       applink: "https://apps.apple.com/us/app/flowops/id6477181736",
  //     },
  //     { label: "Country", value: "Singapore" },
  //     {
  //       label: "Technologies",
  //       value: [
  //         { name: "React Native", Icon: ReactNativeIcon },
  //         { name: "Next.js", Icon: NextIcon },
  //         { name: "Typescript", Icon: Typescript },
  //         { name: "React Expo", Icon: ReactExpoIcon },
  //         { name: "Nest.js", Icon: NestIcon },
  //         { name: "Node.js", Icon: NodeIcon },
  //         { name: "Postmark", Icon: PostMarkIcon },
  //         { name: "Prisma", Icon: PrismaIcon },
  //         { name: "Google Cloud", Icon: GoogleCloudIcon },
  //         { name: "Firebase", Icon: FirebaseIcon },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "TheFlowOps",
  //   desktopImageUrl: FlowOpsWebDesktop.src,
  //   mobileImageUrl: FlowOpsWebMobileImage.src,
  //   description: "The booking platform designed to simplify your event planning.",
  //   details:
  //     "TheFlowOps is a booking platform for seat reservations and event planning. We developed its website, which offers a wide selection of partnered venues with continuous updates for user-friendly navigation. Our web development ensures an efficient and convenient event planning experience.     ",
  //   info: [
  //     { label: "Industry", value: "Events & Entertainment" },
  //     { label: "Type", value: "Web Development" },
  //     { label: "Duration", value: "1 Year 11 Months" },
  //     { label: "Website", value: "theflowops.com", isLink: true },
  //     { label: "Country", value: "Singapore" },
  //     {
  //       label: "Technologies",
  //       value: [
  //         { name: "React.js", Icon: ReactIcon },
  //         { name: "Next.js", Icon: NextIcon },
  //         { name: "Tailwind", Icon: TailwindCSSIcon },
  //         { name: "Typescript", Icon: Typescript },
  //         { name: "Notion", Icon: NotionIcon },
  //         { name: "Google Cloud", Icon: GoogleCloudIcon },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "TheFlowOps",
  //   desktopImageUrl: FlowOpsDashboardDesktop.src,
  //   mobileImageUrl: FlowOpsDashboardMobileImage.src,
  //   description: "Providing robust admin tools for enhanced operations.",
  //   details:
  //     "TheFlowOps admin dashboard provides user-friendly tools for managing bookings, tracking attendance, and optimizing listings, all in one platform. Our approach ensures a smooth event planning experience with automated systems, a wide venue selection, and powerful admin tools for efficient operations.",
  //   info: [
  //     { label: "Industry", value: "Events & Entertainment" },
  //     { label: "Type", value: "Admin Dashboard" },
  //     { label: "Duration", value: "2 Years" },
  //     { label: "Website", value: "Internal Use Only", isLink: false },
  //     { label: "Country", value: "Singapore" },
  //     {
  //       label: "Technologies",
  //       value: [
  //         { name: "React.js", Icon: ReactIcon },
  //         { name: "Vite.js", Icon: ViteIcon },
  //         { name: "Tailwind CSS", Icon: TailwindCSSIcon },
  //         { name: "Typescript", Icon: Typescript },
  //         { name: "Nest.js", Icon: NestIcon },
  //         { name: "Node.js", Icon: NodeIcon },
  //         { name: "MongoDb", Icon: MongoIcon },
  //         { name: "Express.js", Icon: ExpressIcon },
  //         { name: "Google Cloud", Icon: GoogleCloudIcon },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Renegade Technology",
    desktopImageUrl: RenegageTechnologiesDesktop.src,
    mobileImageUrl: RenegadeTechnologiesMobileImage.src,
    description: "The innovative full-service IT Managed Service Provider.",
    details:
      "Renegade values genuine client relationships built on transparency. Our expertise in building their website reflects this by educating clients on the ever-evolving digital landscape. From the beginning, Renegade focused on delivering the most advanced and relevant IT solutions. These solutions are designed with one goal in mind: empowering businesses for long-term success.",
    info: [
      { label: "Industry", value: "IT Services and IT Consulting" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "10 Months" },
      { label: "Website", value: "renegadetechnology.com", isLink: true },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "Vue.js", Icon: VueIcon },
          { name: "Vuetify", Icon: VuetifyIcon },
          { name: "Tailwind CSS", Icon: TailwindCSSIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "MongoDb", Icon: MongoIcon },
          { name: "Express.js", Icon: ExpressIcon },
          { name: "Google Cloud", Icon: GoogleCloudIcon },
        ],
      },
    ],
  },

  {
    title: "TAG Logistics",
    desktopImageUrl: TagLogisticsDesktoo.src,
    mobileImageUrl: TagLogisticsMobileImage.src,
    description: "Your gateway to seamless logistics in the heart of the Caucasus and beyond.",
    details:
      "Our expertise resulted in a user-friendly website for TAG Logistics, a company specializing in delivering cargo to Armenia, Russia, Georgia, and Iran. The website offers efficient and reliable solutions for all your transportation needs. For TAG Logistics, we built a powerful admin panel, providing complete order visibility, progress management, and the ability to respond swiftly to new requests.",
    info: [
      { label: "Industry", value: "Transportation" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "12 Months" },
      { label: "Website", value: "taglogistics.am", isLink: true },
      { label: "Country", value: "Armenia" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Tailwind CSS", Icon: TailwindCSSIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Nest.js", Icon: NestIcon },
          { name: "MySql", Icon: MySQLIcon },
          { name: "Digital Ocean", Icon: DigitalOcheanIcon },
        ],
      },
    ],
  },
  {
    title: "Sqor Beta",
    desktopImageUrl: SqorBetaDesktop.src,
    mobileImageUrl: SqotrBetaMobileImage.src,
    description: "AI-driven platform for integrating SaaS tools and extracting insights.",
    details:
      "This plug-and-play platform leverages AI to extract vital insights from everyday company data, which is currently scattered across various tools, facilitating seamless integration and actionable intelligence. We built the admin dashboard to optimize monitoring and data analytics for all integrated AI and non-AI tools, enabling companies to easily authenticate into each SaaS tool through SQOR.",
    info: [
      { label: "Industry", value: "AI" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "1 Year 6 Months" },
      { label: "Website", value: "sqor.ai", isLink: true },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "Vue.js", Icon: VueIcon },
          { name: "Ant Design Vue", Icon: AntIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Express.js", Icon: ExpressIcon },
          { name: "Google Cloud", Icon: GoogleCloudIcon },
        ],
      },
    ],
  },
  {
    title: "Storyline",
    desktopImageUrl: StorylineDesktop.src,
    mobileImageUrl: StorylineMobileImage.src,
    description:
      "Sharing stories with the world through an online drag-and-drop platform. No coding required! ",
    details:
      "Project Storyline is a web app that allows users to create and share their stories online through a simple drag-and-drop interface. It also offers collaboration features that invite others to complete the story together. Alongside this, we integrated a custom task management system to help users organize their projects effectively. ",
    info: [
      { label: "Industry", value: "Online Storytelling" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "In Progress" },
      { label: "Website", value: "In Progress", isLink: false },
      { label: "Country", value: "Australia" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Vite.js", Icon: ViteIcon },
          { name: "Material UI", Icon: MUIIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Vercel", Icon: VercelIcon },
        ],
      },
    ],
  },
  {
    title: "Evaluation",
    desktopImageUrl: EvaluationDesktop.src,
    mobileImageUrl: EvaluationMobileImage.src,
    description: "Automated employee evaluation and bonus calculation tool. ",
    details:
      "We developed Evaluation as an automated tool for evaluating employees and calculating bonuses. The platform assesses employees based on their skills, working hours, and other relevant factors connected to their work. ",
    info: [
      { label: "Industry", value: "HR" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "In Progress" },
      { label: "Website", value: "Internal Use Only", isLink: false },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Tailwind CSS", Icon: TailwindCSSIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Vercel", Icon: VercelIcon },
          { name: "MySQL", Icon: MySQLIcon },
        ],
      },
    ],
  },
  {
    title: "BEP",
    desktopImageUrl: BepDesktop.src,
    mobileImageUrl: BepMobileImage.src,
    description:
      "Unlock your career potential. Connecting with top employers & educational partners!",
    details:
      "Introducing BEP, an online platform that bridges the gap between job seekers and new employment opportunities. We built the whole platform to facilitate seamless connections for employers to fill vacancies and provide educational institutions with additional teams to foster growth and development. ",
    info: [
      { label: "Industry", value: "Educational, Work" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "In Progress" },
      { label: "Website", value: "In Progress", isLink: false },
      { label: "Country", value: "Armenia" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Tailwind CSS", Icon: TailwindCSSIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Express.js", Icon: ExpressIcon },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Digital Ocean", Icon: DigitalOcheanIcon },
          { name: "MySQL", Icon: MySQLIcon },
        ],
      },
    ],
  },
  {
    title: "FH Health",
    desktopImageUrl: FhHealthDesktop.src,
    mobileImageUrl: FhHealthMobileImage.src,
    description: "Your custom medical lab and clinic management software.",
    details:
      "FH Health, a leading healthcare technology firm, specializes in delivering innovative digital health solutions. The development includes secure monitoring of COVID-19 test results, automated recommendations for clinic revisits, a user-friendly admin panel, centralized test inventory management, integration of video conferencing for remote consultations, and secure messaging for direct patient-professional communication.",
    info: [
      { label: "Industry", value: "Healthcare" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "3 Years 2 Months" },
      { label: "Website", value: "fhhealth.com ", isLink: true },
      { label: "Country", value: "Canada" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Material UI", Icon: MUIIcon },
          { name: "Cypress", Icon: CypressIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Jest", Icon: JestIcon },
          { name: "Google Cloud", Icon: GoogleCloudIcon },
          { name: "Firebase", Icon: FirebaseIcon },
          { name: "Express.js", Icon: ExpressIcon },
          { name: "MySQL", Icon: MySQLIcon },
          { name: "MongoDB", Icon: MongoIcon },
        ],
      },
    ],
  },
  {
    title: "Pollin Healthcare",
    desktopImageUrl: PolinHealthcareDesktop.src,
    mobileImageUrl: PolinHealthcareMobileImage.src,
    description: "Healthcare appointment scheduling and treatment management. ",
    details:
      "Pollin Regenerative Health Clinic Management System simplifies patient appointment scheduling. We've developed an admin dashboard to facilitate clinic network actions and optimize connections between patients and doctors. Patients access consultations via a mobile app and interact with an AI-powered chatbot for effortless healthcare actions and information retrieval.",
    info: [
      { label: "Industry", value: "Healthcare" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "2 Years 3 Months" },
      { label: "Website", value: "pollinfertility.com", isLink: true },
      { label: "Country", value: "Canada" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Tailwind CSS", Icon: TailwindCSSIcon },
          { name: "Cypress", Icon: CypressIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Jest", Icon: JestIcon },
          { name: "Google Cloud", Icon: GoogleCloudIcon },
          { name: "Firebase", Icon: FirebaseIcon },
          { name: "MySQL", Icon: MySQLIcon },
          { name: "MongoDB", Icon: MongoIcon },
        ],
      },
    ],
  },
  {
    title: "Plat AI",
    desktopImageUrl: PlatAiDesktop.src,
    mobileImageUrl: PlatAiMobileImage.src,
    description:
      "Offering efficient underwriting solutions for lenders, financial institutions, and insurance firms.",
    details:
      "Plat AI platform efficiently evaluates external submissions, integrating into existing workflows or serving as a standalone solution. Using AI-driven risk assessment, Plat AI reduces costs and enhances productivity. Our contributions included both web development and AI development, ensuring a user-friendly, and efficient platform that enhances underwriting processes and overall operational efficiency.",
    info: [
      { label: "Industry", value: "Finance, AI" },
      { label: "Type", value: "Web Development, AI Development" },
      { label: "Duration", value: "2 Years 4 Months" },
      { label: "Website", value: "Internal Use Only", isLink: false },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", Icon: ReactIcon },
          { name: "Next.js", Icon: NextIcon },
          { name: "Material UI", Icon: MUIIcon },
          { name: "Berry UI", Icon: BerryIcon },
          { name: "Cypress", Icon: CypressIcon },
          { name: "Typescript", Icon: Typescript },
          { name: "Node.js", Icon: NodeIcon },
          { name: "Nest.js", Icon: NestIcon },
          { name: "Google Cloud", Icon: GoogleCloudIcon },
          { name: "PostgreSQL", Icon: PostgresIcon },
        ],
      },
    ],
  },
];
