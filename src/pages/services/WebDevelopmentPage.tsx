import { webDevelopmentProcessesConstants } from "@/assets/constants/processes/webDevelopmentProcesses.constants.ts";
import { webDevelopmentAdvantageConstants } from "@/assets/constants/services/webDevelopmentAdvantage.constants.ts";
import { webDevelopmentIndustryServeConstants } from "@/assets/constants/services/webDevelopmentIndustry.constants.ts";
import {
  webDevelopmentTechnologiesConstants,
  webDevelopmentTechnologiesTabsConstants,
} from "@/assets/constants/technologies/webDevelopmentTechnologies.constants.ts";
import WebDevelopmentHeadingImage from "@/assets/images/services/WebDevelopmentHeading.png";
import WebDevelopmentOverviewImage from "@/assets/images/services/WebDevelopmentOverview.png";
import ServicesHeading from "@/common/layout/Heading/ServicesHeading.tsx";
import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection.tsx";
import FeedbackSection from "@/pages/home/Feedback/FeedbackSection.tsx";
import ProcessSection from "@/pages/home/ProcessSection.tsx";
import TechnologySection from "@/pages/home/TechnologySection.tsx";
import AdvantageSection from "@/pages/services/sections/AdvantageSection.tsx";
import IndustryServeSection from "@/pages/services/sections/IndustryServe/IndustryServeSection.tsx";
import OverviewSection from "@/pages/services/sections/OverviewSection.tsx";
import ShowcaseSection from "@/pages/services/sections/ShowcaseSection.tsx";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo.tsx";

const WebDevelopmentPage = () => (
  <>
    <PageSEO
      title="Web Development Services | Clevit"
      description="Expert Web Development Services by Clevit. Our solutions include client-server, back-end, front-end and database that addresses your business needs for growth."
      canonicalUrl="https://www.clevit.io/web-development"
    />
    <Layout
      heading={
        <Gradient>
          <ServicesHeading
            image={WebDevelopmentHeadingImage}
            title="Web Development Services"
            imageAlt="web development image"
            description="Create your dream website with a team of professionals ready to assist you on every step of your digital journey"
          />
        </Gradient>
      }
    >
      <AdvantageSection
        title="Paving Your Digital Road"
        subtitle="Streaming Your Business Ideas into the Real Cyberspace"
        description="Web development services incorporate different methods of construction and preservation of websites that are compatible with various browsers. The web application development services also include the design of the page tailored to the specific needs and requirements of the owner of the web application. The smooth design, construction, and maintenance of any web application development is essential for everyone who wishes to build and keep in existence their virtual presence while offering a well-designed and easy-to-use web experience to their unique users."
        advantages={webDevelopmentAdvantageConstants}
      />
      <TechnologySection
        title="There are Different Aspects to a Website Application Development Process"
        tabsConstant={webDevelopmentTechnologiesTabsConstants}
        technologiesConstant={webDevelopmentTechnologiesConstants}
      />
      <OverviewSection
        image={WebDevelopmentOverviewImage}
        imageAlt="Web Development Overview Image"
        title="Impeccable Website Functionality with Clevit"
        description="Having a professional team to perform these duties ensures the safe and smooth running of the website, securely interconnected operation of the features, and easy-to-use website functionalities. Clevit offers professional and unique website development services tailor-made to customers’ requirements and necessities."
      />
      <IndustryServeSection
        title="Industries We Serve"
        description="We invest our work in a significant number of powerful and relevant industries where specific innovative IT-tailored solutions become our top priority. Team up with Clevit to achieve advantageous outcomes"
        industries={webDevelopmentIndustryServeConstants}
      />
      <ProcessSection processes={webDevelopmentProcessesConstants} />
      <ShowcaseSection
        title="Showcasing Excellence"
        description="We prioritize the work our customers entrust us with. Our Portfolio highlights the projects that we have completed over time. Here, we emphasize the achievements we have recorded with the successfully accomplished works and the individual commitment we show for every unique project."
      />
      <FeedbackSection />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </Layout>
  </>
);

export default WebDevelopmentPage;
