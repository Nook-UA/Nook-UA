# System Architecture

## Overview

### 1. **Webapp (and Mobile App)**

- **Purposes**:
  - Provide to a client an interface that allows them to:
    - Add new parking lots
    - Define the parking spots in a parking lot
    - See the availability of parking spots
- **Tech Stack**:
  - Next.js
- **Communication**: The web app will communicate with the API for data through https.

### 2.**Mobile App**

- **Purposes**:
  - Provide to a user a mobile application that allows them to:
    - See parking lots that are near them
    - See the availability of parking spots

- **Tech Stack**:
  - Android 
    - Kotlin + Jetpack Composable

- **Communication**: The mobile app will communicate with the REST API through https

### 2. **REST API**

- **Purpose**: Serve as the middle layer between the web and mobile applications and the databases' system, handling requests, authentication, and routing.

- **Tech Stack**:
  - FastApi

- **Responsibilities**:
  - Provide endpoints for fetching park availability.
  - Allow the addition of new parking zones.
  - Handle user authentication and authorization.
  - Fetch the nearby parking lots depending on a user's location

### 3. **Parking Spot Detection**

- **Purpose**: Convert video footage of parks into useful availability data (e.g., number of available spaces, occupancy levels).
- **Components**:
  - **Video Ingestion Service**: Stores live video from park cameras.
  - **Video Processing Service**: Analyzes the video to detect vehicle presence, spaces, or park utilization.
  - **Data Transformation Service**: Transforms processed video data into structured data (ready for storage in database).
- **Tech Stack**: Python for video processing, with help of the `YOLO` Module

### 4. **Main Database**

- **Purpose**: Store data such as:

  - Parking Lot information:
    - Coordinates
    - Name
    - Owner
    - URL for video feed

  - Parking Spot information:
    - Name
    - Parking Lot Associated
    - Points that define the parking spots

  - User information:
    - Name
    - Email

- **Tech Stack**:
  - **SQL Database**: Usage of `PostgreSQL` for relational data like user data, park locations, etc.
- **Key Considerations**:
  - Optimization: Optimized for **fast read speeds**, as costumer needs responsive real-time availability updating.

### 5. **Cache Database**
  - **Purpose**: Store real-time data about statistics relative to the parking lots and spots

  - **Tech Stack**:
    - **Redis**: For fast access to real-time data like parking spot availability.

## Flow Overview:

1. **Video Feeds** from parks are ingested into the core processing.
2. **Core Processing** converts video frames into structured storable data.
3. **API** provides access to this data for the **Webapp** and **Mobileapp**.
4. **Database** stores the transformed data for querying and historical analysis.


## Architecture Diagram

![Diagram](/img/architecture-diagram.png)
