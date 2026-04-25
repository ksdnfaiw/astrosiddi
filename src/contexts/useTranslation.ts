import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageContext";

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };
  
  return { t, language };
}
