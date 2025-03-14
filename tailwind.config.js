module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'serif']
      },
      colors: {
        'primary': '#3858F6',
        'secondary': '#F6F8FC',
        'dark': '#1D2630',
        'theme-light': '#F6F8FC',
        'border': '#E1E9F8'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: []
}
