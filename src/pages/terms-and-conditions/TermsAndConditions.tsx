import { Link } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { appConfig } from "@/common/constants/config.ts";
import Layout from "@/common/layout/Layout.tsx";
import DocumentSection from "@/common/templates/DocumentSection.tsx";
import { HeaderVariant } from "@/types/variant.types.ts";

const TermsAndConditions = () => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary}>
      <div className="w-full flex flex-col items-center space-y-[50px]">
        <h1 className="desktop:text-4xl text-2xl-3xl text-gray-200 desktop:mb-14">
          Terms And Conditions
        </h1>
        <DocumentSection
          headline="Introduction"
          description={`Welcome to Clevit, a leading provider of web and mobile app development solutions. Our
            terms and conditions govern your use of our ${appConfig.websiteDomain}, and any
            services or products offered therein. By accessing or using our website, you agree to
            abide by these terms and conditions. If you do not agree with any part of these terms,
            you may not access our website.
            `}
        />
        <DocumentSection
          headline="Purchases"
          title="We offer a range of digital and technical solutions designed to enhance your business operations and user experience. To inquire about or purchase our services or products, you may reach out to us via"
          listItems={[
            "Contact Us and Request a Quote forms",
            `Email: ${appConfig.contactMail}`,
            `Phone call inquiry: ${appConfig.contactPhone}`,
          ]}
        />
        <DocumentSection
          headline="Termination Of Services"
          description="We reserve the right to terminate or suspend your access to our services immediately and without prior notice, for any reason, including violation of these terms and conditions. Upon termination, your right to use our services will cease immediately."
        />
        <DocumentSection
          headline="Copyrights, Content, & Trademarks"
          description={`
            All content, including visuals, text, and media, displayed on the Clevit website is owned or licensed by the company and is protected by intellectual property laws. You may not use, reproduce, modify, distribute, or publish any content from our website without prior written permission.            
          `}
          description2={`
            Clevit is not responsible for the content you use on websites developed using our services. You are solely responsible for ensuring that your content complies with copyright laws and other legal regulations.
          `}
        />
        <DocumentSection
          headline="Site Prohibitions"
          title="As a user of our website, you agree not to"
          listItems={[
            "Attempt to access or manipulate website code",
            "Engage in reverse engineering or plagiarism",
            "Commercially exploit website content",
            "Use automated systems to access website content",
            "Interfere with website functionality",
            "Frame or mirror website content",
            "Breach website security measures",
          ]}
        />
        <DocumentSection
          headline="Privacy Policy"
          description={
            <>
              Your use of our website is subject to our privacy policy, which outlines how we
              collect, use, and protect your personal information. By using our website, you consent
              to the terms of our privacy policy. For more information, please refer to our
              <Link to={RoutePaths.PrivacyPolicy} className="text-blue-100">
                Privacy Policy page
              </Link>
            </>
          }
        />
        <DocumentSection
          headline="Changes & Modifications"
          description="We reserve the right to modify or replace these terms and conditions at any time without prior notice. Changes are effective immediately upon posting on our website. Your continued use of our website following the posting of any changes constitutes acceptance of those changes."
        />
        <DocumentSection
          headline="Disclaimers & Limitations of Liability"
          description="Clevit makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the content on our website. Your use of our website is at your own risk. We disclaim all liability for any damages arising out of or related to your use of our website."
        />
        <DocumentSection
          headline="Indemnification"
          description="You agree to indemnify and hold harmless Clevit and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses, including legal fees, arising out of or related to your use of our website or violation of these terms and conditions."
        />
        <DocumentSection
          headline="Contact Information"
          description={`If you have any questions or concerns about these terms and conditions, please contact us at ${appConfig.contactMail}.`}
        />
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
