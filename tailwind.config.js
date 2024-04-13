/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple100: "#703391",
        purple200: "#7033911A",
        blue100: "#0E59F2",
        gray100: "#55606A",
        gray200: "#314252",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        md: [
          "18px",
          {
            lineHeight: "150%",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
