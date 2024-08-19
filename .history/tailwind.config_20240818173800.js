/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, jsx}"],
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

