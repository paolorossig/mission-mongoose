module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#03b0ff',
          900: '#008ecf'
        },
        dark: {
          100: '#e5e7eb',
          700: '#393f4a',
          900: '#282c34'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss')
  ]
}
