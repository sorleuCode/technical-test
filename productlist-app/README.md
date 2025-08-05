# Product List App

A simple **fullstack Next.js** application to manage a personal product list with email-only login and drag-and-drop reordering. This project was built as a **developer technical test** using **TypeScript, MongoDB, and Next.js API routes**.

## Features

- **Email-only login** (no password required)
- **Product management**:
  - Add products with name, amount, and optional comment
  - View, edit, delete, and reorder products via drag-and-drop
  - Inline editing for seamless updates
- **Persistent reordering**: Product order is saved to the database
- **User-specific data**: Each email sees only their own products
- **Responsive UI**: Clean, dashboard-style interface
- **Sticky header**: Includes a logout button for easy navigation

## Tech Stack

- **Next.js 14** (Pages Router)
- **TypeScript**
- **MongoDB + Mongoose**
- **Tailwind CSS** (used in layout components)
- **Shadcn/UI** for reusable UI components
- **DnD Kit** for drag-and-drop functionality

## Folder Structure
project-root
│
├── pages/                    # Next.js routing (thin wrappers to screens)
│   └── product-list.tsx
│
├── screens/                  # Screens (logic only, no styling)
│   ├── auth/
│   │   ├── login.page.tsx
│   │   └── .gitkeep
│   └── product-list/
│       ├── product-item.tsx
│       ├── product-form.tsx
│       ├── product-list.page.tsx
│       └── .gitkeep
│
├── layout/                   # Reusable UI components (with Tailwind/Shadcn)
│   ├── button.layout.tsx
│   ├── input.layout.tsx
│   ├── card.layout.tsx
│   ├── text.layout.tsx
│   ├── heading.layout.tsx
│   ├── flex.layout.tsx
│   ├── stack.layout.tsx
│   ├── product-card.layout.tsx
│   ├── page-container.layout.tsx
│   └── .gitkeep
│
├── service/                  # Frontend fetch layer
│   ├── auth.service.ts
│   ├── product.service.ts
│   └── .gitkeep
│
├── api/                      # API routes (authentication & product CRUD)
│   ├── products/
│   │   ├── index.ts        # GET + POST
│   │   ├── [id].ts         # PUT + DELETE
│   │   ├── reorder.ts      # PATCH reorder
│   │   └── .gitkeep
│   └── auth/
│       ├── login.ts
│       └── .gitkeep
│
├── db/                       # Database and models
│   ├── db.config.ts
│   ├── product.model.ts
│   └── .gitkeep
│
├── lib/                      # Helpers
│   ├── auth.ts             # Extracts email from cookie
│   └── .gitkeep
│
├── types/                    # TypeScript types
│   ├── product.type.ts
│   └── .gitkeep
│
└── README.md
text> **Note:** Empty folders include a `.gitkeep` file to ensure they are tracked in Git.

## Local Setup

### 1. Clone the repository

```bash
git clone <your-fork-url> product-list-app
cd product-list-app
2. Install dependencies
bashnpm install
3. Create .env.local file
Create a .env.local file in the project root and add the following:
envMONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/test
JWT_SECRET=your-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Replace <username>, <password>, and your-secret with your MongoDB credentials and a secure JWT secret.
4. Run the development server
bash npm run dev
The app will be available at http://localhost:3000.
How Login Works

User enters their email on the login page.
A JWT token is generated and stored in a cookie.
Subsequent API requests use the cookie to identify the user.
Each user sees only their own products.