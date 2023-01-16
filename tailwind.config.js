module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        wiggle2: 'wiggle 2.5s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(45deg)' },
        },
        wiggle2: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(45deg)' },
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui")
  ],
  daisyui: {
    themes: [],
  }
}
