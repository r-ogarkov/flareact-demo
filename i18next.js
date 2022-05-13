import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import index_en from "./translations/en/index.json"
import index_ru from "./translations/ru/index.json"
import users_en from "./translations/en/users.json"
import users_ru from "./translations/ru/users.json"

i18next
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      en: {
        index: index_en,
        users: users_en
      },
      ru: {
        index: index_ru,
        users: users_ru
      }
    }
  })

export default i18next;
