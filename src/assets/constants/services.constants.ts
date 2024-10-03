import { ServicesIdConstants } from "@/assets/constants/services-id.constants.ts";
import AIintegration from "@/assets/images/services/AIintegration.png";
import AppDevelopmentOverviewReverse from "@/assets/images/services/AppDevelopmentOverviewReverse.png";
import DevopsServices from "@/assets/images/services/DevopsServices.png";
import DigitalMarketingImage from "@/assets/images/services/DigitalMarketingImage.png";
import MachineLearning from "@/assets/images/services/MachineLearning.png";
import OutStaffingImage from "@/assets/images/services/Outstaffing.png";
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

import {
  webDevelopmentTechnologiesConstants,
  webDevelopmentTechnologiesTabsConstants,
} from "./technologies/webDevelopmentTechnologies.constants";

export const servicesConstants = [
  {
    id: ServicesIdConstants.Web,
    image: WebDevelopmentOverviewImage,
    imageAlt: "web development image",
    singleServiceHeaderTitle: "Web Development Services",
    singleServiceHeaderDescription:
      "Bring your vision to life with our expert web development team",
    Icon: PC,
    buttonTitle: "Get a Quote",
    title: "Web Development",
    route: "",
    description:
      "Unleash the power of your web site with our Web Development solutions.Responsive Web Design to Custom Web Application Development, Organizations accomplish visions with scalable solutions here.",
    descriptionOffer:
      "Strengthen your brand and drive results with our custom-built and user-friendly websites.",
    singlePageDescription:
      "At Clevit, we understand that your business needs an intensified web presence with efficiently designed, interactive, and affluent traffic sites. Whether it’s an idea, design, build or launch, our dedicated team of specialists are with you every step of the process to ensure not only does your online presence look good but works efficiently.",
    serviceDetails:
      "We also boast of the principles that we uphold in our work as well as the ethical standards that we uphold every day. These core elements are reflected in every project we undertake:These core elements are reflected in every project we undertake:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.Mobile,
    Icon: Phone,
    image: AppDevelopmentOverviewReverse,
    imageAlt: "Mobile App Development image",
    singleServiceHeaderTitle: "Mobile App Development Services",
    singleServiceHeaderDescription: "Transform Your Ideas into High-Performance Mobile Apps",
    buttonTitle: "Start Your Project",
    title: "Mobile App Development",
    route: "/",
    description:
      "Make your dreams a reality with our Mobile App Development Services now. We develop clarity based, efficient and rich user experience mobile applications which boost up engagement on all devices.",
    descriptionOffer: "Develop engaging mobile apps that keep users coming back for more",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.DevOps,
    Icon: Devops,
    image: DevopsServices,

    buttonTitle: "Consult with Us",
    imageAlt: "Devops service image",
    singleServiceHeaderTitle: "DevOps Services & Solutions",
    singleServiceHeaderDescription: "Accelerate Your Development with Seamless DevOps Integration",
    title: "DevOps",
    route: "/",
    description:
      "Optimize your processes and do it with the help of our DevOps Services. We connect the development team with IT operations thus facilitating continuous delivery and optimizing the SDLC.",

    descriptionOffer:
      "We ensure efficient collaboration between development and operations, allowing for speedy and high-quality product deployment.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.AI,
    Icon: Robot,
    image: AIintegration,

    buttonTitle: "Request a Demo",
    imageAlt: "AI integration image",
    singleServiceHeaderTitle: "AI Integration Services",
    singleServiceHeaderDescription: "Unlock the Power of AI with Custom Solutions",
    title: "AI Integration",
    route: "/",
    description:
      "Let our AI Integration services make use of the power of AI. That is why we assist you in AI integration into your company’s activities, information processing, and decision-making.",

    descriptionOffer:
      "Clevit can integrate AI features that unlock powerful data insights and make your application truly intelligent.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.ML,
    Icon: Settings,
    image: MachineLearning,
    imageAlt: "Machine Learning Development image ",
    singleServiceHeaderTitle: "ML Development Services",
    singleServiceHeaderDescription: "Paving the Way for Smarter Solutions",
    buttonTitle: "Discover More",
    title: "Machine Learning Development",
    route: "/",
    description:
      "Leverage your data with the help of our ML Development services. These machine learning models and solutions are integrated into your business to enable predictive analytics and smarter automation.",

    descriptionOffer:
      "We develop custom machine-learning models to help you understand your data better and make smarter decisions",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.Quality,
    Icon: Security,
    image: QualityAssurance,
    buttonTitle: "Book a Consultation",
    imageAlt: "Quality Assurance image",
    singleServiceHeaderTitle: "Data Quality Assurance",
    singleServiceHeaderDescription: "Ensuring Data Integrity and Reliability",
    title: "Quality Assurance",
    route: "/",
    description:
      "Maximize the quality of your project with our Quality Assurance services. We have elaborate testing and quality control to ensure we produce perfect products that will suit the users.",

    descriptionOffer:
      "Flawless user experience guaranteed. Our QA team ensures everything you build is frustration-free",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.Assessment,
    Icon: TechnicalAssessment,
    buttonTitle: "Schedule an Assessment",
    imageAlt: "Technical Assessment image",
    singleServiceHeaderTitle: "Technical Assessment Services",
    singleServiceHeaderDescription: "Evaluating Your System for Peak Performance and Efficiency",
    image: TechnicalAssessmentImage,
    title: "Technical Assessment",
    route: "/",
    description:
      "Get a broad perspective of your technological ecosystem with Technical Assessment services. We analyze your current systems and make suggestions on how to efficiently utilize them and set up plans of expansion.",

    descriptionOffer:
      "We offer in-depth technical assessments to identify and address any weak spots in your current setups.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.Maintenance,
    Icon: Support,
    buttonTitle: "Get Support",
    imageAlt: "Support & Maintence image",

    singleServiceHeaderTitle: "Website Maintenance Services",
    singleServiceHeaderDescription: "Ensuring Your Website’s Optimal Performance and Security",
    image: SupportMaintenance,
    title: "Support & Maintenance",
    route: "/",
    description:
      "Ensure your investments continue to perform optimally with our Support & Maintenance solutions. We give long-term support so that all the applications developed are usable and meet their optimal performance.",

    descriptionOffer:
      "We provide reliable support and ongoing maintenance to keep your digital assets running smoothly, ensuring uninterrupted business operations.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.OutStaffing,
    image: OutStaffingImage,
    Icon: Outstaffing,
    title: "Outstaffing",
    buttonTitle: "Hire Now",
    imageAlt: "Outstaffing image",
    singleServiceHeaderTitle: "Website Maintenance Services",
    singleServiceHeaderDescription: "Ensuring Your Website’s Optimal Performance and Security",
    route: "/",
    description:
      "Outstaffing – build your team with our professionals. Our skilled professionals blend effectively into your team, enabling you to manage your growing projects effectively.",

    descriptionOffer:
      "Need some extra tech muscle? Clevit can connect you with a pool of highly skilled developers to boost your development team.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.ProjectManagement,
    image: ProjectManagment,
    Icon: PM,
    title: "Project Management",
    route: "/",
    buttonTitle: "Plan Your Project",
    imageAlt: "Project Managment image",
    singleServiceHeaderTitle: "IT Outstaffing Services",
    singleServiceHeaderDescription: "Access Skilled Talent On-Demand",
    description:
      "Make your projects successful with the help of our Project Management services. Through planning to implementation, we are fully involved in every detail of the project to meet your business needs.",

    descriptionOffer:
      "Our expert managers keep your project organized and on schedule, overseeing every detail from start to finish.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.Design,
    image: UIUXDesigne,
    Icon: UIUX,
    title: "UI/UX Design",
    imageAlt: "UI/UX designe image ",
    singleServiceHeaderTitle: "UI/UX Design Services",
    singleServiceHeaderDescription: "Designing Engaging and User-Friendly Experiences",
    buttonTitle: "See Our Work",
    route: "/",
    description:
      "Design captivating and user-friendly interfaces with our UI/UX Design solutions. Our main goal here is to create sleek and polished interfaces with a highly usable design that enhances the experience.",

    descriptionOffer:
      "We craft visually appealing and easy-to-use interfaces, making your digital products enjoyable and intuitive for users.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
  {
    id: ServicesIdConstants.Marketing,
    image: DigitalMarketingImage,
    Icon: DigitalMarketing,
    imageAlt: "web development image",
    singleServiceHeaderTitle: "Digital Marketing Services",
    singleServiceHeaderDescription:
      "Accelerating Your Digital Growth with Strategic Marketing Solutions",
    title: "Digital Marketing",
    route: "/",
    buttonTitle: "Start Marketing",
    description:
      "Unlock the potential of your brand with our Digital Marketing solutions. We create a marketing strategy in accordance with the effective marketing data to expand your exposure, interact with your target audience, and generate sales.",
    descriptionOffer:
      "We help you reach your target audience with effective digital marketing strategies.",
    singlePageDescription:
      "If you have some features in mind for your mobile application, then turn them into reality at Clevit – your application solutions with next level performance. No matter if you want to build a native, cross-platform, or hybrid application, our professionals will help you in each step of the workflow, making the final product easy-to-navigate, easily-scaled, and aligned with the vision of your business.",
    serviceDetails:
      "When creating mobile applications, at Clevit we follow several rules that are universal for all projects. Here’s what drives us:",
    offers: [
      {
        title: "Exquisite & Sophisticated Solutions",
        Icon: PC,
        description:
          "We understand that one’s web solution should be not only permanent and effective but also beautiful. Each design and development decision is perfect in its way and does not leave a littered mess, which ruins the outward appearance of your brand.",
      },
      {
        title: "Flexibility",
        Icon: PC,
        description:
          "It is important for you to know that we do not operate on a ‘one size fits all’ basis with businesses. That is why we provide flexibility in our web development solutions with the option to choose the necessity levels. Whether it is highly elaborate modifications or simple executions in conjunction with other software, we provide dynamic solutions.",
      },
      {
        title: "Trust & Ownership",
        Icon: PC,
        description:
          "It is always important to point out that trust is always the ownership in any relationship that we establish. It is an essential policy that the company owns all projects it is involved in to champion clear communication and organizational responsibility. Your achievements are important to us and thus make your objectives our own.",
      },
      {
        title: "Originality",
        Icon: PC,
        description:
          "All our activities are founded and guided by the principle of innovation. With every assignment, we start thinking outside the box, therefore the solutions that we devise are not only relevant but unique as well. You may wonder what makes us so unique in an era where more and more websites are being developed.",
      },
      {
        title: "Quality & Consistency",
        Icon: PC,
        description:
          "Quality is not negotiable for us because our goal is to provide excellent services. It is because of this reason that we adopt rigorous production quality control measures to ensure you receive the best. This is a very critical area to make sure that all your website related development is consistent so that your site is always efficient and aesthetically pleasing.",
      },
      {
        title: "Customer Support",
        Icon: PC,
        description:
          "We are here for you at any point in your suffering. We provide our client with the best services right from the time of consultation and even after launch of your site. We understand that it is possible to have business relationships that span over a long period and that is why the customer comes first.",
      },
    ],
    serviceIndustriesDescription:
      "IT Project Management services include Clevit from multiple sectors of industries. We appreciate the fact that each industry comes with its problems and we provide the best solution to enhance the progress of any project. Some of the industries we serve include:",
    serviceTechnologiesTitle: "Key Aspects of Our Web Development Process",
    serviceTabTechnologies: webDevelopmentTechnologiesTabsConstants,
    serviceTechnologies: webDevelopmentTechnologiesConstants,
    serviceBookConsultation: {
      title: "Ready to Elevate Your Digital Presence? ",
      description: "Contact Us Today to Start Building Your Custom Website.",
    },
    ChooseClevitTitle: "Why Choose Clevit for Technical Assessment Services?",
    ChooseClevitRecomendation: [
      {
        title: "Tailored Solutions",
        description:
          "Here we design small and large-scale websites that correspond to your company’s and brand’s goals.",
      },
      {
        title: "Advanced Technologies",
        description:
          "We utilize up to date technology that will enable us to provide the most efficient, effective and secure website.",
      },
      {
        title: "Scalability",
        description:
          "Whether you are a start-up company or an established enterprise, we create sites that expand your company.",
      },
      {
        title: "Ongoing Support:",
        description:
          "Our work is not done as soon as a product is out on the market. We provide support to make certain your site stays current and modified as per the current trend.",
      },
    ],
    GetConsultation: {
      title: "Let's Build Your Future",
      description:
        "It is time to create new image of your busines online? Contact us today and let us guide you on how to achive a website that will capture your brand and market needs.",
    },
  },
];
