/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-100": "#703391",
        "purple-200": "#7033911A",
        "purple-300": "#4f1d85",
        "purple-400": "#E51DFF",
        "purple-500": "#6C30AD",
        "purple-600": "#19124C",
        "blue-100": "#0E59F2",
        "blue-200": "#1404CE",
        "gray-100": "#55606A",
        "gray-200": "#314252",
        "gray-300": "#F8F7FD",
        "gray-400": "#E5E5E5",
        "gray-500": "#FAFAFA",
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
        "base-100": "0 8px 10px 0 #00000012",
        "base-200": "0 8px 10px 0 #0000001A",
        "thick-100": "0 0 0 5px #7033914D",
        "thick-200": "0 0 0 10px #7033914D",
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
        headingGradient: "linear-gradient(254.76deg, #9B3B94 -12.62%, #000000 51%)",
        missionDesktopImage: "url(src/assets/images/missionVision/MissionVisionDesktop.png)",
        missionMobileImage: "url(src/assets/images/missionVision/MissionVisionMobile.png)",
        totalDesktopImage: "url(src/assets/images/totalWave/TotalWaveDesktop.png)",
        totalMobileImage: "url(src/assets/images/totalWave/TotalWaveMobile.png)",
      },
      backgroundPosition: {
        missionDesktopPosition: "-15% 55%",
        missionMobilePosition: "50% 50%",
        totalDesktopPosition: "-15% 50%",
        totalMobilePosition: "65% 50%",
        projectCubeDesktopPosition: "-15% 50%",
        projectCubeMobilePosition: "25% 150%",
      },
      fontSize: {
        xs: [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: "500",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        md: [
          "18px",
          {
            lineHeight: "27px",
            fontWeight: "500",
          },
        ],
        "md-l": [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        "lg-l": [
          "22px",
          {
            lineHeight: "33px",
            fontWeight: "500",
          },
        ],
        lg: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "400",
          },
        ],
        xl: [
          "32px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],
        "2xl": [
          "36px",
          {
            lineHeight: "54px",
            fontWeight: "700",
          },
        ],
        "2xl-3xl": [
          "40px",
          {
            lineHeight: "60px",
            fontWeight: "600",
          },
        ],
        "3xl": [
          "45px",
          {
            lineHeight: "68px",
            fontWeight: "600",
          },
        ],
        "4xl": [
          "66px",
          {
            lineHeight: "99px",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
