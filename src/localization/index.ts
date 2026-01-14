import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from './ru.json'
import en from './en.json'
import tk from './tk.json'

i18n.use(initReactI18next).init({
  resources: {
    tk: {
      translation: tk,
    },
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
  },
  lng: 'tk',
  fallbackLng: 'tk',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
