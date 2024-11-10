# Authentication

## Overview
The Nook authentication uses two methods, one for the client and other for the user.

As the client uses the web interface to interact with the sistem we decided to use Cognito service to manage authentication.

The user uses a android app so it is easier to use the google oauth for authentication.

## Client Authentication with Cognito

The authentication of the web app is managed by the service AWS Cognito.

The NextAuth library for Next js is responsible to manage the session, and tokens given by the Cognito API.

The requests to the backend are made with the Token in the authorization header, the api verifies the token and reply to the request, it can be used for the id_token or access_token.

Using the Next Auth we also refresh the token with the refresh token.