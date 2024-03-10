/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
colors:{
"dark-body":" #1E1E30",
"dark-div":" #27283C",

"btn-pink":" #C035A2",
"input-gray":"#5A5B70",
"login-gray":" #38394E",
"par-text":" #C7C7C7",
"main-purple":"#C74FEB",
"text-sideBar":"#F2F2F2DE",
"bg-select" :"#5A5B70",
"text-darkk":"#1E1E30",
"par2-text":"#8E8E93",
"par3-text":"#828282",
"par-blue-text":"#00B2A9",
"text-header":"#F5F5F5",
"modal-div":"#43445A",
"btn-greenshadow":"#27AE60"
},
fontFamily:{
  'mukta':["Mukta", 'sans-serif'],
  'montserrat': ["Montserrat", 'sans-serif'],
  'roboto': ['Roboto', 'sans-serif'],
  'poppins': ['Poppins', 'sans-serif'],

},


    },
  },
  plugins: [],
}

