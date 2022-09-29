/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Bungee Spice', 'cursive'],
    },

    extend: {
      backgroundImage: {
        starWarsImage: "url('/src/components/images/starWars.jpeg')",
      },
    },
  },
  plugins: [],
};
