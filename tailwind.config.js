/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use class-based dark mode so default can be dark
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./sections/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#e6eeff',
          500: '#6C7CFF'
        },
        glass: 'rgba(255,255,255,0.06)'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(2,6,23,0.35)'
      }
    }
  },
  plugins: []
}
