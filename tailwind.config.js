/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4.5rem",
        },
      },
      colors: {
        'custom-border': 'rgba(0, 0, 0, 0.5)', 
      },
      fontSize: {
        'dynamic-h1': 'clamp(3rem, 3.52rem + 5.6vw, 8rem)',
        'dynamic-h2': 'clamp(2rem, 1.6667rem + 1.6667vw, 3rem)',
        'dynamic-h3': 'clamp(1.875rem, 0.6818rem + 5.9659vw, 4.5rem)',
        'dynamic-des': 'clamp(1rem, 0.8333rem + 0.8333vw, 1.5rem)',
        'dynamic-btn': 'clamp(1.25rem, 1.0417rem + 1.0417vw, 1.875rem)',
      },
      backgroundImage: {
        'hero-primary': "url(/assets/punto.svg)",
        'hero-secondary': "url(/assets/figuras.svg)",
        'hero-tertiary': "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        spaceGrotesk: ["Space-Grotesk", "sans-serif"],
        audiowide: ["AudioWide", "sans-serif"],
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        //animacion de skills
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-110%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        //hero effects
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1.5)' },
          '50%': { transform: 'scale(2)' },
        },
        },
      },
      animation: {
        //animacion de skills
        marqueeLeft: 'marqueeLeft 35s linear infinite',
        marqueeRight: 'marqueeRight 35s linear infinite',
        //hero effects
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
        pulse: 'pulse 1.5s infinite',
        'spin-around': 'spinAround 4s linear infinite',
    },
  },
  plugins: [],
}
