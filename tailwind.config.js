module.exports = {
  purge: {
    content: [
      'src/**/*.tsx',
      'src/**/*.jsx',
      'src/**/*.html',
      'public/**/*.html'
    ],
    options: {
      whitelist: ['bg-red-500', 'px-4']
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
