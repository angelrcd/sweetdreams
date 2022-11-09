/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        web: {
          boton: "#56B6CB",
          fondo: "#C9D5E0",
          topBar: "#4FA9A9",
          loginButton: "#A5E1AD",
        },
      },

      boxShadow: {
        input: "inset 5px 5px 10px #AAAAAA",
        login: "5px 5px 10px #5555555"
      },

      fontFamily: {
        bluetea: ["bluetea", "cursive"],
      },

      height: {
        login: "600px"
      },

      width: {
        login: "450px"
      },

      borderRadius: {
        login: "40px"
      }
    },
  },
  plugins: [],
};
