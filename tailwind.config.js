/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
        extend: {
            colors: {
                // Colores inspirados en el logo Academia Fenix
                'fenix-red': '#E63946',
                'fenix-orange': '#F1A208',
                'fenix-blue': '#0A658E',
                'fenix-gold': '#FFD700',
                'fenix-dark': '#0F0F0F',
                'fenix-darkgray': '#1A1A1A',
                primaryBlue: '#0A658E',
                white: '#FFFFFF',
                darkGray: '#1A1A1A'
            },
            backgroundImage: {
                'fenix-gradient': 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
                'fenix-accent': 'linear-gradient(135deg, #E63946 0%, #F1A208 100%)',
            }
        },
    },
  plugins: [],
};