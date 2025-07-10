/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        custom: ['"Your Font Name"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },

        slidein: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },


        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'bg-color-cycle': {
          '0%': { backgroundColor: '#fdfcfb' },
          '25%': { backgroundColor: '#e2ebf0' },
          '50%': { backgroundColor: '#c9d6ff' },
          '75%': { backgroundColor: '#e2ebf0' },
          '100%': { backgroundColor: '#fdfcfb' },
        },

      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
        'slide-in': 'slidein 0.5s ease-out forwards',
        'fade-in': 'fadein 1s ease-in forwards',

        'bg-slide': 'bg-pan 15s ease infinite',
        'bg-fade': 'bg-color-cycle 10s ease-in-out infinite',

      },

      backgroundSize: {
        'size-200': '200% 200%',
      },


    },
  },
  plugins: [],
}