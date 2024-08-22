/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      width: {
         a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
    },
  },
  plugins: [],
}

