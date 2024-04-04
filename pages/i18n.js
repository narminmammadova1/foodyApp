// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
//  import enTranslation from "../public/locales/en/translation.json";
// import frTranslation from "../public/locales/fr/translation.json";
//  import azTranslation from "../public/locales/az/translation.json";

// const resources={

// en:{
//     translation:enTranslation
// },
// az:{
//     translation:azTranslation
// },
// fr:{
//     translation:frTranslation
// }

// }

// i18n
// .use(initReactI18next)
// .init({
// lng:"en",
// resources

// })

// export default i18n





import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export default MyComponent;
