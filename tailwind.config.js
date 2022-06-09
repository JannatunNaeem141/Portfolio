module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: "#64ffda",
          secondary: "#ccd6f6",
          accent: "#0A192F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
