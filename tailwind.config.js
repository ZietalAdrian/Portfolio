/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./img/hero.jpg')",
      }),
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-100%,0)" },
        },
        "marquee-right": {
          "0%": { transform: "translate(-100%,0)" },
          "100%": { transform: "translate(0,0)" },
        },
        jump: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-right": "marquee-right 20s linear infinite",
        jump: "jump 0.3s ease-in-out",
      },
    },
    fontFamily: {
      bodoni: ["Bodoni"],
      sans: [
        '"Inter"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  plugins: [],
};
