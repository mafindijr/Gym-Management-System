# Gym Management System - Backend API

A comprehensive REST API backend for a Gym Management System built with Node.js, Express, and MongoDB.

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend root directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/gym-management
JWT_SECRET=your-super-secret-jwt-key-here
```

4. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## 📚 API Endpoints

### Authentication (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:** Returns `user`, `token`, and `refreshToken`

#### Forgot Password
- **POST** `/api/auth/forgot-password`
- **Body:**
```json
{
  "email": "john@example.com"
}
```

#### Reset Password
- **POST** `/api/auth/reset-password`
- **Body:**
```json
{
  "token": "reset-token-from-email",
  "password": "newPassword123"
}
```

#### Get Current User
- **GET** `/api/auth/me`
- **Headers:** `Authorization: Bearer <token>`

---

### Members (`/api/members`) - Admin Only

#### Get All Members
- **GET** `/api/members?search=john`
- **Headers:** `Authorization: Bearer <token>`

#### Get Member by ID
- **GET** `/api/members/:id`
- **Headers:** `Authorization: Bearer <token>`

#### Create Member
- **POST** `/api/members`
- **Body:**
```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "membership": "Premium",
  "status": "Active"
}
```

#### Update Member
- **PUT** `/api/members/:id`
- **Body:**
```json
{
  "fullName": "Jane Smith",
  "membership": "VIP",
  "status": "Active"
}
```

#### Delete Member
- **DELETE** `/api/members/:id`

---

### Trainers (`/api/trainers`) - Admin Only

#### Get All Trainers
- **GET** `/api/trainers?status=Active`
- **Headers:** `Authorization: Bearer <token>`

#### Get Trainer by ID
- **GET** `/api/trainers/:id`

#### Create Trainer
- **POST** `/api/trainers`
- **Body:**
```json
{
  "trainer": "Mike Johnson",
  "speciality": "Strength Training",
  "contact": "mike@example.com",
  "email": "mike@example.com",
  "status": "Active"
}
```

#### Update Trainer
- **PUT** `/api/trainers/:id`
- **Body:** (same as create)

#### Delete Trainer
- **DELETE** `/api/trainers/:id`

---

### Classes (`/api/classes`) - Admin Only

#### Get All Classes
- **GET** `/api/classes?status=Scheduled&upcoming=true&past=false`
- **Headers:** `Authorization: Bearer <token>`

#### Get Class by ID
- **GET** `/api/classes/:id`

#### Create Class
- **POST** `/api/classes`
- **Body:**
```json
{
  "name": "Yoga Flow",
  "instructor": "Sarah Miller",
  "dateTime": "2024-12-15T09:00:00Z",
  "status": "Scheduled",
  "capacity": 25,
  "description": "Beginner-friendly yoga class",
  "trainerId": "trainer-id-here"
}
```

#### Update Class
- **PUT** `/api/classes/:id`
- **Body:** (same as create)

#### Delete Class
- **DELETE** `/api/classes/:id`

---

### Payments (`/api/payments`) - Admin Only

#### Get All Payments
- **GET** `/api/payments?status=Paid&memberId=user-id`
- **Headers:** `Authorization: Bearer <token>`

#### Get Payment Statistics
- **GET** `/api/payments/stats`
- **Response:**
```json
{
  "totalRevenue": 15500000,
  "outstandingBalance": 230000,
  "averagePayment": 200000
}
```

#### Create Payment
- **POST** `/api/payments`
- **Body:**
```json
{
  "memberId": "user-id",
  "memberName": "John Doe",
  "classId": "class-id",
  "className": "Yoga Flow",
  "amount": 150000,
  "paymentMethod": "Card",
  "description": "Monthly membership"
}
```

---

### Student Routes (`/api/student`) - Member Only

#### Get Available Classes
- **GET** `/api/student/classes?upcoming=true`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Includes enrollment status and capacity

#### Enroll in Class
- **POST** `/api/student/classes/:id/enroll`
- **Headers:** `Authorization: Bearer <token>`

#### Get My Payments
- **GET** `/api/student/payments`
- **Headers:** `Authorization: Bearer <token>`

#### Create Payment
- **POST** `/api/student/payments`
- **Body:**
```json
{
  "amount": 150000,
  "classId": "class-id",
  "className": "Yoga Flow",
  "paymentMethod": "Card",
  "description": "Class enrollment"
}
```

#### Update Profile
- **PUT** `/api/student/profile`
- **Body:**
```json
{
  "fullName": "John Smith",
  "email": "john.smith@example.com",
  "membership": "Premium"
}
```

#### Get Dashboard Stats
- **GET** `/api/student/dashboard`
- **Response:**
```json
{
  "enrolledClasses": 3,
  "totalSpent": 450000,
  "upcomingClass": {
    "_id": "class-id",
    "name": "Yoga Flow",
    "dateTime": "2024-12-15T09:00:00Z"
  }
}
```

---

### Dashboard (`/api/dashboard`) - Admin Only

#### Get Admin Dashboard Stats
- **GET** `/api/dashboard`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
```json
{
  "totalMembers": 250,
  "activeClasses": 15,
  "totalTrainers": 8,
  "memberGrowth": 15,
  "classAttendance": 120
}
```

---

## 🔒 Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-token-here>
```

## 📝 User Roles

- **admin**: Full access to all endpoints
- **trainer**: (Reserved for future trainer-specific features)
- **member**: Access to student routes only

## 🗂️ Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/           # Route controllers
│   │   ├── authController.js
│   │   ├── memberController.js
│   │   ├── trainerController.js
│   │   ├── classController.js
│   │   ├── paymentController.js
│   │   ├── studentController.js
│   │   └── dashboardController.js
│   ├── middlewares/
│   │   └── authMiddleware.js  # Authentication & authorization
│   ├── models/                # Mongoose models
│   │   ├── User.js
│   │   ├── Trainer.js
│   │   ├── Class.js
│   │   └── Payment.js
│   ├── routes/                # Express routes
│   │   ├── authRoutes.js
│   │   ├── memberRoutes.js
│   │   ├── trainerRoutes.js
│   │   ├── classRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── studentRoutes.js
│   │   └── dashboardRoutes.js
│   ├── utils/
│   │   └── generateToken.js   # JWT token utilities
│   └── server.js              # Express app entry point
├── .env                       # Environment variables
├── package.json
└── README.md
```

## 🔧 Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing

## 📌 Error Handling

All endpoints return consistent error responses:

```json
{
  "message": "Error description here"
}
```

Status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## 🚧 Future Enhancements

- Email service for password reset
- File uploads for profile pictures
- Real-time notifications
- Advanced search and filtering
- Pagination for large datasets
- Rate limiting
- API documentation with Swagger

