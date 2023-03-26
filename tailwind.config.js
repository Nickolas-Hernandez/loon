/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FAFAFA',
        'accent': '#E8E8E8',
        'dark-primary': '#0F0F0F',
        'dark-accent': '#2E2E2E',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
