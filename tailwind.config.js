const production = process.env.NODE_ENV === 'production'

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    options: {
      keyframes: true
    },
    enabled: production
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
