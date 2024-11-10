# Parking Spots

This documentation provides an overview of the `Parking Spots` feature, which includes the `InteractiveSpotPicker` component. This client component allows users to select and define parking spots interactively on a parking lot image, then submit this information to a server.

## Overview

The Parking Spots feature enables users to define parking spots by selecting four points on a parking lot image. The `InteractiveSpotPicker` component handles point selection, displays the parking spots, and allows for spot submission and undoing actions.

---

## InteractiveSpotPicker Component

The `InteractiveSpotPicker` component lets users select points on an image of a parking lot to define parking spots. Once the spots are defined, users can submit their selections to an API endpoint. Here’s how to use and configure this component.

### Props

- **`imageUrl`**: *(string)* - URL of the parking lot image where spots will be marked.
- **`park_id`**: *(number)* - Unique identifier for the parking lot. This is used to submit created spots to the relevant endpoint.

### Functions

- **`relativeCoords(event)`**  
  Handles click events on the image, capturing the relative coordinates of each click. Each click adds a point, and four points are required to complete a spot. After four points, the function saves the spot and resets for the next spot. When four points get marked it will create the parking spot and added it to the list that will be sent.

- **`submit()`**  
  Sends the created spots data as a POST request to the server. On successful submission, the user is redirected to `/parks/{park_id}`.

- **`undo()`**  
  Clears the points markerd and the last park spot formed.

- **`distanceTwoPoints(point1, point2)`**  
  Calculates the Euclidean distance between two points, used to set the height of the lines connecting each point.

- **`angleBetweenTwoPoints(point1, point2)`**  
  Calculates the angle between two points, allowing for correct orientation of lines between points.