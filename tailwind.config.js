/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': '#26304F',
        'custom-orange': '#FF9D15',

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 157, 21, 0.59) 0%, rgba(38, 48, 79, 0.59) 100%)',
      },
      colors: {
        'custom-primary': '#26304F',
        'custom-orange': '#FFA500',
      },
    },
  },
  plugins: [],
}

