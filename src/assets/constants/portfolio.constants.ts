import BepDesktop from "@/assets/images/portfolio/BepDesktop.png";
import BepMobileImage from "@/assets/images/portfolio/BepMobile.png";
import EvaluationDesktop from "@/assets/images/portfolio/EvaluationDesktop.png";
import EvaluationMobileImage from "@/assets/images/portfolio/EvaluationMobile.png";
import FhHealthDesktop from "@/assets/images/portfolio/FhHealthDesktop.png";
import FhHealthMobileImage from "@/assets/images/portfolio/FhHealthMobile.png";
import FlowOpsAppDesktop from "@/assets/images/portfolio/FlowOpsAppDesktop.png";
import FlowOpsAppMobileImage from "@/assets/images/portfolio/FlowOpsAppMobile.png";
import FlowOpsDashboardDesktop from "@/assets/images/portfolio/FlowOpsDashboardDesktop.png";
import FlowOpsDashboardMobileImage from "@/assets/images/portfolio/FlowOpsDashboardMobile.png";
import FlowOpsWebDesktop from "@/assets/images/portfolio/FlowOpsWebDesktop.png";
import FlowOpsWebMobileImage from "@/assets/images/portfolio/FlowOpsWebMobile.png";
import OblivioniDesktopImage from "@/assets/images/portfolio/OblivioniDesktop.jpg";
import OblivioniMobileImage from "@/assets/images/portfolio/OblivioniMobile.png";
import PlatAiDesktop from "@/assets/images/portfolio/PlatAiDesktop.png";
import PlatAiMobileImage from "@/assets/images/portfolio/PlatAiMobile.png";
import PolinHealthcareDesktop from "@/assets/images/portfolio/PolinHealthcareDesktop.png";
import PolinHealthcareMobileImage from "@/assets/images/portfolio/PolinHealthcareMobile.png";
import RenegadeTechnologiesMobileImage from "@/assets/images/portfolio/RenegadeTechnologiesMobile.png";
import RenegageTechnologiesDesktop from "@/assets/images/portfolio/RenegadeTechnologiesWebDesktop.png";
import SqorBetaDesktop from "@/assets/images/portfolio/SqorBetaDesktop.png";
import SqotrBetaMobileImage from "@/assets/images/portfolio/SqotrBetaMobile.png";
import StorylineDesktop from "@/assets/images/portfolio/StorylineDesktop.png";
import StorylineMobileImage from "@/assets/images/portfolio/StorylineMobile.png";
import TagLogisticsDesktoo from "@/assets/images/portfolio/TagLogisticsDesktop.png";
import TagLogisticsMobileImage from "@/assets/images/portfolio/TagLogisticsMobile.png";
import BerryIcon from "@/assets/vectors/technology/ Berry.svg?react";
import AntIcon from "@/assets/vectors/technology/Ant.svg?react";
import CypressIcon from "@/assets/vectors/technology/Cypress.svg?react";
import DigitalOceanIcon from "@/assets/vectors/technology/DigitalOcean.svg?react";
import ExpressIcon from "@/assets/vectors/technology/Express.svg?react";
import FirebaseIcon from "@/assets/vectors/technology/Firebase.svg?react";
import GoogleCloudIcon from "@/assets/vectors/technology/GoogleCloud.svg?react";
import JestIcon from "@/assets/vectors/technology/Jest.svg?react";
import MUIIcon from "@/assets/vectors/technology/MUI.svg?react";
import MongoIcon from "@/assets/vectors/technology/Mongo.svg?react";
import MySQLIcon from "@/assets/vectors/technology/MySQL.svg?react";
import NestIcon from "@/assets/vectors/technology/Nest.svg?react";
import NextIcon from "@/assets/vectors/technology/Next.svg?react";
import NodeIcon from "@/assets/vectors/technology/Node.svg?react";
import NotionIcon from "@/assets/vectors/technology/Notion.svg?react";
import PostgresIcon from "@/assets/vectors/technology/PostgreSQL.svg?react";
import PostMarkIcon from "@/assets/vectors/technology/Postmark.svg?react";
import PrismaIcon from "@/assets/vectors/technology/Prisma.svg?react";
import ReactIcon from "@/assets/vectors/technology/React.svg?react";
import ReactExpoIcon from "@/assets/vectors/technology/ReactExpo.svg?react";
import ReactNativeIcon from "@/assets/vectors/technology/ReactNative.svg?react";
import TailwindCSSIcon from "@/assets/vectors/technology/Tailwind.svg?react";
import Typescript from "@/assets/vectors/technology/Typescript.svg?react";
import VercelIcon from "@/assets/vectors/technology/Vercel.svg?react";
import ViteIcon from "@/assets/vectors/technology/Vite.svg?react";
import VueIcon from "@/assets/vectors/technology/Vue.svg?react";
import VuetifyIcon from "@/assets/vectors/technology/Vuetify.svg?react";

