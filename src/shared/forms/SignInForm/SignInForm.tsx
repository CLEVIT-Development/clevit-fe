import type { FieldValues } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";

// import { useNavigate } from "react-router-dom";
// import { RoutePaths } from "@/app/routing/routing.constants";
import { useAuthToken } from "@/common/hooks/useAuthToken";
import { SignInSchema } from "@/common/schemas/signInSchema";
import showNotification, { ToastVersions } from "@/common/services/toast/showNotifications";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../ui/Button";
import Input from "../../ui/forms/Input";
import useSignIn from "./hooks";

interface ISignInFormPayload extends FieldValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const methods = useForm<ISignInFormPayload>({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
  });

  // const navigate = useNavigate();
  const { setToken, setRefreshToken } = useAuthToken();
  const { signIn, loading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onFormSubmit = async (data: ISignInFormPayload) => {
    signIn(data.email, data.password, {
      onSuccess: (data) => {
        setToken("access-token-value");
        setRefreshToken("refresh-token-value");
        console.log("Tokens stored!", data);
        // navigate(RoutePaths.Home);
        showNotification({
          type: ToastVersions.success,
          title: "Sign-in successfull",
          description: "You signed in as admin.",
        });
      },
      onFailure: (err) => {
        console.log(err);
        showNotification({
          type: ToastVersions.error,
          title: "Sign-in failed",
          description: "Something went wrong",
        });
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="w-full desktop:w-[500px] space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <Input
          disabled={loading}
          label="Login"
          error={errors.email?.message}
          placeholder="Email"
          {...register("email")}
        />
        <Input
          disabled={loading}
          label="Password"
          error={errors.password?.message}
          placeholder="Password"
          {...register("password")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
