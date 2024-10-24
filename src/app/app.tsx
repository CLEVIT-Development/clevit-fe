/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet";
import ReactModal from "react-modal";
import Routing from "app/routing/routing.tsx";

import ToastService from "@/common/services/toast/ToastService.tsx";
import useLoadFont from "@/utils/fonts.utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactModal.setAppElement("#root");

const App = () => {
  const handleGtagLoad = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", "G-3N6NCX16LH");
  };

  useLoadFont("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3N6NCX16LH"
          onLoad={handleGtagLoad}
        />
      </Helmet>

      <Routing />
      <ToastService />
    </QueryClientProvider>
  );
};

export default App;
