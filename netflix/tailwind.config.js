/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        foreground: '#141414',
        light: '#ffffff'
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"]
    }
  },
  plugins: [],
}

