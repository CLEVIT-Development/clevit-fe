import Section from "@/common/templates/Section";
import SignInForm from "@/components/sign-in/SingInForm";

const SignInPage = () => {
  return (
    <Section className="my-36">
      <h1 className="desktop:text-2xl text-lg">Admin Sign in </h1>
      <SignInForm />
    </Section>
  );
};

export default SignInPage;
