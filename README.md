🧪 Developer Technical Test – Product List App

🧩 Goal:

Build a simple fullstack Next.js app (frontend + backend) to manage a personal product list.

⸻

📋 Features:
	•	✅ Login with email only (no password)
	•	✅ Add products with:
	•	product name
	•	amount
	•	comment
	•	✅ View/edit/delete/reorder product list (inline editing)
	•	✅ Each email sees only their own items

⸻

⚙️ Technical Requirements:

🗂️ Foler Structure:
	•	pages → Nexts Js routing. Keep it just a reference to the screen folder
    ````
      import LoginPage from '../src/screen/auth/login.page';
      
      export default function Login() {
        return <LoginPage />;
      }

    ````
	•	screens → A folder for set of screens (here only the todo list) can have a sub folder for the sub-components of the screen
	•	layout → Folder with all the general components with all the style. No CSS shall be on the screen folder but flex position of margins. Examples: buttons, inputs, form, texts, label, can be found on this filder
	•	service → fetch API (frontend). 
  • config →  all files configuration
	•	api → validates auth, handles errors (item not found, etc.)
	•	service → business logic (between api and DB)

📌 Component Constraints:
	•	No much useCallback or useEffect per component. If you see require many of them may split in subcomponents.
	•	Keep components dry, simple, and small
	•	No try-catch at screen/layout level
	•	Avoid nested/complex conditionals
	•	Only layouts have CSS or tailwind classes

📁 File Naming Convention:
	•	All lowercase
	•	Use this format:
	•	todo-list.adapter.ts
	•	button.layout.ts
	•	main.page.ts

⸻

🔁 Workflow:
	1.	Fork this repository
	2.	Work on your fork (push commits regularly)
	3.	When finished, open a Pull Request (PR) back to the original repo
	4.	Make sure your PR has a meaningful title and clear commit history.
  5.  Use Semantic commit

⸻

🚀 Submission Checklist:
	•	✅ Code pushed to your GitHub fork
	•	✅ PR opened to the base repo
	•	✅ Live demo deployed to Vercel or Netlify
	•	✅ Short README.md with:
	•	Local setup instructions (npm install & dev)
	•	How login works (basic explanation)

⸻

🧪 Evaluation Phases:
	1.	Initial Delivery (baseline product)
	2.	Follow-up Feedback Simulation (we’ll ask for 1–2 improvements like adding sorting or analytics)

⸻

⏱️ Estimated Time:

~8 hours. Keep it simple but clean.
