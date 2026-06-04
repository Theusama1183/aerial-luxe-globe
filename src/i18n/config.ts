import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import nl from "./locales/nl/common.json";
import de from "./locales/de/common.json";
import es from "./locales/es/common.json";
import it from "./locales/it/common.json";
import pl from "./locales/pl/common.json";
import fr from "./locales/fr/common.json";
import el from "./locales/el/common.json";
import pt from "./locales/pt/common.json";

export const LOCALES = ["en", "nl", "de", "es", "it", "pl", "fr", "el", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
  pl: "Polski",
  fr: "Français",
  el: "Ελληνικά",
  pt: "Português",
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { common: en },
      nl: { common: nl },
      de: { common: de },
      es: { common: es },
      it: { common: it },
      pl: { common: pl },
      fr: { common: fr },
      el: { common: el },
      pt: { common: pt },
    },
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
