import { useState } from "react";

import axios from "axios";

type ResponseType = {
  isAuthenticated: boolean;
  token: string;
};

type ErrorType = {
  message: string;
};

interface SignInOptions {
  onSuccess?: (response: ResponseType) => void;
  onFailure?: (error: ErrorType) => void;
}

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string, options?: SignInOptions) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/signin", { email, password });

      if (options?.onSuccess) {
        options.onSuccess(response.data);
      }

      setLoading(false);
    } catch {
      setError("Something went wrong");

      if (options?.onFailure) {
        options.onFailure({ message: "Something went wrong" });
      }

      setLoading(false);
    }
  };

  return { signIn, loading, error };
};

export default useSignIn;
