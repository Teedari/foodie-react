module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576',
      // => @media (min-width: 640px) { ... }

      'md': '768',
      // => @media (min-width: 768px) { ... }

      'lg': '992',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
