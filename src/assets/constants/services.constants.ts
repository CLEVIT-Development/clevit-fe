import { ServicesIdConstants } from "@/assets/constants/services-id.constants.ts";
import AIintegration from "@/assets/images/services/AIintegration.png";
import AppDevelopmentOverview from "@/assets/images/services/AppDevelopmentOverview.png";
import DevopsServices from "@/assets/images/services/DevopsServices.png";
import DigitalMarketingImage from "@/assets/images/services/DigitalMarketingImage.png";
import MachineLearning from "@/assets/images/services/MachineLearning.png";
import OutStaffingImage from "@/assets/images/services/OutStaffing.png";
import ProjectManagment from "@/assets/images/services/ProjectManagment.png";
import QualityAssurance from "@/assets/images/services/QualityAssurance.png";
import SupportMaintenance from "@/assets/images/services/Support&Maintenance.png";
import TechnicalAssessmentImage from "@/assets/images/services/TechnicalAssessmentImage.png";
import UIUXDesigne from "@/assets/images/services/UIUXDesigne.png";
import WebDevelopmentOverviewImage from "@/assets/images/services/WebDevelopmentOverview.png";
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
    image: WebDevelopmentOverviewImage,
    Icon: PC,
    buttonTitle: "Get a Quote",
    title: "Web Development",
    route: "",
    description:
      "Unleash the power of your web site with our Web Development solutions.Responsive Web Design to Custom Web Application Development, Organizations accomplish visions with scalable solutions here.",
    descriptionOffer:
      "Strengthen your brand and drive results with our custom-built and user-friendly websites.",
  },
  {
    id: ServicesIdConstants.Mobile,
    Icon: Phone,
    image: AppDevelopmentOverview,
    buttonTitle: " Start Your Project",
    title: "Mobile App Development",
    route: "/",
    description:
      "Make your dreams a reality with our Mobile App Development Services now. We develop clarity based, efficient and rich user experience mobile applications which boost up engagement on all devices.",
    descriptionOffer: "Develop engaging mobile apps that keep users coming back for more",
  },
  {
    id: ServicesIdConstants.DevOps,
    Icon: Devops,
    image: DevopsServices,
    buttonTitle: "Consult with Us",

    title: "DevOps",
    route: "/",
    description:
      "Optimize your processes and do it with the help of our DevOps Services. We connect the development team with IT operations thus facilitating continuous delivery and optimizing the SDLC.",

    descriptionOffer:
      "We ensure efficient collaboration between development and operations, allowing for speedy and high-quality product deployment.",
  },
  {
    id: ServicesIdConstants.AI,
    Icon: Robot,
    image: AIintegration,
    buttonTitle: "Request a Demo",

    title: "AI Integration",
    route: "/",
    description:
      "Let our AI Integration services make use of the power of AI. That is why we assist you in AI integration into your company’s activities, information processing, and decision-making.",

    descriptionOffer:
      "Clevit can integrate AI features that unlock powerful data insights and make your application truly intelligent.",
  },
  {
    id: ServicesIdConstants.ML,
    Icon: Settings,
    image: MachineLearning,
    buttonTitle: "Discover More",
    title: "Machine Learning Development",
    route: "/",
    description:
      "Leverage your data with the help of our ML Development services. These machine learning models and solutions are integrated into your business to enable predictive analytics and smarter automation.",

    descriptionOffer:
      "We develop custom machine-learning models to help you understand your data better and make smarter decisions",
  },
  {
    id: ServicesIdConstants.Quality,
    Icon: Security,
    image: QualityAssurance,
    buttonTitle: "Book a Consultation",

    title: "Quality Assurance",
    route: "/",
    description:
      "Maximize the quality of your project with our Quality Assurance services. We have elaborate testing and quality control to ensure we produce perfect products that will suit the users.",

    descriptionOffer:
      "Flawless user experience guaranteed. Our QA team ensures everything you build is frustration-free",
  },
  {
    id: ServicesIdConstants.Assessment,
    Icon: TechnicalAssessment,
    buttonTitle: "Schedule an Assessment",
    image: TechnicalAssessmentImage,
    title: "Technical Assessment",
    route: "/",
    description:
      "Get a broad perspective of your technological ecosystem with Technical Assessment services. We analyze your current systems and make suggestions on how to efficiently utilize them and set up plans of expansion.",

    descriptionOffer:
      "We offer in-depth technical assessments to identify and address any weak spots in your current setups.",
  },
  {
    id: ServicesIdConstants.Maintenance,
    Icon: Support,
    buttonTitle: " Get Support",
    image: SupportMaintenance,
    title: "Support & Maintenance",
    route: "/",
    description:
      "Ensure your investments continue to perform optimally with our Support & Maintenance solutions. We give long-term support so that all the applications developed are usable and meet their optimal performance.",

    descriptionOffer:
      "We provide reliable support and ongoing maintenance to keep your digital assets running smoothly, ensuring uninterrupted business operations.",
  },
  {
    id: ServicesIdConstants.OutStaffing,
    image: OutStaffingImage,
    Icon: Outstaffing,
    title: "Outstaffing",
    buttonTitle: "Hire Now",

    route: "/",
    description:
      "Outstaffing – build your team with our professionals. Our skilled professionals blend effectively into your team, enabling you to manage your growing projects effectively.",

    descriptionOffer:
      "Need some extra tech muscle? Clevit can connect you with a pool of highly skilled developers to boost your development team.",
  },
  {
    id: ServicesIdConstants.ProjectManagement,
    image: ProjectManagment,
    Icon: PM,
    title: "Project Management",
    route: "/",
    buttonTitle: "Plan Your Project",

    description:
      "Make your projects successful with the help of our Project Management services. Through planning to implementation, we are fully involved in every detail of the project to meet your business needs.",

    descriptionOffer:
      "Our expert managers keep your project organized and on schedule, overseeing every detail from start to finish.",
  },
  {
    id: ServicesIdConstants.Design,
    image: UIUXDesigne,
    Icon: UIUX,
    title: "UI/UX Design",
    buttonTitle: "See Our Work",
    route: "/",
    description:
      "Design captivating and user-friendly interfaces with our UI/UX Design solutions. Our main goal here is to create sleek and polished interfaces with a highly usable design that enhances the experience.",

    descriptionOffer:
      "We craft visually appealing and easy-to-use interfaces, making your digital products enjoyable and intuitive for users.",
  },
  {
    id: ServicesIdConstants.Marketing,
    image: DigitalMarketingImage,
    Icon: DigitalMarketing,
    title: "Digital Marketing",
    route: "/",
    buttonTitle: "Start Marketing",
    description:
      "Unlock the potential of your brand with our Digital Marketing solutions. We create a marketing strategy in accordance with the effective marketing data to expand your exposure, interact with your target audience, and generate sales.",
    descriptionOffer:
      "We help you reach your target audience with effective digital marketing strategies.",
  },
];
