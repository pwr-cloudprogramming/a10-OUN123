const AWS = require('aws-sdk');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const config = require('./config');

AWS.config.update({ region: config.AWS_REGION });

const cognito = new AWS.CognitoIdentityServiceProvider();

const registerUser = async (email, password) => {
    const params = {
        ClientId: config.COGNITO_CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [
            {
                Name: 'email',
                Value: email
            }
        ]
    };
    return cognito.signUp(params).promise();
};

const verifyUser = async (email, code) => {
    const params = {
        ClientId: config.COGNITO_CLIENT_ID,
        Username: email,
        ConfirmationCode: code
    };
    return cognito.confirmSignUp(params).promise();
};

const loginUser = async (email, password) => {
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: config.COGNITO_CLIENT_ID,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    };
    return cognito.initiateAuth(params).promise();
};

const getPublicKeys = async () => {
    const url = `https://cognito-idp.${config.AWS_REGION}.amazonaws.com/${config.COGNITO_USER_POOL_ID}/.well-known/jwks.json`;
    const response = await fetch(url);
    const { keys } = await response.json();
    return keys.reduce((acc, key) => {
        acc[key.kid] = jwkToPem(key);
        return acc;
    }, {});
};

const verifyToken = async (token) => {
    const tokenSections = (token || '').split('.');
    if (tokenSections.length < 2) {
        throw new Error('requested token is invalid');
    }
    const headerJSON = Buffer.from(tokenSections[0], 'base64').toString('utf8');
    const header = JSON.parse(headerJSON);

    const keys = await getPublicKeys();
    const key = keys[header.kid];

    if (key === undefined) {
        throw new Error('claim made for unknown kid');
    }

    return jwt.verify(token, key);
};

module.exports = {
    registerUser,
    verifyUser,
    loginUser,
    verifyToken
};
