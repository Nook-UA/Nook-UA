# Web App

For the web app we decided to implement the following main features:
- Authentication with *AWS Cognito*
- See a client's parking lots
- Add a new parking lot
- See a parking lot details

## 1. Authentication with AWS Cognito

![Log in Page](/img/web_app/login_page.png)

For the login page we developed the page shown in the picture above. Where a button is provided for the user to sign in using AWS Cognito. This is a fundamental step to navigate through the web app since there are protected routes that require the user to be authenticated and some actions like seeing the parking lots of a client and adding a new parking lot also require the user to be logged in to perform this actions with success. 

## 2. See a client's parking lots

![My parks Page](/img/web_app/my_parks_page.png)

![My Parks Page with Parking lot](/img/web_app/my_parks_page_with_park.png)

After a user logins with success using AWS Cognito, and clicks on the Parks option in the menu, the user will be redirected to the page shown in this two images. The first image appears if the client doesn't have any parking lots associated with their account. The second image presents otherwise. If the client clicks on a parking lot card, the client will be redirected to the parking lot details page. There's also a button at the right top corner of the page that allows the client to add a new parking lot.

## 3. Add a new parking lot

![Add New Park](/img/web_app/add_new_park.png)

![Add New Park Form](/img/web_app/form_validation.png)

When the client clicks on the button to add a new parking lot, the page shown in the images above will appear. The client needs to fill in the form, since it exists validation in the form that check first if any of the required fields are missing and for the image if the file is an image. If the client tries to submit the form without filling in the required fields or with a file that is not an image, a message will appear above the page with an error message has the second image shows. If the client fills in the form with success, the client will be redirected to the my parks page. If an invalid feed url is provided the park is still added to the main database and thus it will appear in the my parks page but the parking spots will not be available since the parking detection microservice can't access the feed. To define an address for the parking lot a map is provided and the client's needs to double click on the desired location.

## 4. See a parking lot details

![Park Details](/img/web_app/park_details.png)

When a client clicks on one of the parking lot cards in the my parks page, the client will be redirected to the page shown in the image above. This page presents the parking lot's details which include the parking lot's name, image, occupancy status, a map with the parking lot's location and an image with the most recent image of the feed from the cameras. The occupancy status includes the available, occupied and total parking spots. The client can also see the parking spots in the parking lot by clicking on the button "See Parking Spots". There's also present a button to edit parking spots in which a user gets redirect to a new page and define the parking spots present in the images captured by the feed so that the algorithm that detects if a parking spot is available or not can work properly. 