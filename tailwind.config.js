module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // src 하위 파일 중 확장자가 .js,.jsx,.ts,.tsx인 파일을 대상으로 한다.
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
