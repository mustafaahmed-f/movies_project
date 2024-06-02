/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        movieColor: "#FF0000",
        navBar: "#3C3C3C",
      },
      keyframes: {
        viewMore: {
          from: {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(90deg)",
          },
        },
        viewLess: {
          from: {
            transform: "rotate(90deg)",
          },
          to: {
            transform: "rotate(0)",
          },
        },
      },
      animation: {
        viewMore: "viewMore 0.5s forwards",
        viewLess: "viewLess 0.5s forwards",
      },
    },
  },
  plugins: [],
};
