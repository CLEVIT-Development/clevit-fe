/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple100: '#703391',
        blue100: '#0E59F2',
        gray100: '#55606A'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}

