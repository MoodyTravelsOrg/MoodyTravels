export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        textRotation: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(25deg)" },
          "50%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(-25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotate360: "rotate360 2s linear infinite",
        textRotation: "textRotation 2s linear infinite",
      },
    },
  },
  plugins: [],
};