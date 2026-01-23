declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BACKEND_URL: string;
      NEXT_PUBLIC_TINY_MCE_KEY: string;
      SMTP_HOST: string;
      SMTP_USER: string;
      SMTP_PASS: string;
    }
  }
}

export {};
