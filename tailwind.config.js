module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        black: '0 1px 3px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
