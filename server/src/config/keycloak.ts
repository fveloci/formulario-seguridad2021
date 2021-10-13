const session = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak;

export const keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: false,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    credentials: {
        secret: '621b977f-1ee4-40a2-a121-0e28a3a1be7e'
    }
};

export function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

export function getKeycloak() {
    if (!_keycloak){
        _keycloak = initKeycloak();
    }
    return _keycloak;
}