import type { FieldValues } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
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

  const navigate = useNavigate();

  const { signIn, loading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onFormSubmit = async (data: ISignInFormPayload) => {
    signIn(data.email, data.password, {
      onSuccess: () => navigate(RoutePaths.Home),
      onFailure: (errorMessage: string) =>
        showNotification({
          type: ToastVersions.error,
          description: errorMessage,
        }),
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
