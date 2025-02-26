import { addMessages, init, locale } from 'svelte-i18n';

import en from './locales/en.json';
import sk from './locales/sk.json';

export const setupI18n = () => {
  addMessages('en', en);
  addMessages('sk', sk);

  init({
    fallbackLocale: 'en',
    initialLocale: localStorage.getItem('lang') || 'en'
  });
};

export { locale };