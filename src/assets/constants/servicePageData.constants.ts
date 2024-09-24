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

export const servicePageData = [
  {
    id: ServicesIdConstants.Web,
    Icon: WebDevelopmentOverviewImage,
    title: "Web Development",
    route: "",
    buttonTitle: "Get a Quote",
    description:
      "Unleash the power of your web site with our Web Development solutions.Responsive Web Design to Custom Web Application Development, Organizations accomplish visions with scalable solutions here.",
  },
  {
    id: ServicesIdConstants.Mobile,
    Icon: AppDevelopmentOverview,
    title: "Mobile App Development",
    buttonTitle: " Start Your Project",
    route: "/",
    description:
      "Make your dreams a reality with our Mobile App Development Services now. We develop clarity based, efficient and rich user experience mobile applications which boost up engagement on all devices.",
  },
  {
    id: ServicesIdConstants.DevOps,
    Icon: DevopsServices,
    title: "DevOps Services",
    buttonTitle: "Consult with Us",
    route: "/",
    description:
      "Optimize your processes and do it with the help of our DevOps Services. We connect the development team with IT operations thus facilitating continuous delivery and optimizing the SDLC.",
  },
  {
    id: ServicesIdConstants.AI,
    Icon: AIintegration,
    title: "AI Integration",
    buttonTitle: "Request a Demo",
    route: "/",
    description:
      "Let our AI Integration services make use of the power of AI. That is why we assist you in AI integration into your company’s activities, information processing, and decision-making.",
  },
  {
    id: ServicesIdConstants.ML,
    Icon: MachineLearning,
    title: "Machine Learning Development",
    buttonTitle: "Discover More",
    route: "/",
    description:
      "Leverage your data with the help of our ML Development services. These machine learning models and solutions are integrated into your business to enable predictive analytics and smarter automation.",
  },
  {
    id: ServicesIdConstants.Quality,
    Icon: QualityAssurance,
    title: "Quality Assurance",
    buttonTitle: "Book a Consultation",
    route: "/",
    description:
      "Maximize the quality of your project with our Quality Assurance services. We have elaborate testing and quality control to ensure we produce perfect products that will suit the users.",
  },
  {
    id: ServicesIdConstants.Assessment,
    Icon: TechnicalAssessmentImage,
    title: "Technical Assessment",
    buttonTitle: "Schedule an Assessment",
    route: "/",
    description:
      "Get a broad perspective of your technological ecosystem with Technical Assessment services. We analyze your current systems and make suggestions on how to efficiently utilize them and set up plans of expansion.",
  },
  {
    id: ServicesIdConstants.Maintenance,
    Icon: SupportMaintenance,
    title: "Support & Maintenance",
    buttonTitle: " Get Support",
    route: "/",
    description:
      "Ensure your investments continue to perform optimally with our Support & Maintenance solutions. We give long-term support so that all the applications developed are usable and meet their optimal performance.",
  },
  {
    id: ServicesIdConstants.OutStaffing,
    Icon: OutStaffingImage,
    title: "Outstaffing",
    buttonTitle: "Hire Now",
    route: "/",
    description:
      "Outstaffing – build your team with our professionals. Our skilled professionals blend effectively into your team, enabling you to manage your growing projects effectively.",
  },
  {
    id: ServicesIdConstants.ProjectManagement,
    Icon: ProjectManagment,
    title: "Project Management",
    buttonTitle: "Plan Your Project",
    route: "/",
    description:
      "Make your projects successful with the help of our Project Management services. Through planning to implementation, we are fully involved in every detail of the project to meet your business needs.",
  },
  {
    id: ServicesIdConstants.Design,
    Icon: UIUXDesigne,
    title: "UI/UX Design",
    buttonTitle: "See Our Work",
    route: "/",
    description:
      "Design captivating and user-friendly interfaces with our UI/UX Design solutions. Our main goal here is to create sleek and polished interfaces with a highly usable design that enhances the experience.",
  },
  {
    id: ServicesIdConstants.Marketing,
    Icon: DigitalMarketingImage,
    title: "Digital Marketing",
    buttonTitle: "Start Marketing",
    route: "/",
    description:
      "Unlock the potential of your brand with our Digital Marketing solutions. We create a marketing strategy in accordance with the effective marketing data to expand your exposure, interact with your target audience, and generate sales.",
  },
];
