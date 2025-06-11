/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/app/_layout.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        sent: '#6c757d',
        analysis: '#fd7e14',
        approved: '#198754',
        rejected: '#dc3545'
      }
    }
  },
  plugins: []
}
