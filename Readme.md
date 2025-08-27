# Nextra + Clerk Integration 🚀

[![Node.js](https://img.shields.io/badge/Node.js-v19-green?logo=node.js&style=flat-square)](https://nodejs.org/) 
[![Vercel](https://img.shields.io/badge/Vercel-deploy-blue?logo=vercel&style=flat-square)](https://vercel.com) 
[![Clerk](https://img.shields.io/badge/Clerk-auth-orange?style=flat-square)](https://clerk.dev)

A **Nextra** project integrated with **Clerk** for authentication and user management. This project demonstrates **secure login, user sessions, and seamless deployment with Vercel**.

---

## 🛠 Prerequisites

- Node.js (v19 recommended)  
- Git  
- Clerk account  
- Vercel account  

---

## 1️⃣ Configuring Clerk Account

1. Go to [Clerk](https://clerk.dev) and **create an account**.  
2. Add your **Publishable Key** and **Secret Key** in `.env.local` at the project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
