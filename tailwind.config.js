// tailwind.config.js
module.exports = {
  darkMode: "class", // 👈 important for next-themes
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        cream: '#fcf4e9',
      },
    },
  },
  plugins: [],
};
