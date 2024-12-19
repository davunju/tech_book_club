/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg.jpg')",
      },
      fontFamily: {
        roboto: '"Roboto Mono", serif',
        space: '"Space Mono", serif',
        inconsolata: '"Inconsolata", serif',
      },
    },
  },
  plugins: [],
};
