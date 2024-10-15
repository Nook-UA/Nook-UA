# Nook: System Architecture

## Overview

### 1. **Webapp (and Mobile App)**

- **Purposes**:
  - Provide the user with an interface for checking park availability by diferent methods.
  - Provide the custumer an interface do disclose their free parking spaces, and menage their infrastructure.
  - Provide the dev team with a platform to check for malfunctions/bugs.
- **Tech Stack**:
  - Web: Next.js
  - Mobile: Android
- **Communication**: Both apps will communicate with the API for data through http.

### 2. **API / Data Handler**

- **Purpose**: Serve as the middle layer between the frontend apps and the databases' system, handling requests, authentication, and routing.
- **Tech Stack**:

  - FastApi
  - REST api for communication handling.

- **Responsibilities**:
  - Provide endpoints for fetching park availability.
  - Allow the addition of new parking zones.
  - Handle mobile app connections.
  - Validate incoming requests.
  - RBAC

### 3. **Core Processing**

- **Purpose**: Convert video footage of parks into useful availability data (e.g., number of available spaces, occupancy levels).
- **Components**:
  - **Video Ingestion Service**: Stores live video from park cameras.
  - **Video Processing Service**: Analyzes the video to detect vehicle presence, spaces, or park utilization.
  - **Data Transformation Service**: Transforms processed video data into structured data (ready for storage in database).
- **Tech Stack**: Python for video processing, with help of the `YOLO` Module

### 4. **Database**

- **Purpose**: Store data such as:
  - Availability data from the video processing module.
  - User information, park locations, and historical availability trends.
- **Database Choices**:
  - **SQL Database**: Usage of `PostgreSQL` for relational data like user data, park locations, etc.
  - **NoSQL Database**: For fast, flexible access to availability data we considered `Redis` for caching availability info.
  - **Data Storage Layer**: Time-series databases like `InfluxDB` can help track availability over time for analytics.
- **Key Considerations**:
  - Optimization: Optimized for **fast read speeds**, as costumer needs responsive real-time availability updating.

### 5. **Infrastructure**

- **Cloud Providers**: AWS to host the system and provide services like:
  - AWS Cognito
  - AWS RDS
  - AWS ECS

## Flow Overview:

1. **Video Feeds** from parks are ingested into the core processing.
2. **Core Processing** converts video frames into structured storable data.
3. **API** provides access to this data for the **Webapp** and **Mobileapp**.
4. **Database** stores the transformed data for querying and historical analysis.

## Stored Data:

#### Client

 - The `Client` is the entity that owns parking lots. They can have multiple parking lots.

```sql
CREATE TABLE Clients (
  ID          UINT            PRIMARY KEY,
  Name        VARCHAR(255),
  Phone       VARCHAR(255),
  Email        VARCHAR(255),
  Picture     MEDIUMBLOB
);
```



#### Park

- The `Parks` correspond to a phisical location containing a group of parking spots, both available and used.

```sql
CREATE TABLE Parks (
  ID          UINT            PRIMARY KEY,
  Name        VARCHAR(255),
  Picture     MEDIUMBLOB,
  Location    VARCHAR(255),
  TotalSpots  INT,
  OwnerID     UINT,
  FOREIGN KEY (OwnerID) REFERENCES Costumers(ID)
);
```

#### Costumers

- The `Costumers` are the users of the platform. They will be able to consult the state for parks in search of open spots. They can also have multiple favorite parks.

```sql
CREATE TABLE Costumers (
  ID          UINT            PRIMARY KEY,
  Name        VARCHAR(255),
  Mail        VARCHAR(255),
  Picture     MEDIUMBLOB
);

CREATE TABLE CostumersFavorites (
  CostumersID      UINT,
  ParkID      UINT,
  PRIMARY KEY (CostumersID, ParkID),
  FOREIGN KEY (CostumersID) REFERENCES Costumers(ID),
  FOREIGN KEY (ParkID) REFERENCES Parks(ID)
);
```

#### Availability

- **Threshold Levels**:

  - **Low Availability**: If availability drops below a certain threshold, update the cache more frequently.
  - **High Availability**: If availability is above the threshold, reduce the update frequency.

  Usage of observer patters will ensure smooth transitions between the modes.

```redis
SET park:{park_id}:availability {available_spots} EX {expiration_time_in_seconds}
```

## Architecture Diagram

![Diagram](/img/architecture-diagram.png)
