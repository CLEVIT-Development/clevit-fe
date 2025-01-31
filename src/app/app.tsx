/* eslint-disable @typescript-eslint/no-explicit-any */
import { HelmetProvider } from "react-helmet-async";
import ReactModal from "react-modal";

import Routing from "app/routing/routing.tsx";

import ToastService from "@/common/services/toast/ToastService.tsx";
import useLoadFont from "@/utils/fonts.utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactModal.setAppElement("#root");

const App = () => {
  useLoadFont("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Routing />
        <ToastService />
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
