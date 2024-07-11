import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import ContactUsForm from "@/shared/forms/ContactUsForm";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import ContactInfo from "./ContactInfo";

const ContactUsPage = () => {
  return (
    <>
      <PageSEO
        title="Contact for web and mobile development | Clevit"
        description="Contact Clevit team and order professional Web and Mobile development services. Just fill out the form and we'll get back to you right away."
        canonicalUrl="https://www.clevit.io/contact-us"
      />
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section>
          <div className="flex flex-col space-y-6 desktop:max-w-[80%] ">
            <h1 className="desktop:text-3xl text-lg  font-semibold text-gray-200 text-center">
              Your Idea, Our Expertise. Let's Collaborate!
            </h1>
            <p className="desktop:text-md text-base font-normal text-gray-200 desktop:text-center">
              No matter where you are in your project journey. We'll listen to your needs, offer
              insightful advice, and create a customized plan that gets your project rolling. Fill
              out our contact form, and we'll reach out within a few hours to discuss your goals. We
              can't wait to partner with you!
            </p>
          </div>
          <div className="w-full flex lg:flex-row flex-col items-center desktop:justify-between lg:space-x-[60px] space-x-0 lg:space-y-0 space-y-[48px] bg-contactUsGradient rounded-lg-l  lg:pt-12 lg:px-11 lg:pb-12 px-5 pt-6 pb-5 ">
            <ContactInfo />
            <ContactUsForm />
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default ContactUsPage;
