import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [tailwindcss(), autoprefixer()],
};
