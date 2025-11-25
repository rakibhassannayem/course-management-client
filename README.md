# Course Management Client

Short description
-----------------
A Next.js + React client for a course management site. Uses Firebase Authentication for user sign-in, Tailwind + DaisyUI for styling, and Axios for server API calls. Live demo: https://course-management-client-nhdq.vercel.app/


Setup & installation (Windows)
------------------------------
1. Clone repository and open the project folder:
   - git clone <your-repo>
   - cd "d:\phProjects\NEXT JS\course-management-client"

2. Install dependencies:
   - npm install

3. Add environment variables required by Firebase (create a .env.local at project root):
   - NEXT_PUBLIC_FIREBASE_API_KEY=...
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   - NEXT_PUBLIC_FIREBASE_APP_ID=...

   The Firebase config is loaded in [src/lib/firebase.config.js](src/lib/firebase.config.js).

4. Start development server:
   - npm run dev
   - Open http://localhost:3000

Build & production
- Build: npm run build
- Start (production): npm start

Notes
- The client expects a backend API. The Axios base URL is set in [src/hooks/useAxiosSecure.jsx](src/hooks/useAxiosSecure.jsx) (currently: https://course-management-server-lyart.vercel.app). Update if you run your own server.
- Authentication flows use Firebase auth implemented in [`AuthProvider`](src/context/AuthProvider.jsx). Ensure the Firebase env vars are correct.
- There is a checkout route referenced in UI links but no checkout page scaffold in this repo — create [src/app/checkout/page.jsx] if you need server-side payment flows.

Route summary
-------------
- /               → [src/app/page.jsx](src/app/page.jsx)
- /courses        → [src/app/courses/page.jsx](src/app/courses/page.jsx)
- /courses/[id]   → [src/app/courses/[id]/page.jsx](src/app/courses/[id]/page.jsx)
- /pricing        → [src/app/pricing/page.jsx](src/app/pricing/page.jsx)
- /contact        → [src/app/contact/page.jsx](src/app/contact/page.jsx)
- /about          → [src/app/about/page.jsx](src/app/about/page.jsx)
- /login          → [src/app/(auth)/login/page.jsx](src/app/(auth)/login/page.jsx)
- /register       → [src/app/(auth)/register/page.jsx](src/app/(auth)/register/page.jsx)
- /(auth)/socialLogin → [src/app/(auth)/socialLogin/page.jsx](src/app/(auth)/socialLogin/page.jsx)
- /dashboard      → [src/app/dashboard/layout.jsx](src/app/dashboard/layout.jsx) (protected; uses `AuthProvider`)
  - /dashboard/addCourse    → [src/app/dashboard/addCourse/page.jsx](src/app/dashboard/addCourse/page.jsx)
  - /dashboard/manageCourse → [src/app/dashboard/manageCourse/page.jsx](src/app/dashboard/manageCourse/page.jsx)

Useful commands
---------------
- npm run dev — run dev server (Windows: run in PowerShell or cmd)
- npm run build — build production
- npm start — start built app

Contact / live demo
-------------------
Live site: https://course-management-client-nhdq.vercel.app/