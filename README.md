# hotello:accounts-keycloak

A login service for Keycloak.

## Configuration

As any official Meteor account package, upsert a configuration object:

```js
ServiceConfiguration.configurations.upsert({service: 'keycloak'}, {
  $set: {
    serverUrl: '<KEYCLOAK_SERVER_URL>',
    realm: '<REALM_NAME>',
    clientId: '<CLIENT_ID>',
    realmPublicKey: '<PUBLIC_KEY>',
    bearerOnly: true
  }
});
```
