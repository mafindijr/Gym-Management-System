# Gym Management System

> **Design and Implementation of an Online Gym Management System**
> 
> A full-stack web application for comprehensive gym operations management. This is a final year school project demonstrating modern full-stack development with React, Node.js, Express, and MongoDB.

## 📋 Project Overview

Gym Management System is a complete digital solution designed to streamline gym administration and enhance member experience. The application provides separate portals for administrators and members, enabling efficient management of classes, memberships, trainers, payments, and member enrollment.

**Tech Stack:** React + Vite | Node.js | Express.js | MongoDB | JWT Authentication | Tailwind CSS

---

## ✨ Key Features

### Admin Features
- ✅ Dashboard with real-time statistics and charts
- ✅ Member management (create, read, update, delete)
- ✅ Class scheduling and management
- ✅ Trainer assignment and management
- ✅ Payment tracking and revenue monitoring
- ✅ Member search and filtering
- ✅ Class capacity management
- ✅ Member growth analytics

### Member/Student Features
- ✅ Dashboard with personal statistics
- ✅ Browse available classes
- ✅ Enroll in classes
- ✅ View upcoming classes
- ✅ Track fitness progress
- ✅ Payment history
- ✅ Profile management
- ✅ Class enrollment management

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/mafindijr/gym-management-system.git
cd gym-management-system
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/gym-management
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

Backend will run on: `http://localhost:5000`

#### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 📁 Project Structure

