/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      white: "#fff",
      lightPink: "#fff5f5",
      peach: "#FEF0E3",
      red: "#da3535",
      lightRed: "#e55959",
      black: "#000",
      orange: "#F8973A"

    },
    fontFamily: {
      Fitgree: ['Figtree', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      display: ["group-hover"],
      visibility: ["group-hover"] 
    }

  },
  plugins: [
    require('tailwindcss-animated')
  ],
}