import ReactDOMServer from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";

import App from "./src/app/app";

export function render(url: string): string {
  const helmetContext: { helmet?: HelmetServerState } = {}; //

  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        ${helmet?.title.toString()}
        ${helmet?.meta.toString()}
        ${helmet?.link.toString()}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
      </html>
    `;
}
