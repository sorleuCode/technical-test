# Developer Technical Test – Product List App

🧩 **Goal**  
Build a simple **fullstack Next.js** app (frontend + backend) to manage a personal product list.

---

## 📋 Features

✅ **Email-only Authentication** – Simple login with just an email address  
✅ **Product Management** – Create, view, edit, and delete products with:  
- Product name  
- Amount  
- Comment (optional)  

✅ **Drag & Drop Reordering** – Intuitive product list reordering with visual feedback  
✅ **User Isolation** – Each user sees only their own products  
✅ **Responsive Design** – Optimized for both web and mobile  

---

## ⚙️ Tech Stack

**Frontend:** Next.js 14, TypeScript, Tailwind CSS (layout only), Shadcn/UI, @dnd-kit  
**Backend:** Next.js API Routes, JWT Authentication  
**Database:** MongoDB with Mongoose ORM  

---

## 🚀 Local Setup

### 1. Clone and install dependencies
```bash
git clone <your-fork-url> product-list-app
cd product-list-app
npm install
2. Set up environment variables
Create a .env.local file in the project root:

env
Copy
Edit
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/test
JWT_SECRET=your-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
3. Start the development server
bash
Copy
Edit
npm run dev
Open your browser and navigate to: http://localhost:3000

💡 How It Works
Authentication
Enter any email address to log in (no password required)

A JWT token is stored in a cookie for session management

Each user's data is completely isolated

Product Management
Add Products: Create new items with name, amount, and optional comment

Edit/Delete: Update or remove any product from your list

Reorder: Drag products by their handle to reorder your list

Real-time Updates: All changes are immediately saved to the database

🔗 API Endpoints
POST /api/auth/login – Email-only authentication

GET /api/products – List user's products

POST /api/products – Create new product

PUT /api/products/[id] – Update existing product

DELETE /api/products/[id] – Delete product

PATCH /api/products/reorder – Reorder products

📁 Architecture
Folder Structure

pgsql
Copy
Edit
project-root
│
├── pages/                     # Next.js routing (references screens)
│   └── product-list.tsx
│
├── pages/api/                  # API routes (authentication & product CRUD)
│   ├── products/
│   │   ├── index.ts            # GET + POST
│   │   ├── [id].ts             # PUT + DELETE
│   │   └── reorder.ts          # PATCH reorder
│   └── auth/
│       └── login.ts
│
├── screens/                    # Screens (logic only, no styling)
│   ├── auth/
│   │   └── login.page.tsx
│   └── product-list/
│       ├── product-list.page.tsx
│       ├── product-item.tsx
│       └── product-form.tsx
│
├── layout/                     # Reusable UI components (Tailwind + Shadcn)
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
├── service/                    # Frontend fetch layer
│   ├── auth.service.ts
│   └── product.service.ts
│
├── db/                         # Database & models
│   ├── db.config.ts
│   └── product.model.ts
│
├── lib/                        # Utility functions
│   └── auth.ts                 # Extracts email from cookie
│
├── types/                      # TypeScript types
│   └── product.type.ts
│
└── README.md
Note: Styling is handled only in layout/ components.
Screens contain only logic and structure, no Tailwind classes.

🔗 Live App
Deployed on Vercel: <your-vercel-link>

