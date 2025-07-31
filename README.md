# 🧪 Developer Technical Test – Product List App

## 🧩 Goal

Build a simple fullstack **Next.js** app (frontend + backend) to manage a personal product list.

---

## 📋 Features

- ✅ Login with **email only** (no password)
- ✅ Add products with:
  - `product name`
  - `amount`
  - `comment`
- ✅ View, edit, delete, and reorder product list (inline editing)
- ✅ Each email sees only their own items

---

## ⚙️ Technical Requirements

### 🗂️ Folder Structure

- `pages` → Next.js routing. Keep it just a reference to the screen folder
````
      import LoginPage from '../src/screen/auth/login.page';
      
      export default function Login() {
        return <LoginPage />;
      }

`````
- `screens` → A folder for sets of screens (e.g. todo list), can contain subfolders for subcomponents
- `layout` → General UI components with all styling (buttons, inputs, texts, labels). No CSS in `screens`, only layout components use Tailwind or style
- `service` → Fetch layer (frontend)
- `config` → Configuration files
- `api` → API logic that checks authentication and handles errors (e.g. item not found)
- `service` → Backend logic between `api` and database

### 📌 Component Constraints

- Avoid multiple `useCallback` or `useEffect` per component — if needed, split into subcomponents
- Keep components **dry**, **simple**, and **small**
- ❌ No `try-catch` in screen or layout components
- ❌ Avoid deeply nested or complex `if-else` logic
- ✅ Only layout components should contain CSS or Tailwind classes

### 📁 File Naming Convention

- All filenames in lowercase
- Format:
  - `todo-list.adapter.ts`
  - `button.layout.ts`
  - `main.page.ts`

---

## 🔁 Workflow

1. Fork this repository  
2. Work on your fork (commit regularly)  
3. When finished, open a **Pull Request (PR)** back to the original repo  
4. Use a meaningful title and clear commit history  
5. Use **semantic commits** (e.g. `feat:`, `fix:`, `refactor:`)

---

## 🚀 Submission Checklist

- ✅ Code pushed to your GitHub fork  
- ✅ PR opened to the base repo  
- ✅ Live demo deployed to **Vercel** or **Netlify**  
- ✅ Short `README.md` with:
  - Local setup instructions (`npm install && npm run dev`)
  - Basic explanation of how login works

---

## 🧪 Evaluation Phases

1. Initial Delivery – core implementation review  
2. Follow-up Feedback Simulation – you’ll be asked to implement 1–2 improvements (e.g. sorting, analytics)

---

## ⏱️ Estimated Time

~8 hours. Keep it simple but clean.
