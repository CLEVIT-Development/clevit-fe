import { Helmet } from "react-helmet";

import Routing from "app/routing/routing.tsx";

import ToastService from "@/common/services/toast/ToastService.tsx";

const App = () => (
  <>
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3N6NCX16LH"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3N6NCX16LH');
        `}
      </script>
    </Helmet>
    <Routing />
    <ToastService />
  </>
);

export default App;
