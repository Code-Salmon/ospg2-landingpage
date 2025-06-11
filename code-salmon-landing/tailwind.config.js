module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Rubber Stamp"', 'serif'],
        subheader: ['"Special Elite"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        background: '#1C1C1E',
        text: '#E5E5E5',
        salmon: '#FF6B6B',
        border: '#3A3A3C',
        highlight: '#FFD60A',
        alert: '#FF3B30',
      },
    },
  },
  plugins: [],
};
