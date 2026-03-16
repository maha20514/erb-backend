# 🚀 ERP Backend System

![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-lightgrey)
![JWT](https://img.shields.io/badge/Auth-JWT-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

A scalable **ERP Backend API** built with **NestJS**, **Prisma**, and **PostgreSQL**.  
This project demonstrates **secure authentication, role-based access control, and CRUD operations** for users and products.

Perfect for learning **modern backend architecture** and building production-ready APIs.

---

# ✨ Features

✅ JWT Authentication  
✅ Role-Based Access Control (RBAC)  
✅ CRUD for Users  
✅ CRUD for Products  
✅ Secure password hashing with bcrypt  
✅ Prisma ORM integration  
✅ PostgreSQL database  
✅ Swagger API documentation  
✅ Modular NestJS architecture  

---

# 🛠️ Tech Stack

| Technology | Description |
|-----------|-------------|
| NestJS | Progressive Node.js framework |
| Prisma | Next-generation ORM |
| PostgreSQL | Relational database |
| JWT | Secure authentication |
| Swagger | API documentation |
| bcrypt | Password hashing |

---

# 📂 Project Structure

```
src
 ┣ auth
 ┃ ┣ auth.controller.ts
 ┃ ┣ auth.service.ts
 ┃ ┗ jwt.strategy.ts
 ┣ users
 ┃ ┣ users.controller.ts
 ┃ ┣ users.service.ts
 ┃ ┗ users.module.ts
 ┣ products
 ┃ ┣ products.controller.ts
 ┃ ┣ products.service.ts
 ┃ ┗ products.module.ts
 ┣ prisma
 ┃ ┗ prisma.service.ts
 ┗ main.ts
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/erp-backend.git
cd erp-backend
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create `.env` file:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/erp_db
JWT_SECRET=supersecretkey
```

---

### 4️⃣ Run Prisma migration

```bash
npx prisma migrate dev
```

---

### 5️⃣ Generate Prisma Client

```bash
npx prisma generate
```

---

### 6️⃣ Start the development server

```bash
npm run start:dev
```

Server will start at:

```
http://localhost:3000
```

---

# 📘 API Documentation

Swagger UI is available at:

```
http://localhost:3000/api
```

You can test all endpoints directly from the browser.

---

# 🔑 Authentication

Login endpoint:

```
POST /auth/login
```

Example request:

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

Response:

```
access_token
```

Use it in requests:

```
Authorization: Bearer YOUR_TOKEN
```

---

# 📌 Example API Requests

### Create User

```bash
POST /users
```

```json
{
  "email": "user@email.com",
  "name": "Maha",
  "password": "123456",
  "roleId": 1
}
```

---

### Create Product

```bash
POST /products
```

```json
{
  "name": "Laptop",
  "price": 4500,
  "stock": 10
}
```

---

### Delete Product

```
DELETE /products/:id
```

---

# 👩‍💻 Author

**Maha Ali**

- GitHub: [https://github.com/maha20514](https://github.com/maha20514)
- LinkedIn: https://www.linkedin.com/in/maha-aledresi-32a043205/

---

# 📜 License

This project is licensed under the **MIT License**.
