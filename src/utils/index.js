import en from "../locales/en/messages.json";
import zh_Hans from "../locales/zh_Hans/messages.json";

const translations = {
  en,
  zh_Hans,
};
const i18nTInner = (key, defaultLocale = "en") => {
  let value = translations[defaultLocale][key];
  if (value) {
    return value;
  } else {
    return `UnTrans_${key}`;
  }
};

export const i18nT = (key, defaultLocale) => {
  //   if (i18nFunDun) {
  //     let i18nValue = i18nFunDun(key);
  //     if (i18nValue) {
  //       return i18nValue;
  //     }
  //   }
  let i18nValue = i18nTInner(key, defaultLocale);
  return i18nValue;
};
