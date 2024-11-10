Here’s a markdown documentation template for your **Parking Detection Microservice**. It provides an overview of the service, describes the available endpoints, and gives usage examples for users of the service.

---

# **Parking Detection Microservice Documentation**

## **Overview**

This microservice provides a system for monitoring parking lots, detecting parking occupancy in real-time using RTSP streams. It allows users to add parking lots, monitor occupancy status, and interact with parking spot information.

Key features include:
- Add and manage parking lots.
- Real-time detection of parking spot occupancy using an RTSP URL.
- Serve images showing parking lot occupancy.
- Store and retrieve parking spot information.

---

## **Getting Started**

### **Prerequisites**
- Python 3.x
- Redis server running locally or on a remote server.
- OpenCV library for handling video frames (`cv2`).
- RTSP stream URL for parking lot cameras.

### **Environment Variables**
- `REDIS_HOST`: Redis server host (default is `localhost`).
- `REDIS_PORT`: Redis server port (default is `6379`).
- `REDIS_DB`: Redis database index (default is `0`).
  
You can set these in your `.env` file or environment.

---

## **API Endpoints**

### **1. Add Parking Lot**

**POST** `/add_parking_lot/`

This endpoint adds a new parking lot to the system. It accepts a JSON body containing the parking lot's information and an RTSP URL to monitor the parking lot.

#### **Request Body Example**:

```json
{
    "id": "1",
    "rstp_url": "rtsp://example.com/stream",
    "name": "Downtown Parking Lot"
}
```

#### **Response**:

- **Status Code**: 201
- **Body**:

```json
{
    "status": "Parking lot '1' added"
}
```

#### **Error Responses**:

- **409 Conflict**: If the parking lot already exists.
- **400 Bad Request**: If the RTSP link is invalid or cannot be accessed.

---

### **2. Get Parking Lot Info**

**GET** `/parking_lot/{parking_lot_id}`

This endpoint returns information about the parking lot, including the current occupancy status and an image showing the parking lot.

#### **Response**:

- **Status Code**: 200
- **Body**:

```json
{
    "parking_lot_id": "1",
    "image_url": "/images/1.png",
    "occupancy": {
        "freed": 50,
        "occupied": 20,
        "total": 70
    }
}
```

#### **Error Responses**:

- **404 Not Found**: If the parking lot does not exist.

---

### **3. Set Parking Spots**

**POST** `/parking_lot/{parking_lot_id}/spots`

This endpoint allows users to add or update the parking spots in a specific parking lot. A list of parking spot objects must be provided in the request body.

#### **Request Body Example**:

```json
[
    {
        "spot_id": "A1",
        "status": "occupied"
    },
    {
        "spot_id": "A2",
        "status": "free"
    }
]
```

#### **Response**:

- **Status Code**: 200
- **Body**:

```json
{
    "status": "Parking spots added to '1'"
}
```

#### **Error Responses**:

- **404 Not Found**: If the parking lot does not exist.

---

### **4. Serve Parking Lot Image**

**GET** `/images/{image_name}`

This endpoint serves the image of the parking lot, showing the real-time occupancy status. The image is generated and stored locally when the parking lot service is started.

#### **Response**:

- **Status Code**: 200 (returns image)
- **Media Type**: `image/png`

#### **Error Responses**:

- **404 Not Found**: If the image does not exist.

---

## **Background Process**

The parking lot service continuously monitors the RTSP URL for the parking lot to detect the number of occupied and free spots. This process runs in the background and updates the parking lot's occupancy status every 10 seconds.

- The parking lot image is updated each time a new frame is captured from the RTSP stream.
- The occupancy data is stored in Redis and includes the total number of spots, occupied spots, and free spots.

---

## **Error Handling**

- **400 Bad Request**: The request body is malformed or missing required data.
- **404 Not Found**: The requested parking lot does not exist.
- **409 Conflict**: The parking lot already exists in the system.
- **422 Unprocessable Entity**: The request body does not match the expected format.

---

## **Utilities**

### **1. RTSP URL Check**
Before adding a parking lot, the provided RTSP stream URL is checked to ensure it is valid and accessible.

### **2. Redis as Data Store**
The system uses Redis for storing the parking lot information, occupancy status, and parking spot data.

---

## **Usage Example**

1. **Add a new parking lot:**
   Use Postman or your preferred API client to send a POST request to `/add_parking_lot/` with a valid RTSP URL.

2. **Set parking spots for the parking lot:**
   Send a POST request to `/parking_lot/{parking_lot_id}/spots` with the parking spot data.

3. **Monitor parking lot occupancy:**
   Fetch real-time parking lot occupancy by sending a GET request to `/parking_lot/{parking_lot_id}`.

4. **View parking lot image:**
   Retrieve the latest image showing the parking lot status by sending a GET request to `/images/{image_name}`.

---

## **Development Notes**

- **Dependencies**:
  - FastAPI
  - OpenCV (`cv2`)
  - Redis
  - Pydantic (for request/response validation)

- **Environment Configuration**: Ensure Redis is running and properly configured in your environment.

- **Real-time Monitoring**: The parking lot service constantly fetches frames from the RTSP URL, so there is a small delay between real-time parking lot changes and the occupancy data update.

---

This documentation provides a detailed overview of how the Parking Detection Microservice works, the available endpoints, and usage examples for developers to integrate it into their systems. Feel free to customize this template according to the specifics of your implementation.