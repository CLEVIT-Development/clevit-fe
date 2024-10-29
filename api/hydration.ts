import express, { Request, Response } from "express";

import { render } from "../ssr";

// Adjust path as necessary

const app = express();

app.get("*", (req: Request, res: Response) => {
  const url = req.originalUrl;
  const appHtml = render(url);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vite SSR on Vercel</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
    </html>
  `);
});

module.exports = app;
