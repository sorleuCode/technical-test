# Product List App – Developer Technical Test

🧩 **Goal**  
A simple **fullstack Next.js** application to manage a personal product list with email-only authentication and drag-and-drop reordering.

---

## 📋 Features

- ✅ **Ema# Product List App – Developer Technical Test

🧩 **Goal**  
A simple **fullstack Next.js** application to manage a personal product list with email-only authentication and drag-and-drop reordering.

---

## 📋 Features

- ✅ **Email-only Authentication**: Log in using only an email address (no password required).
- ✅ **Product Management**:
  - Create, view, edit, and delete products with:
    - Product name
    - Amount
    - Comment (optional)
- ✅ **Drag & Drop Reordering**: Intuitive reordering of the product list with visual feedback.
- ✅ **User Isolation**: Each user sees only their own products.
- ✅ **Responsive Design**: Optimized for both web and mobile devices.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 14 (Pages Router), TypeScript, Tailwind CSS (layout only), Shadcn/UI, @dnd-kit
- **Backend**: Next.js API Routes, JWT Authentication
- **Database**: MongoDB with Mongoose ORM

---

💡 How It Works
Authentication

Enter any email address to log in (no password required).
A JWT token is stored in a cookie for session management.
Each user's data is completely isolated.

Product Management

Add Products: Create new items with name, amount, and an optional comment.
Edit/Delete: Update or remove products from your list.
Reorder: Drag products by their handle to reorder the list.
Real-time Updates: All changes are immediately saved to the database.


🔗 API Endpoints

POST /api/auth/login – Email-only authentication
GET /api/products – List user's products
POST /api/products – Create a new product
PUT /api/products/[id] – Update an existing product
DELETE /api/products/[id] – Delete a product
PATCH /api/products/reorder – Reorder products


📁 Folder Structure
plaintextproject-root
│
├── pages/                     # Next.js routing (references screens)
│   └── product-list.tsx
│
├── pages/api/                 # API routes (authentication & product CRUD)
│   ├── products/
│   │   ├── index.ts         # GET + POST
│   │   ├── [id].ts          # PUT + DELETE
│   │   └── reorder.ts       # PATCH reorder
│   └── auth/
│       └── login.ts
│
├── screens/                   # Screens (logic only, no styling)
│   ├── auth/
│   │   └── login.page.tsx
│   └── product-list/
│       ├── product-list.page.tsx
│       ├── product-item.tsx
│       └── product-form.tsx
│
├── layout/                    # Reusable UI components (Tailwind + Shadcn)
│   ├── button.layout.tsx
│   ├── input.layout.tsx
│   ├── card.layout.tsx
│   ├── text.layout.tsx
│   ├── heading.layout.tsx
│   ├── flex.layout.tsx
│   ├── stack.layout.tsx
│   ├── page-container.layout.tsx
│   └── product-card.layout.tsx
│
├── service/                   # Frontend fetch layer
│   ├── auth.service.ts
│   └── product.service.ts
│
├── db/                        # Database & models
│   ├── db.config.ts
│   └── product.model.ts
│
├── lib/                       # Utility functions
│   └── auth.ts              # Extracts email from cookie
│
├── types/                     # TypeScript types
│   └── product.type.ts
│
└── README.md

Note: Empty folders include a .gitkeep file to ensure they are tracked in Git.


🔗 Live App
Deployed on Vercel: https://technical-testtianlu.vercel.app/
**Authentication**: Log in using only an email address (no password required).
- ✅ **Product Management**:
  - Create, view, edit, and delete products with:
    - Product name
    - Amount
    - Comment (optional)
- ✅ **Drag & Drop Reordering**: Intuitive reordering of the product list with visual feedback.
- ✅ **User Isolation**: Each user sees only their own products.
- ✅ **Responsive Design**: Optimized for both web and mobile devices.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 14 (Pages Router), TypeScript, Tailwind CSS (layout only), Shadcn/UI, @dnd-kit
- **Backend**: Next.js API Routes, JWT Authentication
- **Database**: MongoDB with Mongoose ORM

---

## 🚀 Local Setup

### 1. Clone and Install Dependencies
check down


### 2. Set Up Environment Variables
Create a .env.local file in the project root with the following:
envMONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/test
JWT_SECRET=your-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Replace <username>, <password>, and your-secret with your MongoDB credentials and a secure JWT secret.
### 3. Start the Development Server
npm run dev
Open your browser and navigate to: http://localhost:3000


copy this to clone
```bash
git clone https://github.com/sorleuCode/technical-test.git
cd product-list-app
npm install
