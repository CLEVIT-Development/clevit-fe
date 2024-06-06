import Routing from "app/routing/routing.tsx";

import ToastService from "@/common/services/toast/ToastService.tsx";

const App = () => (
  <>
    <Routing />
    <ToastService />
  </>
);

export default App;
