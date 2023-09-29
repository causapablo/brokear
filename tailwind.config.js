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
      xl: "1200px",
      "2xl": "1660px",
    },
    colors: {
      white: "#fff",
      lightPink: "#193330",
      peach: "#193330",
      red: "#b3d9be",
      red2: "#D0312D",
      lightRed: "#90ee90",
      black: "#000",
      orange: "#F8973A"

    },
    fontFamily: {
      Figtree: ['Figtree', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Grotesk : ['Space Grotesk', 'sans-serif'],
      Dancing : ['Dancing Script', 'sans-serif']
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