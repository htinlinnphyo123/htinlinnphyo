module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        theme: '#90e0ef',
        secondary: '#dd0000',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
