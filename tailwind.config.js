/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sen: ["Sen"],
      },
      colors: {
        dark_100: "#003C43",
        dark_75: "#135D66",
        dark_50: "#77B0AA",
        dark_27: "#cce4de",
        dark_25: "#E3FEF7",
      },
    },
  },
  plugins: [],
};
