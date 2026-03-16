# 🌟 ERP Backend System

![License](https://img.shields.io/badge/license-MIT-blue) ![NestJS](https://img.shields.io/badge/NestJS-v10-orange) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v15-blue) ![Prisma](https://img.shields.io/badge/Prisma-v4.16.2-lightblue)

A modern, secure, and scalable **ERP backend system** built with **NestJS**, **Prisma**, **PostgreSQL**, and **JWT Authentication**.  
Supports **User & Product management**, **Roles & Permissions**, and **Activity Logging** with fully documented **Swagger API**.

---

## 🔹 Features

- **User Management**
  - Create, read, update, and delete users
  - Role-based access control (Admin/User)
  - JWT authentication for secure endpoints

- **Product Management**
  - Create, read, update, and delete products
  - Role-based permissions

- **Roles & Permissions**
  - Flexible system to assign multiple permissions to roles
  - Dynamic permission checking with NestJS Guards

- **Logging**
  - Logs every CRUD action for audit purposes
  - Easy to extend for other entities

- **Documentation**
  - Auto-generated **Swagger UI** for testing all endpoints

---

## 🛠 Tech Stack

- **Backend:** [NestJS](https://nestjs.com/)  
- **Database:** [PostgreSQL](https://www.postgresql.org/)  
- **ORM:** [Prisma](https://www.prisma.io/)  
- **Authentication:** JWT (JSON Web Tokens)  
- **API Documentation:** [Swagger](https://swagger.io/)  
- **Password Hashing:** bcrypt  

---

## 🚀 Installation

1. **Clone the repository** 

```bash
git clone https://github.com/your-username/erp-backend.git
cd erp-backend

2. **Install dependencies** 

```bash
npm install

3. Set up environment variables
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/erp_db
JWT_SECRET=your_jwt_secret

Replace USER, PASSWORD, and your_jwt_secret with your own values.

5. Start the development server
npm run start:dev
Server will run on http://localhost:3000.

http://localhost:3000/api
You can test all endpoints (login, CRUD operations, etc.) directly from the Swagger interface.
---

## 🧩 Example Requests
Login
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "admin@example.com",
  "password": "admin123"
}'

Create User
curl -X POST http://localhost:3000/users \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "email": "maha@email.com",
  "name": "Maha",
  "password": "maha123",
  "roleId": 1
}'
Create Product
curl -X POST http://localhost:3000/products \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "name": "Laptop",
  "price": 5000,
  "stock": 10
}'

---
## ⚡ Technologies
**NestJS** – Node.js framework for building efficient and scalable server-side applications
**Prisma** – Modern ORM for database access
**PostgreSQL** – Relational database
**JWT** – JSON Web Token authentication
**Swagger** – API documentation
**bcrypt** – Password hashing

---
## 📝 Notes
Make sure PostgreSQL is running locally and credentials match .env.
Always use a strong JWT_SECRET for security.
Role-based permissions control access to endpoints; check Swagger for required permissions.

----
## 📜 License
MIT License © 2026




