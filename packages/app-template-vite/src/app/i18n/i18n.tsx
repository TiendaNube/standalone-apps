import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import pkg from '../../../package.json';

import { ELocale, Countries, ICountries } from './i18n.types';

const country = process.env.COUNTRY as keyof ICountries

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: Countries[`${country ?? 'pt-BR'}`],
    ns: 'common',
    defaultNS: 'common',
    load: 'currentOnly',
    fallbackLng: ELocale.BRAZIL,
    supportedLngs: Object.values(ELocale),
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json?v=${pkg.version}`,
      requestOptions: {
        cache: 'no-cache'
      }
    },
    interpolation: {
      escapeValue: false,
    }
  });

i18n.services.pluralResolver.addRule(ELocale.BRAZIL, {
  numbers: [1, 2],
  plurals: (n: number) => {
    return Number(n !== 1);
  }
});

export default i18n;
