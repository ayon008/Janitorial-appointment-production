/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': '#FBFCFF',
        'blue': '#E8FFFE',
        'gray': '#919191',
        'gray-1': '#D3D3D3',
        'orange': '#C6250C',
        'orange-1': '#FF8C3A',
        'orange-light': '#FFB683',
        'yellow': '#FFF900',
        'deep-blue': '#0B286D',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}