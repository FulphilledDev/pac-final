/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
    './public/index.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Courier-New', 'serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66666%',
      },
    },
    minWidth: {
      '1/2': '50%',
      '4/10': '40%',
    },
    minHeight: {
      '2.00': '200px',
      '1.00': '100px',
      '3.00': '300px',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
