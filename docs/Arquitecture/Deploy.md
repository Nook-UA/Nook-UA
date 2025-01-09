# Deployment Architecture

## Diagram

![Deployment Diagram](/img/nook_deploy.png)

## Overview

This section describes the deployment architecture of our system hosted in AWS. The architecture ensures scalability, reliability, and high availability for the mobile application and associated backend services.

### Key Components

#### 1. VPC (Virtual Private Cloud)

The deployment is hosted within a Virtual Private Cloud (VPC) that spans two Availability Zones, providing fault tolerance and redundancy. The VPC contains:
- __Public Subnets__: Exposed to the internet for handling public-facing services.
- __Private Subnets__: Secured from direct internet access and used for backend and frontend services and databases.

#### 2. Internet Gateway

The Internet Gateway enables communication between the public-facing resources in the VPC and the internet.

#### 3. Application Load Balancers (ALBs)

- **Internet-Facing ALB**: Handles incoming traffic for the application’s UI and API endpoints. Routes requests based on HTTPS Listener rules:
    - *UI Rule*: Directs traffic to the front-end services.
    - *REST API Rule*: Directs traffic to the backend REST API services.

- **Internal-Facing ALB**: Manages communication between internal services. Routes requests based on HTTP Listener rules:
    - *REST API Rule*: Handles API requests internally.
    - *Parking Detection Rule*: Directs requests to the parking detection service.

#### 4. NAT Gateways

Allows private resource to have access to the internet.


#### 5. Compute (EC2 Instances with ECS Cluster)

EC2 instances, organized in an Auto Scaling Group, ensure high availability and scalability by dynamically scaling based on traffic load. The instances host multiple containers managed by an ECS Cluster:

- **REST API Target Group**: Hosts API services to handle requests from the mobile app.
- **Parking Detection Target Group**: Runs parking detection logic.
- **Web App Target Group**: Serves the front-end web application.

#### 6. Databases

The backend services uses two databases:
- **Main Database**: Stores primary application data.
- **Cache Database**: Improves performance by caching frequently accessed data.

The databases are deployed across the private subnets in multiple Availability Zones to ensure reliability and minimize latency.

#### 7. AWS Cognito

AWS Cognito is used for secure user authentication and management. It integrates seamlessly with the web app, enabling secure access to the backend services.

#### 8. API Gateway

The API Gateway acts as an entry point for mobile and web app requests, routing them to the appropriate backend services through the ALBs.

#### 9. ECR Repository

The Elastic Container Registry (ECR) stores Docker images for the application services, which are deployed to the ECS Cluster.

#### 10. S3 Bucket

Teh Amazon S3 bucket is used to store static assets, such as images and providing public access to assets where necessary.


### Workflow

#### Mobile App Requests:

Requests from the Android mobile app are sent to the API Gateway, which forwards them to the Internal-Facing ALB.
The ALB routes the requests to the appropriate backend services (e.g., REST API or parking detection).

#### Internal Service Communication:

The Internal-Facing ALB manages communication between services, ensuring isolation from public access.

#### Database Access:

Backend services access the Main Database and Cache Database securely via the private subnets.

#### Authentication:

AWS Cognito handles user authentication and session management for secure access to resources.

#### Scalability:

The Auto Scaling Group dynamically adjusts the number of EC2 instances in response to traffic patterns, ensuring efficient resource utilization.

#### Deployment:

Docker images for the services are stored in the ECR Repository and deployed to the ECS Cluster using task definitions.
