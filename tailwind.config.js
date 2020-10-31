module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  options: {
    whitelistPatterns: [],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
