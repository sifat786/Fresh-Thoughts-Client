const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],

  theme: {

    fontFamily: {
      'sifu': ['Alatsi', 'sans-serif'],
      'gfs': ['GFS Neohellenic', 'sans-serif'],
    },
    
    container: {
      center: true,
    },
    screens: {
      'sm': '380px',
      'md': '700px',
      'lg': '1280px',
    },

    extend: {},
  },


  plugins: [
    require("daisyui"),
    flowbite.plugin(),
  ]

};