import i18n from "i18next";
import { initReactI18next } from "react-i18next";
 import enTranslation from "../public/locales/en/translation.json";
import frTranslation from "../public/locales/fr/translation.json";
 import azTranslation from "../public/locales/az/translation.json";

const resources={

// az:{
//     translation:{
// "Dashboard":"idare paneli"

//     }
// },

// en:{
//     translation:{
// "Dashboard":"dashboarddd"

//     }
    
// },
// fr:{
//     translation:{

//         "Dashboard":"dashfrans"
//     }
// }




en:{
    translation:enTranslation
},
az:{
    translation:azTranslation
},
fr:{
    translation:frTranslation
}

}

i18n
.use(initReactI18next)
.init({
lng:"en",
resources

})

export default i18n




