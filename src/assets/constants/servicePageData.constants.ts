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
    description:
      "Unleash the power of your web site with our Web    Development solutions.Responsive Web Design to Custom Web Application Development, Organizations accomplish visions with scalable solutions here.",
  },
  {
    id: ServicesIdConstants.Mobile,
    Icon: AppDevelopmentOverview,
    title: "Mobile App Development",
    route: "/",
    description:
      "Make your dreams a reality with our Mobile App Development Services now. We develop clarity based, efficient and rich user experience mobile applications which boost up engagement on all devices.",
  },
  {
    id: ServicesIdConstants.DevOps,
    Icon: DevopsServices,
    title: "DevOps Services",
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
  },
  {
    id: ServicesIdConstants.Quality,
    Icon: QualityAssurance,
    title: "Quality Assurance",
    buttonTitle: "Book a Consultation",
    route: "/",
  },
  {
    id: ServicesIdConstants.Assessment,
    Icon: TechnicalAssessmentImage,
    title: "Technical Assessment",
    buttonTitle: "Schedule an Assessment",
    route: "/",
  },
  {
    id: ServicesIdConstants.Maintenance,
    Icon: SupportMaintenance,
    title: "Support & Maintenance",
    buttonTitle: " Get Support",
    route: "/",
  },
  {
    id: ServicesIdConstants.OutStaffing,
    Icon: OutStaffingImage,
    title: "Outstaffing",
    buttonTitle: "Hire Now",
    route: "/",
  },
  {
    id: ServicesIdConstants.ProjectManagement,
    Icon: ProjectManagment,
    title: "Project Management",
    buttonTitle: "Plan Your Project",
    route: "/",
  },
  {
    id: ServicesIdConstants.Design,
    Icon: UIUXDesigne,
    title: "UI/UX Design",
    buttonTitle: "See Our Work",
    route: "/",
  },
  {
    id: ServicesIdConstants.Marketing,
    Icon: DigitalMarketingImage,
    title: "Digital Marketing",
    buttonTitle: "Start Marketing",
    route: "/",
  },
];
