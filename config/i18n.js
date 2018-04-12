const locales = ['en', 'bs']

module.exports = {
  allLocales: locales,
  defaultLocale: 'bs',
  messages: require('../locales/json/translations.json') || {},
  usingRouter: true,
  routingStyle: 'changeLocale',
  forceReloadOnSwitch: false,
  storageMethod: 'cookie',
  storageKey: '_empirica_active_locale',
  cookieExpirationInDays: 30
}
