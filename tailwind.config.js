/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens : {
        phs : {max : '540px'},
        lg: { min: '540px', max: '1200px' },
        sm : '612px',
      },
      boxShadow: {
        customInner: 'inset 2px 2px 5px black', 
        customOuter: '2px 2px 5px black',  
        designBox : '0px 8px 10px rgb(132, 189, 174), inset 0px -30px 35px rgb(29, 102, 84)',   
        designBox2 : '0px -8px 10px rgb(132, 189, 174), inset 0px 18px 35px rgb(29, 102, 84)',   
        navBox : '0px 0px 9px rgb(255, 255, 255), inset 8px 8px 15px rgba(105, 51, 51, 0)',   
      },
    },
  },
  plugins: [],
}

