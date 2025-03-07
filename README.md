# Next.js Authentication App with Clerk & Firebase

## 📌 Overview
This is a **Next.js** authentication app that integrates **Clerk** for user authentication and **Firebase** for database storage. It allows users to log in using **Google OAuth** and protects routes using **Next.js middleware**.

## 🚀 Features
- **Google Authentication** via Clerk
- **Protected Routes** using Next.js Middleware
- **Firebase Firestore** integration for user data storage
- **Session Management**

## 🛠 Technologies Used
- **Next.js** (React Framework)
- **Clerk** (Authentication & Middleware)
- **Firebase Firestore** (Database)
- **Tailwind CSS** (Styling)

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Mayankkamriya/Next.js_Auth_with_Clerk.git
cd Next.js_Auth_with_Clerk
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at `http://localhost:3000`.

## 🔐 Authentication Flow
1. User clicks **Login with Google**.
2. Clerk handles Google OAuth authentication.
3. Once authenticated, Clerk creates a user session.
4. Next.js middleware ensures protected pages are only accessible to logged-in users.
5. User data is stored in Firebase Firestore.

## 📂 Project Structure
```plaintext
📦 project-name
├── 📁 lib                # Contains Firebase configuration
│   ├── firebase.js       # Firebase setup file
├── 📁 pages              # Next.js pages (index, login, dashboard)
├── 📁 middleware         # Clerk Middleware for protected routes
├── 📁 styles            # Styling (Tailwind CSS)
├── .env.local           # Environment variables
└── README.md            # Documentation
```

<!-- ## 🚀 Deployment
To deploy the app on **Vercel**, run:
```sh
vercel
``` -->

<!-- ## 📌 License
This project is open-source and available under the **MIT License**. -->

---
### 💡 Need Help?
If you face any issues, feel free to open an issue or contact me! 🚀

