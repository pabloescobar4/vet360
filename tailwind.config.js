/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      keyframes: {
        'fade-in-down': {
          'from': {
            transform: 'translateY(-0.5rem)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-out-up': {
          'from': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          'to': {
            transform: 'translateY(-0.5rem)',
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'fade-out-up': 'fade-out-up 0.2s ease-in',
      },
    },
  },
    
  
  plugins: [],
};