# Job Search Client

**Job Search Client** is a modern web application built with React and Next.js for browsing job listings, managing user profiles, and handling user authentication. It serves as the frontend of a full-stack project using a RESTful API.

## 🚀 Tech Stack

- **React** with **Next.js** for SSR and routing
- **TypeScript** for static typing
- **Tailwind CSS** for utility-first styling
- **Formik** and **Yup** for form handling and validation
- **SWR** for remote data fetching and cache management
- **Axios** for HTTP requests
- **JWT** for secure token-based authentication

## 🧩 Features

### 🔐 Authentication

- Login and registration pages
- JWT-based token storage and session management
- Validation using Yup
- Error messages from server responses shown in UI

### 👤 User Profile

- Create and update user profiles
- User context with SWR for persistent user state
- Logout with token removal

### 💼 Job Listings

- Fetch and display jobs from the backend
- Job details view
- Like (save) jobs to a personal list

### 📱 Responsive UI

- Fully responsive layout using Tailwind CSS
- Mobile-friendly hamburger menu
- Reusable UI components (e.g., Input, Button, Heading)

## 📁 Project Structure

- components # Reusable UI components
- context # Global state via React Context
- hooks # Custom hooks (e.g., useUser)
- lib/api # API layer using Axios
- pages # Next.js page routes
- public # Static assets
- schemas # Yup validation schemas
- styles # Global styles
- utils # Utility functions


## 🛠️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Spiritusik/job-search-client.git
cd job-search-client
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env.local file with environment variables:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```

## 📎 Related Project
- 👉 [Frontend – job-search-client](https://github.com/Spiritusik/job-search-server)