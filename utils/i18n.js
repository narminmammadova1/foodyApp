
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri dosyalarını içe aktar
import enTranslation from '../public/locales/en/translation.json';
import frTranslation from '../public/locales/fr/translation.json';
import azTranslation from'../public/locales/az/translation.json';

// Çeviriler
const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  az:{translation:azTranslation}
};

i18n
  .use(initReactI18next) // i18n'i react-i18next'e aktarır
  .init({
    resources,
    lng: 'en', // Varsayılan dil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React zaten kaçış yapıyor
    },
  });

export default i18n;