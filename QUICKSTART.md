# Quick Start Guide

Use this document when you want NoseBoop running locally in under five minutes. For deeper explanations see the main [`README`](./README.md).

---

## 🚀 5 Steps to Hello World

### 1. Install dependencies

```bash
npm install
cd server && npm install && cd ..
```

### 2. Configure environment variables

**Frontend (`.env.local`):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

**Backend (`server/.env`):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/noseboop
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
PORT=5000
NODE_ENV=development
```

### 3. Grab the required credentials

1. **MongoDB Atlas**
   - Create a free Shared cluster
   - Add a database user
   - Whitelist IP (`0.0.0.0/0` for development)
   - Copy the SRV connection string into `MONGODB_URI`
2. **Razorpay (Test Mode)**
   - Create an account → Settings → API Keys
   - Generate a test key ID/secret pair
   - Drop them into both frontend/backenv env files

### 4. Run the stack

```bash
# Terminal 1 - API
cd server
npm run dev

# Terminal 2 - Frontend
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health: http://localhost:5000/health

### 5. Sanity checks

- Hit `/api/auth/register` via REST client or UI to seed a user
- Trigger a payment from the Pricing section using Razorpay’s universal test card `4111 1111 1111 1111`

---

## 🧪 Manual Testing Flow

1. Register & log in (look for the JWT in the network tab).
2. Call `/api/users/me` with the `Authorization: Bearer <jwt>` header to confirm auth wiring.
3. Start a checkout from the frontend and complete it using Razorpay’s test modal to verify webhooks + DB writes.

---

## 📦 Production Build Commands

```bash
# Frontend
npm run build
npm start

# Backend
cd server
npm run build
npm start
```

---

## 🐛 Troubleshooting Cheatsheet

- **MongoDB connection refused** → Double-check SRV string, user, and IP whitelist.
- **Razorpay script missing** → Ensure `NEXT_PUBLIC_RAZORPAY_KEY_ID` is set and restart `npm run dev`.
- **CORS errors** → Update the allowed origin in `server/src/index.ts` to match your frontend URL.
- **Port already in use** → Change `PORT` in `server/.env` and mirror it in `NEXT_PUBLIC_API_URL`.

---

## 📚 Next Experiments

- User dashboard / profile editor
- Matching algorithm + swiping UI
- Realtime messaging (WebSockets or Pusher)
- Media uploads (Cloudinary, S3, etc.)

