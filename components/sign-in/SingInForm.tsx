"use client";

import type { FieldValues } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { useAuthContext } from "@/common/context/AuthContext";
import useSignIn from "@/common/hooks/auth/useSignIn";
import { SignInSchema } from "@/common/schemas/signInSchema";
import showNotification, { ToastVersions } from "@/common/services/toast/showNotifications";
import { RoutePaths } from "@/shared/constants/route.constants";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/forms/Input";
import { yupResolver } from "@hookform/resolvers/yup";

interface ISignInFormPayload extends FieldValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const methods = useForm<ISignInFormPayload>({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
  });

  const router = useRouter();

  const { signIn, loading } = useSignIn();
  const { handleIsAuthenticated } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onFormSubmit = async (data: ISignInFormPayload) => {
    signIn(data.email, data.password, {
      onSuccess: () => {
        handleIsAuthenticated();
        router.push(RoutePaths.Home);
      },
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
