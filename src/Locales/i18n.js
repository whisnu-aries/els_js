import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Intl from "intl";
import "intl/locale-data/jsonp/en"; // Replace 'en' with your desired locale

import en from "./en";
import id from "./id";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
