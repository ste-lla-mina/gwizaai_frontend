/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",    
          blue: "#0EA5E9",    
          accent: "#0284C7", 
          bg: "#F8FAFC",     
        },
      },
    },
  },
  plugins: [],
}