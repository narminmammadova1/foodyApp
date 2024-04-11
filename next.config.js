// // const {i18n}=require("./next-i.18next.config")

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;
// // module.exports = {
// //   nextConfig,
// //   i18n


// // }


// const {i18n}=require("./next-i.18next.config")

// import i18n from "./utils/i18n"




/////////////////////////////


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    FIREBASE_AUTH:process.env.FIREBASE_AUTH
    
      }

};

module.exports = {
  ...nextConfig
};






// const i18n = require("./utils/i18n");

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = {
//   ...nextConfig,
//   i18n
// };