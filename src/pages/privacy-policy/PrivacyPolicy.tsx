import { appConfig } from "@/assets/constants/config.constants.ts";
import Layout from "@/common/layout/Layout.tsx";
import DocumentSection from "@/common/templates/DocumentSection.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

const PrivacyPolicy = () => {
  return (
    <>
      <PageSEO
        title="Clevit Privacy Policy: Details on Data We Collect and Use"
        description="Clevit respects personal data, so we drafted our privacy policy carefully. Read about what info we collect, how it is secured, and how you can control it."
        canonicalUrl="https://clevit.io/privacy-policy"
      />
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <div className="w-full flex flex-col items-center space-y-[50px]">
          <h1 className="desktop:text-4xl text-2xl-3xl text-gray-200 desktop:mb-14">
            Privacy Policy
          </h1>
          <DocumentSection
            title="Effective Date: [Insert Date]"
            description={`
            At Clevit, a web and mobile app development company, (referred to as "Clevit," "we," "us,"or "our"), we recognize the importance of protecting your privacy and are committed to
            maintaining the highest standards of data protection and security. This Privacy Policy
            explains our data collection, usage, and disclosure practices for our website
        `}
          />
          <DocumentSection
            headline="Information We Collect"
            title="We collect two types of information"
            listItems={[
              "Personal Information: This includes information you provide voluntarily, such as your name, email address, phone number, and country when you make inquiries, request a quote, or contact us.",
              "Non-Personal Information: This includes information collected automatically, such as your IP address, browser type, device information, and browsing history, using cookies and other tracking technologies. This helps us improve our website and deliver a better user experience.",
            ]}
          />
          <DocumentSection
            headline="How We Use Your Information"
            title="We use the information we collect for the following purposes"
            listItems={[
              "Providing you with our services",
              "Communicating with you and responding to your inquiries",
              "Promotional communication and advertisements",
              "Analyzing website visitor statistics",
              "Technical website troubleshooting",
              "Improving website user experience",
            ]}
          />
          <DocumentSection
            headline="How We Share Your Information"
            title="We may share your personal information with"
            listItems={[
              "Third-party service providers, such as payment processors and analytics providers, to provide you with our services",
              "Affiliates or business partners",
              "We do not sell or rent your personal information to third parties. These providers are obligated to maintain the confidentiality of your information.",
            ]}
            description="In the event of a business transfer, such as a merger or acquisition, your information may be transferred to the new owner. We may also disclose your information if required by law or in response to a legal request."
          />
          <DocumentSection
            headline="Your Rights"
            title="You have the right to"
            listItems={[
              `Access, correct, or delete the personal information we hold. You can do this by contacting us at <a href='mailto:${appConfig.contactMail}}>{appConfig.contactMail}</a>.`,
              "Opt-out of receiving marketing communications from us.",
            ]}
          />
          <DocumentSection
            headline="Cookie Policy"
            title="Our website uses cookies and other tracking technologies to"
            description="By using our website, you consent to our use of cookies. You can learn more about our cookie policy and manage your preferences by visiting our Cookie Policy page."
            listItems={[
              "Improve your browsing experience",
              "Analyze site traffic",
              "Personalize content",
            ]}
          />
          <DocumentSection
            headline="Data Security"
            description="We take the security of your personal information seriously and use reasonable technical and organizational measures to protect it from unauthorized access, disclosure, alteration, or destruction."
          />
          <DocumentSection
            headline="Third-Party Links"
            description="Our website may contain links to external websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party websites you visit."
          />
          <DocumentSection
            headline="Children's Privacy"
            description="Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to remove it from our records."
          />
          <DocumentSection
            headline="Changes to this Privacy Policy"
            description="We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."
          />
          <DocumentSection
            headline="Contact Information"
            description2={`If you have any questions or concerns about this Privacy Policy, our privacy practices, or the collection and use of your personal information, please contact us at <a href='mailto:${appConfig.contactMail}'>${appConfig.contactMail}</a>`}
          />
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
