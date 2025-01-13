/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "rgb(11,11,11)",
        color2: "rgb(248, 250, 255)",
        color3: "#3C65F5",
        color4: "rgb(160, 171, 184)",
        color5: "rgb(239, 243, 252)",
      },
      fontFamily: {
        PlusJakartaSans: "Plus Jakarta Sans",
      },
    },
  },
  plugins: [require("daisyui")],
};
