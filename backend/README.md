# Gym Management System - Backend API

> **Design and Implementation of an Online Gym Management System**
> 
> A comprehensive REST API backend for managing gym operations, member enrollment, class scheduling, and payment processing. This is a final year school project demonstrating full-stack development with modern technologies.

## 📋 Project Overview

This backend API provides a complete solution for gym management operations. It handles member management, class scheduling, trainer assignments, payment processing, and student dashboard functionality. The system is designed to streamline gym administration and enhance member experience through an intuitive online platform.

**Technologies:** Node.js | Express.js | MongoDB | JWT Authentication | RESTful API

---

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
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

---

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
- **Response:** Returns user object and authentication token

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

### Members Management (`/api/members`) - Admin Only

#### Get All Members
- **GET** `/api/members?search=john`
- **Headers:** `Authorization: Bearer <token>`
- **Supports:** Pagination, search by name or email

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

### Trainers Management (`/api/trainers`) - Admin Only

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

### Classes Management (`/api/classes`) - Admin Only

#### Get All Classes
- **GET** `/api/classes?status=Scheduled&upcoming=true`
- **Headers:** `Authorization: Bearer <token>`
- **Filters:** status, upcoming, past

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

### Payments Management (`/api/payments`) - Admin Only

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
- **Response:** List of student's payment transactions

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

#### Update Student Profile
- **PUT** `/api/student/profile`
- **Body:**
```json
{
  "fullName": "John Smith",
  "email": "john.smith@example.com",
  "membership": "Premium"
}
```

#### Get Dashboard Statistics
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

### Admin Dashboard (`/api/dashboard`) - Admin Only

#### Get Dashboard Statistics
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

## 🔒 Authentication & Security

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token-here>
```

### User Roles & Permissions

- **Admin:** Full access to all endpoints (members, classes, trainers, payments, dashboard)
- **Trainer:** Access to trainer-specific features (reserved for future implementation)
- **Member/Student:** Limited access to student routes, class enrollment, and payment history

---

## 🗂️ Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                    # MongoDB connection setup
│   ├── controllers/                 # Request handlers
│   │   ├── authController.js        # Authentication logic
│   │   ├── memberController.js      # Member management
│   │   ├── trainerController.js     # Trainer management
│   │   ├── classController.js       # Class scheduling
│   │   ├── paymentController.js     # Payment processing
│   │   ├── studentController.js     # Student/Member features
│   │   └── dashboardController.js   # Dashboard statistics
│   ├── middlewares/
│   │   └── authMiddleware.js        # JWT verification & authorization
│   ├── models/                      # Mongoose schemas
│   │   ├── User.js                  # User model
│   │   ├── Trainer.js               # Trainer model
│   │   ├── Class.js                 # Class model
│   │   └── Payment.js               # Payment model
│   ├── routes/                      # API routes
│   │   ├── authRoutes.js
│   │   ├── memberRoutes.js
│   │   ├── trainerRoutes.js
│   │   ├── classRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── studentRoutes.js
│   │   └── dashboardRoutes.js
│   ├── utils/
│   │   └── generateToken.js         # JWT token generation
│   └── server.js                    # Express app entry point
├── .env                             # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🔧 Technologies & Dependencies

- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Secure authentication
- **bcryptjs** - Password hashing and security
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Node.js** - JavaScript runtime

---

## 📊 Error Handling

All API responses follow a consistent format:

### Success Response (200)
```json
{
  "data": { /* response data */ }
}
```

### Error Response
```json
{
  "message": "Descriptive error message"
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

---

## 📋 Project Information

### Final Year School Project
- **Title:** Design and Implementation of an Online Gym Management System
- **Objective:** To create a comprehensive digital solution for gym administration and member management
- **Scope:** Full-stack web application with admin and member portals

### Key Features
✅ User Authentication & Authorization  
✅ Member Management (CRUD operations)  
✅ Class Scheduling & Management  
✅ Trainer Management  
✅ Payment Processing & Tracking  
✅ Student Dashboard & Class Enrollment  
✅ Admin Dashboard with Statistics  
✅ Search & Filtering Capabilities  
✅ Role-based Access Control  

---

## ⚠️ Project Limitations

### Current Version Limitations

1. **Payment Processing**
   - Currently uses local mock payment processing
   - No real payment gateway integration (Stripe, Paystack, etc.)
   - Payment validation is basic and for demonstration purposes

2. **Email Notifications**
   - Email service is not fully implemented
   - Password reset emails not sent automatically
   - Class reminders and notifications not available

3. **Data Persistence**
   - No backup and disaster recovery system
   - Limited data retention policies
   - No audit logging for sensitive operations

4. **Scalability**
   - Database queries not optimized for large-scale operations
   - No caching mechanism (Redis) implemented
   - API rate limiting not implemented

5. **Real-time Features**
   - No WebSocket support for live notifications
   - Class updates not pushed in real-time
   - No instant payment confirmation

6. **Reporting & Analytics**
   - Limited reporting capabilities
   - No advanced analytics dashboard
   - Basic statistics only

7. **Image Handling**
   - No profile picture upload functionality
   - Class images stored as hardcoded paths
   - No image optimization

8. **Testing**
   - No automated unit tests
   - No integration tests
   - Limited error scenario coverage

9. **Documentation**
   - API documentation could be more comprehensive
   - No Swagger/OpenAPI implementation
   - Code comments are minimal

10. **Performance**
    - No request caching
    - No database indexing optimization
    - Large dataset queries may be slow

### Recommended Future Enhancements

- Integration with real payment gateway (Stripe, Paystack)
- Email service implementation (Nodemailer, SendGrid)
- Real-time notifications using WebSockets
- Advanced analytics and reporting
- File upload functionality for profiles and classes
- Comprehensive unit and integration testing
- API documentation with Swagger UI
- Database query optimization and indexing
- Implementation of caching strategies
- Comprehensive logging and monitoring system

---

## 🛠️ Deployment

### Prerequisites for Deployment
- MongoDB Atlas account (cloud database)
- Node.js hosting service (Heroku, Render, Railway, etc.)
- Environment variables configured

### Deployment Steps
1. Set up MongoDB Atlas cluster
2. Configure `.env` with production values
3. Deploy to hosting service
4. Configure CORS for frontend domain
5. Test all endpoints in production

---

## 📞 Support & Contribution

This is an educational project. For questions or improvements, please refer to the project documentation or contact the development team.

---

## 📄 License

This project is created for educational purposes as part of a final year school project.

**Project Title:** Design and Implementation of an Online Gym Management System

---

**Last Updated:** 2024

