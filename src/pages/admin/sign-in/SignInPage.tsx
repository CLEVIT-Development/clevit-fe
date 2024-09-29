import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import SignInForm from "@/shared/forms/SignInForm/SignInForm";
import { HeaderVariant } from "@/types/variant.types.ts";

const SignInPage = () => {
  return (
    <>
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section className="my-36 ">
          <h1 className="desktop:text-2xl text-lg">Admin Sign in</h1>
          <SignInForm />
        </Section>
      </Layout>
    </>
  );
};

export default SignInPage;
