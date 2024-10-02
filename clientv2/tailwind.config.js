/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'CTColor': "#003566",
        'TColor': "#FFC300",
        'text': '#ffffff',
        'background': '#03000f',
        'primary': '#4ef485',
        'secondary': '#dddbff',
        'accent': '#443dff',
      },
    },
  },
  plugins: [],
}

