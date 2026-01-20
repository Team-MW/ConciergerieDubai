/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Dark professional background
        secondary: "#f5f5f5", // Light background
        accent: "#d4af37", // Gold/Luxury accent
        sale: "#dc2626", // Red for sales/discounts
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
