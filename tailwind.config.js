/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
        extend: {
            colors: {
                primaryBlue: '#0A658E',
                white: '#FFFFFF',
                darkGray: '#2F4858'
            }
        },
    },
  plugins: [],
};