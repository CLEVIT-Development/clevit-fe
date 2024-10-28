import { seoConfig } from "@/app/seo.config";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import ContactUsForm from "@/shared/forms/ContactUsForm";
import Seo from "@/shared/seo/SEO";
import { HeaderVariant } from "@/types/variant.types.ts";

import ContactInfo from "./ContactInfo";

const ContactUsPage = () => {
  return (
    <>
      <Seo {...seoConfig.contactUs} />
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section className="mt-8 px-5">
          <div className="flex flex-col space-y-6 desktop:max-w-[80%] ">
            <h1 className="desktop:text-3xl text-lg  font-semibold text-gray-200 text-center">
              Your Idea, Our Expertise. Let's Collaborate!
            </h1>
            <p className="desktop:text-md text-base font-normal text-gray-200 desktop:text-center px-5">
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
