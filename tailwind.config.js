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
    extend: {
      colors: {
        primary: "#d9a630",
        "primary-dark": "#b88a20",
        "background-light": "#ffffff",
        "background-dark": "#1c1e22",
        "surface-light": "#f8f5f0",
        "surface-dark": "#2a2d33",
        "text-main": "#171612",
        "text-secondary": "#867c65",
      },
      borderRadius: {
        xl: 12,
        "2xl": 16,
      },
    },
  },
  plugins: [],
};
