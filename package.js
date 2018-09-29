Package.describe({
  name: "hotello:accounts-keycloak",
  summary: "Login service for Keycloak accounts",
  version: "2.0.0",
  git: "https://github.com/hotello/meteor-accounts-keycloak.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('hotello:keycloak-oauth@2.0.0');
  api.imply('hotello:keycloak-oauth');

  api.addFiles("keycloak.js");
});
