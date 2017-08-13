import en from 'translations/en.json';
import de from 'translations/de.json';

const Store = require('store/index.js');

export const translate = (key) => {
  let language = en;
  if (Store.default.getState().EditorReducer.locale === 'de') {
    language = de;
  }
  return language[key] || '';
};
