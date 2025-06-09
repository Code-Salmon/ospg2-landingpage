module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        detective: ['"Special Elite"', 'cursive'],
      },
      colors: {
        background: '#1C1C1E',      // Charcoal
        text: '#E5E5E5',             // Light Gray
        salmon: '#FF6B6B',           // Accent / Buttons
        border: '#3A3A3C',           // Border
        highlight: '#FFD60A',        // Link Hover / Highlight
        alert: '#FF3B30',            // Error / Warning
      },
    },
  },
  plugins: [],
};