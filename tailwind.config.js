/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montser: ["Montserrat"],
      },
      backgroundImage: {
        bggsky: "url('/src/img/sky.jpg')",
        bgcloud: "url('/src/img/cloud.png')",
        delete: "url('/src/img/delete.png')",
        done: "url('/src/img/tick.png')",
      },
    },
  },
  plugins: [],
};
