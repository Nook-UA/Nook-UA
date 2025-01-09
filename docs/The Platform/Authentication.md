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

## Google Authentication with Firebase

### Overview

In our mobile application, we implemented Google Authentication using Firebase to provide a seamless and secure login experience for users. This integration allows users to authenticate using their Google accounts, leveraging Firebase's robust backend services to handle authentication flows and security.

### Why Google Authentication?

- __Ease of Use:__ Google Authentication simplifies the login process by allowing users to sign in with their existing Google credentials.

- __Security:__ Firebase handles the complexities of secure token exchange and verification, reducing the risk of common vulnerabilities.

- __Cross-Platform Compatibility:__ This approach ensures consistent behavior across both iOS and Android platforms.

### Implementation Details

__1. Setting Up Firebase__

We created a Firebase project for the application.

Enabled Google as a sign-in method under the Authentication section in the Firebase console.

Configured the OAuth consent screen with necessary details, such as application name and logo.

__2. Adding Firebase SDK to the Mobile App__

Integrated the Firebase SDK into the project by adding the necessary dependencies:

For Android: Added `com.google.firebase:firebase-auth` and configured the `google-services.json` file.

__3. Implementing Google Sign-In__

Used the Google Sign-In SDK in conjunction with Firebase Authentication.

#### Steps:

- Integrated Google Sign-In functionality within the app's UI.

- Obtained an ID token from Google Sign-In.

- Passed the token to Firebase to authenticate the user.