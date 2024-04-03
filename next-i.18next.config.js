

// const path = require("path");

// module.exports = {
//   i18n: {
//     locales: ['en',  'az','fr'],
//     defaultLocale: 'en',
//     localePath: path.resolve('./public/locales')
//     // dev
//     // reloadOnPrerender:true
//   },
// };



const path = require("path");

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'az'],
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales')
  },
};

