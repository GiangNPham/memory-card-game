/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ddf9df",
        background: "#305834",
        primary: "#85eb8d",
        secondary: "#188f68",
        accent: "#3fdfc3",
      },
    },
  },
  plugins: [],
};
