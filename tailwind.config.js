/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      backgroundImage:{
        'homeImage':"url('https://assets-prd.ignimgs.com/2021/08/09/dune-poster-blogroll-1628522585792.jpg')",
        'radientColor': 'radial-gradient(#0000 35%, #3D3C3F)',
        'cardRadient':'radial-gradient(#0000 35%, #0000FF)',
        'background': 'radial-gradient(ellipse at center, #ff0000 0%, #0000ff 100%)',
        'startbg':"url('https://media.istockphoto.com/id/1074171800/photo/gold-shining-texture-background.webp?b=1&s=170667a&w=0&k=20&c=GDxisMVX8CF4LRCc7T00V8h5jN254Kq3ZDFWXolINTw=')",
        'authbg': "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      },
     boxShadow:{
      'custom':'0px 0px 4px hsla(210, 12%, 75%, 0.5)'
     },
     backgroundColor:{
      'bgColor':'hsl(210, 10%, 98%)' ,
      'filterColor':'#1a212d',
      'changeColor':'#ffae06',
     },
     colors: {
      text:{
        "dirt":"#141a23"
      },
      primary: {
        "pale-blue": "#e0e8ff",
        "bright-blue": "#3829e0",
        "moderate-blue": "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-greyish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
      },
      neutral: {
        "very-pale-blue": "#f5f7ff",
        "desaturated-blue": "#7280a7",
        "dark-blue": "#1f2f56",
        "dark-blue-2": "hsl(212, 24%, 26%)",
        "grayish-blue": "hsl(211, 10%, 45%)",
        "light-grey": "hsl(223, 19%, 93%)",
        "very-light-grey": " hsl(228, 33%, 97%)",
      },
    },
    },
  },
  plugins: [],
  darkMode:'class'

}

