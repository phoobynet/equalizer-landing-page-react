/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      primary: '#66E2DC',
      secondary: '#FA7453',
      tertiary: '#FFB964',
      whitish: '#FCFAF9',
      blackish: '#191826',
    },
    fontSize: {
      // TODO: Consider how this works with responsive design
      'heading-1': [
        '5.5rem',
        {
          lineHeight: '5.5rem',
          letterSpacing: '-0.028125rem',
          fontWeight: 700,
        },
      ],
      'heading-2': [
        '2.5rem',
        {
          lineHeight: '3rem',
          fontWeight: 700,
          letterSpacing: '-0.032rem',
          paragraphSpacing: '0.0625rem',
        },
      ],
      'body-1': [
        '1.125rem',
        {
          fontWeight: 400,
          lineHeight: '28px',
          letterSpacing: 0,
        },
      ],
      'body-2': [
        '1rem',
        {
          fontWeight: 400,
          lineHeight: '26px',
        },
      ],
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
