import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationFa, translationEn } from "../locales/";

const resources = {
  en: {
    translation: translationEn,
    dir: "ltr",
  },
  fa: {
    translation: translationFa,
    dir: "rtl",
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
});

export default i18n;
