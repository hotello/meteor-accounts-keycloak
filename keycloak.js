Accounts.oauth.registerService('keycloak');

if (Meteor.isClient) {
  const loginWithKeycloak = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Keycloak.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction('keycloak', loginWithKeycloak);
  Meteor.loginWithKeycloak = function () {
    return Accounts.applyLoginFunction('keycloak', arguments);
  };
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately
    // be used from the client (if transmitted over ssl or on
    // localhost).
    forLoggedInUser: ['services.keycloak'],
    forOtherUsers: [
      'services.keycloak.name', 'services.keycloak.given_name',
      'services.keycloak.family_name', 'services.keycloak.preferred_username',
      'services.keycloak.picture'
    ]
  });
}
