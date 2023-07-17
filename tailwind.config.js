/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
     sm:'480px',
     md:'768px',
     lg:'976px',
     xl:'1440px', 

    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight :'hsl(12,88%,69%)',
        brightRedSuplight:'hsl(12,88%,95%)',
        darkBlue:'hsl(22B,39%,23%)',
        darkGrayishBlue:'hsl(227,12%,61%)',
        verypaleRed:'hsl(13,100%,96%)',
        veryDarkBlue:'hsl(233,12%,13%)',
        veryLightGray:'hsl(0,0%,98%)',
        "color-primary":"#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary":"#ff7d3b",
        "color-gray": "#333",
        "color-white":"#fff",
        "color-blob":"A427DF"
      }
    },
   container:{
    center : true,
    padding:{
     DEFAULT :"20PX",
      md: "50px"
    }
  } 
  },
  plugins: [],
}
