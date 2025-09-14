/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          mint: "#A8E6CF",
          peach: "#FFD3B6",
          lavender: "#E0BBE4",
          sky: "#B3E5FC",
          ink: "#333333",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}
