/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#849fd9',
        customPurpleDark: '#6a82b3',
        customGray: '#212121',
        customBlack: '#171717',
        customDarkGray: '#2f2f2f',
        customDarkerGray: '#3b3f44',
      },
      keyframes: {
        logo: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'logo-1': 'logo 5s ease-in-out infinite',
        'logo-2': 'logo 5s ease-in-out 0.5s infinite',
        'logo-3': 'logo 5s ease-in-out 1s infinite',
        'logo-4': 'logo 5s ease-in-out 1.5s infinite',
        'logo-5': 'logo 5s ease-in-out 2s infinite',
        'logo-6': 'logo 5s ease-in-out 2.5s infinite',
      },
    },
  },
  plugins: [],
};
