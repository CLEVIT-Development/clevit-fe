import { ServicesIdConstants } from "@/assets/constants/services-id.constants.ts";
import Devops from "@/assets/vectors/Devops.svg?react";
import DigitalMarketing from "@/assets/vectors/DigitalMarketing.svg?react";
import Outstaffing from "@/assets/vectors/Outstaffing.svg?react";
import PM from "@/assets/vectors/PM.svg?react";
import Phone from "@/assets/vectors/Phone.svg?react";
import Robot from "@/assets/vectors/Robot.svg?react";
import Settings from "@/assets/vectors/Settings.svg?react";
import Support from "@/assets/vectors/Support.svg?react";
import TechnicalAssessment from "@/assets/vectors/TechnicalAssessment.svg?react";
import UIUX from "@/assets/vectors/UIUX.svg?react";
import PC from "@/assets/vectors/processes/PC.svg?react";
import Security from "@/assets/vectors/processes/Security.svg?react";

export const servicesConstants = [
  {
    id: ServicesIdConstants.Web,
    Icon: PC,
    title: "Web Development",
    route: "/web-development",
    description:
      "Strengthen your brand and drive results with our custom-built and user-friendly websites.",
  },
  {
    id: ServicesIdConstants.Mobile,
    Icon: Phone,
    title: "Mobile App Development",
    route: "/",
    description: "Develop engaging mobile apps that keep users coming back for more",
  },
  {
    id: ServicesIdConstants.DevOps,
    Icon: Devops,
    title: "DevOps",
    route: "/",
    description:
      "We ensure efficient collaboration between development and operations, allowing for speedy and high-quality product deployment.",
  },
  {
    id: ServicesIdConstants.AI,
    Icon: Robot,
    title: "AI Integration",
    route: "/",
    description:
      "Clevit can integrate AI features that unlock powerful data insights and make your application truly intelligent.",
  },
  {
    id: ServicesIdConstants.ML,
    Icon: Settings,
    title: "Machine Learning Development",
    route: "/",
    description:
      "We develop custom machine-learning models to help you understand your data better and make smarter decisions",
  },
  {
    id: ServicesIdConstants.Quality,
    Icon: Security,
    title: "Quality Assurance",
    route: "/",
    description:
      "Flawless user experience guaranteed. Our QA team ensures everything you build is frustration-free",
  },
  {
    id: ServicesIdConstants.Assessment,
    Icon: TechnicalAssessment,
    title: "Technical Assessment",
    route: "/",
    description:
      "We offer in-depth technical assessments to identify and address any weak spots in your current setups.",
  },
  {
    id: ServicesIdConstants.Maintenance,
    Icon: Support,
    title: "Support & Maintenance",
    route: "/",
    description:
      "We provide reliable support and ongoing maintenance to keep your digital assets running smoothly, ensuring uninterrupted business operations.",
  },
  {
    id: ServicesIdConstants.OutStaffing,
    Icon: Outstaffing,
    title: "Outstaffing",
    route: "/",
    description:
      "Need some extra tech muscle? Clevit can connect you with a pool of highly skilled developers to boost your development team.",
  },
  {
    id: ServicesIdConstants.ProjectManagement,
    Icon: PM,
    title: "Project Management",
    route: "/",
    description:
      "Our expert managers keep your project organized and on schedule, overseeing every detail from start to finish.",
  },
  {
    id: ServicesIdConstants.Design,
    Icon: UIUX,
    title: "UI/UX Design",
    route: "/",
    description:
      "We craft visually appealing and easy-to-use interfaces, making your digital products enjoyable and intuitive for users.",
  },
  {
    id: ServicesIdConstants.Marketing,
    Icon: DigitalMarketing,
    title: "Digital Marketing",
    route: "/",
    description:
      "We help you reach your target audience with effective digital marketing strategies.",
  },
];
