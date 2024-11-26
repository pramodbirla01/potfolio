/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Specify the files Tailwind should scan for class names
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        silkscreen: ['Silkscreen', 'cursive'],
        montserratsubrayada: ['Montserrat Subrayada', 'sans-serif'],
      },
      keyframes: {
        changefonts: {
          '0%': { fontFamily: 'Josefin Sans, sans-serif' },
          '10%': { fontFamily: 'Cinzel, serif' },
          '20%': { fontFamily: 'Silkscreen, cursive' },
          '30%': { fontFamily: 'Montserrat Subrayada, sans-serif' },
          '40%': { fontFamily: 'Josefin Sans, sans-serif' },
          '50%': { fontFamily: 'Cinzel, serif' },
          '60%': { fontFamily: 'Silkscreen, cursive' },
          '70%': { fontFamily: 'Montserrat Subrayada, sans-serif' },
          '80%': { fontFamily: 'Josefin Sans, sans-serif' },
          '90%': { fontFamily: 'Cinzel, serif' },
          '100%': { fontFamily: 'Josefin Sans, sans-serif' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        revealLine: { // Keyframes for the line reveal animation
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
      },
      animation: {
        changefonts: 'changefonts 2s forwards',
        infChangefonts: 'changefonts 1s infinite',
        'reveal-left': 'reveal 0.5s ease-out forwards',
        'reveal-line': 'revealLine 0.5s ease-in-out forwards', // Animation for line reveal
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'custom-radial':
          'radial-gradient(circle at closest-side, #3273ff, transparent 90%)',
      },
    },
  },
  plugins: [],
};