export const portfolioConstants = [
  {
    title: "Oblivioni",
    desktopImageUrl: OblivioniDesktopImage,
    mobileImageUrl: OblivioniMobileImage,
    description: "The creative powerhouse that propels your visuals to new heights.",
    details:
      "Oblivioni caters to the high-end needs of filmmakers and advertisers by connecting them with talented composers for custom music. Oblivioni has a network of industry-leading composers who can create bespoke music to perfectly match your vision. An automated system and comprehensive admin section make the ordering process smooth and efficient, saving you valuable time",
    info: [
      { label: "Industry", value: "Musicians" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "1 year" },
      { label: "Website", value: "oblivioni.com", isLink: true },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "React", icon: ReactIcon },
          { name: "Next", icon: NextIcon },
          { name: "Tailwind", icon: TailwindCSSIcon },
          { name: "Cypress", icon: CypressIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Nest.js", icon: NestIcon },
          { name: "Node.js", icon: NodeIcon },
          { name: "Jest", icon: JestIcon },
          { name: "MySQL", icon: MySQLIcon },
          { name: "Digital Ocean", icon: DigitalOceanIcon },
          { name: "Firebase", icon: FirebaseIcon },
        ],
      },
    ],
  },
  {
    title: "TheFlowOps",
    desktopImageUrl: FlowOpsAppDesktop,
    mobileImageUrl: FlowOpsAppMobileImage,
    description: "Efficient event planning made easy with TheFlowOps app.",
    details:
      "TheFlowOps app simplifies event planning with automated reservation functionalities and integrated video conferencing tools. Users can generate Zoom and Google Meet links directly within the app, eliminating the need for manual setup. The app also simplifies booking management and attendance tracking, ensuring a smooth and efficient experience.",
    info: [
      { label: "Industry", value: "Events & Entertainment" },
      { label: "Type", value: "App Development" },
      { label: "Duration", value: "2 year" },
      { label: "Website", value: "theflowops.com", isLink: true },
      { label: "Country", value: "Singapore" },
      {
        label: "Technologies",
        value: [
          { name: "React Native", icon: ReactNativeIcon },
          { name: "Next", icon: NextIcon },
          { name: "Typescript", icon: Typescript },
          { name: "React Expo", icon: ReactExpoIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "Node.js", icon: NodeIcon },
          { name: "Postmark", icon: PostMarkIcon },
          { name: "Prisma", icon: PrismaIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
          { name: "Firebase", icon: FirebaseIcon },
        ],
      },
    ],
  },
  {
    title: "TheFlowOps",
    desktopImageUrl: FlowOpsWebDesktop,
    mobileImageUrl: FlowOpsWebMobileImage,
    description: "The booking platform designed to simplify your event planning.",
    details:
      "TheFlowOps is a booking platform for seat reservations and event planning. We developed its website, which offers a wide selection of partnered venues with continuous updates for user-friendly navigation. Our web development ensures an efficient and convenient event planning experience.     ",
    info: [
      { label: "Industry", value: "Events & Entertainment" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "2 year" },
      { label: "Website", value: "theflowops.com", isLink: true },
      { label: "Country", value: "Singapore" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", icon: ReactIcon },
          { name: "Next.js", icon: NextIcon },
          { name: "Tailwind", icon: TailwindCSSIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Notion", icon: NotionIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
        ],
      },
    ],
  },
  {
    title: "TheFlowOps",
    desktopImageUrl: FlowOpsDashboardDesktop,
    mobileImageUrl: FlowOpsDashboardMobileImage,
    description: "Providing robust admin tools for enhanced operations.",
    details:
      "TheFlowOps admin dashboard provides user-friendly tools for managing bookings, tracking attendance, and optimizing listings, all in one platform. Our approach ensures a smooth event planning experience with automated systems, a wide venue selection, and powerful admin tools for efficient operations.",
    info: [
      { label: "Industry", value: "Events & Entertainment" },
      { label: "Type", value: "Admin Dashboard" },
      { label: "Duration", value: "2 year" },
      { label: "Website", value: "theflowops.com", isLink: true },
      { label: "Country", value: "Singapore" },
      {
        label: "Technologies",
        value: [
          { name: "React", icon: ReactIcon },
          { name: "Vite", icon: ViteIcon },
          { name: "Tailwind", icon: TailwindCSSIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Nest.js", icon: NestIcon },
          { name: "Node.js", icon: NodeIcon },
          { name: "MongoDb", icon: MongoIcon },
          { name: "Express.js", icon: ExpressIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
        ],
      },
    ],
  },
  {
    title: "Renegade Technology",
    desktopImageUrl: RenegageTechnologiesDesktop,
    mobileImageUrl: RenegadeTechnologiesMobileImage,
    description: "The innovative full-service IT Managed Service Provider.",
    details:
      "Renegade values genuine client relationships built on transparency. Our expertise in building their website reflects this by educating clients on the ever-evolving digital landscape. From the beginning, Renegade focused on delivering the most advanced and relevant IT solutions. These solutions are designed with one goal in mind: empowering businesses for long-term success.",
    info: [
      { label: "Industry", value: "IT Services and IT Consulting" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "1 year" },
      { label: "Website", value: "renegadetechnology.com", isLink: true },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "Vue.js", icon: VueIcon },
          { name: "Vuetify", icon: VuetifyIcon },
          { name: "Tailwind", icon: TailwindCSSIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "MongoDb", icon: MongoIcon },
          { name: "Express.js", icon: ExpressIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
        ],
      },
    ],
  },

  {
    title: "TAG Logistics",
    desktopImageUrl: TagLogisticsDesktoo,
    mobileImageUrl: TagLogisticsMobileImage,
    description: "Your gateway to seamless logistics in the heart of the Caucasus and beyond.",
    details:
      "Our expertise resulted in a user-friendly website for TAG Logistics, a company specializing in delivering cargo to Armenia, Russia, Georgia, and Iran. The website offers efficient and reliable solutions for all your transportation needs. For TAG Logistics, we built a powerful admin panel, providing complete order visibility, progress management, and the ability to respond swiftly to new requests.",
    info: [
      { label: "Industry", value: "Transportation" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "1 year" },
      { label: "Website", value: " taglogistics.am", isLink: true },
      { label: "Country", value: "Armenia" },
      {
        label: "Technologies",
        value: [
          { name: "React", icon: ReactIcon },
          { name: "Next", icon: NextIcon },
          { name: "Tailwind", icon: TailwindCSSIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "MySql", icon: MySQLIcon },
          { name: "Digital Ocean", icon: DigitalOceanIcon },
        ],
      },
    ],
  },
  {
    title: "Sqor Beta",
    desktopImageUrl: SqorBetaDesktop,
    mobileImageUrl: SqotrBetaMobileImage,
    description: "AI-driven platform for integrating SaaS tools and extracting insights.",
    details:
      "This plug-and-play platform leverages AI to extract vital insights from everyday company data, which is currently scattered across various tools, facilitating seamless integration and actionable intelligence. We built the admin dashboard to optimize monitoring and data analytics for all integrated AI and non-AI tools, enabling companies to easily authenticate into each SaaS tool through SQOR.",
    info: [
      { label: "Industry", value: "AI" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "1.5 year" },
      { label: "Website", value: " sqor.ai", isLink: true },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "Vue.js", icon: VueIcon },
          { name: "Ant Design Vue", icon: AntIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Express.js", icon: ExpressIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
        ],
      },
    ],
  },
  {
    title: "Storyline",
    desktopImageUrl: StorylineDesktop,
    mobileImageUrl: StorylineMobileImage,
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
          { name: "React.js", icon: ReactIcon },
          { name: "Vite.js", icon: ViteIcon },
          { name: "Material UI", icon: MUIIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Nest.js", icon: NestIcon },
          { name: "Node.js", icon: NodeIcon },
          { name: "Vercel", icon: VercelIcon },
        ],
      },
    ],
  },
  {
    title: "Evaluation",
    desktopImageUrl: EvaluationDesktop,
    mobileImageUrl: EvaluationMobileImage,
    description: "Automated employee evaluation and bonus calculation tool. ",
    details:
      "We developed Evaluation as an automated tool for evaluating employees and calculating bonuses. The platform assesses employees based on their skills, working hours, and other relevant factors connected to their work. ",
    info: [
      { label: "Industry", value: "HR" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "In Progress" },
      { label: "Website", value: "In Progress", isLink: false },
      { label: "Country", value: "United States" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", icon: ReactIcon },
          { name: "Next.js", icon: NextIcon },
          { name: "Tailwind CSS", icon: TailwindCSSIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "Vercel", icon: VercelIcon },
          { name: "MySQL", icon: MySQLIcon },
        ],
      },
    ],
  },
  {
    title: "BEP",
    desktopImageUrl: BepDesktop,
    mobileImageUrl: BepMobileImage,
    description:
      "Unlock your career potential. Connecting with top employers & educational partners!",
    details:
      "Introducing BEA, an online platform that bridges the gap between job seekers and new employment opportunities. We built the whole platform to facilitate seamless connections for employers to fill vacancies and provide educational institutions with additional teams to foster growth and development. ",
    info: [
      { label: "Industry", value: "Educational, Work" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "In Progress" },
      { label: "Website", value: "In Progress", isLink: false },
      { label: "Country", value: "Armenia" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", icon: ReactIcon },
          { name: "Next.js", icon: NextIcon },
          { name: "Tailwind CSS", icon: TailwindCSSIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Express.js", icon: ExpressIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "Digital Ocean", icon: DigitalOceanIcon },
          { name: "MySQL", icon: MySQLIcon },
        ],
      },
    ],
  },
  {
    title: "FH Health",
    desktopImageUrl: FhHealthDesktop,
    mobileImageUrl: FhHealthMobileImage,
    description: "Your custom medical lab and clinic management software.",
    details:
      "FH Health, a leading healthcare technology firm, specializes in delivering innovative digital health solutions. The development includes secure monitoring of COVID-19 test results, automated recommendations for clinic revisits, a user-friendly admin panel, centralized test inventory management, integration of video conferencing for remote consultations, and secure messaging for direct patient-professional communication.",
    info: [
      { label: "Industry", value: "EHealthcare" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "3 years" },
      { label: "Website", value: "fhhealth.com ", isLink: true },
      { label: "Country", value: "Canada" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", icon: ReactIcon },
          { name: "Next.js", icon: NextIcon },
          { name: "Material UI", icon: MUIIcon },
          { name: "Cypress", icon: CypressIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "Jest", icon: JestIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
          { name: "Firebase", icon: FirebaseIcon },
          { name: "Express.js", icon: ExpressIcon },
          { name: "MySQL", icon: MySQLIcon },
          { name: "MongoDB", icon: MongoIcon },
        ],
      },
    ],
  },
  {
    title: "Pollin Healthcare",
    desktopImageUrl: PolinHealthcareDesktop,
    mobileImageUrl: PolinHealthcareMobileImage,
    description: "Healthcare appointment scheduling and treatment management. ",
    details:
      "Pollin Regenerative Health Clinic Management System simplifies patient appointment scheduling. We've developed an admin dashboard to facilitate clinic network actions and optimize connections between patients and doctors. Patients access consultations via a mobile app and interact with an AI-powered chatbot for effortless healthcare actions and information retrieval.",
    info: [
      { label: "Industry", value: "EHealthcare" },
      { label: "Type", value: "Web Development" },
      { label: "Duration", value: "2 years" },
      { label: "Website", value: " pollinfertility.com", isLink: true },
      { label: "Country", value: "Canada" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", icon: ReactIcon },
          { name: "Next.js", icon: NextIcon },
          { name: "Tailwind CSS", icon: TailwindCSSIcon },
          { name: "Cypress", icon: CypressIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "Jest", icon: JestIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
          { name: "Firebase", icon: FirebaseIcon },
          { name: "MySQL", icon: MySQLIcon },
          { name: "MongoDB", icon: MongoIcon },
        ],
      },
    ],
  },
  {
    title: "Plat AI",
    desktopImageUrl: PlatAiDesktop,
    mobileImageUrl: PlatAiMobileImage,
    description:
      "Offering efficient underwriting solutions for lenders, financial institutions, and insurance firms.",
    details:
      "Plat AI platform efficiently evaluates external submissions, integrating into existing workflows or serving as a standalone solution. Using AI-driven risk assessment, Plat AI reduces costs and enhances productivity. Our contributions included both web development and AI development, ensuring a user-friendly, and efficient platform that enhances underwriting processes and overall operational efficiency.",
    info: [
      { label: "Industry", value: "Finance, AI" },
      { label: "Type", value: "Web Development, AI Development" },
      { label: "Duration", value: "2 years" },
      { label: "Website", value: " Internal Use Only", isLink: false },
      { label: "Country", value: "Canada" },
      {
        label: "Technologies",
        value: [
          { name: "React.js", icon: ReactIcon },
          { name: "Next.js", icon: NextIcon },
          { name: "Material UI", icon: MUIIcon },
          { name: "Berry UI", icon: BerryIcon },
          { name: "Cypress", icon: CypressIcon },
          { name: "Typescript", icon: Typescript },
          { name: "Node.js", icon: NodeIcon },
          { name: "Nest.js", icon: NestIcon },
          { name: "Google Cloud", icon: GoogleCloudIcon },
          { name: "PostgreSQL", icon: PostgresIcon },
        ],
      },
    ],
  },
];
