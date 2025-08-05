# Product List App

A simple **fullstack Next.js** app to manage a personal product list with login and drag-and-drop reordering.  
This project was built as a **developer technical test** using **TypeScript, MongoDB, and Next.js API routes**.

---

## Features

- Email-only login (no password)  
- Add products with:  
  - Product name  
  - Amount  
  - Comment (optional)  
- View, edit, delete, and reorder product list (drag-and-drop)  
- Inline editing of products  
- Reordering persists to the database  
- Each email only sees their own products  
- Fully responsive with a clean dashboard-style UI  
- Sticky top header with logout button  

---

## Tech Stack

- **Next.js 14** (Pages routing)  
- **TypeScript**  
- **MongoDB + Mongoose**  
- **Tailwind CSS** (used only in layout components)  
- **Shadcn/UI** for reusable UI components  
- **DnD Kit** for drag-and-drop reordering  

---

## Folder Structure

project-root
│
├── pages/ # Next.js routing (thin wrappers to screens)
│ └── product-list.tsx
│
├── screens/ # Screens (no styling, only logic)
│ ├── auth/
│ │ ├── login.page.tsx
│ │ └── .gitkeep # Keeps folder in Git if empty
│ └── product-list/
│ ├── product-item.tsx
│ ├── product-form.tsx
│ ├── product-list.page.tsx
│ └── .gitkeep
│
├── layout/ # Reusable UI components (with Tailwind/Shadcn)
│ ├── button.layout.tsx
│ ├── input.layout.tsx
│ ├── card.layout.tsx
│ ├── text.layout.tsx
│ ├── heading.layout.tsx
│ ├── flex.layout.tsx
│ ├── stack.layout.tsx
│ ├── product-card.layout.tsx
│ ├── page-container.layout.tsx
│ └── .gitkeep
│
├── service/ # Frontend fetch layer
│ ├── auth.service.ts
│ ├── product.service.ts
│ └── .gitkeep
│
├── api/ # API routes (authentication & product CRUD)
│ ├── products/
│ │ ├── index.ts # GET + POST
│ │ ├── [id].ts # PUT + DELETE
│ │ ├── reorder.ts # PATCH reorder
│ │ └── .gitkeep
│ └── auth/
│ ├── login.ts
│ └── .gitkeep
│
├── db/ # Database and models
│ ├── db.config.ts
│ ├── product.model.ts
│ └── .gitkeep
│
├── lib/ # Helpers
│ ├── auth.ts # Extracts email from cookie
│ └── .gitkeep
│
├── types/ # TypeScript types
│ ├── product.type.ts
│ └── .gitkeep
│
└── README.md

## Local Setup

### 1. Clone the repository

```bash
git clone <your-fork-url> product-list-app
cd product-list-app



