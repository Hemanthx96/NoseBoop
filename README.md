# NoseBoop 🐶❤️

NoseBoop is a full-stack “dog dating” experience that demonstrates a modern product-style build: App Router-based Next.js frontend, secure Express + MongoDB backend, JWT auth, and Razorpay-powered subscriptions (Plus / Gold / Premium). Use it as a portfolio project, a starting point for your own pet product, or a reference for full-stack TypeScript patterns.

- **Live stack:** Next.js 16 · React 18 · Bootstrap 5 · Express · MongoDB · Razorpay
- **Docs quick links:** [`QUICKSTART.md`](./QUICKSTART.md) · [`server/`](./server) · [`app/`](./app)

---

## Highlights

- App Router Next.js frontend with modular sections (`app/product`, `app/faq`, etc.)
- Auth-ready backend (JWT + bcrypt) with user, auth, and payment routes
- Subscription flow wired to Razorpay test keys
- Shared TypeScript + Axios utilities across the stack
- Deployable on the free tier trifecta: Vercel (frontend) + Render (API) + MongoDB Atlas

---

## Tech Stack

| Layer | Tech | Notes |
| --- | --- | --- |
| Frontend | Next.js 16, React 18, TypeScript, Bootstrap 5, Axios | App Router, server components, responsive marketing pages |
| Backend | Node.js 18, Express, TypeScript, MongoDB + Mongoose, JWT, Razorpay | REST API, payment hooks, auth middleware |
| Tooling | npm, ts-node-dev, dotenv, bcryptjs, cors | Unified TypeScript configs across front/back |
| Hosting | Vercel, Render, MongoDB Atlas | Works out-of-the-box on free tiers |

---

## Monorepo Layout

```
NoseBoop-web/
├── app/                # Next.js App Router pages
│   ├── layout.tsx      # Root layout + global styles
│   ├── page.tsx        # Landing page
│   └── ...             # About, FAQ, Download, etc.
├── components/         # Reusable React components
├── css/                # Bootstrap overrides / custom CSS
├── lib/                # Axios + auth helpers
├── public/             # Static assets surfaced by Next.js
├── server/             # Express API (TypeScript)
│   ├── src/index.ts    # Server entry point
│   ├── src/routes/     # auth, users, payments
│   ├── src/models/     # User, Payment schemas
│   └── src/middleware/ # Auth guard
├── QUICKSTART.md       # 5-minute setup guide
└── README.md
```

---

## Local Development

> Need the TL;DR version? Jump to [`QUICKSTART.md`](./QUICKSTART.md).

### 1. Prerequisites

- Node.js 18+ and npm 9+
- MongoDB Atlas account (or any reachable Mongo URI)
- Razorpay test account + keys

### 2. Install dependencies

```bash
npm install
cd server && npm install && cd ..
```

### 3. Configure environment variables

**Frontend (`.env.local`):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

**Backend (`server/.env`):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/noseboop
JWT_SECRET=replace_with_32+_char_secret
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=replace_with_test_secret
PORT=5000
NODE_ENV=development
```

### 4. Run the stack

```bash
# Terminal 1 - API
cd server
npm run dev

# Terminal 2 - Frontend (from repo root)
npm run dev
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:5000  
- Health: http://localhost:5000/health

### 5. Build for production

```bash
npm run build && npm start           # Frontend
cd server && npm run build && npm start
```

---

## Deployment Cheatsheet

### Frontend (Vercel)

1. Push the repo to GitHub.
2. Import to Vercel, select `app/` (Next.js) root.
3. Set env vars (`NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_RAZORPAY_KEY_ID`).
4. Deploy – Vercel auto-detects Next.js 16.

### Backend (Render)

1. Create a Web Service pointing to the same repo.
2. Build command: `cd server && npm install && npm run build`
3. Start command: `cd server && npm start`
4. Configure env vars (`MONGODB_URI`, `JWT_SECRET`, `RAZORPAY_*`, `PORT`).
5. Deploy – copy the Render URL into the frontend API URL.

### Database (MongoDB Atlas)

- Free Shared cluster, Database user, Network access (`0.0.0.0/0` for Render).
- Paste the SRV string into `MONGODB_URI`.

---

## API Surface (server/src/routes)

| Route | Method | Description | Auth |
| --- | --- | --- | --- |
| `/api/auth/register` | POST | Create a new user | ❌ |
| `/api/auth/login` | POST | Issue JWT | ❌ |
| `/api/users/me` | GET | Current profile | ✅ |
| `/api/payments/create-order` | POST | Create Razorpay order | ✅ |
| `/api/payments/verify` | POST | Verify signature + persist Payment | ✅ |

Token auth uses the `Authorization: Bearer <jwt>` header issued on login.

---

## Features & Roadmap

- ✅ Marketing site (About, FAQ, Stories, Support, Safety, etc.)
- ✅ Auth + payments wiring
- ✅ Subscription tiers with Razorpay checkout modal
- ✅ Responsive design built on Bootstrap 5
- 🟡 Future ideas: profile management, match algorithm, in-app chat (see [`QUICKSTART.md`](./QUICKSTART.md#-next-steps))

---

## Security Notes

- Passwords hashed with `bcryptjs`
- JWTs signed with `JWT_SECRET`
- Razorpay signature verification before persisting payments
- Environment variables for secrets — never commit `.env*`
- CORS configured for the frontend origin (adjust in `server/src/index.ts`)

---

## License

This project is provided for portfolio and learning purposes. Feel free to fork, adapt, and showcase — attribution appreciated!

---

## Author

Crafted with love for dogs and developer demos 🐕‍🦺. Contributions and suggestions are welcome via issues or pull requests.
