import { useState } from "react";

import { axiosInstance } from "@/services/axios.service";
import LocalStorageService from "@/services/localstorage.service";

type ResponseType = {
  accessToken: string;
  refreshToken: string;
};

interface SignInOptions {
  onSuccess?: () => void;
  onFailure?: (errorMessage: string) => void;
}

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string, options?: SignInOptions) => {
    setLoading(true);
    setError(null);

    try {
      const response: { data: ResponseType } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      LocalStorageService.setToken(accessToken);
      LocalStorageService.setRefreshToken(refreshToken);

      options?.onSuccess?.();

      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      options?.onFailure?.(err as string);
    }
  };

  return { signIn, loading, error };
};

export default useSignIn;
