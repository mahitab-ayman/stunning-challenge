Stunning Technical Challenge - Website Idea Generator

This repository contains my solution for the Stunning Technical Challenge using Next.js, NestJS, and MongoDB.

Project Overview

Frontend: Next.js app where users enter a website idea.

Backend: NestJS API receives the idea, returns dummy website sections (Hero, About, Contact), and stores them in MongoDB.

Database: MongoDB stores the sections.

Includes loading states and basic error handling.

How to Run Locally

Backend

Navigate to the backend folder:
cd backend

Install dependencies:
npm install

Create a .env file with your MongoDB connection string:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb

Start the backend server:
npm run start:dev
The backend will run on port 3001.

Frontend

Navigate to the frontend folder:
cd frontend-new

Install dependencies:
npm install

Run the frontend app:
npm run dev

Open the URL shown in the terminal (usually http://localhost:3000) in your browser.

Notes for GitHub Codespaces Users

Frontend cannot reach backend via localhost in Codespaces.

Use the forwarded URL for the backend port (e.g., https://<workspace-id>-3001.githubpreview.dev).

Update the frontend fetch URL in app/page.tsx accordingly:
const BACKEND_URL = 'https://<your-workspace-id>-3001.githubpreview.dev'

CORS is enabled in backend to allow cross-origin requests.

Future Improvements

Integrate real AI API to generate website sections dynamically.

Add user authentication.

Improve frontend UI/UX design.

Write unit and integration tests.

AI Tools Used

GitHub Copilot / Cursor to speed up coding and generate boilerplate.

AI-assisted debugging and refactoring.