```
gym-management-system/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── memberController.js
│   │   │   ├── classController.js
│   │   │   ├── paymentController.js
│   │   │   ├── studentController.js
│   │   │   └── dashboardController.js
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Class.js
│   │   │   ├── Trainer.js
│   │   │   └── Payment.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── memberRoutes.js
│   │   │   ├── classRoutes.js
│   │   │   ├── studentRoutes.js
│   │   │   └── dashboardRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── modal.jsx
│   │   │   ├── search-input.jsx
│   │   │   └── student-payment-form.jsx
│   │   ├── pages/
│   │   │   ├── student-dashboard.jsx
│   │   │   ├── student-classes.jsx
│   │   │   ├── student-billing.jsx
│   │   │   ├── members.jsx
│   │   │   ├── classes.jsx
│   │   │   ├── trainers.jsx
│   │   │   ├── payments.jsx
│   │   │   └── admin-dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md (root)
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints (`/auth`)

#### Register
```
POST /auth/register
Body: { fullName, email, password }
```

#### Login
```
POST /auth/login
Body: { email, password }
Response: { user, token, refreshToken }
```

#### Get Current User
```
GET /auth/me
Headers: Authorization: Bearer <token>
```

---

### Members Management (`/members`) - Admin Only

#### Get All Members
```
GET /members?search=john
Headers: Authorization: Bearer <token>
```

#### Create Member
```
POST /members
Headers: Authorization: Bearer <token>
Body: { fullName, email, password, membership, status }
```

#### Update Member
```
PUT /members/:id
Headers: Authorization: Bearer <token>
Body: { fullName, email, membership, status }
```

#### Delete Member
```
DELETE /members/:id
Headers: Authorization: Bearer <token>
```

---

### Classes Management (`/classes`) - Admin Only

#### Get All Classes
```
GET /classes?status=Scheduled&upcoming=true
Headers: Authorization: Bearer <token>
```

#### Create Class
```
POST /classes
Headers: Authorization: Bearer <token>
Body: { name, instructor, dateTime, status, capacity, description }
```

#### Update Class
```
PUT /classes/:id
Headers: Authorization: Bearer <token>
Body: { name, instructor, dateTime, status, capacity, description }
```

#### Delete Class
```
DELETE /classes/:id
Headers: Authorization: Bearer <token>
```

---

### Student Routes (`/student`) - Member Only

#### Get Available Classes
```
GET /student/classes?upcoming=true
Headers: Authorization: Bearer <token>
```

#### Enroll in Class
```
POST /student/classes/:id/enroll
Headers: Authorization: Bearer <token>
```

#### Get My Payments
```
GET /student/payments
Headers: Authorization: Bearer <token>
```

#### Make Payment
```
POST /student/payments
Headers: Authorization: Bearer <token>
Body: { amount, paymentMethod, description }
```

#### Get Dashboard Stats
```
GET /student/dashboard
Headers: Authorization: Bearer <token>
Response: { enrolledClasses, totalSpent, upcomingClass }
```

---

### Admin Dashboard (`/dashboard`) - Admin Only

#### Get Dashboard Statistics
```
GET /dashboard
Headers: Authorization: Bearer <token>
Response: { totalMembers, activeClasses, totalTrainers, memberGrowth, classAttendance }
```

---

## 🔒 Authentication & Security

### User Roles

- **Admin:** Full access to all admin features and management endpoints
- **Member/Student:** Limited access to student routes and personal features only

### Token Management

Tokens are stored in localStorage on the client side. Include the token in the Authorization header for protected routes:

```javascript
Authorization: Bearer <your-jwt-token>
```

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Axios/Fetch API** - HTTP client

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

---

## 📊 Database Models

### User Model
```javascript
{
  fullName: String,
  email: String (unique),
  password: String (hashed),
  role: String ('admin' | 'member'),
  membership: String ('Basic' | 'Premium' | 'VIP'),
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Class Model
```javascript
{
  name: String,
  instructor: String,
  dateTime: Date,
  status: String ('Scheduled' | 'Ongoing' | 'Completed' | 'Cancelled'),
  capacity: Number,
  enrolledMembers: [ObjectId],
  description: String,
  trainerId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

### Payment Model
```javascript
{
  memberId: ObjectId,
  memberName: String,
  classId: ObjectId,
  className: String,
  amount: Number,
  paymentMethod: String,
  status: String ('Paid' | 'Pending' | 'Failed'),
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 User Workflows

### Admin Workflow
1. Login with admin credentials
2. View dashboard with statistics
3. Manage members (add, edit, delete)
4. Schedule classes and assign trainers
5. Track payments and revenue
6. Monitor member growth and class attendance

### Member Workflow
1. Register or login with credentials
2. View personal dashboard
3. Browse available classes
4. Enroll in classes of interest
5. View upcoming classes
6. Track fitness progress
7. Make payments for memberships
8. View payment history

---

## 📋 Project Information

### Final Year School Project
- **Title:** Design and Implementation of an Online Gym Management System
- **Objective:** Create a comprehensive digital solution for gym administration and member management
- **Scope:** Full-stack web application with separate admin and member portals

---

## ⚠️ Project Limitations

### Current Version Limitations

1. **Payment Processing**
   - Uses local mock payment processing
   - No real payment gateway integration (Stripe, Paystack, etc.)
   - Basic payment validation

2. **Email Notifications**
   - Email service not fully implemented
   - No automated password reset emails
   - No class reminder notifications

3. **Data Management**
   - No backup and disaster recovery system
   - Limited data retention policies
   - No comprehensive audit logging

4. **Scalability**
   - Database queries not optimized for large datasets
   - No caching mechanism (Redis)
   - API rate limiting not implemented

5. **Real-time Features**
   - No WebSocket support
   - No live notifications
   - Class updates not pushed in real-time

6. **Analytics & Reporting**
   - Limited reporting capabilities
   - No advanced analytics dashboard
   - Basic statistics only

7. **File Handling**
   - No profile picture upload
   - Class images hardcoded
   - No image optimization

8. **Testing**
   - No automated unit tests
   - No integration tests
   - Limited error scenario coverage

9. **Documentation**
   - No Swagger/OpenAPI documentation
   - Minimal code comments

10. **Performance**
    - No request caching
    - Database queries not indexed
    - Large dataset handling may be slow

---

## 🚀 Future Enhancements

- Integration with real payment gateways (Stripe, Paystack)
- Email notifications with Nodemailer/SendGrid
- Real-time features using WebSockets
- Advanced analytics and reporting dashboard
- Profile picture and document uploads
- Comprehensive unit and integration testing
- Swagger/OpenAPI documentation
- Database optimization and indexing
- Caching strategies implementation
- Comprehensive logging and monitoring

---

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/gym-management
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🧪 Testing

Currently, the project lacks automated tests. To run manual testing:

1. **Backend:** Use Postman or Insomnia for API testing
2. **Frontend:** Test through browser dev tools
3. **Integration:** Test workflows end-to-end

### Recommended Testing Tools
- Jest (unit testing)
- React Testing Library (component testing)
- Supertest (API testing)
- Cypress (E2E testing)

---

## 📞 Getting Help

For detailed information:
- See `/backend/README.md` for backend API documentation
- See `/frontend/README.md` for frontend setup details
- Check code comments and structure for implementation details

---

## 📄 License

This project is created for educational purposes as part of a final year school project.

**Project Title:** Design and Implementation of an Online Gym Management System

---

## 🎓 Academic Information

- **Project Type:** Final Year School Project
- **Development Period:** 2024
- **Stack:** MERN (MongoDB, Express, React, Node.js)
- **Status:** Complete and functional

---

**Last Updated:** 2024
