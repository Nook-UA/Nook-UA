# Database

## Database Diagram

![Database Diagram](/img/database_diagram.png)

## Overview

Our database schema is designed to model the relationships between clients, parks, and parking spots effectively. Below is an explanation of the key components and relationships in the database:

### Entities

#### Client:

- Represents the users of our system who own parks.
- Each client is uniquely identified by their id, which corresponds to their Cognito sub.
- Includes essential details like name and email.

#### Park:

- Represents a park owned by a client.
- Each park has attributes such as name, picture, latitude, longitude, and an optional rtsp_url for video streaming.
- The owner_id field establishes a relationship with the Client table, identifying the owner of the park.

#### Parking Spot:

- Represents individual parking spots within a park.
- Each parking spot has attributes like name and points (stored as a JSON string) to define its boundaries or geometry.
- The park_id field links the parking spot to its parent park.

### Relationships

#### Client and Park:

- A single client can own multiple parks (1-to-many relationship).
    - This relationship is modeled via the owner_id field in the Park table, which references the id field in the Client table.
    
#### Park and Parking Spot:

- A single park can contain multiple parking spots (1-to-many relationship).
    - This relationship is established through the park_id field in the ParkingSpot table, which references the id field in the Park table.