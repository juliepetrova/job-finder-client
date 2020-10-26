module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        './public/**/*.html',
        './src/**/*.vue'
      ]
    }
  ],
  theme: {
    fontFamily: {
      'body': ['Open Sans'],
      'questrial': ['Questrial', 'sans-serif'],
      'comfortaa': ['Comfortaa', 'cursive']
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
