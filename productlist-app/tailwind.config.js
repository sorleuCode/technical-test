module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#3B82F6", dark: "#2563EB" },
        danger: { DEFAULT: "#EF4444", dark: "#DC2626" }
      }
    },
  },
  plugins: [],
};
