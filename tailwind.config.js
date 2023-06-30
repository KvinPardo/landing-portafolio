/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1120px",
    },
    extend: {
      colors: {
        page: "#FEF8F5",
        primary: "#402B2B",
      },
      dropShadow: {
        primary: "0 20px 40px rgba(238, 77, 71, 0.1)",
        secondary: "0px 30px 40px rgba(244, 125, 103, 0.2)",
        tertiary: "0 20px 40px rgba(32, 56, 100, 0.3)",
      },
      backgroundImage: {
        hero: 'url("/src/assets/slider1.jpg")',
        contact: 'url("/img/algas-contacto.jpg")',
        faq: 'url("/img/faqImage.jpg")',
        algas: 'url("/img/algas-acordeon.jpg")'
      }
      
    },
  },
  plugins: [],
};
