module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        main: "var(--colorPrimary)",
        sub: "var(--colorSecondary)",
      },
      backgroundColor: {
        main: "var(--backgroundColorPrimary)",
        "code-block": "var(--backgroundColorSecondary)",
        blockquote: "var(--backgroundColorThird)",
      },
      borderColor: {
        main: "var(--colorPrimary)",
      },
      divideColor: {
        main: "var(--colorPrimary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
