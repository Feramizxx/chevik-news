/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary-bg': '#011027',
        'primary-card': '#021D46',
        'news-text': '#F3F3F3',
        'news-empty-border': '#949494',
        'line': '#243652'
      },
      fontFamily: {
        'primary': ['Nunito Sans', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
