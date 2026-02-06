/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Include all folders that contain Nativewind/Tailwind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
