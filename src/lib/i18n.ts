import { addMessages, init, locale } from 'svelte-i18n';
import { browser } from '$app/environment';

import en from './locales/en.json';
import sk from './locales/sk.json';

export const setupI18n = () => {
  addMessages('en', en);
  addMessages('sk', sk);

  const savedLocale = browser ? localStorage.getItem('lang') : null; 
  init({
    fallbackLocale: 'en',
    initialLocale: savedLocale || 'en'
  });
};

export { locale };
