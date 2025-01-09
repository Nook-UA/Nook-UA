# Mobile App

For the mobile app we decided to implement the following main features:

- Authentication with *Google*
- See nearby Parking Lots
- See Parking Lot details
- Define a new location to obtain the nearby Parking Lots

## 1. Authentication with Google

![Sign-In Screen](/img/mobile_app/signin_screen.png)

![Google Sign-In](/img/mobile_app/signin_screen_google.png)

The mobile app allows users to sign in using their Google account. This feature is implemented using the Google Sign-In SDK. The user can click on the "Sign in with Google" button, which will open a Google Sign-In dialog and the user must choose on account to continue to the rest of the mobile app.

## 2. See Nearby Parking Lots

![Nearby Parking Lots](/img/mobile_app/map_screen.png)

After a user logins with success using Google's Oauth, this is the screen that will be shown. Where a map is presented with the user's current location and some icons with a P letter that represents the parking lots that are near the user. There's also two floating action buttons where the first one, if pressed refreshes the nearby parking spots, meaning that it will make a new request to the API to obtain the nearby parking spots. The second button is to define a new location to obtain the nearby parking spots which will be explain in the next section.

## 3. Define a new location to obtain the nearby Parking Lots

![Define Location](/img/mobile_app/set_new_location.png)

![New Location](/img/mobile_app/new_location.png)

When the right floating action button is pressed first it appears a message in a toast has the first image in this section presents saying that the user needs to press in the map to define a new location. After the user presses in the map and confirms this new location by clicking again in the same button a orange marker icon appears, as the second image in this section presents, and the app will make a new request to the API to obtain the nearby parking spots with this new location. If the marker is removed the app will make a new request to the API to obtain the nearby parking spots with the user's current location.

## 4. See Parking Lot details

![Parking Lot Details](/img/mobile_app/park_details.png)

When a user clicks in one of the parking lots icons in the map, a bottom sheet scaffold will appear with more information about the parking lot. This information includes the parking lot's name, image and occupancy status, including available, occupied and total parking spots.