/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
"btn-greenshadow":"#27AE60",
"btn-cncl":"#BDBDBD",
"btn-del":"#D63626",
"modal_p":"#4F4F4F",
"text-placeholder":" #F2F2F2",
"headerbg": "#F3F4F6",
"headerUl":" #828282",
"inputPlaceholder":"#000000",
"btnRed":"#D63626",
"mainRed":"#EB5757",
"textblack":" #181617",
"blackdiv2":"#272727",
"mainOrange":"#FB9300",
"lightPink":"#FFE7E7",
"blackli":"#333333",
"text92":" #929292",
"btnGreen":"#6FCF97",
"blackhead":"#00072B",
"select":" #00072B",
"accordionIcon":"#323232"
},
fontFamily:{
  'mukta':["Mukta", 'sans-serif'],
  'montserrat': ["Montserrat", 'sans-serif'],
  'roboto': ['Roboto', 'sans-serif'],
  'poppins': ['Poppins', 'sans-serif'],

},
width:{
  "220":"220px"
},
height:{
  "70":"70px"
},
fontSize:{

  "25":"25px"
,
"16":"16px"
}


    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

