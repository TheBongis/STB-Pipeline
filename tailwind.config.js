/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}", "./**/*.html", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      screens: {
        xs: "320px",
        // => @media (min-width: 321px) { ... }

        sm: "640px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 768px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },

      width: {
        'custom-scrollbar': '4px', // Set the custom width for the scrollbar
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-out forwards',
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
        Courier: ['Courier', 'sans-serif'],
        Google: ['"Google Sans"', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
        DMSerifDisplay: ['DM Serif Display', 'serif'],
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // using only generate classes strategy
    }),
    require("daisyui"),
    require('flowbite/plugin'),
    function ({ addUtilities }) {
      addUtilities({
        /* Custom scrollbar styles */
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px', // Slimmer scrollbar width
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#f1f1f1', // Scrollbar track color
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: '#888', // Scrollbar thumb color
          borderRadius: '4px', // Rounded scrollbar thumb
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#555', // Scrollbar thumb hover color
        },
      });
    },
  ],
}
