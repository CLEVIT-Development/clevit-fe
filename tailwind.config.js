/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-100": "#703391",
        "purple-200": "#7033911A",
        "purple-300": "#4f1d85",
        "blue-100": "#0E59F2",
        "blue-200": "#1404CE",
        "gray-100": "#55606A",
        "gray-200": "#314252",
        "gray-300": "#F8F7FD",
      },
      animation: {
        swipeRight: "swipeRightKeyframe 0.5s",
        swipeLeft: "swipeLeftKeyframe 0.5s",
        swipeTop: "swipeTopKeyframe 0.5s",
        swipeBottom: "swipeBottomKeyframe 0.5s",
      },
      keyframes: {
        swipeRightKeyframe: {
          "0%": {
            right: "300px",
            opacity: 0,
          },
          "100%": {
            right: 0,
            opacity: "100%",
          },
        },
        swipeLeftKeyframe: {
          "0%": {
            left: "300px",
            opacity: 0,
          },
          "100%": {
            left: 0,
            opacity: "100%",
          },
        },
        swipeTopKeyframe: {
          "0%": {
            top: "50px",
            opacity: 0,
          },
          "100%": {
            top: 0,
            opacity: "100%",
          },
        },
        swipeBottomKeyframe: {
          "0%": {
            bottom: "50px",
            opacity: 0,
          },
          "100%": {
            bottom: 0,
            opacity: "100%",
          },
        },
      },
      boxShadow: {
        base: "0 8px 10px 0 #00000012",
      },
      screens: {
        xs: "270px",
        sm: "640px",
        md: "768px",
        desktop: "1024px",
        lg: "1260px",
        xl: "1440px",
        "2xl": "1600px",
        "3xl": "2056px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        quoteGradient: "linear-gradient(88.98deg, #9B3B94 0.87%, #210F2B 79.26%)",
        headingGradient: "linear-gradient(250.07deg, #9B3B94 14.33%, #000000 43.64%)",
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
        xl: [
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

// @TODO: add font size config
// 3xl, 2xl, xl, lg, md, base, sm, xs
