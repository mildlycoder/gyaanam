/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cta-pattern': "url('/assets/cta-mask.png')",
        'coupon': "url('/assets/coupon-bg.png')"
      },
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
