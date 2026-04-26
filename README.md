# 🛒 NexCart

## 📌 Project Description

NexCart is a modern e-commerce web application built with Next.js and Node.js.
It allows users to browse products, add new items, and manage products with authentication.

---

## 🚀 Key Features

* 🔐 Firebase Authentication (Login/Register)
* 🛍️ Add, view, and manage products
* 🔎 Search & filter products (category + price)
* 📄 Product details page
* 📦 Responsive product grid layout
* 🎯 Protected routes (only logged-in users)
* 📱 Fully responsive design
* ⚡ Fast performance with modern UI

---

## 🛠️ Tech Stack

* Frontend: Next.js, React, Tailwind CSS
* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Auth: Firebase Authentication
* Deployment: Vercel

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nexcart.git
cd nexcart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file and add:

```
NEXT_PUBLIC_BACKEND_URL=your_backend_url
```

### 4. Run the development server

```bash
npm run dev
```

---

## 🌐 Routes Summary

### Public Routes

* `/` → Landing Page
* `/all-products` → Products list
* `/all-products/[id]` → Product details
* `/about` → About page
* `/contact` → Contact page
* `/login` → Login page

### Protected Routes

* `/product/add` → Add product
* `/product/manage` → Manage products

---

## 📦 API Endpoints (Backend)

* GET `/products` → Get all products
* GET `/products/:id` → Get single product
* POST `/products` → Create product
* DELETE `/products/:id` → Delete product

---

