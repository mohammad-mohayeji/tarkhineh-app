/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          "2xl": "6rem",
        },
      },
      colors: {
        black: "#0C0C0C",
        primary: "#417F56",
        tint: {
          100: "#E5F2E9",
          200: "#CAE4d3",
          300: "#B0D7BD",
          400: "#96C9A7",
          500: "#7CBC91",
          600: "#61AE7B",
          700: "#4E9968",
        },
        shade: {
          100: "#396F4B",
          200: "#315F41",
          300: "#294F36",
          400: "#21402B",
          500: "#183020",
          600: "#102016",
          700: "#08100B",
        },
      },
    },
  },
  plugins: [],
};
