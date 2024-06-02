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
            transfom: "rotate(0)",
          },
          to: {
            transform: "rotate(90deg)",
          },
        },
        viewLess: {
          from: {
            transfom: "rotate(90deg)",
          },
          to: {
            transform: "rotate(0)",
          },
        },
      },
      animation: {
        viewMore: "viewMore 0.5s ease-in-out",
        viewLess: "viewLess 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
